import React from 'react';
import FooterNav from '../FooterNav';

export default function PlatformLayers({ goTo, currentSlide, totalSlides }: any) {
  const layers = [
    { num: 'Layer 01', name: 'Identity Layer', desc: 'Professional profiles with verified credentials, IMDb-linked credits, reel/portfolio embedding, and craft-specific skill taxonomies. This is the foundation — every user starts here.', color: 'border-l-brand-red', tags: ['All 24 Crafts', 'Verified Credits', 'Portfolios', 'Guilds'] },
    { num: 'Layer 02', name: 'Careers & Opportunities', desc: 'Craft-specific job boards, audition calls, contract gig listings, crew availability calendars. Replaces scattered Facebook groups and agency bulletin boards.', color: 'border-l-[#d4880e]', tags: ['Job Boards', 'Auditions', 'Gig Listings', 'Crew Availability'] },
    { num: 'Layer 03', name: 'Networking & Collaboration', desc: 'Guild-based communities, craft-specific forums, project collaboration tools, and cross-discipline groups. Where a DP meets the gaffer, and the writer connects with the director.', color: 'border-l-brand-teal', tags: ['Communities', 'Forums', 'Collabs', 'Guilds'] },
    { num: 'Layer 04', name: 'Discovery Engine', desc: 'AI-powered search for casting directors to find talent by look, credit, skill and availability. Location scouts find filmable spaces. Producers find writers by genre and format.', color: 'border-l-[#6c3483]', tags: ['Talent Search', 'Location Finder', 'Writer Search', 'AI Match'] },
    { num: 'Layer 05', name: 'Marketplace — Book & Transact', desc: 'The commerce layer. Book filming locations, studios, equipment and talent directly. ReelOn holds escrow, manages contracts, and processes payments. The platform becomes indispensable for production.', color: 'border-l-gold md:col-span-2', tags: ['Location Bookings', 'Studio Hire', 'Equipment', 'Talent Booking', 'Contracts', 'Payments'] },
  ];

  const crafts = ['Directors', 'Writers', 'Actors', 'Cinematographers', 'Producers', 'Editors', 'Sound Design', 'Composers', 'Production Design', 'Costume', 'Makeup & Hair', 'VFX Artists', 'Casting Directors', 'Location Managers', 'Gaffers', 'Camera Ops', 'Script Supervisors', 'Stunt Performers', 'AD / PA', 'Post Sup', 'Colorists', 'Voice Artists', 'Motion Graphics', 'Distribution'];

  return (
    <div>
      <div className="text-[10px] tracking-[0.12em] uppercase text-gold mb-1">Architecture</div>
      <h2 className="font-serif text-[clamp(20px,3vw,28px)] text-ink mb-1.5">The Five Platform Layers</h2>
      <p className="text-[13px] text-ink3 mb-5 leading-[1.6]">ReelOn operates across five interconnected layers. Each layer serves a distinct audience need — and each is a growth lever.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-6">
        {layers.map(layer => (
          <div key={layer.num} className={`bg-surface border border-card-border rounded-lg p-4 border-l-[3px] ${layer.color} hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-shadow`}>
            <div className="text-[10px] font-semibold tracking-[0.1em] text-gold uppercase mb-1">{layer.num}</div>
            <div className="font-serif text-[17px] text-ink mb-2">{layer.name}</div>
            <div className="text-[12px] text-ink3 leading-[1.6]">{layer.desc}</div>
            <div className="flex flex-wrap gap-1 mt-2.5">
              {layer.tags.map(tag => (
                <span key={tag} className="text-[10px] px-2 py-0.5 bg-gold/10 rounded-full text-ink2">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="h-[0.5px] bg-card-border my-5"></div>
      
      <div className="text-[10px] tracking-[0.12em] uppercase text-gold mb-1">The 24 Crafts</div>
      <p className="text-[13px] text-ink3 mb-3 leading-[1.6]">ReelOn serves all 24 entertainment industry crafts — not just actors. Each craft has distinct needs, language, and community norms.</p>
      <div className="flex flex-wrap gap-1.5">
        {crafts.map(craft => (
          <span key={craft} className="text-[10px] px-2 py-0.5 bg-gold/10 rounded-full text-ink2">{craft}</span>
        ))}
      </div>

      <FooterNav goTo={goTo} currentSlide={currentSlide} totalSlides={totalSlides} prevLabel="Overview" nextLabel="Target Audiences" />
    </div>
  );
}
