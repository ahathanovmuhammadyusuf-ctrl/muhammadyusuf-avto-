import React, { useState } from 'react';
import { 
  Calculator, 
  Droplets, 
  Fuel, 
  AlertTriangle, 
  CheckCircle, 
  Gauge, 
  ArrowRight,
  TrendingUp,
  Info
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface CalculatorsSectionProps {
  lang: Language;
}

export const CalculatorsSection: React.FC<CalculatorsSectionProps> = ({ lang }) => {
  const t = translations[lang];

  // Active tab state: 'oil' | 'fuel'
  const [activeTab, setActiveTab] = useState<'oil' | 'fuel'>('oil');

  // Oil change calculator inputs
  const [lastOilKm, setLastOilKm] = useState<string>('85000');
  const [currentKm, setCurrentKm] = useState<string>('92500');

  // Fuel consumption calculator inputs
  const [fuelDistance, setFuelDistance] = useState<string>('450');
  const [fuelLiters, setFuelLiters] = useState<string>('36');

  // Oil calculation
  const lastKmNum = parseFloat(lastOilKm) || 0;
  const currKmNum = parseFloat(currentKm) || 0;
  const kmPassed = Math.max(0, currKmNum - lastKmNum);
  const oilLimit = 7000;
  const kmRemaining = oilLimit - kmPassed;
  const isOilDue = kmPassed >= oilLimit;
  const oilPercent = Math.min(100, Math.round((kmPassed / oilLimit) * 100));

  // Fuel calculation
  const distNum = parseFloat(fuelDistance) || 0;
  const litersNum = parseFloat(fuelLiters) || 0;
  const fuelPer100 = distNum > 0 && litersNum > 0 ? (litersNum / distNum) * 100 : 0;

  return (
    <section id="calculators" className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-900/60 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-orange-100 dark:bg-orange-950/60 border border-orange-200 dark:border-orange-800 text-orange-600 dark:text-orange-400 text-xs font-bold tracking-wide uppercase mb-3">
            Onlayn Vositalar
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.calcTitle}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            {t.calcSubtitle}
          </p>
        </div>

        {/* Tab Switcher Buttons */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <button
              onClick={() => setActiveTab('oil')}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                activeTab === 'oil'
                  ? 'bg-orange-500 text-white shadow-md shadow-orange-500/20'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Droplets className="w-4 h-4" />
              <span>{t.calcOilTab}</span>
            </button>

            <button
              onClick={() => setActiveTab('fuel')}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                activeTab === 'fuel'
                  ? 'bg-orange-500 text-white shadow-md shadow-orange-500/20'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Fuel className="w-4 h-4" />
              <span>{t.calcFuelTab}</span>
            </button>
          </div>
        </div>

        {/* Calculator Cards Container */}
        <div className="max-w-4xl mx-auto">
          {activeTab === 'oil' ? (
            /* 1. OIL CHANGE CALCULATOR */
            <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-lg animate-in fade-in zoom-in-95 duration-200">
              <div className="flex items-center gap-3 mb-6 pb-6 border-b border-slate-100 dark:border-slate-800">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center">
                  <Droplets className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {t.calcOilTab}
                  </h3>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    {t.calcOilLimitNote}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Inputs */}
                <div className="space-y-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                      {t.calcOilLastLabel}
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        min="0"
                        value={lastOilKm}
                        onChange={(e) => setLastOilKm(e.target.value)}
                        placeholder={t.calcOilLastPlaceholder}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-mono text-base focus:ring-2 focus:ring-orange-500/40 focus:outline-none"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400">
                        KM
                      </span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                      {t.calcOilCurrentLabel}
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        min="0"
                        value={currentKm}
                        onChange={(e) => setCurrentKm(e.target.value)}
                        placeholder={t.calcOilCurrentPlaceholder}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-mono text-base focus:ring-2 focus:ring-orange-500/40 focus:outline-none"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400">
                        KM
                      </span>
                    </div>
                  </div>

                  {/* Preset quick buttons */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    <span className="text-xs text-slate-400 self-center">Namunalar:</span>
                    <button
                      type="button"
                      onClick={() => {
                        setLastOilKm('85000');
                        setCurrentKm('92500');
                      }}
                      className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-semibold hover:bg-orange-50 dark:hover:bg-orange-950/40"
                    >
                      7,500 km (Muddati yetdi)
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setLastOilKm('90000');
                        setCurrentKm('93500');
                      }}
                      className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-semibold hover:bg-orange-50 dark:hover:bg-orange-950/40"
                    >
                      3,500 km (Yaxshi)
                    </button>
                  </div>
                </div>

                {/* Live Result Card */}
                <div className={`p-6 rounded-2xl border transition-all ${
                  isOilDue 
                    ? 'bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-900/60'
                    : 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-900/60'
                }`}>
                  <div className="flex items-center gap-2 mb-4">
                    {isOilDue ? (
                      <AlertTriangle className="w-6 h-6 text-red-600 dark:text-red-400 animate-bounce" />
                    ) : (
                      <CheckCircle className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                    )}
                    <span className={`text-base font-extrabold ${
                      isOilDue ? 'text-red-700 dark:text-red-400' : 'text-emerald-700 dark:text-emerald-400'
                    }`}>
                      {isOilDue ? t.calcOilAlertChange : t.calcOilAlertOk}
                    </span>
                  </div>

                  {/* Distance stats */}
                  <div className="space-y-3 mb-5">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-slate-600 dark:text-slate-300">{t.calcOilPassed}</span>
                      <span className="font-mono font-bold text-slate-900 dark:text-white text-base">
                        {kmPassed.toLocaleString()} km
                      </span>
                    </div>

                    <div className="flex justify-between items-center text-sm">
                      <span className="text-slate-600 dark:text-slate-300">{t.calcOilRemaining}</span>
                      <span className={`font-mono font-extrabold text-base ${
                        kmRemaining <= 0 ? 'text-red-600 dark:text-red-400' : 'text-emerald-600 dark:text-emerald-400'
                      }`}>
                        {kmRemaining <= 0 ? '0 km (muddat o\'tdi!)' : `${kmRemaining.toLocaleString()} km`}
                      </span>
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="w-full bg-slate-200 dark:bg-slate-800 h-3 rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all duration-500 rounded-full ${
                        isOilDue ? 'bg-red-500' : 'bg-emerald-500'
                      }`}
                      style={{ width: `${oilPercent}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-[11px] text-slate-500 dark:text-slate-400 mt-1.5 font-mono">
                    <span>0 km</span>
                    <span>{oilPercent}% ishlatildi</span>
                    <span>7,000 km</span>
                  </div>

                </div>
              </div>
            </div>
          ) : (
            /* 2. FUEL CONSUMPTION CALCULATOR */
            <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-lg animate-in fade-in zoom-in-95 duration-200">
              <div className="flex items-center gap-3 mb-6 pb-6 border-b border-slate-100 dark:border-slate-800">
                <div className="w-12 h-12 rounded-2xl bg-orange-500/10 text-orange-500 flex items-center justify-center">
                  <Fuel className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {t.calcFuelTab}
                  </h3>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    O'rtacha yoqilg'i tejamkorligini hisoblash
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Inputs */}
                <div className="space-y-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                      {t.calcFuelDistLabel}
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        min="1"
                        value={fuelDistance}
                        onChange={(e) => setFuelDistance(e.target.value)}
                        placeholder={t.calcFuelDistPlaceholder}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-mono text-base focus:ring-2 focus:ring-orange-500/40 focus:outline-none"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400">
                        KM
                      </span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                      {t.calcFuelUsedLabel}
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        min="0.1"
                        step="0.1"
                        value={fuelLiters}
                        onChange={(e) => setFuelLiters(e.target.value)}
                        placeholder={t.calcFuelUsedPlaceholder}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-mono text-base focus:ring-2 focus:ring-orange-500/40 focus:outline-none"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400">
                        LITR
                      </span>
                    </div>
                  </div>

                  {/* Preset quick buttons */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    <span className="text-xs text-slate-400 self-center">Namunalar:</span>
                    <button
                      type="button"
                      onClick={() => {
                        setFuelDistance('500');
                        setFuelLiters('38');
                      }}
                      className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-semibold hover:bg-orange-50"
                    >
                      500 km / 38 L (7.6 L)
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setFuelDistance('600');
                        setFuelLiters('36');
                      }}
                      className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-semibold hover:bg-orange-50"
                    >
                      600 km / 36 L (6.0 L)
                    </button>
                  </div>
                </div>

                {/* Fuel Result Card */}
                <div className="p-6 rounded-2xl bg-orange-50 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-900/60 text-center">
                  <span className="text-xs font-bold text-orange-700 dark:text-orange-400 uppercase tracking-wider block mb-2">
                    {t.calcFuelResultTitle}
                  </span>

                  <div className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white font-mono mb-2">
                    {fuelPer100 > 0 ? fuelPer100.toFixed(1) : '0.0'}
                    <span className="text-lg font-bold text-orange-500 ml-2">L / 100 km</span>
                  </div>

                  <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-4">
                    {fuelPer100 > 0 && fuelPer100 <= 6.5
                      ? t.calcFuelEconSuper
                      : fuelPer100 > 6.5 && fuelPer100 <= 9.5
                      ? t.calcFuelEconNorm
                      : fuelPer100 > 9.5
                      ? t.calcFuelEconHigh
                      : 'Ko\'rsatkichlarni kiriting'}
                  </p>

                  {/* Approximate cost card (AI-92 average 10,500 UZS) */}
                  {fuelPer100 > 0 && (
                    <div className="pt-4 border-t border-orange-200 dark:border-orange-900/40 text-xs text-slate-600 dark:text-slate-400 flex items-center justify-between">
                      <span>100 km xarajati (~10,500 so'm/L):</span>
                      <span className="font-bold text-slate-900 dark:text-white font-mono text-sm">
                        ~{Math.round(fuelPer100 * 10500).toLocaleString()} so'm
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
