import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth, useCart } from '../context/AppContext'; // <-- CHANGED THIS LINE

export default function Header() {
  const { user, logout } = useAuth();
  const { cartCount } = useCart(); // <-- ADDED THIS LINE
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path ? 'active' : '';

  const handleLogout = () => {
    logout();
    navigate('/login');
    setMenuOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm sticky-top anim-slide-down" style={{padding: '0.5rem 0'}}>
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center gap-2 text-decoration-none" to={user ? "/" : "/login"}>
          <i className="fa-solid fa-bag-shopping fs-4" style={{color: 'var(--sv-primary)'}}></i>
          <span className="fs-5 fw-bold" style={{fontFamily: 'Space Grotesk', color: 'var(--sv-text)'}}>
            Shop<span style={{color: 'var(--sv-accent)'}}>Vibe</span>
          </span>
        </Link>

        <button className="navbar-toggler border-0 shadow-none" type="button" onClick={() => setMenuOpen(!menuOpen)}>
          <i className={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars'} fs-5`}></i>
        </button>

        <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto me-3 gap-lg-4 align-items-lg-center">
            {user && (
              <li className="nav-item">
                <Link to="/" className={`nav-link nav-sv-link ${isActive('/')}`} onClick={() => setMenuOpen(false)}>Home</Link>
              </li>
            )}
            <li className="nav-item">
              <Link to="/about" className={`nav-link nav-sv-link ${isActive('/about')}`} onClick={() => setMenuOpen(false)}>About</Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className={`nav-link nav-sv-link ${isActive('/services')}`} onClick={() => setMenuOpen(false)}>Services</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className={`nav-link nav-sv-link ${isActive('/contact')}`} onClick={() => setMenuOpen(false)}>Contact</Link>
            </li>
          </ul>

          <div className="d-flex align-items-center gap-3">
            {/* CART ICON BUTTON - ADDED THIS BLOCK */}
            {user && (
              <Link to="/cart" className="btn btn-sm btn-outline-dark border-0 position-relative p-1" onClick={() => setMenuOpen(false)} style={{fontSize: '20px'}}>
                <i className="fa-solid fa-cart-shopping"></i>
                {cartCount > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill" style={{backgroundColor: 'var(--sv-accent)', fontSize: '10px'}}>
                    {cartCount}
                  </span>
                )}
              </Link>
            )}

            {user ? (
              <>
                <span className="d-none d-lg-inline fw-semibold text-muted" style={{fontSize: '14px'}}>
                  Hi, <span className="text-dark fw-bold">{user.name}</span>
                </span>
                <button onClick={handleLogout} className="btn btn-sm btn-outline-danger border-0 fw-semibold" style={{fontSize: '14px'}}>
                  Logout
                </button>
              </>
            ) : (
              <div className="d-flex gap-2">
                <Link to="/login" className="btn btn-sm btn-outline-dark border-0 fw-semibold text-decoration-none" style={{color: 'var(--sv-primary)'}}>Login</Link>
                <Link to="/signup" className="btn btn-sm btn-sv-primary text-decoration-none">Sign Up</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}