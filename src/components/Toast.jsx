import { useEffect } from 'react';

export default function Toast({ message, type, onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const bg = type === 'success' ? 'var(--sv-primary)' : '#dc3545';

  return (
    <div className="toast-sv" style={{backgroundColor: bg}}>
      <i className={`fa-solid ${type === 'success' ? 'fa-circle-check' : 'fa-circle-exclamation'}`}></i>
      <span className="fw-medium" style={{fontSize: '14px'}}>{message}</span>
      <button onClick={onClose} className="btn btn-sm btn-link text-white border-0 p-0 ms-2 shadow-none text-decoration-none">
        <i className="fa-solid fa-xmark"></i>
      </button>
    </div>
  );
}