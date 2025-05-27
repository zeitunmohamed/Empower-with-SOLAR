function SignIn() {
  return (
    <section className="signin-section">
    
      <div className="signin-hero">
        <div className="signin-hero-bg">
          <img 
            src="/image.png/image copy 6.png" 
            alt="Woman thinking" 
          />
        </div>
        <div className="signin-hero-overlay"></div>
        
        <div className="signin-hero-content">
          <h3 className="signin-hero-title">
            Join 35k+ web professionals & <br className="hidden xl:block" />build your website
          </h3>
          
          <ul className="signin-features">
            <li className="signin-feature-item">
              <span className="signin-feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span>Commercial License</span>
            </li>
            
            <li className="signin-feature-item">
              <span className="signin-feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span>Unlimited Exports</span>
            </li>
            
            <li className="signin-feature-item">
              <span className="signin-feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span>120+ Coded Blocks</span>
            </li>
            
            <li className="signin-feature-item">
              <span className="signin-feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span>Design Files Included</span>
            </li>
          </ul>
        </div>
      </div>


      <div className="signin-form-container">
        <div className="signin-form-wrapper">
          <h2 className="signin-form-title">Sign in to Celebration</h2>
          <p className="signin-form-subtitle">
            Don't have an account? <a href="#" className="font-medium">Create a free account</a>
          </p>

          <form className="signin-form">
            <div className="signin-form-group">
              <label className="signin-form-label">Email address</label>
              <div className="signin-form-input-container">
                <span className="signin-form-input-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                </span>
                <input
                  type="email"
                  placeholder="Enter email to get started"
                  className="signin-form-input"
                />
              </div>
            </div>

            <div className="signin-form-group">
              <div className="flex justify-between">
                <label className="signin-form-label">Password</label>
                <a href="#" className="signin-form-forgot">Forgot password?</a>
              </div>
              <div className="signin-form-input-container">
                <span className="signin-form-input-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                  </svg>
                </span>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="signin-form-input"
                />
              </div>
            </div>

            <button type="submit" className="signin-form-submit">
              Log in
            </button>
          </form>

          <div className="signin-social-buttons">
            <button type="button" className="signin-social-button">
              <span className="signin-social-icon signin-google-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z" />
                </svg>
              </span>
              <span>Sign in with Google</span>
            </button>

            <button type="button" className="signin-social-button">
              <span className="signin-social-icon signin-facebook-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z" />
                </svg>
              </span>
              <span>Sign in with Facebook</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignIn;