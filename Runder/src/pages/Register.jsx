import { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../lib/firebase';
import { Link, useNavigate } from 'react-router-dom';

export default function Register() {
  const nav = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [confirmPw, setConfirmPw] = useState('');
  const [err, setErr] = useState(null);
  const [busy, setBusy] = useState(false);

  async function onRegister(e) {
    e.preventDefault();
    setBusy(true); setErr(null);
    
    if (pw !== confirmPw) {
      setErr("Passwords do not match");
      setBusy(false);
      return;
    }
    
    try {
      // password must be 6+ chars
      const cred = await createUserWithEmailAndPassword(auth, email, pw);
      if (name) await updateProfile(cred.user, { displayName: name });
      nav('/', { replace: true });   // go to dashboard
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
          placeholder="Name (optional)"
          value={name}
          onChange={e=>setName(e.target.value)}
          style={{ display:'block', width:'100%', marginBottom:8 }}
        />
        <input
          placeholder="Email"
          type="email"
          value={email}
          onChange={e=>setEmail(e.target.value)}
          required
          style={{ display:'block', width:'100%', marginBottom:8 }}
        />
        <input
          placeholder="Password (min 6)"
          type="password"
          value={pw}
          onChange={e=>setPw(e.target.value)}
          required
          style={{ display:'block', width:'100%', marginBottom:8 }}
        />

        <input 
          placeholder="Confirm Password"
          type="password"
          value={confirmPw}
          onChange={e=>setConfirmPw(e.target.value)}
          required
          style={{ display:'block', width:'100%', marginBottom:8 }}
        />
        {err && <p style={{ color:'crimson' }}>{err}</p>}
        <button disabled={busy} type="submit">Sign up</button>
      </form>

      <p style={{ marginTop: 12 }}>
        Already have an account? <Link to="/login">Log in</Link>
      </p>
    </div>
  );
}
