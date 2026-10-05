import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="nav">
        <div className="nav-identity">
          <img
            src={process.env.PUBLIC_URL + "/vts.png"}
            className="logo-mark"
            alt="IEEE-VTS"
          />
          <img
            src={process.env.PUBLIC_URL + "/jain.webp"}
            className="logo-mark"
            alt="JAIN"
          />
        </div>
        <div className="nav-links">
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/events">
            Events
          </Link>
          <Link className="link" to="/blog">
            Blog
          </Link>
          <Link className="link" to="/gallery">
            Gallery
          </Link>
          <Link className="link" to="/team">
            Team
          </Link>
          <Link className="link" to="/contact">
            Contact
          </Link>
        </div>
        <button
          className="hamburger"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span
            style={{
              transform: menuOpen
                ? "rotate(45deg) translate(4px, 5px)"
                : "none",
            }}
          />
          <span style={{ opacity: menuOpen ? 0 : 1 }} />
          <span
            style={{
              transform: menuOpen
                ? "rotate(-45deg) translate(4px, -5px)"
                : "none",
            }}
          />
        </button>
      </nav>

      <div className={`mobile-nav ${menuOpen ? "open" : ""}`}>
        <Link className="link" to="/" onClick={() => setMenuOpen(false)}>
          Home
        </Link>
        <Link className="link" to="/events" onClick={() => setMenuOpen(false)}>
          Events
        </Link>
        <Link className="link" to="/blog" onClick={() => setMenuOpen(false)}>
          Blog
        </Link>
        <Link className="link" to="/gallery" onClick={() => setMenuOpen(false)}>
          Gallery
        </Link>
        <Link className="link" to="/team" onClick={() => setMenuOpen(false)}>
          Team
        </Link>
        <Link className="link" to="/contact" onClick={() => setMenuOpen(false)}>
          Contact
        </Link>
      </div>
    </>
  );
}

export default Navbar;
