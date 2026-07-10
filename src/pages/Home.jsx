import { useState, useMemo } from 'react';
import PRODUCTS from '../data/products';
import ProductCard from '../components/ProductCard';
import Pagination from '../components/Pagination';
import FilterSidebar from '../components/FilterSidebar';

const ITEMS_PER_PAGE = 6;

export default function Home() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [sortBy, setSortBy] = useState('default');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(p => p.name.toLowerCase().includes(q) || p.details.toLowerCase().includes(q) || p.category.toLowerCase().includes(q));
    }
    if (category !== 'All') result = result.filter(p => p.category === category);
    
    switch (sortBy) {
      case 'low-high': result.sort((a, b) => a.price - b.price); break;
      case 'high-low': result.sort((a, b) => b.price - a.price); break;
      case 'name-az': result.sort((a, b) => a.name.localeCompare(b.name)); break;
      case 'name-za': result.sort((a, b) => b.name.localeCompare(a.name)); break;
      default: break;
    }
    return result;
  }, [search, category, sortBy]);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  return (
    <div className="container py-4">
      {/* Hero Search */}
      <div className="text-center mb-4 p-4 p-md-5 rounded-4 anim-fade-up" style={{background: 'linear-gradient(135deg, rgba(11,110,79,0.05), rgba(232,150,62,0.05))'}}>
        <h1 className="fw-bold mb-2" style={{fontFamily: 'Space Grotesk', fontSize: '2.5rem'}}>Discover Premium Products</h1>
        <p className="text-muted mb-4 mx-auto" style={{maxWidth: '500px'}}>Curated collection of top-quality items across multiple categories</p>
        <div className="position-relative mx-auto" style={{maxWidth: '550px'}}>
          <i className="fa-solid fa-magnifying-glass position-absolute top-50 start-0 translate-middle-y ms-3 text-muted"></i>
          <input 
            type="text" 
            value={search} 
            onChange={(e) => { setSearch(e.target.value); setCurrentPage(1); }} 
            placeholder="Search products..." 
            className="form-control form-control-sv ps-5 py-3 rounded-pill"
          />
        </div>
      </div>

      <div className="row g-4">
        {/* Sidebar */}
        <div className="col-lg-3">
          <FilterSidebar 
            selectedCategory={category} 
            onCategoryChange={(cat) => { setCategory(cat); setCurrentPage(1); }} 
            sortBy={sortBy} 
            onSortChange={setSortBy} 
          />
        </div>

        {/* Product Grid */}
        <div className="col-lg-9">
          <p className="text-muted mb-3 small">
            Showing <strong className="text-dark">{paginatedProducts.length}</strong> of {filteredProducts.length} products
          </p>

          {paginatedProducts.length > 0 ? (
            <div className="row g-3">
              {paginatedProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-5">
              <i className="fa-solid fa-box-open d-block mb-3" style={{fontSize: '3rem', color: '#dee2e6'}}></i>
              <h4 className="text-muted fw-bold">No products found</h4>
              <p className="text-muted small">Try adjusting your search or filters</p>
            </div>
          )}

          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
        </div>
      </div>
    </div>
  );
}