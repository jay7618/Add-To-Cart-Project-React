export default function Services() {
  const services = [
    { icon: 'fa-credit-card', title: 'Secure Payments', desc: 'Multiple payment options with bank-grade encryption.' },
    { icon: 'fa-rotate-left', title: 'Easy Returns', desc: '30-day hassle-free return policy on all products.' },
    { icon: 'fa-shield-halved', title: 'Buyer Protection', desc: 'Full refund if the product does not match the description.' },
    { icon: 'fa-gift', title: 'Gift Wrapping', desc: 'Premium gift wrapping available at checkout.' },
    { icon: 'fa-tags', title: 'Price Match', desc: 'Found it cheaper elsewhere? We will match the price.' },
    { icon: 'fa-box-open', title: 'Bulk Orders', desc: 'Special discounts for corporate and bulk purchases.' },
  ];

  return (
    <div className="container py-5">
      <div className="text-center mb-5 anim-fade-up">
        <h1 className="fw-bold mb-3" style={{fontFamily: 'Space Grotesk'}}>Our Services</h1>
        <p className="text-muted mx-auto" style={{maxWidth: '600px'}}>We go beyond just selling products. Here is everything we offer to make your experience exceptional.</p>
      </div>
      <div className="row g-4">
        {services.map((s, i) => (
          <div key={i} className="col-md-6 col-lg-4 anim-fade-up" style={{animationDelay: `${i * 0.08}s`}}>
            <div className="bg-white p-4 rounded-4 shadow-sm border h-100" style={{borderColor: '#f0f0f0', transition: 'all 0.3s ease'}}>
              <div className="d-inline-flex align-items-center justify-content-center rounded-3 mb-3" style={{width: '50px', height: '50px', backgroundColor: 'rgba(11,110,79,0.1)'}}>
                <i className={`fa-solid ${s.icon}`} style={{color: 'var(--sv-primary)'}}></i>
              </div>
              <h5 className="fw-bold mb-2" style={{fontFamily: 'Space Grotesk', fontSize: '18px'}}>{s.title}</h5>
              <p className="text-muted small mb-0">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}