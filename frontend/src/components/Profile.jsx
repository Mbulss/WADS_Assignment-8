// src/components/Profile.jsx
import { useState, useEffect } from 'react';
import api from '../services/api';

export default function Profile() {
  const [profile, setProfile] = useState(null);
  const [name,    setName]    = useState('');
  const [error,   setError]   = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    api.get('/user-infor').then(res => {
      setProfile(res.data);
      setName(res.data.username);
    });
  }, []);

  const save = async () => {
    try {
      await api.put('/user-infor', { username: name });
      setSuccess('Profile updated');
    } catch {
      setError('Update failed');
    }
  };

  if (!profile) return <p>Loading…</p>;
  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Profile</h2>
      {error   && <div className="text-red-600">{error}</div>}
      {success && <div className="text-green-600">{success}</div>}
      <div className="mb-4">
        <label className="block mb-1">Username</label>
        <input
          className="w-full p-2 border rounded"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>
      <button
        onClick={save}
        className="bg-primary text-white px-4 py-2 rounded"
      >
        Save
      </button>
    </div>
  );
}
