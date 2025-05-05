// src/components/NavBar.jsx
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function NavBar() {
  const { user, signout } = useAuth();
  const nav = useNavigate();

  const logout = () => {
    signout();
    nav('/login');
  };

  return (
    <nav className="bg-white shadow px-4 py-2 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">Todo App</Link>
      {user ? (
        <div className="flex items-center space-x-4">
          <span className="text-gray-700">{user.email}</span>
          <button
            onClick={logout}
            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
          >
            Log Out
          </button>
        </div>
      ) : (
        <div className="space-x-4">
          <Link to="/login"  className="text-primary">Login</Link>
          <Link to="/signup" className="text-primary">Sign Up</Link>
        </div>
      )}
    </nav>
  );
}
