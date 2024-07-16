import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from './routes/ProtectedRoute'; // pastikan jalur impor sesuai
import Home from './pages/Home';
import Signup from './pages/Signup';
import NoPage from './pages/NoPage';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
    <Routes>
      <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
      <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  </AuthProvider>
  );
}

export default App;
