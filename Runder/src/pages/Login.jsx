import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../lib/firebase';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Login() {
  const nav = useNavigate();
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [err, setErr] = useState(null);
  const [busy, setBusy] = useState(false);

  async function onLogin(e) {
    e.preventDefault();
    setBusy(true); setErr(null);
    try {
      await signInWithEmailAndPassword(auth, email, pw);
      nav('/', { replace: true });
    } catch (e) {
      setErr(e.message);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div style={{ maxWidth: 360, margin: '40px auto' }}>
      <h1>Log in</h1>
      <form onSubmit={onLogin}>
        <input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          required
          style={{ display:'block', width:'100%', marginBottom:8 }}
        />
        <input
          placeholder="Password"
          type="password"
          value={pw}
          onChange={(e)=>setPw(e.target.value)}
          required
          style={{ display:'block', width:'100%', marginBottom:8 }}
        />
        {err && <p style={{ color:'crimson' }}>{err}</p>}
        <button disabled={busy} type="submit">Log in</button>
        <p style={{ marginTop: 12 }}>
          New here? <Link to="/register">Create an account</Link>
        </p>
      </form>
    </div>
  );
}
