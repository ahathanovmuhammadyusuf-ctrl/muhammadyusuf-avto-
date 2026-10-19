import React, { useEffect } from 'react';
import { X, Phone, MessageSquare, MapPin, Calendar, DollarSign, ShieldCheck } from 'lucide-react';
import { Car, Language } from '../types';
import { translations } from '../data/translations';

interface BuyModalProps {
  car: Car | null;
  onClose: () => void;
  lang: Language;
}

export const BuyModal: React.FC<BuyModalProps> = ({ car, onClose, lang }) => {
  const t = translations[lang];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (car) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [car, onClose]);

  if (!car) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      
      {/* Backdrop overlay */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-lg rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden z-10 animate-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label={t.modalClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-900/60 hover:bg-slate-900 text-white backdrop-blur-md transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Car Image Banner */}
        <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-slate-950">
          <img
            src={car.imageUrl}
            alt={car.name}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
          
          {/* Price badge overlaid on photo */}
          <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between text-white">
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-orange-400">
                {car.badge || 'Sotuvda'}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold leading-tight drop-shadow-md">
                {car.name}
              </h3>
            </div>
            <div className="text-right">
              <span className="text-2xl sm:text-3xl font-extrabold text-orange-400 drop-shadow-md">
                ${car.price.toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          
          {/* Car Key Details Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800">
              <span className="text-slate-500 dark:text-slate-400 block font-medium flex items-center gap-1 mb-1">
                <Calendar className="w-3.5 h-3.5 text-orange-500" />
                {t.yearLabel}
              </span>
              <span className="font-bold text-slate-800 dark:text-slate-100 text-sm">
                {car.year}-yil
              </span>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800">
              <span className="text-slate-500 dark:text-slate-400 block font-medium flex items-center gap-1 mb-1">
                <MapPin className="w-3.5 h-3.5 text-orange-500" />
                {t.cityLabel}
              </span>
              <span className="font-bold text-slate-800 dark:text-slate-100 text-sm">
                {car.city}
              </span>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 col-span-2 sm:col-span-1">
              <span className="text-slate-500 dark:text-slate-400 block font-medium flex items-center gap-1 mb-1">
                <ShieldCheck className="w-3.5 h-3.5 text-orange-500" />
                {t.mileageLabel}
              </span>
              <span className="font-bold text-slate-800 dark:text-slate-100 text-sm">
                {car.mileage}
              </span>
            </div>
          </div>

          {/* Description & Instruction */}
          <div className="text-center space-y-2">
            <h4 className="text-base font-bold text-slate-900 dark:text-white">
              {t.modalTitle}
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              {t.modalSubtitle}
            </p>
          </div>

          {/* Direct Phone Highlight Card */}
          <div className="p-4 rounded-2xl bg-orange-50 dark:bg-orange-950/40 border border-orange-200 dark:border-orange-800/80 text-center">
            <span className="text-xs font-semibold text-orange-700 dark:text-orange-300 uppercase tracking-wider block mb-1">
              Menejer bilan to'g'ridan-to'g'ri aloqa
            </span>
            <a
              href="tel:+998901234567"
              className="text-2xl sm:text-3xl font-black text-orange-600 dark:text-orange-400 tracking-wider hover:underline block"
            >
              +998 90 123 45 67
            </a>
            <span className="text-[11px] text-slate-500 dark:text-slate-400 block mt-1">
              {t.modalNotice}
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Primary Call Button */}
            <a
              href="tel:+998901234567"
              className="flex-1 py-3.5 px-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg shadow-orange-500/25 transition-transform hover:scale-105 active:scale-95 text-center"
            >
              <Phone className="w-5 h-5 animate-bounce" />
              <span>{t.modalCallBtn}</span>
            </a>

            {/* Telegram Button */}
            <a
              href="https://t.me/avtomaslahat_uz"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3.5 px-4 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-md transition-transform hover:scale-105 active:scale-95 text-center"
            >
              <MessageSquare className="w-5 h-5" />
              <span className="hidden sm:inline">{t.modalTelegramBtn}</span>
              <span className="sm:hidden">Telegram</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};
