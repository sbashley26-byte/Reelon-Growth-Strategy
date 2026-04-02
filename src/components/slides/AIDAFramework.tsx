import React from 'react';
import FooterNav from '../FooterNav';

export default function AIDAFramework({ goTo, currentSlide, totalSlides }: any) {
  const blocks = [
    {
      num: 1,
      title: 'Identity Layer — Emerging Professionals',
      sub: 'All 24 crafts · Freelancers · Students',
      a: 'Viral craft-specific content: "What a film set DP\'s day actually looks like." TikTok + Reels targeting entertainment students & early-career.',
      i: 'Show a gorgeous ReelOn profile side-by-side with a LinkedIn profile. "This is what your work deserves." SEO articles: "Best portfolio site for actors 2025."',
      d: 'Testimonials from working professionals who got hired via ReelOn. Showcase verified credit badges. FOMO: "500 professionals in your city already on ReelOn."',
      a2: 'Free profile creation. Zero friction sign-up. "Claim your ReelOn profile in 3 minutes." Email drip: profile completion nudges with social proof.'
    },
    {
      num: 2,
      title: 'Careers & Opportunities — Freelance Crew & Talent',
      sub: 'Gig Economy · Active Jobseekers · Actors',
      a: 'Paid social: "3 film jobs posted in Mumbai in the last hour." Real-time urgency ads on Instagram and Facebook groups where crew already gather.',
      i: 'Retargeting content showing the breadth of job types. "From day-player to HOD — every opportunity for every craft." Email: craft-specific opportunity digest.',
      d: '"Talent booked 4 jobs this month via ReelOn." Case studies from working professionals. Compare: "Still scrolling 6 different pages? We have it all in one place."',
      a2: 'One-tap job alerts. Push notification opt-in as primary CTA. "Set your availability and get called." Free tier for jobseekers — premium for boosted visibility.'
    },
    {
      num: 3,
      title: 'Networking Layer — Guild Members & Collaborators',
      sub: 'Mid-Career Professionals · Community Leaders',
      a: 'Thought-leadership content: industry reports, craft deep-dives, festival coverage. Podcast sponsorships on filmmaking shows. Guild partnerships for co-branded reach.',
      i: 'Feature the community: "The gaffers\' group on ReelOn has 2,400 members." Show collaboration success stories — "director met her DP here." Community preview videos.',
      d: 'Exclusive industry events (physical + digital) hosted on ReelOn. "Members-only masterclasses." Verified collaborative project boards only accessible to community members.',
      a2: 'Invite-to-community flows. "Your craft has a group — join it." Referral rewards: "Invite 3 collaborators and unlock Pro for a month." Guild onboarding partnerships.'
    },
    {
      num: 4,
      title: 'Discovery Engine — Casting Directors & Producers',
      sub: 'B2B High-Value · Decision Makers',
      a: 'LinkedIn ABM campaigns targeting production company titles. Industry event presence (Sundance, MIPCOM, BFI). Direct outreach via industry associations.',
      i: 'Live platform demos: "Watch us find 10 verified DPs in London under 30 in 90 seconds." ROI calculators: "How much time does your team waste on casting search?"',
      d: 'Case study: "Production saved 3 weeks of prep using ReelOn Discovery." Competitive tear-down vs. existing tools. Free 30-day enterprise trial with white-glove onboarding.',
      a2: 'Enterprise demo booking. Sales-led CTA: "Talk to our production team." Contract-based enterprise subscriptions with SLA. CSM assigned at sign-up.'
    },
    {
      num: 5,
      title: 'Marketplace — Location Owners & Studios',
      sub: 'Asset Owners · Property Managers · Studios',
      a: 'Google Search: "how to rent my property to film productions." YouTube: "Earn from your home as a film location." Property owner communities on Facebook and Reddit.',
      i: '"This Mumbai apartment earned ₹2.4L last year from film bookings." Income calculator: enter your property type and see estimated annual earnings from productions.',
      d: 'Show the simplicity: list in 10 minutes, contract auto-generated, payment protected. Testimonials from existing location owners. "We handle the production, you get the cheque."',
      a2: '"List your location — free." Commission-only model removes risk. First booking guaranteed within 60 days or fee waived. WhatsApp onboarding for non-digital-native owners.'
    }
  ];

  return (
    <div>
      <div className="text-[10px] tracking-[0.12em] uppercase text-gold mb-1">Marketing Framework</div>
      <h2 className="font-serif text-[clamp(20px,3vw,28px)] text-ink mb-1.5">AIDA Model by Audience Layer</h2>
      <p className="text-[13px] text-ink3 mb-5 leading-[1.6]">Attention → Interest → Desire → Action mapped to each of ReelOn's five platform layers and their specific audiences.</p>

      <div className="space-y-4">
        {blocks.map(block => (
          <div key={block.num} className="bg-surface border border-card-border rounded-lg overflow-hidden">
            <div className="px-4 py-3 bg-accent flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center text-[13px] font-bold text-accent shrink-0">{block.num}</div>
              <div>
                <div className="font-serif text-[15px] text-white">{block.title}</div>
                <div className="text-[11px] text-white/55">{block.sub}</div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
              <div className="p-3 border-b sm:border-b-0 sm:border-r border-card-border">
                <div className="text-[9px] tracking-[0.1em] uppercase font-semibold mb-1 text-[#c0392b]">Attention</div>
                <div className="text-[11px] text-ink2 leading-[1.5]">{block.a}</div>
              </div>
              <div className="p-3 border-b sm:border-b-0 md:border-r border-card-border">
                <div className="text-[9px] tracking-[0.1em] uppercase font-semibold mb-1 text-[#d4880e]">Interest</div>
                <div className="text-[11px] text-ink2 leading-[1.5]">{block.i}</div>
              </div>
              <div className="p-3 border-b sm:border-b-0 sm:border-r border-card-border">
                <div className="text-[9px] tracking-[0.1em] uppercase font-semibold mb-1 text-brand-teal">Desire</div>
                <div className="text-[11px] text-ink2 leading-[1.5]">{block.d}</div>
              </div>
              <div className="p-3">
                <div className="text-[9px] tracking-[0.1em] uppercase font-semibold mb-1 text-[#6c3483]">Action</div>
                <div className="text-[11px] text-ink2 leading-[1.5]">{block.a2}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <FooterNav goTo={goTo} currentSlide={currentSlide} totalSlides={totalSlides} prevLabel="Target Audiences" nextLabel="Push & Pull" />
    </div>
  );
}
