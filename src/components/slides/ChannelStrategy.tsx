import React from 'react';
import FooterNav from '../FooterNav';

export default function ChannelStrategy({ goTo, currentSlide, totalSlides }: any) {
  return (
    <div>
      <div className="text-[10px] tracking-[0.12em] uppercase text-gold mb-1">Media Mix</div>
      <h2 className="font-serif text-[clamp(20px,3vw,28px)] text-ink mb-1.5">Paid Channel Strategy</h2>
      <p className="text-[13px] text-ink3 mb-5 leading-[1.6]">Channel selection, priority and budget guidance per audience layer. B2C layers lead with social and search. B2B layers lead with LinkedIn and events.</p>

      <div className="overflow-x-auto mb-5">
        <table className="w-full border-collapse text-[12px]">
          <thead>
            <tr>
              <th className="bg-accent text-white/80 p-2.5 text-left font-medium text-[11px] tracking-[0.04em]">Audience Layer</th>
              <th className="bg-accent text-white/80 p-2.5 text-left font-medium text-[11px] tracking-[0.04em]">Primary Channels</th>
              <th className="bg-accent text-white/80 p-2.5 text-left font-medium text-[11px] tracking-[0.04em]">Budget Split</th>
              <th className="bg-accent text-white/80 p-2.5 text-left font-medium text-[11px] tracking-[0.04em]">Priority</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gold/5 border-b border-card-border">
              <td className="p-2.5 align-top"><strong>Identity Layer</strong><br/><span className="text-[11px] text-ink3">Emerging professionals</span></td>
              <td className="p-2.5 align-top text-ink2">TikTok Ads, Instagram Reels, YouTube Discovery, Google Search, App Store</td>
              <td className="p-2.5 align-top text-ink2">35% Social · 25% Search · 20% YouTube · 20% Influencer</td>
              <td className="p-2.5 align-top"><span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-medium bg-brand-teal/10 text-brand-teal">High</span></td>
            </tr>
            <tr className="hover:bg-gold/5 border-b border-card-border">
              <td className="p-2.5 align-top"><strong>Careers Layer</strong><br/><span className="text-[11px] text-ink3">Jobseekers, freelance crew</span></td>
              <td className="p-2.5 align-top text-ink2">Facebook Groups, Google Jobs, Push Notification, Email, Mandy.com</td>
              <td className="p-2.5 align-top text-ink2">40% Social · 30% Search · 20% Email · 10% Aggregators</td>
              <td className="p-2.5 align-top"><span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-medium bg-brand-teal/10 text-brand-teal">High</span></td>
            </tr>
            <tr className="hover:bg-gold/5 border-b border-card-border">
              <td className="p-2.5 align-top"><strong>Networking Layer</strong><br/><span className="text-[11px] text-ink3">Guild members, collaborators</span></td>
              <td className="p-2.5 align-top text-ink2">LinkedIn, Podcast Ads, YouTube, Events, Reddit, Guild Newsletters</td>
              <td className="p-2.5 align-top text-ink2">30% LinkedIn · 25% Events · 25% Content · 20% Podcast</td>
              <td className="p-2.5 align-top"><span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-medium bg-[#d4880e]/10 text-[#a06808]">Medium</span></td>
            </tr>
            <tr className="hover:bg-gold/5 border-b border-card-border">
              <td className="p-2.5 align-top"><strong>Discovery Engine</strong><br/><span className="text-[11px] text-ink3">Casting directors, producers</span></td>
              <td className="p-2.5 align-top text-ink2">LinkedIn ABM, Google Search, Trade Press, Industry Events, Cold Outreach</td>
              <td className="p-2.5 align-top text-ink2">40% LinkedIn · 25% Events · 20% Search · 15% Trade Press</td>
              <td className="p-2.5 align-top"><span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-medium bg-brand-teal/10 text-brand-teal">High</span></td>
            </tr>
            <tr className="hover:bg-gold/5">
              <td className="p-2.5 align-top"><strong>Marketplace</strong><br/><span className="text-[11px] text-ink3">Location owners, studios</span></td>
              <td className="p-2.5 align-top text-ink2">Meta (Property Owners), Google Search, YouTube, Maps, WhatsApp</td>
              <td className="p-2.5 align-top text-ink2">35% Meta · 30% Search · 20% YouTube · 15% Maps/Local</td>
              <td className="p-2.5 align-top"><span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-medium bg-[#d4880e]/10 text-[#a06808]">Medium</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="text-[10px] tracking-[0.12em] uppercase text-gold mb-1 mt-1">Content Strategy</div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 mb-5">
        <div className="bg-surface border border-card-border rounded-lg p-4">
          <div className="text-[10px] font-semibold tracking-[0.1em] text-gold uppercase mb-1">Always-On</div>
          <div className="font-serif text-[17px] text-ink mb-2">Organic Content Engine</div>
          <div className="text-[12px] text-ink3 leading-[1.6]">3–5 posts/week per craft vertical. "A day in the life" series. Craft spotlights. Industry news commentary. Creator-led content from professionals on the platform.</div>
        </div>
        <div className="bg-surface border border-card-border rounded-lg p-4">
          <div className="text-[10px] font-semibold tracking-[0.1em] text-gold uppercase mb-1">Seasonal</div>
          <div className="font-serif text-[17px] text-ink mb-2">Campaign Moments</div>
          <div className="text-[12px] text-ink3 leading-[1.6]">Awards season (BAFTAs, Oscars, Filmfare). Festival calendar (Cannes, TIFF, IFFI). Industry events. "Hiring Season" campaigns aligned to production cycle peaks.</div>
        </div>
        <div className="bg-surface border border-card-border rounded-lg p-4">
          <div className="text-[10px] font-semibold tracking-[0.1em] text-gold uppercase mb-1">Performance</div>
          <div className="font-serif text-[17px] text-ink mb-2">Conversion Campaigns</div>
          <div className="text-[12px] text-ink3 leading-[1.6]">Retargeting: profile incomplete → complete it. Free → paid upgrade. Location listed → first booking. Continuous A/B testing on landing page and ad creative.</div>
        </div>
      </div>

      <div className="text-[10px] tracking-[0.12em] uppercase text-gold mb-1">Influencer Tier Strategy</div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
        <div className="bg-surface border border-card-border rounded-lg p-3.5 text-center">
          <div className="font-serif text-[16px] text-ink mb-0.5">Nano</div>
          <div className="text-[11px] text-ink3">1k–10k · Authentic craft community voice · High trust</div>
        </div>
        <div className="bg-surface border border-card-border rounded-lg p-3.5 text-center">
          <div className="font-serif text-[16px] text-ink mb-0.5">Micro</div>
          <div className="text-[11px] text-ink3">10k–100k · Craft-specific reach · Cost efficient · Mid-funnel</div>
        </div>
        <div className="bg-surface border border-card-border rounded-lg p-3.5 text-center">
          <div className="font-serif text-[16px] text-ink mb-0.5">Macro</div>
          <div className="text-[11px] text-ink3">100k+ · Mass awareness · Award season · Brand moments only</div>
        </div>
      </div>

      <FooterNav goTo={goTo} currentSlide={currentSlide} totalSlides={totalSlides} prevLabel="Push & Pull" nextLabel="Roadmap & KPIs" />
    </div>
  );
}
