import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const handleSearch = () => {
        if (!query.trim()) return;
        navigate(`/search/${query}`);
    };

    return (
        <div className="search-wrap">
            <input
                type="text"
                value={query}
                placeholder="Search products..."
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                className="search-input"
            />
            <button onClick={handleSearch} className="search-btn" aria-label="Search">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                strokeWidth="1.5" strokeLinecap="round">
                    <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
                </svg>
            </button>
        </div>
    );
};

export default Search;