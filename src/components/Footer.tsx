import React from 'react';
import { 
  CarFront, 
  Phone, 
  ArrowUp, 
  Send, 
  Instagram, 
  Facebook, 
  Youtube,
  ShieldCheck,
  Heart
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const t = translations[lang];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: t.home, href: '#home' },
    { label: t.tips, href: '#tips' },
    { label: t.cars, href: '#cars' },
    { label: t.calculators, href: '#calculators' },
    { label: t.quiz, href: '#quiz' },
    { label: t.cities, href: '#cities' },
    { label: t.contact, href: '#contact' },
  ];

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
          
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center text-white shadow-md shadow-orange-500/20">
                <CarFront className="w-5 h-5" />
              </div>
              <span className="text-2xl font-black tracking-tight text-white">
                Avto<span className="text-orange-500">Maslahat</span>
              </span>
            </div>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              {t.footerDesc}
            </p>

            {/* Direct phone badge */}
            <div className="pt-2">
              <a
                href="tel:+998901234567"
                className="inline-flex items-center gap-2 text-sm font-bold text-orange-400 hover:text-orange-300 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>+998 90 123 45 67</span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://t.me/avtomaslahat_uz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-sky-400 hover:border-sky-500/40 hover:scale-110 transition-all"
                title="Telegram"
              >
                <Send className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-pink-400 hover:border-pink-500/40 hover:scale-110 transition-all"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-blue-400 hover:border-blue-500/40 hover:scale-110 transition-all"
                title="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-red-500 hover:border-red-500/40 hover:scale-110 transition-all"
                title="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300">
              {t.footerNavTitle}
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-sm text-slate-400">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="hover:text-orange-400 transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Action / Back to top (3 cols) */}
          <div className="lg:col-span-3 flex flex-col justify-between items-start lg:items-end space-y-4">
            <div>
              <span className="text-xs font-semibold text-slate-400 block mb-1">
                AvtoMaslahat O'zbekiston
              </span>
              <span className="text-sm font-bold text-slate-200 block">
                Ishonchli va xavfsiz xizmat
              </span>
            </div>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="py-3 px-5 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white text-xs sm:text-sm font-bold flex items-center gap-2 shadow-lg shadow-orange-500/20 transition-all hover:scale-105 active:scale-95"
            >
              <ArrowUp className="w-4 h-4" />
              <span>{t.footerBackToTop}</span>
            </button>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>
            &copy; {new Date().getFullYear()} {t.footerCopyright}
          </p>
          <div className="flex items-center gap-1 text-slate-400">
            <span>O'zbekiston haydovchilari uchun mehr bilan yaratilgan</span>
            <Heart className="w-3.5 h-3.5 text-orange-500 fill-orange-500 ml-1 inline" />
          </div>
        </div>

      </div>
    </footer>
  );
};
