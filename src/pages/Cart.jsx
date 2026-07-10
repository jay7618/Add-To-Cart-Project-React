import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/AppContext';
import Toast from '../components/Toast';

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, clearCart, cartTotal } = useCart();
  const [toast, setToast] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Address state
  const [address, setAddress] = useState({
    fullName: '',
    phone: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    country: ''
  });

  // Load saved address from localStorage when component mounts
  useEffect(() => {
    const savedAddress = localStorage.getItem('shopvibe_address');
    if (savedAddress) {
      setAddress(JSON.parse(savedAddress));
    }
  }, []);

  const handleAddressChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handleCheckoutClick = () => {
    if (cart.length === 0) return;
    setShowModal(true);
  };

  const handleFinalPlaceOrder = () => {
    // Basic validation
    if (!address.fullName || !address.phone || !address.street || !address.city || !address.zip) {
      setToast({ message: 'Please fill in all required address fields.', type: 'error' });
      return;
    }

    // Save address to localStorage for next time
    localStorage.setItem('shopvibe_address', JSON.stringify(address));

    // Close modal, clear cart, show success
    setShowModal(false);
    clearCart();
    setToast({ message: 'Order placed successfully! Address saved for next time.', type: 'success' });
  };

  return (
    <div className="container py-4">
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}

      <div className="d-flex justify-content-between align-items-center mb-4 anim-fade-up">
        <h2 className="fw-bold mb-0" style={{fontFamily: 'Space Grotesk'}}>
          <i className="fa-solid fa-cart-shopping me-2" style={{color: 'var(--sv-primary)'}}></i>
          Shopping Cart
        </h2>
        {cart.length > 0 && (
          <button onClick={clearCart} className="btn btn-sm btn-outline-danger border-0">
            Clear Cart
          </button>
        )}
      </div>

      {cart.length === 0 ? (
        <div className="text-center py-5 bg-white rounded-4 shadow-sm anim-fade-up">
          <i className="fa-solid fa-cart-arrow-down d-block mb-3" style={{fontSize: '4rem', color: '#dee2e6'}}></i>
          <h4 className="text-muted fw-bold">Your cart is empty</h4>
          <p className="text-muted small">Looks like you haven't added anything yet.</p>
          <Link to="/" className="btn btn-sv-primary px-4 mt-2 text-decoration-none">Continue Shopping</Link>
        </div>
      ) : (
        <div className="row g-4">
          {/* Cart Items List */}
          <div className="col-lg-8">
            <div className="d-flex flex-column gap-3">
              {cart.map(item => (
                <div key={item.id} className="bg-white p-3 rounded-3 shadow-sm d-flex align-items-center gap-3 anim-fade-up border" style={{borderColor: '#f0f0f0'}}>
                  <img src={item.image} alt={item.name} className="rounded-2" style={{width: '100px', height: '100px', objectFit: 'cover'}} />
                  <div className="flex-grow-1">
                    <h6 className="fw-bold mb-1" style={{fontFamily: 'Space Grotesk', fontSize: '16px'}}>{item.name}</h6>
                    <p className="text-muted small mb-2 d-none d-md-block">{item.category}</p>
                    <span className="fw-bold" style={{color: 'var(--sv-primary)'}}>${item.price.toFixed(2)}</span>
                  </div>
                  
                  {/* Quantity Controls */}
                  <div className="d-flex align-items-center border rounded-pill overflow-hidden" style={{minWidth: '120px', borderColor: '#dee2e6 !important'}}>
                    <button onClick={() => updateQuantity(item.id, -1)} className="btn btn-sm border-0 bg-transparent px-3 fw-bold">
                      <i className="fa-solid fa-minus" style={{fontSize: '10px'}}></i>
                    </button>
                    <span className="fw-bold px-2 text-center" style={{minWidth: '30px'}}>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)} className="btn btn-sm border-0 bg-transparent px-3 fw-bold">
                      <i className="fa-solid fa-plus" style={{fontSize: '10px'}}></i>
                    </button>
                  </div>

                  {/* Item Total & Remove */}
                  <div className="text-end" style={{minWidth: '90px'}}>
                    <p className="fw-bold mb-2" style={{fontFamily: 'Space Grotesk'}}>${(item.price * item.quantity).toFixed(2)}</p>
                    <button onClick={() => removeFromCart(item.id)} className="btn btn-sm text-danger border-0 bg-transparent p-0" title="Remove item">
                      <i className="fa-solid fa-trash-can"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-3">
              <Link to="/" className="text-decoration-none small" style={{color: 'var(--sv-primary)', fontWeight: '600'}}>
                <i className="fa-solid fa-arrow-left me-1"></i> Continue Shopping
              </Link>
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="col-lg-4">
            <div className="bg-white p-4 rounded-4 shadow-sm border position-sticky anim-fade-up" style={{borderColor: '#f0f0f0', top: '80px', animationDelay: '0.1s'}}>
              <h5 className="fw-bold mb-4" style={{fontFamily: 'Space Grotesk'}}>Order Summary</h5>
              
              <div className="d-flex justify-content-between mb-2">
                <span className="text-muted">Items ({cart.reduce((t, i) => t + i.quantity, 0)})</span>
                <span className="fw-semibold">${cartTotal.toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span className="text-muted">Shipping</span>
                <span className="fw-semibold text-success">Free</span>
              </div>
              
              <hr />
              
              <div className="d-flex justify-content-between mb-4">
                <span className="fs-5 fw-bold" style={{fontFamily: 'Space Grotesk'}}>Total</span>
                <span className="fs-5 fw-bold" style={{fontFamily: 'Space Grotesk', color: 'var(--sv-primary)'}}>${cartTotal.toFixed(2)}</span>
              </div>

              {/* Changed this button to open the modal */}
              <button onClick={handleCheckoutClick} className="btn btn-sv-primary w-100 py-2 mb-3">
                <i className="fa-solid fa-lock me-2"></i>Proceed to Checkout
              </button>
              <p className="text-center text-muted mb-0" style={{fontSize: '12px'}}>
                <i className="fa-solid fa-shield-halved me-1"></i> Secure 256-bit SSL Encryption
              </p>
            </div>
          </div>
        </div>
      )}

      {/* --- CHECKOUT ADDRESS MODAL --- */}
      {showModal && (
        <div className="modal d-block" tabIndex="-1" style={{backgroundColor: 'rgba(0,0,0,0.6)'}}>
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content rounded-4 shadow-lg border-0 anim-fade-up">
              <div className="modal-header border-bottom-0 pb-0">
                <div>
                  <h4 className="fw-bold mb-1" style={{fontFamily: 'Space Grotesk'}}>
                    <i className="fa-solid fa-truck-fast me-2" style={{color: 'var(--sv-primary)'}}></i>Delivery Address
                  </h4>
                  <p className="text-muted small mb-0">Where should we deliver your order?</p>
                </div>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>
              
              <div className="modal-body pt-3">
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label fw-semibold small">Full Name *</label>
                    <input type="text" name="fullName" value={address.fullName} onChange={handleAddressChange} className="form-control form-control-sv" placeholder="John Doe" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-semibold small">Phone Number *</label>
                    <input type="tel" name="phone" value={address.phone} onChange={handleAddressChange} className="form-control form-control-sv" placeholder="+1 234 567 890" />
                  </div>
                  <div className="col-12">
                    <label className="form-label fw-semibold small">Street Address *</label>
                    <input type="text" name="street" value={address.street} onChange={handleAddressChange} className="form-control form-control-sv" placeholder="123 Main Street, Apt 4B" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-semibold small">City *</label>
                    <input type="text" name="city" value={address.city} onChange={handleAddressChange} className="form-control form-control-sv" placeholder="New York" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-semibold small">State / Province</label>
                    <input type="text" name="state" value={address.state} onChange={handleAddressChange} className="form-control form-control-sv" placeholder="NY" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-semibold small">ZIP / Postal Code *</label>
                    <input type="text" name="zip" value={address.zip} onChange={handleAddressChange} className="form-control form-control-sv" placeholder="10001" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-semibold small">Country</label>
                    <input type="text" name="country" value={address.country} onChange={handleAddressChange} className="form-control form-control-sv" placeholder="United States" />
                  </div>
                </div>
              </div>

              <div className="modal-footer border-top-0 pt-0 d-flex justify-content-between">
                <button type="button" className="btn btn-outline-secondary rounded-pill px-4" onClick={() => setShowModal(false)}>
                  Cancel
                </button>
                <button type="button" className="btn btn-sv-primary rounded-pill px-4" onClick={handleFinalPlaceOrder}>
                  <i className="fa-solid fa-check me-2"></i>Place Order (${cartTotal.toFixed(2)})
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}