import { Link } from 'react-router-dom';
import { ArrowUpRight, Sparkles, X } from 'lucide-react';
import { products } from '../data/products.js';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Link to="/" className="brand">
            <span className="brand-mark">
              t<span>.</span>
            </span>
            <span>
              tech<span>store</span>
            </span>
          </Link>
          <p>
            Technology, thoughtfully chosen.
            <br />
            For the things you love doing.
          </p>
          <div className="footer-social">
            <a href="https://instagram.com" aria-label="Instagram">
              ig
            </a>
            <a href="https://x.com" aria-label="X">
              𝕏
            </a>
            <a href="https://youtube.com" aria-label="YouTube">
              ▶
            </a>
          </div>
        </div>
        <div>
          <h4>Explore</h4>
          <Link to="/products">All products</Link>
          <Link to="/products?category=Laptops">Computers</Link>
          <Link to="/products?category=Smartphones">Smartphones</Link>
          <Link to="/products?category=Headphones">Audio</Link>
        </div>
        <div>
          <h4>About us</h4>
          <Link to="/about">Our story</Link>
          <Link to="/contact">Get in touch</Link>
          <a href="mailto:hello@techstore.example">Shipping & returns</a>
          <a href="mailto:hello@techstore.example">FAQs</a>
        </div>
        <div className="footer-note">
          <div className="round-icon">
            <Sparkles size={19} />
          </div>
          <h4>A little good goes a long way.</h4>
          <p>We’re here to help you find tech that feels right. Real people, always.</p>
          <Link className="text-link" to="/contact">
            Say hello <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} TechStore. Made for the curious.</span>
        <span>Thoughtful tech. Always.</span>
      </div>
    </footer>
  );
}

export default Footer;
