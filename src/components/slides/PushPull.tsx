import React from 'react';
import FooterNav from '../FooterNav';

export default function PushPull({ goTo, currentSlide, totalSlides }: any) {
  const sections = [
    {
      layer: 'Layer 01 · Identity Layer',
      push: [
        'TikTok / Reels ads targeting film school students and early-career crew',
        'Instagram dark posts: "Is your portfolio holding your career back?"',
        'Influencer partnerships with working actors and DPs (micro: 10k–100k)',
        'Co-branded content with film schools and conservatoires'
      ],
      pull: [
        'SEO: "Best actor portfolio website," "film crew profile page"',
        'Google Ads: "IMDb Pro alternative," "cinematographer portfolio"',
        'YouTube tutorials: "How to build your film industry profile"',
        'App Store Optimisation (ASO) for discoverability'
      ]
    },
    {
      layer: 'Layer 02 · Careers & Opportunities',
      push: [
        'Push notifications: "3 DP jobs posted near you in the last 2 hours"',
        'Facebook group ads in film industry communities globally',
        'WhatsApp broadcast to existing contacts with new listings',
        'Email: weekly "jobs for your craft" digest — personalised by role'
      ],
      pull: [
        'SEO: "film crew jobs London," "acting auditions Mumbai 2025"',
        'Google Jobs schema markup for all listings (appear in Google Jobs)',
        'Indeed / Mandy / Talent.com aggregator partnerships',
        'Job alert Google Ads: "film jobs near me" high intent capture'
      ]
    },
    {
      layer: 'Layer 03 · Networking & Collaboration',
      push: [
        'Guild and union partnership announcements via their channels',
        'Sponsored posts in Filmmakers Facebook groups (1M+ members)',
        'Event marketing: BFI, BAFTA, IFFI, Cannes satellite events',
        'Podcast ads on The Business of Film, Scriptnotes, No Film School'
      ],
      pull: [
        'SEO: "film crew community," "cinematography forums," "screenwriting groups"',
        'LinkedIn Ads targeting guild/union members by job title',
        'YouTube: "How top DPs build their network" — ReelOn branded',
        'Reddit presence in r/filmmakers, r/Screenwriting, r/acting'
      ]
    },
    {
      layer: 'Layer 04 · Discovery Engine (B2B)',
      push: [
        'LinkedIn ABM: ads targeting Casting Director, Head of Production titles',
        'Cold outreach sequences via production company directories',
        'Trade press: Variety, Screen International, Broadcast Now sponsored content',
        'Industry events: MIPCOM, AFM, IBC — demo booth presence'
      ],
      pull: [
        'Google Ads: "casting platform," "find film crew software," "location database"',
        'SEO: "how to find film locations for production," "casting director tools"',
        'G2 / Capterra listings for production software category',
        'Comparison content: "ReelOn vs Casting Networks vs IMDb Pro"'
      ]
    },
    {
      layer: 'Layer 05 · Marketplace',
      push: [
        'Meta ads to property owners: "Earn from film productions using your space"',
        'YouTube pre-roll on interior design / real estate channels',
        'Studio association partnerships for studio onboarding',
        'SMS/WhatsApp campaigns in property owner networks'
      ],
      pull: [
        'SEO: "rent property to film production," "studio hire London / Mumbai"',
        'Google Ads: "book film studio," "production location rental"',
        'Google Maps listings for all registered studios and locations',
        'Airbnb / Peerspace cross-listing strategy for location owners'
      ]
    }
  ];

  return (
    <div>
      <div className="text-[10px] tracking-[0.12em] uppercase text-gold mb-1">Marketing Mechanics</div>
      <h2 className="font-serif text-[clamp(20px,3vw,28px)] text-ink mb-1.5">Push & Pull Strategy by Layer</h2>
      <p className="text-[13px] text-ink3 mb-5 leading-[1.6]">Push creates demand where none existed. Pull captures demand already searching. ReelOn needs both — executed layer by layer.</p>

      {sections.map((sec, idx) => (
        <div key={idx} className="mb-5">
          <div className="text-[10px] tracking-[0.12em] uppercase text-gold mb-1">{sec.layer}</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            <div className="bg-surface border border-card-border rounded-lg p-4">
              <div className="text-[10px] tracking-[0.1em] uppercase font-semibold mb-2 text-brand-red">⬆ Push — Create Awareness</div>
              {sec.push.map((item, i) => (
                <div key={i} className="text-[12px] text-ink2 py-1.5 border-b border-card-border last:border-0 leading-[1.4] flex gap-1.5">
                  <span className="text-ink3 shrink-0">→</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="bg-surface border border-card-border rounded-lg p-4">
              <div className="text-[10px] tracking-[0.1em] uppercase font-semibold mb-2 text-brand-teal">⬇ Pull — Capture Intent</div>
              {sec.pull.map((item, i) => (
                <div key={i} className="text-[12px] text-ink2 py-1.5 border-b border-card-border last:border-0 leading-[1.4] flex gap-1.5">
                  <span className="text-ink3 shrink-0">→</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}

      <FooterNav goTo={goTo} currentSlide={currentSlide} totalSlides={totalSlides} prevLabel="AIDA Framework" nextLabel="Channel Strategy" />
    </div>
  );
}
