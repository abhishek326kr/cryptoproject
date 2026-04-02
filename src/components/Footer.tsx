import Link from 'next/link';
import { Hexagon, MessageCircle, Globe, Mail, Phone } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="logo">
              <Hexagon className="logo-icon" size={24} />
              <span className="logo-text">Texnova</span>
            </Link>
            <p className="footer-desc">
              Global crypto payment infrastructure with enterprise-grade security and ultra-low fees.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px', color: 'var(--text-secondary)' }}>
              <Phone size={16} /> <a href="tel:+14243414743" style={{ color: 'inherit', textDecoration: 'none' }}>+1 424 341 4743</a>
            </div>
            <div className="social-links">
              <a href="#" className="social-link"><MessageCircle size={20} /></a>
              <a href="#" className="social-link"><Globe size={20} /></a>
              <a href="#" className="social-link"><Mail size={20} /></a>
            </div>
          </div>
          
          <div className="footer-col">
            <h4 className="footer-title">Platform</h4>
            <ul className="footer-links">
              <li><Link href="/features">Features</Link></li>
              <li><Link href="/pricing">Pricing</Link></li>
              <li><Link href="/developers">Developers</Link></li>
              <li><Link href="/security">Security</Link></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4 className="footer-title">Company</h4>
            <ul className="footer-links">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4 className="footer-title">Legal</h4>
            <ul className="footer-links">
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms of Service</Link></li>
              <li><Link href="/compliance">Compliance</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Texnova. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
