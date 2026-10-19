import React from 'react';
import { 
  Droplet, 
  Flame, 
  Gauge, 
  Sparkles, 
  Zap, 
  ShieldAlert,
  CheckCircle2
} from 'lucide-react';
import { Language } from '../types';
import { tipsData } from '../data/tips';
import { translations } from '../data/translations';

interface TipsSectionProps {
  lang: Language;
}

export const TipsSection: React.FC<TipsSectionProps> = ({ lang }) => {
  const t = translations[lang];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Droplet':
        return <Droplet className="w-7 h-7 text-amber-500" />;
      case 'Flame':
        return <Flame className="w-7 h-7 text-orange-500" />;
      case 'Gauge':
        return <Gauge className="w-7 h-7 text-blue-500" />;
      case 'Sparkles':
        return <Sparkles className="w-7 h-7 text-sky-500" />;
      case 'Zap':
        return <Zap className="w-7 h-7 text-yellow-500" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-7 h-7 text-red-500" />;
      default:
        return <CheckCircle2 className="w-7 h-7 text-orange-500" />;
    }
  };

  return (
    <section id="tips" className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-900/60 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-orange-100 dark:bg-orange-950/60 border border-orange-200 dark:border-orange-800 text-orange-600 dark:text-orange-400 text-xs font-bold tracking-wide uppercase mb-3">
            Avto Xizmat
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.tipsTitle}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            {t.tipsSubtitle}
          </p>
        </div>

        {/* 6 Tip Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {tipsData.map((tip, index) => (
            <div
              key={tip.id}
              className="group relative rounded-2xl bg-white dark:bg-slate-900 p-6 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105 flex flex-col justify-between"
            >
              {/* Top Accent Ribbon */}
              <div className="absolute top-0 left-6 right-6 h-1 rounded-t-full bg-gradient-to-r from-orange-500 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Header row with Icon and Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner">
                    {getIcon(tip.iconName)}
                  </div>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 font-mono">
                    0{index + 1}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors mb-3">
                  {tip.title[lang]}
                </h3>

                {/* Two short sentences */}
                <div className="space-y-2 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  <p className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
                    <span>{tip.sentence1[lang]}</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-600 mt-2 shrink-0" />
                    <span>{tip.sentence2[lang]}</span>
                  </p>
                </div>
              </div>

              {/* Bottom tag */}
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span className="font-semibold">{tip.category}</span>
                <span className="text-orange-500 font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  Muhim qoida &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
