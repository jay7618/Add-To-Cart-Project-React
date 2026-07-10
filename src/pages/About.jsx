export default function About() {
  const features = [
    { icon: 'fa-gem', title: 'Quality First', desc: 'Every product is hand-picked and quality-tested before making it to our store.' },
    { icon: 'fa-truck-fast', title: 'Fast Delivery', desc: 'Get your orders delivered within 2-3 business days across major cities.' },
    { icon: 'fa-headset', title: '24/7 Support', desc: 'Our dedicated team is always ready to help you with any queries.' },
  ];

  return (
    <div className="container py-5">
      <div className="text-center mb-5 anim-fade-up">
        <h1 className="fw-bold mb-3" style={{fontFamily: 'Space Grotesk'}}>About ShopVibe</h1>
        <p className="text-muted mx-auto" style={{maxWidth: '600px'}}>We believe great products should be accessible to everyone. Founded in 2024, ShopVibe curates the finest products across categories to elevate your everyday life.</p>
      </div>
      <div className="row g-4 justify-content-center">
        {features.map((item, i) => (
          <div key={i} className="col-md-4 anim-fade-up" style={{animationDelay: `${i * 0.1}s`}}>
            <div className="bg-white p-4 rounded-4 shadow-sm text-center h-100 border" style={{borderColor: '#f0f0f0'}}>
              <div className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3" style={{width: '60px', height: '60px', backgroundColor: 'rgba(11,110,79,0.1)'}}>
                <i className={`fa-solid ${item.icon} fs-4`} style={{color: 'var(--sv-primary)'}}></i>
              </div>
              <h5 className="fw-bold mb-2" style={{fontFamily: 'Space Grotesk'}}>{item.title}</h5>
              <p className="text-muted small mb-0">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}