import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TipsSection } from './components/TipsSection';
import { CarsSection } from './components/CarsSection';
import { CalculatorsSection } from './components/CalculatorsSection';
import { QuizSection } from './components/QuizSection';
import { CitiesSection } from './components/CitiesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BuyModal } from './components/BuyModal';
import { Preloader } from './components/Preloader';
import { Car, Language } from './types';
import { translations } from './data/translations';

export default function App() {
  // Preloader state
  const [isLoading, setIsLoading] = useState(true);

  // Language state (default 'uz', persisted in localStorage)
  const [lang, setLang] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('avtomaslahat_lang');
      if (saved && ['uz', 'ru', 'en', 'tr'].includes(saved)) {
        return saved as Language;
      }
    } catch {
      // ignore
    }
    return 'uz';
  });

  // Dark mode state (persisted in localStorage)
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('avtomaslahat_theme');
      if (saved !== null) {
        return saved === 'dark';
      }
    } catch {
      // ignore
    }
    // Default to dark mode for a rich premium look
    return true;
  });

  // Favorites state (persisted in localStorage)
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('avtomaslahat_favorites');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // ignore
    }
    return ['cobalt-2023', 'tracker-2023']; // Nice starter favorites
  });

  // Car search & filters
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('default');
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);

  // Buy Modal state
  const [buyModalCar, setBuyModalCar] = useState<Car | null>(null);

  // Synchronize language and title
  useEffect(() => {
    try {
      localStorage.setItem('avtomaslahat_lang', lang);
      document.documentElement.lang = lang;
    } catch {
      // ignore
    }
  }, [lang]);

  // Synchronize dark mode class on <html>
  useEffect(() => {
    try {
      localStorage.setItem('avtomaslahat_theme', darkMode ? 'dark' : 'light');
    } catch {
      // ignore
    }
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Synchronize favorites in localStorage
  useEffect(() => {
    try {
      localStorage.setItem('avtomaslahat_favorites', JSON.stringify(favorites));
    } catch {
      // ignore
    }
  }, [favorites]);

  const handleToggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const handleLanguageChange = (newLang: Language) => {
    setLang(newLang);
  };

  const handleToggleFavorite = (carId: string) => {
    setFavorites((prev) =>
      prev.includes(carId) ? prev.filter((id) => id !== carId) : [...prev, carId]
    );
  };

  const handleOpenFavorites = () => {
    setShowOnlyFavorites(true);
    const carsSection = document.querySelector('#cars');
    if (carsSection) {
      carsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleToggleOnlyFavorites = () => {
    setShowOnlyFavorites((prev) => !prev);
  };

  const handleSelectCity = (city: string | null) => {
    setSelectedCity(city);
    setShowOnlyFavorites(false);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300 antialiased selection:bg-orange-500 selection:text-white">
      {/* Initial spinning wheel preloader */}
      {isLoading && (
        <Preloader
          onComplete={() => setIsLoading(false)}
          languageText={translations[lang].loadingText}
        />
      )}

      {/* Sticky Navigation Bar */}
      <Navbar
        lang={lang}
        onLanguageChange={handleLanguageChange}
        darkMode={darkMode}
        onToggleDarkMode={handleToggleDarkMode}
        favoritesCount={favorites.length}
        onOpenFavorites={handleOpenFavorites}
      />

      <main>
        {/* 1. Bosh sahifa (Hero) */}
        <Hero lang={lang} />

        {/* 2. Maslahatlar (6 Tips) */}
        <TipsSection lang={lang} />

        {/* 3. Mashinalar savdosi (8 Sample Cars with search, filter, favorites, and buy) */}
        <CarsSection
          lang={lang}
          selectedCity={selectedCity}
          onSelectCity={handleSelectCity}
          favorites={favorites}
          onToggleFavorite={handleToggleFavorite}
          onBuyCar={(car) => setBuyModalCar(car)}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          sortBy={sortBy}
          onSortChange={setSortBy}
          showOnlyFavorites={showOnlyFavorites}
          onToggleOnlyFavorites={handleToggleOnlyFavorites}
        />

        {/* 4. Hisoblagichlar (Oil change & fuel consumption) */}
        <CalculatorsSection lang={lang} />

        {/* 5. Test (Driver Quiz with 8 questions, sounds, score) */}
        <QuizSection lang={lang} />

        {/* 6. Shaharlar (10 city cards that filter car list) */}
        <CitiesSection
          lang={lang}
          onSelectCity={(cityId) => handleSelectCity(cityId)}
        />

        {/* 7. Aloqa (Clickable phone, telegram, address, and validated form) */}
        <ContactSection lang={lang} />
      </main>

      {/* Footer with quick links, phone, social icons, and back to top */}
      <Footer lang={lang} />

      {/* Buy Car Popup Modal with +998 90 123 45 67 */}
      <BuyModal
        car={buyModalCar}
        onClose={() => setBuyModalCar(null)}
        lang={lang}
      />
    </div>
  );
}
