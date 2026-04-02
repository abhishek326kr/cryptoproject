import Link from 'next/link';
import { Hexagon, ArrowUpRight } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-dark">
      <div className="watermark-bg">TEXNOVA</div>
      <div className="container relative z-10">
        <div className="footer-main-grid">
          <div className="footer-brand-col">
            <Link href="/" className="logo mb-6 inline-flex items-center gap-2">
              <Hexagon className="text-glow-cyan" size={32} style={{ color: 'var(--glow-cyan)' }} />
              <span className="text-2xl font-bold text-white tracking-widest">TEXNOVA</span>
            </Link>
            <p className="text-secondary max-w-sm" style={{ fontSize: '1.1rem' }}>
              The infrastructure standard for instantaneous, compliant, global value transfer.
            </p>
          </div>
          
          <div className="footer-links-col">
            <h4 className="footer-category">Platform</h4>
            <ul>
              <li><Link href="/services">What We Provide</Link></li>
              <li><Link href="/wallets">Embedded Wallets</Link></li>
              <li><Link href="/yield">Treasury Yield</Link></li>
              <li><Link href="/network">Network Status</Link></li>
            </ul>
          </div>

          <div className="footer-links-col">
            <h4 className="footer-category">Developers</h4>
            <ul>
              <li><Link href="/docs">Documentation <ArrowUpRight size={14} className="inline ml-1" /></Link></li>
              <li><Link href="/api">API Reference</Link></li>
              <li><Link href="/sdks">SDKs & Tools</Link></li>
              <li><Link href="/github">GitHub</Link></li>
            </ul>
          </div>
          
          <div className="footer-links-col">
            <h4 className="footer-category">Company</h4>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/contact">Contact Sales</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-legal-bar flex justify-between items-center text-secondary">
          <div className="flex items-center gap-6">
             <span>&copy; {new Date().getFullYear()} Texnova Global.</span>
             <div className="flex items-center gap-4 text-sm">
               <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
               <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
               <Link href="/security" className="hover:text-white transition-colors">Security</Link>
             </div>
          </div>
          <div className="flex items-center gap-4">
             <div className="px-3 py-1 border border-white/10 rounded-full text-xs text-white bg-white/5 backdrop-blur-sm">System: All operations normal</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
