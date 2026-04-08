import { useEffect, useState } from 'react';
import './collections.css';

const Collections = ({ onSelectCategory }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products/category-list')
      .then(res => res.json())
      .then(data => setCategories(data));
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar-heading">Our Collections</div>
      <div className="sidebar-scroll">
        <button
         className="cat-btn" onClick={() => onSelectCategory('All Products')}>
        <span className="cat-icon">📦</span>
        All Products</button>
        {categories.map((cat) => (
          <button key={cat} className="cat-btn" onClick={() => onSelectCategory(cat)}>
            <span className="cat-icon">📦</span>
            {cat}</button>
        ))}
      </div>
    </div>
  );
};

export default Collections;