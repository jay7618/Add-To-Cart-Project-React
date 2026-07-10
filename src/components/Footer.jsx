export default function Footer() {
  return (
    <footer className="text-white mt-5" style={{backgroundColor: 'var(--sv-text)', padding: '3rem 0 1.5rem'}}>
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4 col-md-6">
            <div className="d-flex align-items-center gap-2 mb-3">
              <i className="fa-solid fa-bag-shopping fs-4" style={{color: 'var(--sv-primary-light)'}}></i>
              <span className="fs-5 fw-bold" style={{fontFamily: 'Space Grotesk'}}>Shop<span style={{color: 'var(--sv-accent)'}}>Vibe</span></span>
            </div>
            <p className="text-secondary" style={{fontSize: '14px', lineHeight: '1.7'}}>
              Curated premium products for modern living. Quality you can trust, style you'll love.
            </p>
          </div>
          <div className="col-lg-2 col-md-6">
            <h6 className="fw-bold mb-3">Quick Links</h6>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li><a href="/about" className="text-secondary text-decoration-none" style={{fontSize: '14px'}}>About Us</a></li>
              <li><a href="/services" className="text-secondary text-decoration-none" style={{fontSize: '14px'}}>Services</a></li>
              <li><a href="/contact" className="text-secondary text-decoration-none" style={{fontSize: '14px'}}>Contact</a></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6">
            <h6 className="fw-bold mb-3">Categories</h6>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li><span className="text-secondary" style={{fontSize: '14px', cursor: 'pointer'}}>Electronics</span></li>
              <li><span className="text-secondary" style={{fontSize: '14px', cursor: 'pointer'}}>Clothing</span></li>
              <li><span className="text-secondary" style={{fontSize: '14px', cursor: 'pointer'}}>Home & Living</span></li>
              <li><span className="text-secondary" style={{fontSize: '14px', cursor: 'pointer'}}>Sports</span></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6">
            <h6 className="fw-bold mb-3">Connect</h6>
            <div className="d-flex gap-3 fs-5">
              <i className="fa-brands fa-facebook-f text-secondary" style={{cursor: 'pointer'}}></i>
              <i className="fa-brands fa-twitter text-secondary" style={{cursor: 'pointer'}}></i>
              <i className="fa-brands fa-instagram text-secondary" style={{cursor: 'pointer'}}></i>
              <i className="fa-brands fa-linkedin-in text-secondary" style={{cursor: 'pointer'}}></i>
            </div>
          </div>
        </div>
        <hr className="my-4 border-secondary" />
        <div className="text-center text-secondary" style={{fontSize: '14px'}}>
          &copy; {new Date().getFullYear()} ShopVibe. All rights reserved.
        </div>
      </div>
    </footer>
  );
}