import { getCategories } from '../data/products';

export default function FilterSidebar({ selectedCategory, onCategoryChange, sortBy, onSortChange }) {
  const categories = getCategories();

  return (
    <div className="bg-white p-4 rounded-3 shadow-sm border mb-4" style={{borderColor: '#f0f0f0', position: 'sticky', top: '80px'}}>
      <h5 className="fw-bold mb-3" style={{fontFamily: 'Space Grotesk'}}>Filters</h5>
      
      <div className="mb-4">
        <h6 className="text-uppercase fw-semibold text-muted mb-2" style={{fontSize: '12px', letterSpacing: '1px'}}>Category</h6>
        <div className="d-flex flex-wrap gap-2">
          {categories.map(cat => (
            <button key={cat} className={`filter-chip ${selectedCategory === cat ? 'active' : ''}`} onClick={() => onCategoryChange(cat)}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h6 className="text-uppercase fw-semibold text-muted mb-2" style={{fontSize: '12px', letterSpacing: '1px'}}>Sort By</h6>
        <select className="form-select form-control-sv" value={sortBy} onChange={(e) => onSortChange(e.target.value)} style={{padding: '10px 12px', fontSize: '14px'}}>
          <option value="default">Default</option>
          <option value="low-high">Price: Low to High</option>
          <option value="high-low">Price: High to Low</option>
          <option value="name-az">Name: A to Z</option>
          <option value="name-za">Name: Z to A</option>
        </select>
      </div>
    </div>
  );
}