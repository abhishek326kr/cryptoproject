import Link from 'next/link';
import { ArrowRight, ShieldCheck, Globe, Zap, CreditCard, Code, BarChart, Lock } from 'lucide-react';
import './home.css';

export default function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-container animate-in">
          <div className="hero-badge">Next-Gen Payment Infrastructure</div>
          <h1 className="hero-title">
            Global Crypto Payments <br />
            <span className="text-accent-gradient">At ultra-low 0.1% fees.</span>
          </h1>
          <p className="hero-subtitle">
            Scale your business globally with our enterprise-grade payment gateway. Instant settlement, multi-chain support, and uncompromised security.
          </p>
          <div className="hero-actions">
            <Link href="/pricing" className="btn btn-primary">
              Start Processing <ArrowRight size={18} />
            </Link>
            <Link href="/developers" className="btn btn-secondary">
              Read Docs
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="trust-strip">
        <div className="container trust-container animate-in delay-200">
          <div className="trust-item">
            <Globe className="trust-icon" size={32} />
            <div>
              <h3>Global Reach</h3>
              <p>Accept payments in 150+ countries</p>
            </div>
          </div>
          <div className="trust-item">
            <ShieldCheck className="trust-icon" size={32} />
            <div>
              <h3>Secure & Compliant</h3>
              <p>Bank-grade encryption & AML/KYC</p>
            </div>
          </div>
          <div className="trust-item">
            <Zap className="trust-icon" size={32} />
            <div>
              <h3>Instant Settlement</h3>
              <p>Real-time access to your funds</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center mb-12">
            <h2>How Texnova Works</h2>
            <p className="text-secondary">Integrate in minutes, scale forever.</p>
          </div>
          <div className="grid grid-cols-3">
            <div className="glass-panel text-center" style={{ padding: '40px 24px' }}>
              <div className="step-icon"><Code size={36} /></div>
              <h3>1. Integrate</h3>
              <p className="text-secondary mt-2">Connect via our REST API or drop-in UI components.</p>
            </div>
            <div className="glass-panel text-center" style={{ padding: '40px 24px' }}>
              <div className="step-icon"><CreditCard size={36} /></div>
              <h3>2. Accept Payments</h3>
              <p className="text-secondary mt-2">Customers pay in their preferred cryptocurrency.</p>
            </div>
            <div className="glass-panel text-center" style={{ padding: '40px 24px' }}>
              <div className="step-icon"><Zap size={36} /></div>
              <h3>3. Instant Payout</h3>
              <p className="text-secondary mt-2">Get settled instantly in fiat or crypto.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="section bg-secondary">
        <div className="container">
          <div className="grid grid-cols-2" style={{ alignItems: 'center', gap: '60px' }}>
            <div>
              <h2 className="mb-4">Everything you need to <span className="text-accent-gradient">manage payments</span></h2>
              <p className="text-secondary mb-8">
                A complete suite of payment products built for internet businesses. We handle the complexity of blockchains so you can focus on your product.
              </p>
              <ul className="feature-list">
                <li><ShieldCheck size={20} className="text-accent" /> <span>Fraud prevention and dispute management</span></li>
                <li><BarChart size={20} className="text-accent" /> <span>Real-time analytics and reporting dashboard</span></li>
                <li><Lock size={20} className="text-accent" /> <span>Non-custodial and custodial settlement options</span></li>
              </ul>
              <div className="mt-8">
                <Link href="/features" className="btn btn-outline" style={{ marginTop: '24px' }}>View all features</Link>
              </div>
            </div>
            <div className="mockup-container">
              <img src="/images/dashboard.png" alt="Texnova Dashboard" className="glass-panel mockup-ui-img" />
            </div>
          </div>
        </div>
      </section>

      {/* Supported Networks & Tokens */}
      <section className="section bg-secondary" style={{ borderTop: 'none' }}>
        <div className="container text-center">
          <h2 className="mb-4">One Integration. <span className="text-accent-gradient">Global Access.</span></h2>
          <p className="text-secondary mb-12" style={{ maxWidth: '600px', margin: '0 auto 48px' }}>
            Texnova inherently supports all major networks and stablecoins, routing liquidity automatically to reduce gas fees.
          </p>
          <div className="network-grid">
            {['Ethereum', 'Polygon', 'Solana', 'Arbitrum', 'Optimism', 'Avalanche', 'Base', 'BNB Chain'].map((network) => (
              <div key={network} className="network-item glass-panel">
                <span className="network-dot"></span>
                {network}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Developer API Preview */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-2" style={{ alignItems: 'center', gap: '60px' }}>
            <div className="glass-panel" style={{ padding: '0', overflow: 'hidden' }}>
              <div className="code-header" style={{ borderBottom: '1px solid var(--border-color)', padding: '16px', display: 'flex', gap: '10px' }}>
                 <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ff5f56' }}></div>
                 <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ffbd2e' }}></div>
                 <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#27c93f' }}></div>
              </div>
              <pre style={{ padding: '24px', margin: 0, background: 'rgba(0,0,0,0.3)', color: '#fff', fontSize: '14px', overflowX: 'auto' }}>
                <code>
{`// Generate a checkout session instantly
const session = await texnova.checkout.create({
  amount: 150.00,
  currency: 'USD',
  accept: ['USDC', 'USDT', 'DAI'],
  successUrl: 'https://mysite.com/success',
  metadata: { orderId: 'ord_123' }
});

// redirect user to session.url`}
                </code>
              </pre>
            </div>
            <div>
              <h2 className="mb-4">Built by developers, <span className="text-accent-gradient">for developers.</span></h2>
              <p className="text-secondary mb-6">
                Our APIs are intentionally designed to be intuitive and strictly typed. We provide official SDKs for Node.js, Python, Go, and React.
              </p>
              <ul className="feature-list mb-8">
                <li><Code size={20} className="text-accent" /> <span>Idempotent requests for safety</span></li>
                <li><Zap size={20} className="text-accent" /> <span>Real-time webhook notifications</span></li>
                <li><Globe size={20} className="text-accent" /> <span>Sandbox environment for testing</span></li>
              </ul>
              <Link href="/developers" className="btn btn-outline">Explore Developer Docs</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <h2 className="text-center mb-12">Trusted by builders worldwide</h2>
          <div className="grid grid-cols-3 testimonial-grid">
            <div className="glass-panel testimonial-card">
              <div className="stars text-accent mb-4">★★★★★</div>
              <p className="testimonial-text mb-6">
                &quot;Our previous crypto gateway was costing us over 1.5% in hidden spread fees. Texnova&apos;s transparent 0.1% model saved us $40k in our first month.&quot;
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">SC</div>
                <div>
                  <h4 className="author-name">Sarah Chen</h4>
                  <p className="author-role text-secondary">CTO, BlockTrade</p>
                </div>
              </div>
            </div>
            <div className="glass-panel testimonial-card">
              <div className="stars text-accent mb-4">★★★★★</div>
              <p className="testimonial-text mb-6">
                &quot;The webhooks just work. We moved from building custom RPC polling scripts to using Texnova&apos;s event system in a single afternoon. Amazing dev experience.&quot;
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">MR</div>
                <div>
                  <h4 className="author-name">Marcus Reed</h4>
                  <p className="author-role text-secondary">Lead Engineer, VaultFI</p>
                </div>
              </div>
            </div>
            <div className="glass-panel testimonial-card">
              <div className="stars text-accent mb-4">★★★★★</div>
              <p className="testimonial-text mb-6">
                &quot;Since switching to Texnova&apos;s checkout widget, our cart abandonment rate for crypto transactions dropped by 45%. It&apos;s incredibly seamless.&quot;
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">JD</div>
                <div>
                  <h4 className="author-name">Jessica Diaz</h4>
                  <p className="author-role text-secondary">Growth, StoreFront</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section cta-section">
        <div className="container text-center">
          <h2 className="mb-4 text-gradient">Ready to supercharge your payments?</h2>
          <p className="text-secondary mb-8" style={{ maxWidth: '600px', margin: '0 auto 32px' }}>
            Join thousands of forward-thinking companies that rely on Texnova to power their crypto infrastructure.
          </p>
          <Link href="/pricing" className="btn btn-primary" style={{ padding: '16px 32px', fontSize: '1.1rem' }}>
            Get Started Now
          </Link>
        </div>
      </section>
    </div>
  );
}
