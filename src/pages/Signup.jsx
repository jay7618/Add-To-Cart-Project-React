import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AppContext';
import Toast from '../components/Toast';

export default function Signup() {
  const [form, setForm] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState(null);
  const { signup } = useAuth();
  const navigate = useNavigate();

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Full name is required';
    else if (form.name.trim().length < 2) errs.name = 'Name must be at least 2 characters';
    if (!form.email.trim()) errs.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Enter a valid email';
    if (!form.password) errs.password = 'Password is required';
    else if (form.password.length < 6) errs.password = 'Min 6 characters required';
    if (form.password !== form.confirmPassword) errs.confirmPassword = 'Passwords do not match';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      signup(form.name, form.email, form.password);
      setToast({ message: 'Account created successfully!', type: 'success' });
      setTimeout(() => navigate('/'), 1000); // Redirects to HOME directly
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
            <i className="fa-solid fa-user-plus fs-3" style={{color: 'var(--sv-primary)'}}></i>
          </div>
          <h2 className="fw-bold mb-1" style={{fontFamily: 'Space Grotesk'}}>Create Account</h2>
          <p className="text-muted" style={{fontSize: '14px'}}>Join ShopVibe today</p>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-3">
            <label className="form-label fw-semibold small">Full Name</label>
            <input type="text" name="name" value={form.name} onChange={handleChange} className={`form-control form-control-sv ${errors.name ? 'input-error' : ''}`} placeholder="John Doe" />
            {errors.name && <div className="text-danger mt-1 small anim-shake">{errors.name}</div>}
          </div>
          <div className="mb-3">
            <label className="form-label fw-semibold small">Email Address</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} className={`form-control form-control-sv ${errors.email ? 'input-error' : ''}`} placeholder="john@example.com" />
            {errors.email && <div className="text-danger mt-1 small anim-shake">{errors.email}</div>}
          </div>
          <div className="mb-3">
            <label className="form-label fw-semibold small">Password</label>
            <input type="password" name="password" value={form.password} onChange={handleChange} className={`form-control form-control-sv ${errors.password ? 'input-error' : ''}`} placeholder="Min 6 characters" />
            {errors.password && <div className="text-danger mt-1 small anim-shake">{errors.password}</div>}
          </div>
          <div className="mb-4">
            <label className="form-label fw-semibold small">Confirm Password</label>
            <input type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} className={`form-control form-control-sv ${errors.confirmPassword ? 'input-error' : ''}`} placeholder="Re-enter password" />
            {errors.confirmPassword && <div className="text-danger mt-1 small anim-shake">{errors.confirmPassword}</div>}
          </div>
          <button type="submit" className="btn btn-sv-primary w-100 py-2">Sign Up</button>
        </form>
        <p className="text-center text-muted mt-4 mb-0" style={{fontSize: '14px'}}>
          Already have an account? <Link to="/login" className="fw-bold text-decoration-none" style={{color: 'var(--sv-primary)'}}>Login</Link>
        </p>
      </div>
    </div>
  );
}