export default function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  const getPages = () => {
    const pages = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push('...');
      for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
        pages.push(i);
      }
      if (currentPage < totalPages - 2) pages.push('...');
      pages.push(totalPages);
    }
    return pages;
  };

  return (
    <div className="d-flex justify-content-center align-items-center gap-2 mt-4 anim-fade-up">
      <button className="page-btn" disabled={currentPage === 1} onClick={() => onPageChange(currentPage - 1)}>
        <i className="fa-solid fa-chevron-left" style={{fontSize: '12px'}}></i>
      </button>
      {getPages().map((page, i) => (
        page === '...' ? (
          <span key={`d${i}`} className="px-2 text-muted">...</span>
        ) : (
          <button key={page} className={`page-btn ${currentPage === page ? 'active' : ''}`} onClick={() => onPageChange(page)}>
            {page}
          </button>
        )
      ))}
      <button className="page-btn" disabled={currentPage === totalPages} onClick={() => onPageChange(currentPage + 1)}>
        <i className="fa-solid fa-chevron-right" style={{fontSize: '12px'}}></i>
      </button>
    </div>
  );
}