function SignUp() {
  return (
    <section className="signup-section">
    
      <div className="signup-hero">
        <div className="signup-hero-bg">
         <img 
  src="/image.png/image copy 5.png"
  alt="Woman working on laptop"
  className="signup-image" 
/>
        </div>
        <div className="signup-hero-overlay"></div>
        
        <div className="signup-hero-content">
          <h3 className="signup-hero-title">
            Join 35k+ solar professionals & <br className="hidden xl:block" />Solar assures your safety 
          </h3>
          
          <ul className="signup-features">
            <li className="signup-feature-item">
              <span className="signup-feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span>Commercial License</span>
            </li>
            
            <li className="signup-feature-item">
              <span className="signup-feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span>Unlimited Exports</span>
            </li>
            
            <li className="signup-feature-item">
              <span className="signup-feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span>120+ Coded Blocks</span>
            </li>
            
            <li className="signup-feature-item">
              <span className="signup-feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span>Design Files Included</span>
            </li>
          </ul>
        </div>
      </div>

      
      <div className="signup-form-container">
        <div className="signup-form-wrapper">
          <h2 className="signup-form-title">Sign up to Celebration</h2>
          <p className="signup-form-subtitle">
            Already have an account? <a href="#" className="font-medium">Login</a>
          </p>

          <form className="signup-form">
            <div className="signup-form-group">
              <label className="signup-form-label">First & Last name</label>
              <div className="signup-form-input-container">
                <span className="signup-form-input-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </span>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="signup-form-input"
                />
              </div>
            </div>

            <div className="signup-form-group">
              <label className="signup-form-label">Email address</label>
              <div className="signup-form-input-container">
                <span className="signup-form-input-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                </span>
                <input
                  type="email"
                  placeholder="Enter email to get started"
                  className="signup-form-input"
                />
              </div>
            </div>

            <div className="signup-form-group">
              <label className="signup-form-label">Password</label>
              <div className="signup-form-input-container">
                <span className="signup-form-input-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                  </svg>
                </span>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="signup-form-input"
                />
              </div>
            </div>

            <button type="submit" className="signup-form-submit">
              Sign up
            </button>
          </form>

          <div className="signup-social-buttons">
            <button type="button" className="signup-social-button">
              <span className="signup-social-icon signup-google-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z" />
                </svg>
              </span>
              <span>Sign up with Google</span>
            </button>

            <button type="button" className="signup-social-button">
              <span className="signup-social-icon signup-facebook-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z" />
                </svg>
              </span>
              <span>Sign up with Facebook</span>
            </button>
          </div>

          <p className="signup-footer">
            This site is protected by reCAPTCHA and the Google <a href="#">Privacy Policy</a> & <a href="#">Terms of Service</a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default SignUp;