import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Protected from './auth/Protected';
import Login from './pages/Login.jsx';
import Dashboard from './pages/Dashboard.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<Login />} />

        {/* Protected app area */}
        <Route element={<Protected />}>
          <Route path="/" element={<Dashboard />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<div>Not found</div>} />
      </Routes>
    </BrowserRouter>
  );
}
