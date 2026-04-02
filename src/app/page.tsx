import Link from 'next/link';
import { ArrowRight, Zap, Shield, Cpu, Activity, Globe2, LayoutTemplate, Workflow, Code2, TerminalSquare, CheckCircle2 } from 'lucide-react';
import CTA from '@/components/CTA';
import './home.css';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-glow"></div>
        
        <div className="container">
          <div className="hero-grid animate-in">
            
            {/* Left Content Column */}
            <div className="hero-content">
              <div className="hero-badge">Ultra-low 0.1% Rates</div>
              <h1 className="hero-title">
                Global Payments.<br />
                <span className="text-gradient-cyan">At a flat 0.1%.</span>
              </h1>
              <p className="hero-subtitle">
                Scale your business globally with our enterprise-grade stablecoin gateway. Instant settlement and uncompromised security, exclusively at an unbeatable 0.1% volume fee.
              </p>
              <div className="hero-actions">
                <Link href="/dashboard" className="btn btn-primary" style={{ padding: '16px 32px', fontSize: '1.05rem' }}>
                  Launch App
                </Link>
                <Link href="/developers" className="btn btn-outline" style={{ padding: '16px 32px', fontSize: '1.05rem' }}>
                  Read the Docs <ArrowRight size={18} className="ml-1" />
                </Link>
              </div>
            </div>

            {/* Right 3D Dashboard Mockup Column */}
            <div className="hero-mockup-wrapper delay-200 animate-in">
               <div className="dashboard-3d">
                  {/* Mock Sidebar */}
                  <div className="dash-sidebar">
                     <div className="dash-sidebar-icon" style={{ background: 'var(--glow-cyan)', opacity: 0.8 }}></div>
                     <div className="dash-sidebar-icon"></div>
                     <div className="dash-sidebar-icon"></div>
                     <div className="dash-sidebar-icon"></div>
                  </div>
                  
                  {/* Mock Main View */}
                  <div className="dash-main">
                     <div className="dash-header">
                        <div className="dash-skeleton-text"></div>
                        <div className="dash-skeleton-circle"></div>
                     </div>
                     
                     <div className="dash-balances">
                        <div className="dash-card">
                           <div className="dash-card-label">Available Balance</div>
                           <div className="dash-card-value"><span>$</span>1,245,800.00</div>
                        </div>
                        <div className="dash-card">
                           <div className="dash-card-label">Processing Fee</div>
                           <div className="dash-card-value"><span>0.1</span>%</div>
                        </div>
                     </div>

                     {/* Mock Tx List */}
                     <div className="dash-card" style={{ padding: '0', overflow: 'hidden' }}>
                        <div style={{ padding: '16px 24px', borderBottom: '1px solid rgba(255,255,255,0.05)', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Recent Transfers</div>
                        
                        <div style={{ padding: '16px 24px', display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.02)' }}>
                           <div style={{ display: 'flex', gap: '16px' }}>
                              <Activity size={20} style={{ color: 'var(--glow-cyan)' }} />
                              <div>
                                <div style={{ fontSize: '0.9rem', color: '#FFF' }}>Cross-border settlement</div>
                                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>via Base Network</div>
                              </div>
                           </div>
                           <div style={{ textAlign: 'right' }}>
                              <div style={{ fontSize: '0.9rem', color: '#FFF', fontWeight: 'bold' }}>+ 85,000.00 USDC</div>
                              <div style={{ fontSize: '0.8rem', color: 'var(--glow-cyan)' }}>Settled Instantly</div>
                           </div>
                        </div>

                        <div style={{ padding: '16px 24px', display: 'flex', justifyContent: 'space-between' }}>
                           <div style={{ display: 'flex', gap: '16px' }}>
                              <Activity size={20} style={{ color: 'var(--glow-purple)' }} />
                              <div>
                                <div style={{ fontSize: '0.9rem', color: '#FFF' }}>Vendor Payout</div>
                                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>via Polygon</div>
                              </div>
                           </div>
                           <div style={{ textAlign: 'right' }}>
                              <div style={{ fontSize: '0.9rem', color: '#FFF', fontWeight: 'bold' }}>- 12,500.00 USDC</div>
                              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Fee: 12.50 USDC</div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* The Engine Section */}
      <section className="engine-section">
        <div className="container">
          <div className="text-center mb-12 animate-in delay-100">
            <h2 style={{ fontSize: '3rem', marginBottom: '16px' }}>The Engine.</h2>
            <p className="text-secondary text-lg max-w-2xl mx-auto">One integration connects you to the entire decentralized financial backbone.</p>
          </div>

          <div className="engine-grid animate-in delay-200">
            <div className="engine-card">
              <div className="engine-icon"><Zap size={28} /></div>
              <h3 className="text-xl mb-3 text-white">Instant Settlement</h3>
              <p className="text-secondary">Stop waiting T+2 days for fiat wires. Settle transactions on-chain in milliseconds across multiple decentralized networks.</p>
            </div>
            <div className="engine-card">
              <div className="engine-icon" style={{ color: 'var(--glow-purple)', background: 'rgba(138,43,226,0.1)' }}><Shield size={28} /></div>
              <h3 className="text-xl mb-3 text-white">Bank-Grade Security</h3>
              <p className="text-secondary">MPC architecture with granular role-based access controls. Licensed and regulated infrastructure with ISO 27001 certification.</p>
            </div>
            <div className="engine-card">
              <div className="engine-icon"><Activity size={28} /></div>
              <h3 className="text-xl mb-3 text-white">Unprecedented 0.1% Fee</h3>
              <p className="text-secondary">Keep more of what you earn. We charge a strictly transparent 0.1% base processing fee on transactions with absolutely zero hidden spread margin.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Live Infrastructure Bento */}
      <section className="section">
        <div className="container">
           <h2 style={{ fontSize: '3rem', marginBottom: '16px' }}>Live Infrastructure.</h2>
           <p className="text-secondary text-lg max-w-2xl">Compose specialized financial apps using our modular building blocks natively built for Web3.</p>

           <div className="infra-grid">
              <div className="infra-item infra-large glass-panel">
                <LayoutTemplate size={32} style={{ color: 'var(--glow-cyan)', marginBottom: '24px'}} />
                <h3 className="text-3xl text-white mb-4">Embedded Wallets</h3>
                <p className="text-secondary text-lg mb-8">Generate white-labeled deposit addresses instantly for your users. We handle the entire custody and compliance stack.</p>
                <div style={{ padding: '24px', background: 'rgba(0,0,0,0.5)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <pre style={{ color: '#00F0FF', fontSize: '0.9rem', overflowX: 'auto' }}>
                    <code>
{`POST /v2/wallets/create
{
  "network": "base",
  "currency": "USDC",
  "customer_id": "cust_892nf"
}

// -> { "address": "0x7F5...92A" }`}
                    </code>
                  </pre>
                </div>
              </div>

              <div className="infra-item glass-panel">
                 <h3 className="text-xl text-white mb-3">Treasury Management</h3>
                 <p className="text-secondary mb-6">Allocate dormant capital into high-yield automated DeFi strategies directly from dashboard.</p>
                 <div className="btn text-sm" style={{ background: 'rgba(138,43,226,0.1)', color: 'var(--glow-purple)' }}>Explore Treasury</div>
              </div>

              <div className="infra-item glass-panel" style={{ background: 'linear-gradient(135deg, rgba(0,240,255,0.05), transparent)'}}>
                 <h3 className="text-xl text-white mb-3">Global On-Ramps</h3>
                 <p className="text-secondary">Convert EUR, USD, and GBP into stablecoins via highly optimized local payment rails.</p>
              </div>

              <div className="infra-item infra-wide glass-panel">
                 <div className="flex items-center justify-between">
                   <div>
                     <h3 className="text-2xl text-white mb-3">Enterprise Dashboard</h3>
                     <p className="text-secondary">Real-time webhooks, beautiful analytical reporting, and multi-user team structures.</p>
                   </div>
                   <Activity size={48} style={{ color: 'var(--text-muted)' }} />
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="section metrics-section">
        <div className="container">
          <div className="metrics-grid">
             <div className="metric-item">
               <div className="metric-number text-gradient-cyan">$12B+</div>
               <div className="metric-label">Volume Processed</div>
             </div>
             <div className="metric-item">
               <div className="metric-number text-gradient-purple">150M+</div>
               <div className="metric-label">API Requests</div>
             </div>
             <div className="metric-item">
               <div className="metric-number text-white">99.99%</div>
               <div className="metric-label">System Uptime</div>
             </div>
          </div>
        </div>
      </section>

      {/* Developer Experience */}
      <section className="section">
        <div className="container">
           <div className="grid grid-cols-2" style={{ alignItems: 'center', gap: '80px' }}>
              <div>
                <h2 style={{ fontSize: '3rem', marginBottom: '16px' }}>Developer First. <br/><span className="text-gradient-purple">Always.</span></h2>
                <p className="text-secondary text-lg mb-8">
                  We engineered our API to be as elegant as it is reliable. Built by crypto-natives for modern development teams, featuring strictly typed SDKs and predictable webhooks.
                </p>
                <div className="flex flex-col gap-6">
                  <div className="flex gap-4">
                     <CheckCircle2 size={24} style={{ color: 'var(--glow-purple)', flexShrink: 0 }} />
                     <div>
                       <h4 className="text-white text-lg font-bold mb-1">Idempotent Requests</h4>
                       <p className="text-secondary">Safely retry any network call without fearing duplicate transactions.</p>
                     </div>
                  </div>
                  <div className="flex gap-4">
                     <CheckCircle2 size={24} style={{ color: 'var(--glow-purple)', flexShrink: 0 }} />
                     <div>
                       <h4 className="text-white text-lg font-bold mb-1">Instant Environments</h4>
                       <p className="text-secondary">Spin up a full mainnet-forked sandbox in one click.</p>
                     </div>
                  </div>
                </div>
              </div>
              <div className="dev-editor-window">
                 <div className="dev-editor-header">
                   <div className="dev-dot" style={{ background: '#FF5F56' }}></div>
                   <div className="dev-dot" style={{ background: '#FFBD2E' }}></div>
                   <div className="dev-dot" style={{ background: '#27C93F' }}></div>
                 </div>
                 <pre style={{ padding: '32px', margin: 0, color: '#A6ACCD', fontSize: '0.95rem', overflowX: 'auto', lineHeight: '1.7' }}>
                   <code>
<span style={{ color: '#89DDFF' }}>import</span> {'{ Texnova }'} <span style={{ color: '#89DDFF' }}>from</span> <span style={{ color: '#C3E88D' }}>'@texnova/sdk'</span>;{'\n\n'}
<span style={{ color: '#89DDFF' }}>const</span> client = <span style={{ color: '#89DDFF' }}>new</span> <span style={{ color: '#FFCB6B' }}>Texnova</span>(process.env.<span style={{ color: '#F07178' }}>TEXNOVA_KEY</span>);{'\n\n'}
<span style={{ color: '#676E95', fontStyle: 'italic' }}>// Execute cross-border payout instantly</span>{'\n'}
<span style={{ color: '#89DDFF' }}>const</span> payout = <span style={{ color: '#89DDFF' }}>await</span> client.payouts.<span style={{ color: '#82AAFF' }}>create</span>({'{'}{'\n'}
{'  '}amount: <span style={{ color: '#F78C6C' }}>250000</span>,{'\n'}
{'  '}currency: <span style={{ color: '#C3E88D' }}>'USDC'</span>,{'\n'}
{'  '}destination: <span style={{ color: '#C3E88D' }}>'0x8A2...9F1'</span>,{'\n'}
{'  '}network: <span style={{ color: '#C3E88D' }}>'arbitrum'</span>,{'\n'}
{'  '}idempotencyKey: <span style={{ color: '#C3E88D' }}>'req_9812'</span>{'\n'}
{'}'});{'\n\n'}
<span style={{ color: '#82AAFF' }}>console</span>.<span style={{ color: '#82AAFF' }}>log</span>(payout.status); <span style={{ color: '#676E95', fontStyle: 'italic' }}>// 'settled'</span>
                   </code>
                 </pre>
              </div>
           </div>
        </div>
      </section>

      {/* Global CTA */}
      <CTA />


      {/* Network Marquee */}
      <section className="section" style={{ padding: '60px 0', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'rgba(0,0,0,0.2)' }}>
        <div className="container text-center mb-8">
          <h4 className="text-sm uppercase tracking-widest text-secondary"><Globe2 size={16} className="inline mr-2" style={{ verticalAlign: 'text-bottom' }} /> Integrated Networks</h4>
        </div>
        <div className="marquee-container">
          <div className="marquee-content">
            <span className="marquee-item text-white"><span style={{ color: 'var(--glow-cyan)' }}>●</span> Ethereum Foundation</span>
            <span className="marquee-item text-white"><span style={{ color: 'var(--glow-purple)' }}>●</span> Polygon PoS</span>
            <span className="marquee-item text-white"><span style={{ color: '--glow-cyan' }}>●</span> Solana</span>
            <span className="marquee-item text-white"><span style={{ color: '--glow-purple' }}>●</span> Avalanche C-Chain</span>
            <span className="marquee-item text-white"><span style={{ color: '--glow-cyan' }}>●</span> Arbitrum One</span>
            <span className="marquee-item text-white"><span style={{ color: 'var(--glow-purple)' }}>●</span> Optimism</span>
            <span className="marquee-item text-white"><span style={{ color: 'var(--glow-cyan)' }}>●</span> Base</span>
            <span className="marquee-item text-white"><span style={{ color: 'var(--glow-purple)' }}>●</span> Circle USDC</span>
            
            {/* Duplicated for infinite scroll illusion */}
            <span className="marquee-item text-white"><span style={{ color: 'var(--glow-cyan)' }}>●</span> Ethereum Foundation</span>
            <span className="marquee-item text-white"><span style={{ color: 'var(--glow-purple)' }}>●</span> Polygon PoS</span>
            <span className="marquee-item text-white"><span style={{ color: '--glow-cyan' }}>●</span> Solana</span>
            <span className="marquee-item text-white"><span style={{ color: '--glow-purple' }}>●</span> Avalanche C-Chain</span>
            <span className="marquee-item text-white"><span style={{ color: '--glow-cyan' }}>●</span> Arbitrum One</span>
            <span className="marquee-item text-white"><span style={{ color: 'var(--glow-purple)' }}>●</span> Optimism</span>
            <span className="marquee-item text-white"><span style={{ color: 'var(--glow-cyan)' }}>●</span> Base</span>
            <span className="marquee-item text-white"><span style={{ color: 'var(--glow-purple)' }}>●</span> Circle USDC</span>
          </div>
        </div>
      </section>

      {/* CTA Footer Wrapper handled by Footer component, but we add some spacing */}
      <div style={{ height: '80px' }}></div>
    </main>
  );
}
