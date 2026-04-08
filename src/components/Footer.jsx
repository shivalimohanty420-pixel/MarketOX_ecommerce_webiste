import { Link } from 'react-router-dom';
import './style.css';

const Footer = () => {
  return (
    <footer className="footer">

      {/* ── Body ── */}
      <div className="footer-body">

        {/* Brand */}
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <div className="footer-logo-mark">
              <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 1L13 7L7 13M1 7H13" stroke="currentColor" strokeWidth="1.5"
                  strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="footer-logo-text">MarketOX</span>
          </Link>
          <p className="footer-tagline">
            Products crafted for people who appreciate quality, simplicity, and lasting design.
          </p>
          <div className="footer-socials">
            <a href="#" className="social-btn" aria-label="Instagram">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2H8C4.69 2 2 4.69 2 8v8c0 3.31 2.69 6 6 6h4c3.31 0 6-2.69 6-6V8c0-3.31-2.69-6-6-6zm4 14c0 2.21-1.79 4-4 4H8c-2.21 0-4-1.79-4-4V8c0-2.21 1.79-4 4-4h4c2.21 0 4 1.79 4 4v8zm-6-9a5 5 0 100 10A5 5 0 0010 7zm0 8a3 3 0 110-6 3 3 0 010 6zm5.5-8.5a1 1 0 100-2 1 1 0 000 2z"/>
              </svg>
            </a>
            <a href="#" className="social-btn" aria-label="Twitter">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="#" className="social-btn" aria-label="Pinterest">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.65 7.86 6.39 9.29-.09-.78-.17-1.98.04-2.83.18-.77 1.22-5.17 1.22-5.17s-.31-.62-.31-1.55c0-1.45.84-2.54 1.89-2.54.89 0 1.32.67 1.32 1.47 0 .9-.57 2.24-.87 3.48-.25 1.04.52 1.88 1.54 1.88 1.85 0 3.09-2.37 3.09-5.18 0-2.14-1.44-3.64-3.5-3.64-2.38 0-3.78 1.79-3.78 3.63 0 .72.28 1.49.62 1.91.07.08.08.15.06.23l-.23.95c-.04.15-.13.18-.29.11-1.09-.51-1.77-2.09-1.77-3.37 0-2.74 1.99-5.25 5.74-5.25 3.01 0 5.35 2.14 5.35 5.01 0 2.99-1.88 5.39-4.5 5.39-.88 0-1.7-.46-1.98-1l-.54 2.02c-.2.74-.72 1.67-1.07 2.23.8.25 1.65.38 2.53.38 5.52 0 10-4.48 10-10S17.52 2 12 2z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Shop */}
        <div className="footer-col">
          <h4>Shop</h4>
          <Link to="/products">All Products</Link>
          <Link to="/collections">Collections</Link>
          <a href="#">New Arrivals</a>
          <a href="#">Best Sellers</a>
          <a href="#">Sale</a>
        </div>

        {/* Company */}
        <div className="footer-col">
          <h4>Company</h4>
          <Link to="/about">About Us</Link>
          <a href="#">Careers</a>
          <a href="#">Press</a>
          <a href="#">Sustainability</a>
        </div>

        {/* Support */}
        <div className="footer-col">
          <h4>Support</h4>
          <Link to="/contact">Contact Us</Link>
          <a href="#">FAQs</a>
          <a href="#">Shipping & Returns</a>
          <a href="#">Track Order</a>
          <a href="#">Size Guide</a>
        </div>

        {/* Newsletter */}
        <div className="footer-newsletter">
          <h4>Stay in the loop</h4>
          <p>New drops and exclusive offers — straight to your inbox.</p>
          <div className="newsletter-form">
            <input type="email" placeholder="your@email.com" />
            <button aria-label="Subscribe">
              <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" width="13" height="13">
                <path d="M7 1L13 7L7 13M1 7H13" stroke="currentColor" strokeWidth="1.5"
                  strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
          <span className="newsletter-note">No spam. Unsubscribe anytime.</span>
        </div>

      </div>

      {/* ── Bottom bar ── */}
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} MarketOX. All rights reserved.</span>
        <div className="footer-legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
          <a href="#">Cookies</a>
        </div>
        <div className="footer-pay">
          <span className="pay-chip">VISA</span>
          <span className="pay-chip">MC</span>
          <span className="pay-chip">UPI</span>
          <span className="pay-chip">COD</span>
        </div>
      </div>

    </footer>
  );
};

export default Footer;