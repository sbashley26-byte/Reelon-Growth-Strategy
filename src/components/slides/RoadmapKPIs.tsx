import React from 'react';
import FooterNav from '../FooterNav';

export default function RoadmapKPIs({ goTo, currentSlide, totalSlides }: any) {
  return (
    <div>
      <div className="text-[10px] tracking-[0.12em] uppercase text-gold mb-1">Execution</div>
      <h2 className="font-serif text-[clamp(20px,3vw,28px)] text-ink mb-1.5">Launch Roadmap & Success Metrics</h2>
      <p className="text-[13px] text-ink3 mb-5 leading-[1.6]">Three phases over 18 months — from platform seeding to full market activation and monetisation.</p>

      <div className="relative pl-6 mb-6">
        <div className="absolute left-[7px] top-2 bottom-2 w-[1px] bg-gradient-to-b from-gold to-transparent"></div>
        
        <div className="relative mb-5">
          <div className="absolute -left-[22px] top-1 w-3 h-3 rounded-full border-2 border-gold bg-brand-bg"></div>
          <div className="text-[10px] tracking-[0.1em] uppercase text-gold mb-0.5">Phase 01 · Months 1–4</div>
          <div className="text-[14px] font-medium text-ink mb-1">Seed & Validate</div>
          <div className="text-[12px] text-ink3 leading-[1.6]">Focus: Identity Layer + Discovery Engine. Onboard 500 professionals across 5–6 crafts in 2 pilot cities. Invite-only beta for casting directors. Craft 30 deep testimonials. Zero paid spend — 100% community and organic. Goal: product-market fit signal.</div>
        </div>
        
        <div className="relative mb-5">
          <div className="absolute -left-[22px] top-1 w-3 h-3 rounded-full border-2 border-gold bg-brand-bg"></div>
          <div className="text-[10px] tracking-[0.1em] uppercase text-gold mb-0.5">Phase 02 · Months 5–10</div>
          <div className="text-[14px] font-medium text-ink mb-1">Acquire & Activate</div>
          <div className="text-[12px] text-ink3 leading-[1.6]">Launch paid media across Identity and Careers layers. Content flywheel live. Influencer partnerships activated. Careers board open. Networking communities seeded by craft. First 10 location/studio listings live. Goal: 10,000 profiles, 50 active production companies.</div>
        </div>
        
        <div className="relative mb-5">
          <div className="absolute -left-[22px] top-1 w-3 h-3 rounded-full border-2 border-gold bg-brand-bg"></div>
          <div className="text-[10px] tracking-[0.1em] uppercase text-gold mb-0.5">Phase 03 · Months 11–18</div>
          <div className="text-[14px] font-medium text-ink mb-1">Scale & Monetise</div>
          <div className="text-[12px] text-ink3 leading-[1.6]">Full marketplace live. Premium subscriptions launched for producers and studios. Enterprise contracts for major production houses. Expansion to second market (UK/US or South Asia). Guild co-marketing partnerships signed. Goal: £500k ARR, 50,000 profiles, 200 bookings/month.</div>
        </div>
      </div>

      <div className="h-[0.5px] bg-card-border my-5"></div>
      
      <div className="text-[10px] tracking-[0.12em] uppercase text-gold mb-2">KPIs by Layer</div>
      <div className="overflow-x-auto mb-5">
        <table className="w-full border-collapse text-[12px]">
          <thead>
            <tr>
              <th className="bg-accent text-white/80 p-2.5 text-left font-medium text-[11px] tracking-[0.04em]">Layer</th>
              <th className="bg-accent text-white/80 p-2.5 text-left font-medium text-[11px] tracking-[0.04em]">Primary KPI</th>
              <th className="bg-accent text-white/80 p-2.5 text-left font-medium text-[11px] tracking-[0.04em]">Month 6 Target</th>
              <th className="bg-accent text-white/80 p-2.5 text-left font-medium text-[11px] tracking-[0.04em]">Month 18 Target</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-card-border">
              <td className="p-2.5 text-ink2">Identity</td>
              <td className="p-2.5 text-ink2">Profiles created & completed (≥70%)</td>
              <td className="p-2.5 text-ink2">5,000 profiles</td>
              <td className="p-2.5 text-ink2">50,000 profiles</td>
            </tr>
            <tr className="border-b border-card-border">
              <td className="p-2.5 text-ink2">Careers</td>
              <td className="p-2.5 text-ink2">Job listings active · Applications sent</td>
              <td className="p-2.5 text-ink2">200 active listings</td>
              <td className="p-2.5 text-ink2">2,000 listings/month</td>
            </tr>
            <tr className="border-b border-card-border">
              <td className="p-2.5 text-ink2">Networking</td>
              <td className="p-2.5 text-ink2">Community members · Monthly active</td>
              <td className="p-2.5 text-ink2">1,000 members</td>
              <td className="p-2.5 text-ink2">15,000 MAU</td>
            </tr>
            <tr className="border-b border-card-border">
              <td className="p-2.5 text-ink2">Discovery</td>
              <td className="p-2.5 text-ink2">Active enterprise accounts · Search queries</td>
              <td className="p-2.5 text-ink2">20 accounts</td>
              <td className="p-2.5 text-ink2">200 enterprise accounts</td>
            </tr>
            <tr>
              <td className="p-2.5 text-ink2">Marketplace</td>
              <td className="p-2.5 text-ink2">Bookings completed · GMV</td>
              <td className="p-2.5 text-ink2">50 bookings</td>
              <td className="p-2.5 text-ink2">200 bookings/month · £500k GMV</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="text-[10px] tracking-[0.12em] uppercase text-gold mb-2 mt-2">North Star Metrics</div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
        {[
          { val: 'CAC', label: 'Cost to Acquire a Profile (target: <£8)' },
          { val: 'LTV', label: 'Lifetime Value (Pro Sub: £240/yr)' },
          { val: 'NPS', label: 'Net Promoter Score (target: >50)' },
          { val: 'D30', label: '30-Day Retention (target: >45%)' }
        ].map(kpi => (
          <div key={kpi.val} className="bg-surface border border-card-border rounded-lg p-3.5 text-center">
            <div className="font-serif text-[22px] text-ink mb-0.5">{kpi.val}</div>
            <div className="text-[11px] text-ink3">{kpi.label}</div>
          </div>
        ))}
      </div>

      <div className="bg-accent rounded-lg py-4 px-5 my-4">
        <p className="font-serif text-[15px] text-white/90 leading-[1.6] italic">"ReelOn's competitive moat is the network itself. The more crafts join, the more valuable the platform becomes for every user — supply and demand compound simultaneously."</p>
        <div className="text-[11px] text-gold mt-2">— Strategic Conclusion</div>
      </div>

      <FooterNav goTo={goTo} currentSlide={currentSlide} totalSlides={totalSlides} prevLabel="Channel Strategy" />
    </div>
  );
}
