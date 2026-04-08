import './contact.css';

const Contact = () => {
  

  return (
    <>
      <section className="cont-hero">
        <div className="cont-container">
          <p className="hero-eyebrow">Get In Touch</p>
          <h1>We'd Love to Hear <em>From You</em></h1>
          <p>Reach out with any questions or inquiries about our products and services</p>
        </div>
      </section>

      <div className="container py-5">
        <div className="contact-container">
          <div className="contact-info">
            <h2>Contact Information</h2>
            
            <div className="cont-info-block">
              <h3>Email</h3>
              <p>
                <a href="mailto:hello@example.com">hello@example.com</a>
              </p>
              <p className="text-muted">We typically respond within 24 hours</p>
            </div>

            <div className="cont-info-block">
              <h3>Phone</h3>
              <p>
                <a href="tel:+1234567890">+1 (234) 567-890</a>
              </p>
              <p className="text-muted">Available Monday to Friday, 9am - 6pm</p>
            </div>

            <div className="cont-info-block">
              <h3>Location</h3>
              <p>
                123 Business Street<br />
                New York, NY 10001<br />
                United States
              </p>
            </div>

            <div className="cont-info-block">
              <h3>Follow Us</h3>
              <div className="social-links">
                <a href="#" className="cont-social-link">Twitter</a>
                <a href="#" className="cont-social-link">LinkedIn</a>
                <a href="#" className="cont-social-link">Instagram</a>
              </div>
            </div>
          </div>

          <form className="contact-form" >
            <h2>Send us a Message</h2>

            <div className="cont-form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Your name"
              />
            </div>

            <div className="cont-form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="your@email.com"
              />
            </div>

            <div className="cont-form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                placeholder="How can we help?"
              />
            </div>

            <div className="cont-form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                required
                placeholder="Tell us more..."
                rows="6"
              ></textarea>
            </div>

            <button type="submit" className="cont-hero-btn">Send Message</button>
            
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
