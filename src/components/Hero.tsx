import React, { useEffect, useState, useRef } from 'react';
import { 
  Car, 
  ArrowRight, 
  ShieldCheck, 
  MapPin, 
  Languages, 
  Sparkles,
  Search
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface HeroProps {
  lang: Language;
}

// Counting up number component
const AnimatedCounter: React.FC<{ target: number; suffix?: string; duration?: number }> = ({
  target,
  suffix = '',
  duration = 1800,
}) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !startedRef.current) {
          startedRef.current = true;
          const startTime = performance.now();
          const step = (currentTime: number) => {
            const progress = Math.min((currentTime - startTime) / duration, 1);
            // Ease out quad
            const easeOutProgress = 1 - (1 - progress) * (1 - progress);
            setCount(Math.floor(easeOutProgress * target));

            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setCount(target);
            }
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span ref={elementRef} className="font-extrabold tracking-tight">
      {count}
      {suffix}
    </span>
  );
};

export const Hero: React.FC<HeroProps> = ({ lang }) => {
  const t = translations[lang];

  const scrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-orange-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/80 border border-slate-700/60 text-orange-400 text-xs sm:text-sm font-semibold shadow-inner">
              <Sparkles className="w-4 h-4 text-orange-400 animate-pulse" />
              <span>O'zbekistonning #1 Avtomobil Maslahatchisi</span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              {t.heroTitle.split(' ').map((word, idx) => {
                if (word.toLowerCase().includes('avtomobil') || word.toLowerCase().includes('автомобильный') || word.toLowerCase().includes('automotive') || word.toLowerCase().includes('otomobil')) {
                  return (
                    <span key={idx} className="text-orange-500">
                      {word}{' '}
                    </span>
                  );
                }
                return word + ' ';
              })}
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {t.heroSubtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => scrollTo('#tips')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-base shadow-lg shadow-orange-500/30 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2.5 group"
              >
                <span>{t.heroCtaTips}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollTo('#cars')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700/80 border border-slate-700 text-slate-100 font-bold text-base transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
              >
                <Search className="w-4 h-4 text-orange-400" />
                <span>{t.heroCtaCars}</span>
              </button>
            </div>
          </div>

          {/* Right Visual Column: Animated Highway with Car & Dashboard */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-3xl bg-gradient-to-b from-slate-800/80 to-slate-900/90 p-5 border border-slate-700/60 shadow-2xl backdrop-blur-sm overflow-hidden">
              
              {/* Car Showcase Banner with Driving Animation */}
              <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden bg-slate-950 flex flex-col justify-between p-4">
                {/* Night sky with stars/city backdrop */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950" />
                
                {/* City skyline silhouette */}
                <div className="absolute bottom-20 left-0 right-0 h-16 opacity-30 flex items-end justify-around">
                  <div className="w-12 h-14 bg-slate-600" />
                  <div className="w-8 h-10 bg-slate-700" />
                  <div className="w-16 h-16 bg-slate-600" />
                  <div className="w-10 h-8 bg-slate-700" />
                  <div className="w-14 h-12 bg-slate-600" />
                </div>

                {/* Status bar top */}
                <div className="relative z-10 flex items-center justify-between text-xs font-semibold text-slate-400">
                  <span className="flex items-center gap-1.5 text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-2.5 py-1 rounded-full">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    Jonli Maslahat Rejimi
                  </span>
                  <span className="text-slate-400 font-mono">100 km/h</span>
                </div>

                {/* Animated Moving Car */}
                <div className="relative z-10 my-auto flex items-center justify-center">
                  <div className="relative animate-car-bounce">
                    {/* Headlight beam */}
                    <div className="absolute -right-24 top-4 w-36 h-12 bg-gradient-to-r from-amber-300/40 to-transparent blur-md -skew-y-6 pointer-events-none" />

                    {/* Modern Car Body Graphic (SVG) */}
                    <div className="relative text-white drop-shadow-2xl">
                      <svg width="220" height="90" viewBox="0 0 240 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* Car Silhouette */}
                        <path
                          d="M30 65 L45 42 Q60 22 95 20 L160 20 Q185 22 205 45 L225 58 Q235 62 235 72 L235 78 Q235 82 225 82 L210 82 Q200 68 180 68 Q160 68 150 82 L85 82 Q75 68 55 68 Q35 68 25 82 L15 82 Q5 82 5 72 L5 68 Q5 65 15 65 Z"
                          fill="#f97316"
                        />
                        {/* Roof curve & windows */}
                        <path
                          d="M60 42 Q72 26 100 24 L155 24 Q175 26 190 42 Z"
                          fill="#0f172a"
                        />
                        {/* Window partition */}
                        <line x1="125" y1="24" x2="125" y2="42" stroke="#f97316" strokeWidth="3" />
                        {/* Front headlight */}
                        <circle cx="225" cy="62" r="5" fill="#fef08a" />
                        {/* Rear taillight */}
                        <circle cx="15" cy="68" r="4" fill="#ef4444" />
                        {/* Door handle */}
                        <rect x="105" y="48" width="14" height="3" rx="1.5" fill="#ffffff" />
                        <rect x="145" y="48" width="14" height="3" rx="1.5" fill="#ffffff" />
                        
                        {/* Wheels with spin simulation */}
                        {/* Rear Wheel */}
                        <g transform="translate(55, 78)">
                          <circle cx="0" cy="0" r="16" fill="#1e293b" stroke="#64748b" strokeWidth="2" />
                          <circle cx="0" cy="0" r="9" fill="#475569" />
                          <circle cx="0" cy="0" r="4" fill="#f97316" />
                        </g>
                        {/* Front Wheel */}
                        <g transform="translate(180, 78)">
                          <circle cx="0" cy="0" r="16" fill="#1e293b" stroke="#64748b" strokeWidth="2" />
                          <circle cx="0" cy="0" r="9" fill="#475569" />
                          <circle cx="0" cy="0" r="4" fill="#f97316" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Animated Moving Road Track */}
                <div className="relative z-10 w-full h-12 bg-slate-900 border-t-2 border-slate-700 overflow-hidden flex items-center">
                  {/* Road edge yellow line */}
                  <div className="absolute top-1 left-0 right-0 h-0.5 bg-amber-500/60" />
                  
                  {/* Animated Road Dashed Centerlines */}
                  <div className="flex w-[200%] animate-road">
                    {Array.from({ length: 16 }).map((_, i) => (
                      <div key={i} className="flex-1 flex justify-center">
                        <div className="w-8 sm:w-12 h-1.5 bg-white/80 rounded-full" />
                      </div>
                    ))}
                  </div>

                  {/* Road edge bottom line */}
                  <div className="absolute bottom-1 left-0 right-0 h-0.5 bg-slate-700" />
                </div>
              </div>

              {/* Quick Car Highlights Strip */}
              <div className="mt-4 grid grid-cols-2 gap-2 text-center text-xs">
                <div className="p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/50">
                  <span className="text-slate-400 block font-medium">Chevrolet Modellari</span>
                  <span className="text-white font-bold text-sm">Cobalt, Gentra, Tracker</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/50">
                  <span className="text-slate-400 block font-medium">To'g'ridan-to'g'ri aloqa</span>
                  <span className="text-orange-400 font-bold text-sm">+998 90 123 45 67</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Statistics Block: 8 mashina, 10 shahar, 4 til, 100% ishonch */}
        <div className="mt-14 lg:mt-20 pt-10 border-t border-slate-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            
            {/* Stat 1: 8 Mashina */}
            <div className="p-5 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-orange-500/50 transition-all hover:scale-105 group">
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-colors">
                <Car className="w-6 h-6" />
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white">
                <AnimatedCounter target={8} suffix="" />
              </div>
              <div className="mt-1 text-xs sm:text-sm font-semibold text-slate-400">
                {t.statsCarsLabel}
              </div>
            </div>

            {/* Stat 2: 10 Shahar */}
            <div className="p-5 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-orange-500/50 transition-all hover:scale-105 group">
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-colors">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white">
                <AnimatedCounter target={10} suffix="" />
              </div>
              <div className="mt-1 text-xs sm:text-sm font-semibold text-slate-400">
                {t.statsCitiesLabel}
              </div>
            </div>

            {/* Stat 3: 4 Til */}
            <div className="p-5 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-orange-500/50 transition-all hover:scale-105 group">
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-colors">
                <Languages className="w-6 h-6" />
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white">
                <AnimatedCounter target={4} suffix="" />
              </div>
              <div className="mt-1 text-xs sm:text-sm font-semibold text-slate-400">
                {t.statsLanguagesLabel}
              </div>
            </div>

            {/* Stat 4: 100% Maslahatlar */}
            <div className="p-5 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-orange-500/50 transition-all hover:scale-105 group">
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-colors">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white">
                <AnimatedCounter target={100} suffix="%" />
              </div>
              <div className="mt-1 text-xs sm:text-sm font-semibold text-slate-400">
                {t.statsSatisfactionLabel}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
