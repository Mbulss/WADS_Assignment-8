// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import NavBar from './components/NavBar';
import Login    from './components/Login';
import Signup   from './components/Signup';
import TodoList from './components/TodoList';
import Profile  from './components/Profile';
import PrivateRoute from './components/PrivateRoute';

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <NavBar />
        <Routes>
          <Route path="/"       element={<PrivateRoute><TodoList /></PrivateRoute>} />
          <Route path="/profile"element={<PrivateRoute><Profile  /></PrivateRoute>} />
          <Route path="/login"  element={<Login  />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
