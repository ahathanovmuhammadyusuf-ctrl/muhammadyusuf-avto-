import React from 'react';
import { MapPin, ArrowUpRight, Globe2 } from 'lucide-react';
import { Language } from '../types';
import { citiesData } from '../data/cities';
import { translations } from '../data/translations';

interface CitiesSectionProps {
  lang: Language;
  onSelectCity: (city: string) => void;
}

export const CitiesSection: React.FC<CitiesSectionProps> = ({ lang, onSelectCity }) => {
  const t = translations[lang];

  const handleCityClick = (cityId: string) => {
    onSelectCity(cityId);
    const carsSection = document.querySelector('#cars');
    if (carsSection) {
      carsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="cities" className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-900/60 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-orange-100 dark:bg-orange-950/60 border border-orange-200 dark:border-orange-800 text-orange-600 dark:text-orange-400 text-xs font-bold tracking-wide uppercase mb-3">
            Hududlar
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.citiesTitle}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            {t.citiesSubtitle}
          </p>
        </div>

        {/* 10 Cities Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {citiesData.map((city) => (
            <button
              key={city.id}
              onClick={() => handleCityClick(city.id)}
              className="group text-left relative rounded-3xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105 flex flex-col justify-between"
            >
              {/* City Photo */}
              <div className="relative h-32 sm:h-36 w-full overflow-hidden bg-slate-950">
                <img
                  src={city.imageUrl}
                  alt={city.name[lang]}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-115 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
                
                {/* Arrow indicator */}
                <div className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-slate-900/70 text-white flex items-center justify-center backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="w-4 h-4 text-orange-400" />
                </div>

                {/* Country Badge */}
                <div className="absolute bottom-2.5 left-2.5">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-orange-500/90 text-white tracking-wide uppercase">
                    {city.country[lang]}
                  </span>
                </div>
              </div>

              {/* City Content */}
              <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-orange-500 shrink-0" />
                    <span>{city.name[lang]}</span>
                  </h3>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-tight">
                    {city.description[lang]}
                  </p>
                </div>

                <div className="mt-3 pt-2 border-t border-slate-100 dark:border-slate-800 text-[11px] font-semibold text-orange-500 group-hover:underline flex items-center justify-between">
                  <span>{t.cityViewCars}</span>
                  <span>&rarr;</span>
                </div>
              </div>

            </button>
          ))}
        </div>

      </div>
    </section>
  );
};
