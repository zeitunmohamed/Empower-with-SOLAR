import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Simple auth state: check if user is admin from localStorage (or any auth logic)
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // For example, check localStorage for a key "isAdmin" (string 'true' or 'false')
    const adminStatus = localStorage.getItem('isAdmin') === 'true';
    setIsAdmin(adminStatus);
  }, []);

  return (
    <header className="bg-white shadow">
      <div className="navbar-container">
        <Link to="/" className="nav-logo">
          <img
            src="src/Sun Solar Energy Logo Design Template.  Green energy logos (1).png"
            alt="Logo"
          />
        </Link>

        <div className="nav-center">
          <Link to="/">Overview</Link>
          <Link to="/about-us">About Us</Link>
          <Link to="/solar-solutions">Solar Solutions</Link>
          <Link to="/contact-us">Contact Us</Link>
          {isAdmin && <Link to="/admin">Admin</Link>}
        </div>

        <div className="nav-right">
          <Link to="/signup">Sign up</Link>
          <Link to="/signin">Sign in</Link>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="mobile-menu-button"
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <nav className="mobile-menu">
          <Link to="/" onClick={() => setMenuOpen(false)}>Overview</Link>
          <Link to="/about-us" onClick={() => setMenuOpen(false)}>About Us</Link>
          <Link to="/solar-solutions" onClick={() => setMenuOpen(false)}>Solar Solutions</Link>
          <Link to="/contact-us" onClick={() => setMenuOpen(false)}>Contact Us</Link>
          {isAdmin && <Link to="/admin" onClick={() => setMenuOpen(false)}>Admin</Link>}
          <Link to="/signup" onClick={() => setMenuOpen(false)}>Sign up</Link>
          <Link to="/signin" onClick={() => setMenuOpen(false)}>Sign in</Link>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
