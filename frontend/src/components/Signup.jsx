// src/components/Signup.jsx
import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

export default function Signup() {
  const [username, setUsername] = useState('');
  const [email,    setEmail]    = useState('');
  const [password, setPassword] = useState('');
  const [error,    setError]    = useState('');
  const [loading,  setLoading]  = useState(false);
  const { signup } = useAuth();
  const navigate   = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    if (!username || !email || !password) {
      setError('All fields are required');
      return;
    }
    try {
      setLoading(true);
      await signup({ username, email, password });
      navigate('/');
    } catch {
      setError('Failed to create account');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center ...">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-xl space-y-4 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center">Sign Up</h2>
        {error && <div className="text-red-600">{error}</div>}
        <input
          type="text" placeholder="Username"
          value={username} onChange={e=>setUsername(e.target.value)}
          className="w-full p-2 border rounded"
        />
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
          {loading ? 'Creating…' : 'Create Account'}
        </button>
        <p className="text-sm text-center">
          Already have an account?{' '}
          <Link to="/login" className="text-primary underline">Sign In</Link>
        </p>
      </form>
    </div>
  );
}
