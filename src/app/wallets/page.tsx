import type { Metadata } from 'next';
import CTA from '@/components/CTA';
import { Wallet, Fingerprint, Coins, Settings } from 'lucide-react';
import './wallets.css';

export const metadata: Metadata = {
  title: 'Embedded Wallets | White-label MPC Finance',
  description: 'Programmatic generation of non-custodial and custodial Web3 wallets protected by military-grade MPC architecture and gas abstraction.',
};

export default function Wallets() {
  return (
    <main className="wallets-page">
      <section className="wallets-hero">
        <div className="container">
          <div className="text-center mb-12">
            <div className="wallets-badge mx-auto mb-6">Embedded Wallets</div>
            <h1 className="hero-title" style={{ fontSize: '4.5rem', marginBottom: '24px' }}>
              Your Brand. <br/>
              <span className="text-gradient-purple">Our Infrastructure.</span>
            </h1>
            <p className="text-secondary mx-auto" style={{ fontSize: '1.25rem', maxWidth: '600px' }}>
              Programmatically generate non-custodial and custodial wallets for your users instantly via API. 
            </p>
          </div>
        </div>
      </section>

      <section className="wallets-features container">
        <div className="grid grid-cols-2 gap-8 mb-20 wallets-grid">
          <div className="glass-panel" style={{ padding: '40px' }}>
            <Fingerprint size={40} style={{ color: 'var(--glow-purple)', marginBottom: '24px' }} />
            <h3 className="text-2xl text-white mb-4">MPC Technology</h3>
            <p className="text-secondary">
              Multi-Party Computation means no single point of failure. Private keys are split and distributed, ensuring military-grade security while giving your users a seamless Web2-like experience.
            </p>
          </div>
          <div className="glass-panel" style={{ padding: '40px' }}>
            <Wallet size={40} style={{ color: 'var(--glow-cyan)', marginBottom: '24px' }} />
            <h3 className="text-2xl text-white mb-4">White-Label UI</h3>
            <p className="text-secondary">
              Fully customize the look and feel. Your users never know they are interacting with blockchain infrastructure. Integrate via our SDKs in minutes.
            </p>
          </div>
          <div className="glass-panel" style={{ padding: '40px' }}>
            <Coins size={40} style={{ color: 'var(--glow-cyan)', marginBottom: '24px' }} />
            <h3 className="text-2xl text-white mb-4">Gas Abstraction</h3>
            <p className="text-secondary">
              Pay gas fees on behalf of your users. Support meta-transactions so they can transact in stablecoins without needing native network tokens like ETH or MATIC.
            </p>
          </div>
          <div className="glass-panel" style={{ padding: '40px' }}>
            <Settings size={40} style={{ color: 'var(--glow-purple)', marginBottom: '24px' }} />
            <h3 className="text-2xl text-white mb-4">Policy Engine</h3>
            <p className="text-secondary">
              Define granular controls. Set transaction limits, velocity checks, and require multi-signature approvals for high-value transfers.
            </p>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
