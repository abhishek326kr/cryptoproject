'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Hexagon } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Shrink navbar on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="container nav-container">
        <Link href="/" className="logo">
          <Hexagon className="logo-icon" size={28} />
          <span className="logo-text">TEXNOVA</span>
        </Link>
        <div className="nav-links">
          <Link href="/services" className={`nav-link ${pathname === '/services' ? 'active' : ''}`}>What We Provide</Link>
          <Link href="/wallets" className={`nav-link ${pathname === '/wallets' ? 'active' : ''}`}>Wallets</Link>
          <Link href="/security" className={`nav-link ${pathname === '/security' ? 'active' : ''}`}>Security</Link>
          <Link href="/developers" className={`nav-link ${pathname === '/developers' ? 'active' : ''}`}>Developers</Link>
          <Link href="/contact" className={`nav-link ${pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
        </div>
        <div className="nav-actions">
          <Link href="/login" className="nav-login">Sign In</Link>
          <Link href="/dashboard" className="btn btn-primary">Launch App</Link>
        </div>
        <button className="mobile-menu-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="mobile-menu glass-panel">
          <Link href="/services" className={`nav-link ${pathname === '/services' ? 'active' : ''}`} onClick={closeMenu}>What We Provide</Link>
          <Link href="/wallets" className={`nav-link ${pathname === '/wallets' ? 'active' : ''}`} onClick={closeMenu}>Wallets</Link>
          <Link href="/security" className={`nav-link ${pathname === '/security' ? 'active' : ''}`} onClick={closeMenu}>Security</Link>
          <Link href="/developers" className={`nav-link ${pathname === '/developers' ? 'active' : ''}`} onClick={closeMenu}>Developers</Link>
          <Link href="/contact" className={`nav-link ${pathname === '/contact' ? 'active' : ''}`} onClick={closeMenu}>Contact</Link>
          <div className="mobile-actions mt-4">
             <Link href="/login" className="btn btn-outline w-full mb-2" onClick={closeMenu}>Sign In</Link>
             <Link href="/dashboard" className="btn btn-primary w-full" onClick={closeMenu}>Launch App</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
