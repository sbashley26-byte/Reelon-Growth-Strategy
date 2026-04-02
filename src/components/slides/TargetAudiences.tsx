import React, { useState } from 'react';
import FooterNav from '../FooterNav';
import { motion, AnimatePresence } from 'motion/react';

export default function TargetAudiences({ goTo, currentSlide, totalSlides }: any) {
  const [activeTab, setActiveTab] = useState(0);

  const audiences = [
    {
      id: 0,
      tab: 'Identity',
      layerNum: 'Layer 01 · Identity Layer',
      layerColor: 'text-brand-red',
      borderColor: 'border-t-brand-red',
      name: 'Emerging & Mid-Career Professionals',
      sub: 'All 24 crafts. Ages 18–45. Seeking legitimacy, credit verification, and discoverability beyond Instagram.',
      stats: [
        { val: '68%', lbl: 'No formal portfolio hub' },
        { val: '82%', lbl: 'Use social for promos' },
        { val: '41%', lbl: 'Lose work to visibility gaps' }
      ],
      insights: [
        'Frustrated by LinkedIn\'s generic format — it doesn\'t showcase reels, credits or union status',
        'IMDb Pro costs $20/month with minimal discoverability for emerging talent',
        'Primary pain: "I can\'t show who I am in one professional place"',
      ],
      hook: '"Your craft. Your credits. Your identity — in one verified profile."'
    },
    {
      id: 1,
      tab: 'Careers',
      layerNum: 'Layer 02 · Careers & Opportunities',
      layerColor: 'text-gold',
      borderColor: 'border-t-gold',
      name: 'Freelance Crew, Actors & Jobseekers',
      sub: 'Gig economy entertainment workers. Constantly hunting for the next project. Income inconsistency is their core anxiety.',
      stats: [
        { val: '74%', lbl: 'Freelance income' },
        { val: '3.2', lbl: 'Avg platforms checked daily' },
        { val: '6wk', lbl: 'Avg gap between gigs' }
      ],
      insights: [
        'Jobs scatter across Facebook, Mandy, Casting Networks, WhatsApp groups — exhausting',
        'No craft-specific filtering — a DP doesn\'t want actor calls, and vice versa',
        'Urgency is high: missed call = missed work. Real-time notifications are critical',
      ],
      hook: '"Every opportunity in your craft, in one feed. Never miss a call again."'
    },
    {
      id: 2,
      tab: 'Networking',
      layerNum: 'Layer 03 · Networking & Collaboration',
      layerColor: 'text-brand-teal',
      borderColor: 'border-t-brand-teal',
      name: 'Guild Members, Communities & Collaborators',
      sub: 'Professionals who understand that in entertainment, your network IS your net worth. Community-driven, referral-heavy.',
      stats: [
        { val: '89%', lbl: 'Jobs via referral' },
        { val: '60%', lbl: 'In guild/union' },
        { val: '4.1x', lbl: 'Referral conversion rate' }
      ],
      insights: [
        'Facebook groups are noisy, unstructured, and not craft-specific',
        'Guild intranets are outdated — no real networking functionality',
        'Trust is currency here: verified profiles = trusted collaborators',
      ],
      hook: '"Your tribe, your craft. Build the relationships that build your career."'
    },
    {
      id: 3,
      tab: 'Discovery',
      layerNum: 'Layer 04 · Discovery Engine',
      layerColor: 'text-[#6c3483]',
      borderColor: 'border-t-[#6c3483]',
      name: 'Casting Directors, Producers & Location Scouts',
      sub: 'High-value B2B buyers. Time is money. They need fast, reliable, filtered discovery. They are the revenue engine of ReelOn.',
      stats: [
        { val: '$4,200', lbl: 'Avg monthly spend on tools' },
        { val: '14hrs', lbl: 'Weekly search time' },
        { val: '23', lbl: 'Avg platforms used per project' }
      ],
      insights: [
        'Casting directors lose days sifting through unsuitable submissions',
        'Location scouts rely on personal Rolodex and Google — no structured database',
        'Producers need verified credits, not just social follower counts',
      ],
      hook: '"Find the right talent, location or writer in minutes — not weeks."'
    },
    {
      id: 4,
      tab: 'Marketplace',
      layerNum: 'Layer 05 · Marketplace',
      layerColor: 'text-gold',
      borderColor: 'border-t-gold',
      name: 'Location Owners, Studios & Production Houses',
      sub: 'Asset owners looking to monetise. Studios wanting full occupancy. Production companies needing a single vendor for all bookings.',
      stats: [
        { val: '$1.2B', lbl: 'Location market (UK+IN)' },
        { val: '43%', lbl: 'Studio vacancy avg' },
        { val: '72%', lbl: 'No digital booking system' }
      ],
      insights: [
        'Location owners use WhatsApp and email — zero discoverability at scale',
        'Studios lose bookings to competitors with better online presence',
        'Production houses want one invoice, one contract, one platform',
      ],
      hook: '"Turn your space into a production asset. List once, book always."'
    }
  ];

  return (
    <div>
      <div className="text-[10px] tracking-[0.12em] uppercase text-gold mb-1">Audience Intelligence</div>
      <h2 className="font-serif text-[clamp(20px,3vw,28px)] text-ink mb-1.5">Target Audience by Layer</h2>
      <p className="text-[13px] text-ink3 mb-5 leading-[1.6]">Each platform layer has a primary audience with distinct psychographics, pain points and decision triggers.</p>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {audiences.map((aud, idx) => (
          <button
            key={aud.id}
            onClick={() => setActiveTab(idx)}
            className={`px-3.5 py-1.5 border rounded-full text-[11px] transition-all ${
              activeTab === idx 
                ? 'bg-accent text-gold2 border-accent' 
                : 'bg-surface text-ink2 border-card-border hover:border-gold'
            }`}
          >
            {aud.tab}
          </button>
        ))}
      </div>

      <div className="relative min-h-[350px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.15 }}
            className={`bg-surface border border-card-border rounded-lg p-4 md:p-5 border-t-[3px] ${audiences[activeTab].borderColor}`}
          >
            <div className={`text-[10px] font-semibold tracking-[0.1em] uppercase mb-1 ${audiences[activeTab].layerColor}`}>
              {audiences[activeTab].layerNum}
            </div>
            <div className="font-serif text-[18px] text-ink mb-1.5">{audiences[activeTab].name}</div>
            <div className="text-[13px] text-ink3 mb-3 leading-[1.6]">{audiences[activeTab].sub}</div>
            
            <div className="grid grid-cols-3 gap-2.5 my-3">
              {audiences[activeTab].stats.map((stat, i) => (
                <div key={i} className="text-center p-2.5 bg-brand-bg rounded-lg">
                  <div className="text-[16px] font-semibold text-ink mb-0.5">{stat.val}</div>
                  <div className="text-[10px] text-ink3 uppercase tracking-[0.05em]">{stat.lbl}</div>
                </div>
              ))}
            </div>
            
            <ul className="mt-2.5">
              {audiences[activeTab].insights.map((insight, i) => (
                <li key={i} className="text-[12px] text-ink2 py-1.5 border-b border-card-border flex gap-2 last:border-0">
                  <span className="text-gold shrink-0">→</span>
                  <span>{insight}</span>
                </li>
              ))}
              <li className="text-[12px] text-ink2 py-1.5 flex gap-2">
                <span className="text-gold shrink-0">→</span>
                <span>Messaging hook: <span className="text-gold font-semibold">{audiences[activeTab].hook}</span></span>
              </li>
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>

      <FooterNav goTo={goTo} currentSlide={currentSlide} totalSlides={totalSlides} prevLabel="Platform Layers" nextLabel="AIDA Framework" />
    </div>
  );
}
