import { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../lib/firebase';
import { Link, useNavigate } from 'react-router-dom';
import googleIcon from '../assets/google.png';
import facebookIcon from '../assets/facebook.png';
import appleIcon from '../assets/apple.png';

export default function Register() {
  const nav = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [confirmPw, setConfirmPw] = useState('');
  const [err, setErr] = useState(null);
  const [busy, setBusy] = useState(false);

  const fieldStyle = {
    display: 'block',
    width: '100%',
    marginBottom: 8,
    padding: '0.6em 1.2em', 
    boxSizing: 'border-box'
  };

  async function onRegister(e) {
    e.preventDefault();
    setBusy(true); setErr(null);

    if (pw !== confirmPw) {
      setErr('Passwords do not match');
      setBusy(false);
      return;
    }

    try {
      const cred = await createUserWithEmailAndPassword(auth, email, pw);
      if (name) await updateProfile(cred.user, { displayName: name });
      nav('/dashboard', { replace: true });
    } catch (e) {
      setErr(e.message);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div style={{ maxWidth: 360, margin: '40px auto' }}>
      <h1>Create account</h1>
      <form onSubmit={onRegister}>
        <input
          placeholder="Username"
          value={name}
          onChange={e=>setName(e.target.value)}
          style={fieldStyle}
        />
        <input
          placeholder="Email"
          type="email"
          value={email}
          onChange={e=>setEmail(e.target.value)}
          required
          style={fieldStyle}
        />
        <input
          placeholder="Password (min 6)"
          type="password"
          value={pw}
          onChange={e=>setPw(e.target.value)}
          required
          style={fieldStyle}
        />

        <input
          placeholder="Confirm Password"
          type="password"
          value={confirmPw}
          onChange={e=>setConfirmPw(e.target.value)}
          required
          style={fieldStyle}
        />
        {err && <p style={{ color:'crimson' }}>{err}</p>}
        <button
          disabled={busy}
          type="submit"
          style={{ display: 'block', width: '100%', padding: '0.6em 1.2em', marginTop: 36 }}
        >
          Register
        </button>
      </form>

      <p style={{ marginTop: 12 }}>
        Already have an account? <Link to="/login">Log in</Link>
      </p>

      <div className="social-login">
          <p className='terms-of-use'>By registering, you agree to our <b>Terms of Use</b> and <b>Privacy Policy</b>.</p>
          <p className="social-login-label">sign in with</p>
              <div className="social-buttons">
                  <img src={googleIcon} alt="Google" />
                  <img src={appleIcon} alt="Apple" />
                  <img src={facebookIcon} alt="Facebook" />
              </div>
      </div>

    </div>
  );
}
