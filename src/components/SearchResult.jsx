import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const SearchResult = () => {
    const { query } = useParams();
    const [results, setResults] = useState([]);

    useEffect(() => {
        fetch(`https://dummyjson.com/products/search?q=${query}`)
            .then(res => res.json())
            .then(data => setResults(data.products));
    }, [query]);

    return (
        <div className="search-results-page">
            <div className="search-hero">
                <h2>Results for "{query}"</h2>
                <p>{results.length} products found</p>
            </div>

            <div className="results-grid">
    {results.length === 0 ? (
        <p className="no-results">No products found. Try something else.</p>
    ) : (
        results.map(product => (
    <div key={product.id} className="result-card">
        <img src={product.thumbnail} alt={product.title} loading="lazy" />
        <div className="result-info">
            <span className="result-category">{product.category}</span>
            <span className="result-title">{product.title}</span>
            <span className="result-price">${product.price}</span>
        </div>
        <Link to={`/productdetail/` + product.id} className="result-detail-btn">
            Detail
        </Link>
    </div>
))
    )}
</div>
        </div>
    );
};

export default SearchResult;