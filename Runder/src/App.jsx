import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Protected from "./auth/Protected";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Register from "./pages/Register.jsx";
import OnBoarding from "./pages/OnBoarding.jsx";
import CreateGeneral from "./pages/Create-General.jsx";
import Profile from "./pages/Profile.jsx";
import NotFound from "./pages/NotFound.jsx";
import EventPreview from "./pages/EventPreview.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes - no authentication required */}
        <Route path="/" element={<OnBoarding />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        {/* Protected routes - authentication required */}
        <Route element={<Protected />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create-general" element={<CreateGeneral />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        
        <Route path="/event-preview" element={<EventPreview />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}