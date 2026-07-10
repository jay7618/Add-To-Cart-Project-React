import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AppContext';
import Toast from '../components/Toast';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState(null);
  const { login } = useAuth();
  const navigate = useNavigate();

  const validate = () => {
    const errs = {};
    if (!form.email.trim()) errs.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Enter a valid email';
    if (!form.password) errs.password = 'Password is required';
    else if (form.password.length < 6) errs.password = 'Min 6 characters required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      login(form.email, form.password);
      setToast({ message: 'Login successful!', type: 'success' });
      setTimeout(() => navigate('/'), 1000);
    } else {
      setToast({ message: 'Please fix the errors.', type: 'error' });
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' });
  };

  return (
    <div className="auth-bg">
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}

      <div className="bg-white rounded-4 shadow-lg p-4 p-md-5 w-100 anim-fade-up" style={{maxWidth: '450px'}}>
        <div className="text-center mb-4">
          <div className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3" style={{width: '60px', height: '60px', backgroundColor: 'rgba(11,110,79,0.1)'}}>
            <i className="fa-solid fa-right-to-bracket fs-3" style={{color: 'var(--sv-primary)'}}></i>
          </div>
          <h2 className="fw-bold mb-1" style={{fontFamily: 'Space Grotesk'}}>Welcome Back</h2>
          <p className="text-muted" style={{fontSize: '14px'}}>Login to your ShopVibe account</p>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-3">
            <label className="form-label fw-semibold small">Email Address</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} className={`form-control form-control-sv ${errors.email ? 'input-error' : ''}`} placeholder="john@example.com" />
            {errors.email && <div className="text-danger mt-1 small anim-shake">{errors.email}</div>}
          </div>
          <div className="mb-4">
            <label className="form-label fw-semibold small">Password</label>
            <input type="password" name="password" value={form.password} onChange={handleChange} className={`form-control form-control-sv ${errors.password ? 'input-error' : ''}`} placeholder="Enter your password" />
            {errors.password && <div className="text-danger mt-1 small anim-shake">{errors.password}</div>}
          </div>
          <button type="submit" className="btn btn-sv-primary w-100 py-2">Login</button>
        </form>
        <p className="text-center text-muted mt-4 mb-0" style={{fontSize: '14px'}}>
          Don't have an account? <Link to="/signup" className="fw-bold text-decoration-none" style={{color: 'var(--sv-primary)'}}>Sign Up</Link>
        </p>
      </div>
    </div>
  );
}