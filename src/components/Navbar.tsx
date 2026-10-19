import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  Moon, 
  Sun, 
  Heart, 
  Phone, 
  Globe, 
  CarFront
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface NavbarProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  darkMode: boolean;
  onToggleDarkMode: () => void;
  favoritesCount: number;
  onOpenFavorites: () => void;
}

const languages: { code: Language; label: string; flag: string }[] = [
  { code: 'uz', label: "O'zbekcha", flag: '🇺🇿' },
  { code: 'ru', label: 'Русский', flag: '🇷🇺' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'tr', label: 'Türkçe', flag: '🇹🇷' },
];

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  onLanguageChange,
  darkMode,
  onToggleDarkMode,
  favoritesCount,
  onOpenFavorites,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  const t = translations[lang];

  const navItems = [
    { label: t.home, href: '#home' },
    { label: t.tips, href: '#tips' },
    { label: t.cars, href: '#cars' },
    { label: t.calculators, href: '#calculators' },
    { label: t.quiz, href: '#quiz' },
    { label: t.cities, href: '#cities' },
    { label: t.contact, href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md border-b transition-colors duration-300 bg-white/90 dark:bg-slate-950/90 border-slate-200 dark:border-slate-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="flex items-center gap-3 group"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-orange-600 to-orange-400 flex items-center justify-center text-white shadow-md shadow-orange-500/20 group-hover:scale-105 transition-transform">
              <CarFront className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Avto<span className="text-orange-500">Maslahat</span>
              </span>
              <span className="hidden sm:block text-[11px] font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                {t.brandSub}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-orange-500 dark:hover:text-orange-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Action buttons (Favorites, Language, Theme, Phone, Mobile hamburger) */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Favorites Badge Button */}
            <button
              onClick={onOpenFavorites}
              aria-label={t.favorites}
              className="relative p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-200 hover:text-orange-500 hover:border-orange-500/40 transition-all hover:scale-105"
              title={t.favorites}
            >
              <Heart className={`w-5 h-5 ${favoritesCount > 0 ? 'fill-red-500 text-red-500' : ''}`} />
              {favoritesCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 min-w-[20px] h-5 px-1 rounded-full bg-orange-500 text-white text-xs font-bold flex items-center justify-center shadow-sm animate-pulse">
                  {favoritesCount}
                </span>
              )}
            </button>

            {/* Dark / Light Mode Toggle */}
            <button
              onClick={onToggleDarkMode}
              aria-label="Toggle Dark Mode"
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-200 hover:text-orange-500 hover:border-orange-500/40 transition-all hover:scale-105"
              title={darkMode ? "Yorug' rejim" : "Tungi rejim"}
            >
              {darkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-700" />}
            </button>

            {/* Language Switcher Dropdown */}
            <div className="relative">
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 hover:border-orange-500/40 transition-all"
              >
                <Globe className="w-4 h-4 text-orange-500" />
                <span className="uppercase">{lang}</span>
              </button>

              {langMenuOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setLangMenuOpen(false)}
                  />
                  <div className="absolute right-0 mt-2 w-44 rounded-xl shadow-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 py-1.5 z-50 animate-in fade-in slide-in-from-top-2">
                    {languages.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => {
                          onLanguageChange(l.code);
                          setLangMenuOpen(false);
                        }}
                        className={`w-full flex items-center gap-2.5 px-4 py-2 text-xs sm:text-sm font-medium text-left transition-colors ${
                          lang === l.code
                            ? 'bg-orange-50 dark:bg-orange-950/40 text-orange-600 dark:text-orange-400 font-bold'
                            : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                        }`}
                      >
                        <span className="text-base">{l.flag}</span>
                        <span>{l.label}</span>
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Direct Call Button (Desktop) */}
            <a
              href="tel:+998901234567"
              className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold text-xs sm:text-sm shadow-md shadow-orange-500/25 transition-all hover:scale-105"
            >
              <Phone className="w-4 h-4" />
              <span>+998 90 123 45 67</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="lg:hidden p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 hover:text-orange-500 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="w-full text-left px-4 py-3 rounded-xl text-base font-semibold text-slate-800 dark:text-slate-100 hover:bg-orange-50 dark:hover:bg-orange-950/30 hover:text-orange-600 dark:hover:text-orange-400 transition-all"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-3">
            <a
              href="tel:+998901234567"
              className="w-full flex items-center justify-center gap-2.5 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-center shadow-lg shadow-orange-500/25 text-base"
            >
              <Phone className="w-5 h-5" />
              <span>+998 90 123 45 67</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
