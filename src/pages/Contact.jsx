import { useState } from 'react';
import Toast from '../components/Toast';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [toast, setToast] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setToast({ message: 'Please fill in all fields.', type: 'error' });
      return;
    }
    setToast({ message: 'Message sent successfully!', type: 'success' });
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="container py-5">
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
      
      <div className="text-center mb-5 anim-fade-up">
        <h1 className="fw-bold mb-3" style={{fontFamily: 'Space Grotesk'}}>Contact Us</h1>
        <p className="text-muted">Have a question or feedback? We would love to hear from you.</p>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="bg-white p-4 p-md-5 rounded-4 shadow-sm border anim-fade-up" style={{borderColor: '#f0f0f0', animationDelay: '0.1s'}}>
            <form onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label fw-semibold small">Your Name</label>
                  <input type="text" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} className="form-control form-control-sv" placeholder="John Doe" />
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-semibold small">Email Address</label>
                  <input type="email" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} className="form-control form-control-sv" placeholder="john@example.com" />
                </div>
                <div className="col-12">
                  <label className="form-label fw-semibold small">Message</label>
                  <textarea value={form.message} onChange={(e) => setForm({...form, message: e.target.value})} className="form-control form-control-sv" rows="5" placeholder="Write your message here..."></textarea>
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-sv-primary px-5 py-2">Send Message</button>
                </div>
              </div>
            </form>
          </div>

          <div className="row g-4 mt-4 text-center">
            {[
              { icon: 'fa-envelope', label: 'Email', value: 'support@shopvibe.com' },
              { icon: 'fa-phone', label: 'Phone', value: '+1 (555) 123-4567' },
              { icon: 'fa-location-dot', label: 'Address', value: '123 Market St, SF, CA' },
            ].map((item, i) => (
              <div key={i} className="col-md-4 anim-fade-up" style={{animationDelay: `${0.2 + i * 0.1}s`}}>
                <i className={`fa-solid ${item.icon} fs-4 d-block mb-2`} style={{color: 'var(--sv-accent)'}}></i>
                <h6 className="fw-bold mb-1" style={{fontFamily: 'Space Grotesk', fontSize: '14px'}}>{item.label}</h6>
                <p className="text-muted small mb-0">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}