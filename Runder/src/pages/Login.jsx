import LoginFields from "../components/LoginFields.jsx";
import '../styles/login.css';

export default function Login() {
  return (
    <div className="login-container">
      <h1>Welcome back</h1>
      <LoginFields/>
    </div>
  );
}