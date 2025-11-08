import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../auth/AuthProvider' // adjust the path to where your AuthProvider.jsx is
import '../styles/login.css'

export default function LoginFields() {
  const nav = useNavigate()
  const { signIn } = useAuth()
  const [email, setEmail] = useState('')
  const [pw, setPw] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [err, setErr] = useState(null)
  const [busy, setBusy] = useState(false)

  async function onLogin(e) {
    e.preventDefault()
    setBusy(true)
    setErr(null)
    try {
      await signIn(email, pw)             // Supabase: from AuthProvider
      nav('/dashboard', { replace: true })
    } catch (e) {
      setErr(e.message || 'Login failed')
    } finally {
      setBusy(false)
    }
  }

  return (
    <form onSubmit={onLogin}>
      <input
        placeholder="Username or Email"
        type="email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        required
      />
      <div className="password-container">
        <input
          placeholder="Password"
          type={showPassword ? 'text' : 'password'}
          value={pw}
          onChange={(e)=>setPw(e.target.value)}
          required
        />
        <span className="password-toggle" onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? 'Hide' : 'Show'}
        </span>
      </div>
      {err && <p className="error-message">{err}</p>}
      <button disabled={busy} type="submit">Log in</button>
      <p className="signup-link">
        <Link to="/register">Forgot password?</Link>
      </p>
    </form>
  )
}
