import React from 'react';

interface FooterNavProps {
  goTo: (index: number) => void;
  currentSlide: number;
  totalSlides: number;
  prevLabel?: string;
  nextLabel?: string;
}

export default function FooterNav({ goTo, currentSlide, totalSlides, prevLabel, nextLabel }: FooterNavProps) {
  return (
    <div className="flex justify-between mt-7 pt-4 border-t border-card-border">
      {currentSlide > 0 ? (
        <button onClick={() => goTo(currentSlide - 1)} className="px-4 py-2 border border-card-border rounded-md text-xs text-ink2 hover:bg-accent hover:text-gold2 hover:border-accent transition-all">
          ← {prevLabel || 'Previous'}
        </button>
      ) : <span />}
      <span className="text-[11px] text-ink3 self-center">{currentSlide + 1} / {totalSlides}</span>
      {currentSlide < totalSlides - 1 ? (
        <button onClick={() => goTo(currentSlide + 1)} className="px-4 py-2 border border-card-border rounded-md text-xs text-ink2 hover:bg-accent hover:text-gold2 hover:border-accent transition-all">
          {nextLabel || 'Next'} →
        </button>
      ) : <span />}
    </div>
  );
}
