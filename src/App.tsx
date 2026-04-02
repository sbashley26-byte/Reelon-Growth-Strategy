/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Overview from './components/slides/Overview';
import PlatformLayers from './components/slides/PlatformLayers';
import TargetAudiences from './components/slides/TargetAudiences';
import AIDAFramework from './components/slides/AIDAFramework';
import PushPull from './components/slides/PushPull';
import ChannelStrategy from './components/slides/ChannelStrategy';
import RoadmapKPIs from './components/slides/RoadmapKPIs';
import { motion, AnimatePresence } from 'motion/react';

const slides = [
  { id: 0, title: '01 Overview', component: Overview },
  { id: 1, title: '02 Platform Layers', component: PlatformLayers },
  { id: 2, title: '03 Target Audiences', component: TargetAudiences },
  { id: 3, title: '04 AIDA Framework', component: AIDAFramework },
  { id: 4, title: '05 Push & Pull', component: PushPull },
  { id: 5, title: '06 Channel Strategy', component: ChannelStrategy },
  { id: 6, title: '07 Roadmap & KPIs', component: RoadmapKPIs },
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goTo = (index: number) => {
    setCurrentSlide(index);
    window.scrollTo(0, 0);
  };

  const CurrentComponent = slides[currentSlide].component;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="flex gap-0 bg-accent border-b-2 border-gold overflow-x-auto scrollbar-hide sticky top-0 z-50">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => goTo(index)}
            className={`shrink-0 px-4 py-2.5 font-sans text-[11px] font-medium tracking-[0.06em] uppercase transition-all duration-200 border-b-2 -mb-[2px] whitespace-nowrap ${
              currentSlide === index
                ? 'text-gold2 border-gold2'
                : 'text-white/55 border-transparent hover:text-white/85'
            }`}
          >
            {slide.title}
          </button>
        ))}
      </nav>

      {/* Slide Content */}
      <main className="flex-1 p-6 md:p-8 max-w-4xl w-full mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <CurrentComponent goTo={goTo} totalSlides={slides.length} currentSlide={currentSlide} />
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
