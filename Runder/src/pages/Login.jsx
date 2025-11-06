import LoginFields from "../components/LoginFields.jsx";
import '../styles/login.css';

export default function Login() {
  return (
    <div className="login-container">
      <h1>Sign in</h1>
      <LoginFields/>
    </div>
  );
}