// src/components/Login.jsx
import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

export default function Login() {
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const [error, setError]       = useState('');
  const [loading, setLoading]   = useState(false);
  const { signin } = useAuth();
  const navigate   = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    if (!email || !password) {
      setError('Enter both email and password');
      return;
    }
    try {
      setLoading(true);
      await signin({ email, password });
      navigate('/');
    } catch {
      setError('Invalid login credentials');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center ...">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-xl space-y-4 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center">Sign In</h2>
        {error && <div className="text-red-600">{error}</div>}
        <input
          type="email" placeholder="Email"
          value={email} onChange={e=>setEmail(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="password" placeholder="Password"
          value={password} onChange={e=>setPassword(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-primary text-white py-2 rounded disabled:opacity-50"
        >
          {loading ? 'Signing in…' : 'Sign In'}
        </button>
        <p className="text-sm text-center">
          Don’t have an account?{' '}
          <Link to="/signup" className="text-primary underline">Sign Up</Link>
        </p>
      </form>
    </div>
  );
}
