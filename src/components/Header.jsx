import { useState } from 'react';
import './style.css'
import { Link } from 'react-router-dom';
import Search from './Search.jsx';

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (

    <>
      <header>
        <div className="header-inner">
          <Link to='/' className="logo">
            <div className="logo-mark">
              <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 1L13 7L7 13M1 7H13" stroke="#1C1C1C" strokeWidth="1.5"
                  strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="logo-text">MarketOX</span>
          </Link>
          <nav>
            <Link to='/'>Home</Link>
            <Link to='/products' >Products</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>

          </nav>

          <div className="actions">
            <Search />

            <Link to='/carts' className="icon-btn cart-btn" aria-label="Cart">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 01-8 0" />
              </svg>
              <span className="cart-badge" />
            </Link>

            <Link className='Signin' to='/login' >profile</Link>

            <button
              className={`menu-toggle ${menuOpen ? "open" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>


      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/products" onClick={() => setMenuOpen(false)}>Products</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        <div className="mobile-search">
          <Search />
        </div>
      </div>

    </>
  )
}

export default Header;