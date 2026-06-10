import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import './Navbar.css';

const NAV_ITEMS = [
  { label: 'Solutions', target: 'services' },
  { label: 'Architecture', target: 'about' },
  { label: 'Stack', target: 'stack' },
  { label: 'Journal', target: 'journal' },
  { label: 'Contact', target: 'contact' },
];

export default function Navbar({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for active section
  useEffect(() => {
    const sections = NAV_ITEMS.map(item => document.getElementById(item.target)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -60% 0px' }
    );

    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
        <div className="navbar-inner">
          <a className="navbar-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            Aswin Raj
          </a>

          <ul className="navbar-links">
            {NAV_ITEMS.map(item => (
              <li key={item.target}>
                <button
                  className={`navbar-link${activeSection === item.target ? ' active' : ''}`}
                  onClick={() => scrollTo(item.target)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="navbar-actions">
            <button
              className="theme-toggle"
              onClick={onToggleTheme}
              aria-label="Toggle theme"
              id="theme-toggle"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              className="mobile-toggle"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              id="mobile-menu-toggle"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-overlay${mobileOpen ? ' open' : ''}`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile Drawer */}
      <div className={`mobile-menu${mobileOpen ? ' open' : ''}`} id="mobile-menu">
        <button
          className="mobile-close"
          onClick={() => setMobileOpen(false)}
          aria-label="Close menu"
        >
          <X size={20} />
        </button>
        <ul className="mobile-menu-links">
          {NAV_ITEMS.map(item => (
            <li key={item.target}>
              <button
                className={`mobile-menu-link${activeSection === item.target ? ' active' : ''}`}
                onClick={() => scrollTo(item.target)}
              >
                {item.label}
              </button>
            </li>
          ))}

        </ul>
      </div>
    </>
  );
}
