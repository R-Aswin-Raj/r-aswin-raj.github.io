import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-inner">
        <span className="footer-logo">Aswin Raj</span>

        <p className="footer-copy">
          © 2026 R Aswin Raj. Designed with Stitch, developed with Antigravity.
        </p>

        <ul className="footer-links">
          <li>
            <a
              className="footer-link"
              href="https://github.com/R-Aswin-Raj"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              className="footer-link"
              href="https://www.linkedin.com/in/r-aswin-raj/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
