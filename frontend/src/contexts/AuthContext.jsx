import { createContext, useContext, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import api, { setAuthToken } from '../services/api';

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [token,    setToken]    = useState(localStorage.getItem('token'));
  const [user,     setUser]     = useState(token ? jwtDecode(token) : null);

  const signin = async ({ email, password }) => {
    const { data } = await api.post('/auth/signin', { email, password });
    localStorage.setItem('token', data.token);
    setAuthToken(data.token);
    setToken(data.token);
    setUser(jwtDecode(data.token));
  };

  const signup = async ({ username, email, password }) => {
    await api.post('/auth/signup', { username, email, password });
    // optionally auto-login after signup:
    return signin({ email, password });
  };

  const signout = () => {
    localStorage.removeItem('token');
    setAuthToken(null);
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, signin, signup, signout }}>
      {children}
    </AuthContext.Provider>
  );
}
