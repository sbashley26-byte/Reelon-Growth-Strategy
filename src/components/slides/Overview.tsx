import React from 'react';
import FooterNav from '../FooterNav';

export default function Overview({ goTo, currentSlide, totalSlides }: any) {
  return (
    <div>
      <div className="bg-accent rounded-xl p-8 md:p-10 mb-6 relative overflow-hidden">
        <div className="absolute -top-[60px] -right-[60px] w-[200px] h-[200px] border border-gold/20 rounded-full"></div>
        <div className="absolute -bottom-[40px] -left-[40px] w-[140px] h-[140px] border border-gold/10 rounded-full"></div>
        
        <div className="text-[10px] tracking-[0.12em] uppercase text-gold mb-2 relative z-10">Boardroom Strategy Deck · 2025–2026</div>
        <h1 className="font-serif text-[clamp(26px,4vw,42px)] text-white leading-[1.15] mb-3 relative z-10">ReelOn: Digital Marketing<br/>& Growth Strategy</h1>
        <p className="text-sm text-white/60 max-w-[480px] leading-[1.6] relative z-10">A unified platform connecting professional identity, workflow, discovery and commerce for the 24-craft entertainment ecosystem.</p>
        
        <div className="flex flex-wrap gap-2 mt-5 relative z-10">
          {['Entertainment Industry', '24 Crafts', 'B2B + B2C', 'Global Launch'].map(badge => (
            <span key={badge} className="px-3 py-1 border border-gold/40 rounded-full text-[11px] text-gold tracking-[0.05em]">{badge}</span>
          ))}
        </div>
      </div>

      <div className="text-[10px] tracking-[0.12em] uppercase text-gold mb-1">Market Context</div>
      <h2 className="font-serif text-[clamp(20px,3vw,28px)] text-ink mb-1.5">The Problem ReelOn Solves</h2>
      <p className="text-[13px] text-ink3 mb-5 leading-[1.6]">The entertainment industry is a fragmented ecosystem. Talent, writers, directors, producers, location managers and studios all operate in silos — connected by word-of-mouth, outdated directories, and scattered tools.</p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
        {[
          { val: '$830B', label: 'Global Entertainment Market' },
          { val: '24', label: 'Distinct Industry Crafts' },
          { val: '12M+', label: 'Entertainment Professionals Globally' },
          { val: '5', label: 'Core Platform Layers' }
        ].map(kpi => (
          <div key={kpi.label} className="bg-surface border border-card-border rounded-lg p-3.5 text-center">
            <div className="font-serif text-[22px] text-ink mb-0.5">{kpi.val}</div>
            <div className="text-[11px] text-ink3">{kpi.label}</div>
          </div>
        ))}
      </div>

      <div className="bg-accent rounded-lg py-4 px-5 my-4">
        <p className="font-serif text-[15px] text-white/90 leading-[1.6] italic">"ReelOn is not just a platform — it is the professional operating system for everyone who makes entertainment happen."</p>
        <div className="text-[11px] text-gold mt-2">— Positioning Statement</div>
      </div>

      <div className="text-[10px] tracking-[0.12em] uppercase text-gold mb-1 mt-5">Strategic Pillars</div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 mb-6">
        {[
          { num: 'Pillar 01', name: 'Professional Identity', desc: "Every craft gets a verified, portfolio-rich profile — the industry's LinkedIn, built for sets and studios." },
          { num: 'Pillar 02', name: 'Intelligent Discovery', desc: "Casting directors, producers and location scouts find exactly who and what they need — fast." },
          { num: 'Pillar 03', name: 'Commerce & Booking', desc: "Studios, locations and talent bookable in-platform. ReelOn becomes the transaction layer." }
        ].map(pillar => (
          <div key={pillar.num} className="bg-surface border border-card-border rounded-lg p-4 border-l-[3px] border-l-gold hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-shadow">
            <div className="text-[10px] font-semibold tracking-[0.1em] text-gold uppercase mb-1">{pillar.num}</div>
            <div className="font-serif text-[17px] text-ink mb-2">{pillar.name}</div>
            <div className="text-[12px] text-ink3 leading-[1.6]">{pillar.desc}</div>
          </div>
        ))}
      </div>

      <FooterNav goTo={goTo} currentSlide={currentSlide} totalSlides={totalSlides} nextLabel="Platform Layers" />
    </div>
  );
}
