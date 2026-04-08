import './about.css';

const About = () => {
  return (
    <>
      <section className="about-hero">
        <div className="about-container about-hero-content">
          <div className="about-hero-text">
            <p className="about-hero-eyebrow">About Us</p>
            <h1>Our <em>Story</em> & Mission</h1>
            <p>We believe in creating exceptional products that inspire and transform lives</p>
          </div>
          <div className="about-hero-image">
            <img src="https://img.freepik.com/free-photo/business-strategy-success-target-goals_1421-33.jpg?semt=ais_incoming&w=740&q=80" />
          </div>
        </div>
      </section>

      <div className="container py-5">
        <div className="about-section">
          <div className="about-content">
            <div className="about-content-text">
              <h2>Who We Are</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi odit veniam facilis modi recusandae ab in 
                laudantium quasi voluptatem praesentium voluptates, facere aut commodi dolorem ex rerum 
                vel distinctio rem numquam totam similique temporibus accusantium.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto velit nihil, fuga odio
                 distinctio dicta rem assumenda pariatur quae libero iure minus laboriosam placeat, 
                 at quod sit voluptate ipsum nulla!
              </p>
            </div>
            <div className="about-image-side">
              <img src="https://media.istockphoto.com/id/2094337676/photo/diverse-team-working-together-in-modern-co-working-space.jpg?s=612x612&w=0&k=20&c=EvWROZsfro1ghOVViXVj-tKS364-NeabwNNYkyvhxoY=" 
              alt="Who we are - our team and company" />
            </div>
          </div>
          <div className="about-stats">
            <div className="about-stat-item">
              <h3>10K+</h3>
              <p>Happy Customers</p>
            </div>
            <div className="about-stat-item">
              <h3>50+</h3>
              <p>Products</p>
            </div>
            <div className="about-stat-item">
              <h3>15</h3>
              <p>Years Experience</p>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h2>Our Values</h2>
          <div className="about-values-grid">
            <div className="about-value-card">
              <h3>Quality</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem enim tempora aspernatur.</p>
            </div>
            <div className="about-value-card">
              <h3>Innovation</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae ratione molestiae in facere dolorem voluptas.</p>
            </div>
            <div className="about-value-card">
              <h3>Integrity</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque, delectus quibusdam!.</p>
            </div>
            <div className="about-value-card">
              <h3>Sustainability</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic aliquam minus ut eos?</p>
            </div>
          </div>
        </div>

        <div className="about-cta-section">
          <h2>Join Our Community</h2>
          <p>Discover why thousands of customers trust us with their needs</p>
          <button className="about-hero-btn">Get Started Today</button>
        </div>
      </div>
    </>
  );
};

export default About;
