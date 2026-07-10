import { useState } from 'react';
import { useCart } from '../context/AppContext';
import Toast from './Toast';

export default function ProductCard({ product, index }) {
  const { addToCart } = useCart();
  const [toast, setToast] = useState(null);

  const handleAddToCart = () => {
    addToCart(product);
    setToast({ message: `${product.name} added to cart!`, type: 'success' });
  };

  return (
    <div className="col-sm-6 col-xl-4 mb-4 anim-fade-up" style={{animationDelay: `${index * 0.05}s`}}>
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
      
      <div className="product-card h-100 d-flex flex-column">
        <div className="position-relative overflow-hidden">
          <img src={product.image} alt={product.name} className="w-100" loading="lazy" />
          <span className="position-absolute top-0 end-0 m-3 badge rounded-pill" style={{backgroundColor: 'var(--sv-accent)', fontSize: '12px', fontWeight: '600'}}>
            {product.category}
          </span>
        </div>
        <div className="p-3 d-flex flex-column flex-grow-1">
          <h5 className="fw-bold mb-2" style={{fontFamily: 'Space Grotesk', fontSize: '16px', lineHeight: '1.3'}}>
            {product.name}
          </h5>
          <p className="text-muted mb-3 flex-grow-1" style={{fontSize: '14px', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden'}}>
            {product.details}
          </p>
          <div className="d-flex justify-content-between align-items-center mt-auto">
            <span className="fw-bold fs-5" style={{color: 'var(--sv-primary)', fontFamily: 'Space Grotesk'}}>
              ${product.price.toFixed(2)}
            </span>
            <button className="btn btn-sv-primary btn-sm d-flex align-items-center gap-1" onClick={handleAddToCart}>
              <i className="fa-solid fa-cart-plus"></i> Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}