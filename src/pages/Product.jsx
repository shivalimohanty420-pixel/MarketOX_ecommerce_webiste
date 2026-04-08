import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './product.css';
import Collections from '../components/Collections.jsx';

const LIMIT = 8;

const Product = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [skip, setSkip] = useState(0);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate()

  useEffect(() => {
    let url = `https://dummyjson.com/products?limit=${LIMIT}&skip=${skip}`;

    if (selectedCategory !== 'All Products') {
      url = `https://dummyjson.com/products/category/${selectedCategory}?limit=${LIMIT}&skip=${skip}`;
    }

    fetch(url)
      .then(res => res.json())
      .then(data => {
        setProducts(data.products);
        setTotal(data.total);
      });
  }, [selectedCategory, skip]);

  const handleCategorySelect = (cat) => {
    setSelectedCategory(cat);
    setSkip(0);
  };

  const totalPages = Math.ceil(total / LIMIT);
  const currentPage = Math.floor(skip / LIMIT) + 1;

  return (
    <>
      <section className="prod-hero">
        <div className="prod-container">
          <p className="prod-hero-eyebrow">New Collection 2025</p>
          <h1>Discover Our <em>Premium</em> Products</h1>
          <p>Curated products designed for quality and style</p>
          <button className="prod-hero-btn">Explore Now</button>
        </div>
      </section>

      <div className="prod-container py-5">
        <div className="prod-layout">

          <div className="prod-sidebar-col">
            <Collections onSelectCategory={handleCategorySelect} />
          </div>

          <div className="prod-main-col">
            <div className="prod-section-header">
              <h2 className="prod-section-title">{selectedCategory}</h2>
              
                <div className="pagination">
                  <button className="btn" 
                  onClick={() => setSkip(skip - LIMIT)} disabled={skip === 0}>
                    ← Prev
                    </button>
                  <span className="page-info">Page {currentPage} of {totalPages}</span>
                  <button className="btn" 
                  onClick={() => setSkip(skip + LIMIT)} disabled={skip + LIMIT >= total}>
                    Next →
                    </button>
                </div>
             
            </div>

            <div className="products-grid">
              {products.map((product) => (
               <div key={product.id}  onClick={() => navigate(`/productdetail/${product.id}`)} className="product-card">
                  <div className="product-img-wrap">
                    <img src={product.thumbnail} alt={product.title} loading="lazy" />
                  </div>
                  <div className="product-content">
                    <p className="product-category">{product.category}</p>
                    <h3 className="product-title">{product.title}</h3>
                    <p className="product-price">${product.price}</p>
                    <Link to={`/productdetail/${product.id}`} 
                    className="btn-detail">View Details</Link>
                  </div>
                </div> 
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Product;