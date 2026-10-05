function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="footer-logo">
          <div className="footer-logo-mark">
            <img
              src={process.env.PUBLIC_URL + "/favicon.ico"}
              className="footer-image"
            />
          </div>
          <span className="footer-name">IEEE VTS - JS</span>
        </div>
        <span className="footer-copy">
          © 2026 EEE Department - JU · All rights reserved
        </span>
      </footer>
    </div>
  );
}

export default Footer;
