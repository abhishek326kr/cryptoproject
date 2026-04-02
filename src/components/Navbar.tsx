'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Hexagon, Menu, X } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <Link href="/" className="logo">
          <Hexagon className="logo-icon" size={28} />
          <span className="logo-text">Texnova</span>
        </Link>
        <div className="nav-links">
          <Link href="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`}>Home</Link>
          <Link href="/features" className={`nav-link ${pathname === '/features' ? 'active' : ''}`}>Features</Link>
          <Link href="/pricing" className={`nav-link ${pathname === '/pricing' ? 'active' : ''}`}>Pricing</Link>
          <Link href="/developers" className={`nav-link ${pathname === '/developers' ? 'active' : ''}`}>Developers</Link>
          <Link href="/about" className={`nav-link ${pathname === '/about' ? 'active' : ''}`}>About</Link>
        </div>
        <div className="nav-actions">
          <Link href="/login" className="nav-login">Login</Link>
          <Link href="/signup" className="btn btn-primary">Get Started</Link>
        </div>
        <button className="mobile-menu-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="mobile-menu glass-panel">
          <Link href="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`} onClick={closeMenu}>Home</Link>
          <Link href="/features" className={`nav-link ${pathname === '/features' ? 'active' : ''}`} onClick={closeMenu}>Features</Link>
          <Link href="/pricing" className={`nav-link ${pathname === '/pricing' ? 'active' : ''}`} onClick={closeMenu}>Pricing</Link>
          <Link href="/developers" className={`nav-link ${pathname === '/developers' ? 'active' : ''}`} onClick={closeMenu}>Developers</Link>
          <Link href="/about" className={`nav-link ${pathname === '/about' ? 'active' : ''}`} onClick={closeMenu}>About</Link>
          <div className="mobile-actions mt-4">
            <Link href="/login" className="btn btn-secondary w-full" onClick={closeMenu}>Login</Link>
            <Link href="/signup" className="btn btn-primary w-full mt-2" onClick={closeMenu}>Get Started</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
