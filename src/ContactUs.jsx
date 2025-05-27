function ContactUs() {
  return (
    <div>
      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-header">
            <h2 className="contact-title">Contactus</h2>
            <p className="contact-subtitle">
              Get in touch with our team for any questions or inquiries. We're here to help.
            </p>
          </div>

          <div className="contact-grid">
            <div className="contact-card">
              <div className="contact-card-content">
                <svg className="contact-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <p className="contact-info">+254 720971069</p>
                <p className="contact-info">+254 727410782</p>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-card-content">
                <svg className="contact-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <p className="contact-info">zeitunmohamed09@gmail.com</p>
                <p className="contact-info">amirkiayi@gmail.com</p>
              </div>
            </div>
            <div className="contact-card">
              <div className="contact-card-content">
                <svg className="contact-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="contact-info">8502 Preston Rd. Ingle, Maine 98380, USA</p>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <div className="contact-form-content">
              <h3 className="contact-form-title">Send us a message</h3>

              <form action="#" method="POST" className="contact-form-grid">
                <div className="contact-form-group">
                  <label className="contact-form-label">Your name</label>
                  <input type="text" placeholder="Enter your full name" className="contact-form-input" />
                </div>

                <div className="contact-form-group">
                  <label className="contact-form-label">Email address</label>
                  <input type="email" placeholder="Enter your email" className="contact-form-input" />
                </div>

                <div className="contact-form-group">
                  <label className="contact-form-label">Phone number</label>
                  <input type="tel" placeholder="Enter your phone" className="contact-form-input" />
                </div>

                <div className="contact-form-group">
                  <label className="contact-form-label">Password</label>
                  <input type="text" placeholder="Enter password" className="contact-form-input" />
                </div>

                <div className="contact-form-group contact-form-full-width">
                  <label className="contact-form-label">Message</label>
                  <textarea placeholder="Your message..." className="contact-form-input contact-form-textarea"></textarea>
                </div>

                <div className="contact-form-group contact-form-full-width">
                  <button type="submit" className="contact-form-submit">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;