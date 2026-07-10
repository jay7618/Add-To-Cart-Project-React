import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useAuth } from './context/AppContext' // <-- CHANGED THIS LINE
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Cart from './pages/Cart'

function ProtectedRoute({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
}

function AuthRoute({ children }) {
  const { user } = useAuth();
  return user ? <Navigate to="/" /> : children;
}

const hideLayoutRoutes = ['/login', '/signup'];

export default function App() {
  const location = useLocation();
  const showLayout = !hideLayoutRoutes.includes(location.pathname);

  return (
    <>
      {showLayout && <Header />}
      
      <Routes>
        <Route path="/login" element={<AuthRoute><Login /></AuthRoute>} />
        <Route path="/signup" element={<AuthRoute><Signup /></AuthRoute>} />
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} /> {/* <-- ADDED THIS LINE */}
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {showLayout && <Footer />}
    </>
  );
}