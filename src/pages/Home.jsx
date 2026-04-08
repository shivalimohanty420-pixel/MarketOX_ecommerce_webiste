import { Link } from 'react-router-dom';
import './home.css';
import Prodt from '../components/Prodt.jsx';

const Home = () => {
  return (
    <main className="home-page">
      
      <section className="hero-section">
        <div
          id="heroCarousel"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
          data-bs-interval="4000"
        >
          <div className="carousel-inner">

            <div className="carousel-item active">
              <img
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1600&q=85"
                alt="Fashion"
                className="hero-slide-img"
              />
              <div className="hero-slide-overlay" />
              <div className="hero-slide-content">
                <span className="hero-tag">New Collection — SS 2026</span>
                <h1 className="hero-title">
                  Where style <br /> finds its <em>voice.</em>
                </h1>
                <p className="hero-sub">
                  Curated fashion that speaks before you do. Discover pieces for the season ahead.
                </p>
                <div className="hero-btns">
                  <Link to="/products" className="btn-hero-primary">Shop Now</Link>
                  <button className="btn-hero-outline">Explore Lookbook</button>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <img
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1600&q=85"
                alt="Home Living"
                className="hero-slide-img"
              />
              <div className="hero-slide-overlay" />
              <div className="hero-slide-content">
                <span className="hero-tag">Home &amp; Living — Curated Picks</span>
                <h1 className="hero-title">
                  Objects that <br /> <em>outlast trends.</em>
                </h1>
                <p className="hero-sub">
                  Premium homeware and lifestyle products designed for the way you actually live.
                </p>
                <div className="hero-btns">
                  <Link to="/products" className="btn-hero-primary">Shop Collection</Link>
                  <button className="btn-hero-outline">View All</button>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <img
                src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1600&q=85"
                alt="Beauty"
                className="hero-slide-img"
              />
              <div className="hero-slide-overlay" />
              <div className="hero-slide-content">
                <span className="hero-tag">Beauty — Editor's Picks</span>
                <h1 className="hero-title">
                  Beauty, <br /> <em>redefined daily.</em>
                </h1>
                <p className="hero-sub">
                  Skincare, fragrance and cosmetics from the world's most coveted brands.
                </p>
                <div className="hero-btns">
                  <Link to="/products" className="btn-hero-primary">Discover Beauty</Link>
                  <button className="btn-hero-outline">See Brands</button>
                </div>
              </div>
            </div>

          </div>

          <button className="hero-arrow hero-arrow-left" type="button" data-bs-target="#heroCarousel"
           data-bs-slide="prev">
            &#8592;
          </button>
          <button className="hero-arrow hero-arrow-right" type="button" data-bs-target="#heroCarousel" 
          data-bs-slide="next">
            &#8594;
          </button>

          <div className="hero-dots">
            <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" 
            className="hero-dot active" aria-current="true" />
            <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1" className="hero-dot" />
            <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2" className="hero-dot" />
          </div>
        </div>
      </section>

      <div className="ticker">
        <div className="ticker-track">
          {[
            'Free Worldwide Shipping', 'New Arrivals Every Week',
            '60-Day Free Returns', 'Authenticity Guaranteed', 'Exclusive Member Offers',
            'Free Worldwide Shipping', 'New Arrivals Every Week',
            '60-Day Free Returns', 'Authenticity Guaranteed', 'Exclusive Member Offers',
          ].map((item, i) => (
            <span key={i} className="ticker-item">
              {item}<span className="ticker-sep">✦</span>
            </span>
          ))}
        </div>
      </div>

      <div className="cat-grid">
          <Link to="/products" className="cat-card">
            <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=700&q=80" 
            alt="Fashion" className="cat-img" />
            <div className="cat-overlay" />
            <div className="cat-label">
              <div className="cat-name">Fashion</div>
              <div className="cat-count">240</div>
            </div>
          </Link>
          <Link to="/products" className="cat-card">
            <img src='https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=700&q=80'
             alt='Beauty' className="cat-img" />
            <div className="cat-overlay" />
            <div className="cat-label">
              <div className="cat-name">Beauty</div>
              <div className="cat-count">180</div>
            </div>
          </Link><Link to="/products" className="cat-card">
            <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=700&q=80" 
            alt="Living" className="cat-img" />
            <div className="cat-overlay" />
            <div className="cat-label">
              <div className="cat-name">Living</div>
              <div className="cat-count">39</div>
            </div>
          </Link><Link to="/products" className="cat-card">
            <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=700&q=80" 
            alt="Accessories" className="cat-img" />
            <div className="cat-overlay" />
            <div className="cat-label">
              <div className="cat-name">Accessories</div>
              <div className="cat-count">209</div>
            </div>
          </Link>
      </div>

      <section className="featured-section">
        <div className="section-header">
          <h2 className="section-title">Featured <em>this week</em></h2>
          <Link to="/products" className="section-link">View all products <span>&#8594;</span></Link>
        </div>

        <div id="productCarousel" className="carousel slide" data-bs-ride="false">
          <div className="carousel-inner">
         <Prodt/>

          </div>

          <div className="product-nav">
            <button className="product-nav-btn" type="button" data-bs-target="#productCarousel" data-bs-slide="prev">
              &#8592; Prev
            </button>
            <div className="product-nav-dots">
              <button type="button" data-bs-target="#productCarousel" data-bs-slide-to="0" className="product-nav-dot active" aria-current="true" />
              <button type="button" data-bs-target="#productCarousel" data-bs-slide-to="1" className="product-nav-dot" />
            </div>
            <button className="product-nav-btn" type="button" data-bs-target="#productCarousel" data-bs-slide="next">
              Next &#8594;
            </button>
          </div>
        </div>
      </section>

      <div className="promo-split">
        <div className="promo-img-side">
          <img
            src="https://images.unsplash.com/photo-1591085686350-798c0f9faa7f?w=900&q=80"
            alt="Our Story"
            className="promo-img"
          />
        </div>
        <div className="promo-copy-side">
          <span className="promo-eyebrow">Our Philosophy</span>
          <h2 className="promo-title">
            Buying with<br /><em>intention.</em>
          </h2>
          <p className="promo-text">
            Every product in our collection is chosen for its ability to outlast trends — pieces
            that grow more meaningful with time. We partner only with brands who share our
            commitment to craft and sustainability.
          </p>
          <Link to="/products" className="btn-hero-primary">Discover Our Story</Link>
          <div className="promo-stats">
            <div className="promo-stat"><div className="promo-stat-num">340+</div>
            <div className="promo-stat-label">Products</div></div>
            <div className="promo-stat"><div className="promo-stat-num">48</div>
            <div className="promo-stat-label">Brands</div></div>
            <div className="promo-stat"><div className="promo-stat-num">9yrs</div>
            <div className="promo-stat-label">Curating</div></div>
          </div>
        </div>
      </div>

      <section className="testi-section">
        <div className="testi-header">
          <span className="testi-eyebrow">Customer Stories</span>
          <h2 className="testi-title">What people <em>are saying</em></h2>
        </div>

        <div
          id="testiCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="4500"
        >
          <div className="carousel-inner testi-carousel">

            <div className="carousel-item active">
              <div className="testi-slide">
                <div className="star-row">
                  {[1,2,3,4,5].map((s) => (
                    <svg key={s} className="star-icon" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="testi-quote">"I've never experienced shopping like this. Every single item I've ordered 
                  has exceeded my expectations — the quality is extraordinary and delivery was impossibly fast."</p>
                <div className="testi-author-row">
                  <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80" alt="Priya" 
                  className="testi-avatar" />
                  <div>
                    <div className="testi-author">Priya Sharma</div>
                    <div className="testi-location">Mumbai</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="testi-slide">
                <div className="star-row">
                  {[1,2,3,4,5].map((s) => (
                    <svg key={s} className="star-icon" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2z"
                       />
                    </svg>
                  ))}
                </div>
                <p className="testi-quote">"The curation is impeccable. They don't sell everything — they sell 
                  the right things. I've completely changed how I shop because of this store."</p>
                <div className="testi-author-row">
                  <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80" 
                  alt="Marcus" className="testi-avatar" />
                  <div>
                    <div className="testi-author">Marcus Bell</div>
                    <div className="testi-location">London</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="testi-slide">
                <div className="star-row">
                  {[1,2,3,4,5].map((s) => (
                    <svg key={s} className="star-icon" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2z"
                       />
                    </svg>
                  ))}
                </div>
                <p className="testi-quote">"Worth every rupee. My perfume arrived perfectly packaged and the fragrance 
                  is absolutely divine. The customer care team was incredibly helpful too."</p>
                <div className="testi-author-row">
                  <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80" alt="Aarav" 
                  className="testi-avatar" />
                  <div>
                    <div className="testi-author">Aarav Singh</div>
                    <div className="testi-location">Delhi</div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="testi-dots">
            <button type="button" data-bs-target="#testiCarousel" data-bs-slide-to="0" 
            className="testi-dot active" aria-current="true" />
            <button type="button" data-bs-target="#testiCarousel" data-bs-slide-to="1"
             className="testi-dot" />
            <button type="button" data-bs-target="#testiCarousel" data-bs-slide-to="2" className="testi-dot" />
          </div>
        </div>
      </section>

      <div className="brands-section">
        <p className="brands-label">Brands we carry</p>
        <div className="brands-list">
          {['Calvin Klein', 'Chanel', 'Colombo', 'Essence', 'Dior', 'Versace'].map((b) => (
            <span key={b} className="brand-name">{b}</span>
          ))}
        </div>
      </div>

      <div className="cta-banner">
        <img
          src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1600&q=80"
          alt=""
          className="cta-bg"
        />
        <div className="cta-overlay" />
        <div className="cta-inner">
          <h2 className="cta-title">Upgrade your<br /><em>everyday.</em></h2>
          <p className="cta-sub">Join 50,000+ members getting early access to new drops, exclusive deals and curated edits.</p>
          <div className="cta-form">
            <input type="email" className="cta-input" placeholder="Enter your email address" />
            <button className="cta-submit">Join Now</button>
          </div>
        </div>
      </div>

    </main>
  );
};

export default Home;