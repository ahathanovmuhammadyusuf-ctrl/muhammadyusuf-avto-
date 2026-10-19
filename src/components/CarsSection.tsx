import React, { useMemo } from 'react';
import { 
  Heart, 
  MapPin, 
  Calendar, 
  Fuel, 
  SlidersHorizontal, 
  Search, 
  Sparkles, 
  X,
  PhoneCall,
  ArrowUpDown
} from 'lucide-react';
import { Car, Language } from '../types';
import { carsData } from '../data/cars';
import { translations } from '../data/translations';

interface CarsSectionProps {
  lang: Language;
  selectedCity: string | null;
  onSelectCity: (city: string | null) => void;
  favorites: string[];
  onToggleFavorite: (id: string) => void;
  onBuyCar: (car: Car) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
  showOnlyFavorites?: boolean;
  onToggleOnlyFavorites?: () => void;
}

export const CarsSection: React.FC<CarsSectionProps> = ({
  lang,
  selectedCity,
  onSelectCity,
  favorites,
  onToggleFavorite,
  onBuyCar,
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange,
  showOnlyFavorites = false,
  onToggleOnlyFavorites,
}) => {
  const t = translations[lang];

  // Distinct cities from the cars list plus common locations
  const availableCities = useMemo(() => {
    const list = Array.from(new Set(carsData.map((c) => c.city)));
    return list;
  }, []);

  // Filtered and sorted cars
  const filteredCars = useMemo(() => {
    return carsData
      .filter((car) => {
        // Favorites filter
        if (showOnlyFavorites && !favorites.includes(car.id)) {
          return false;
        }

        // City filter
        if (selectedCity && car.city.toLowerCase() !== selectedCity.toLowerCase()) {
          return false;
        }

        // Search query
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase().trim();
          const matchesName = car.name.toLowerCase().includes(q);
          const matchesCity = car.city.toLowerCase().includes(q);
          const matchesYear = car.year.toString().includes(q);
          return matchesName || matchesCity || matchesYear;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') {
          return a.price - b.price;
        }
        if (sortBy === 'price-desc') {
          return b.price - a.price;
        }
        if (sortBy === 'year-desc') {
          return b.year - a.year;
        }
        return 0; // default order
      });
  }, [selectedCity, searchQuery, sortBy, showOnlyFavorites, favorites]);

  return (
    <section id="cars" className="py-16 sm:py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-orange-100 dark:bg-orange-950/60 border border-orange-200 dark:border-orange-800 text-orange-600 dark:text-orange-400 text-xs font-bold tracking-wide uppercase mb-3">
            Katalog
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.carsTitle}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            {t.carsSubtitle}
          </p>
        </div>

        {/* Filters and Search Bar Container */}
        <div className="p-4 sm:p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm mb-10 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4">
            
            {/* Search Input Box */}
            <div className="md:col-span-6 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder={t.searchPlaceholder}
                className="w-full pl-11 pr-10 py-3 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/40 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Sort Dropdown */}
            <div className="md:col-span-3 relative">
              <div className="relative">
                <ArrowUpDown className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                <select
                  value={sortBy}
                  onChange={(e) => onSortChange(e.target.value)}
                  className="w-full pl-10 pr-8 py-3 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm font-medium focus:outline-none focus:ring-2 focus:ring-orange-500/40 appearance-none cursor-pointer transition-all"
                >
                  <option value="default">{t.sortDefault}</option>
                  <option value="price-asc">{t.sortPriceAsc}</option>
                  <option value="price-desc">{t.sortPriceDesc}</option>
                  <option value="year-desc">{t.sortYearDesc}</option>
                </select>
              </div>
            </div>

            {/* Favorites filter toggle */}
            <div className="md:col-span-3 flex items-center">
              <button
                onClick={onToggleOnlyFavorites}
                className={`w-full py-3 px-4 rounded-2xl border text-sm font-semibold flex items-center justify-center gap-2 transition-all ${
                  showOnlyFavorites
                    ? 'bg-red-500 text-white border-red-500 shadow-md shadow-red-500/20'
                    : 'bg-white dark:bg-slate-950 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-800 hover:border-red-400'
                }`}
              >
                <Heart className={`w-4 h-4 ${showOnlyFavorites ? 'fill-white' : 'text-red-500'}`} />
                <span>
                  {t.favorites} ({favorites.length})
                </span>
              </button>
            </div>

          </div>

          {/* City Filter Pills */}
          <div className="pt-2 border-t border-slate-200/60 dark:border-slate-800 flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400 flex items-center gap-1 mr-1">
              <MapPin className="w-3.5 h-3.5 text-orange-500" />
              {t.cityLabel}:
            </span>

            {/* "All Cities" button */}
            <button
              onClick={() => onSelectCity(null)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                selectedCity === null
                  ? 'bg-orange-500 text-white shadow-sm'
                  : 'bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {t.allCities}
            </button>

            {availableCities.map((city) => (
              <button
                key={city}
                onClick={() => onSelectCity(city)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  selectedCity === city
                    ? 'bg-orange-500 text-white shadow-sm'
                    : 'bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {city}
              </button>
            ))}

            {selectedCity && (
              <button
                onClick={() => onSelectCity(null)}
                className="text-xs text-orange-500 hover:underline flex items-center gap-1 font-semibold ml-auto"
              >
                <X className="w-3.5 h-3.5" />
                <span>{selectedCity} ({t.resetFilter})</span>
              </button>
            )}
          </div>
        </div>

        {/* Cars Grid */}
        {filteredCars.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
            {filteredCars.map((car) => {
              const isFav = favorites.includes(car.id);

              return (
                <div
                  key={car.id}
                  className="group rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:scale-105 flex flex-col justify-between"
                >
                  {/* Image Container with Badges */}
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-950">
                    <img
                      src={car.imageUrl}
                      alt={car.name}
                      loading="lazy"
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                    {/* Top status tag */}
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-lg bg-orange-500/90 text-white text-[11px] font-bold shadow-sm backdrop-blur-md">
                        {car.badge || 'Sotuvda'}
                      </span>
                    </div>

                    {/* Favorite Heart Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleFavorite(car.id);
                      }}
                      aria-label="Add to favorites"
                      className="absolute top-3 right-3 p-2 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md text-slate-700 dark:text-slate-200 hover:scale-110 active:scale-90 transition-all shadow-md"
                    >
                      <Heart
                        className={`w-4 h-4 transition-colors ${
                          isFav ? 'fill-red-500 text-red-500' : 'text-slate-700 dark:text-slate-200'
                        }`}
                      />
                    </button>

                    {/* City Tag on Image */}
                    <div className="absolute bottom-3 left-3 flex items-center gap-1 text-xs text-white/95 font-medium bg-slate-900/60 backdrop-blur-md px-2.5 py-1 rounded-md">
                      <MapPin className="w-3.5 h-3.5 text-orange-400" />
                      <span>{car.city}</span>
                    </div>
                  </div>

                  {/* Car Card Body */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      {/* Name */}
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors line-clamp-1">
                        {car.name}
                      </h3>

                      {/* Specs Tags */}
                      <div className="mt-2.5 grid grid-cols-2 gap-2 text-xs text-slate-500 dark:text-slate-400">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-slate-400" />
                          <span>{car.year}-yil</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Fuel className="w-3.5 h-3.5 text-slate-400" />
                          <span className="truncate">{car.mileage}</span>
                        </div>
                      </div>
                    </div>

                    {/* Price and Action Button */}
                    <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-2">
                      <div>
                        <span className="text-[11px] text-slate-400 uppercase font-semibold block">
                          {t.priceLabel}
                        </span>
                        <span className="text-xl font-extrabold text-orange-500 dark:text-orange-400">
                          ${car.price.toLocaleString()}
                        </span>
                      </div>

                      {/* "Sotib olish" Button */}
                      <button
                        onClick={() => onBuyCar(car)}
                        className="py-2.5 px-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs sm:text-sm shadow-md shadow-orange-500/20 transition-all hover:scale-105 active:scale-95 flex items-center gap-1.5"
                      >
                        <PhoneCall className="w-4 h-4" />
                        <span>{t.buyBtn}</span>
                      </button>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Empty Search State */
          <div className="py-16 text-center rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-orange-100 dark:bg-orange-950/50 text-orange-500 flex items-center justify-center">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              {t.noCarsFound}
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 max-w-md mx-auto">
              Qidiruv so'zini o'zgartirib ko'ring yoki filtrlarni tozalang.
            </p>
            <button
              onClick={() => {
                onSearchChange('');
                onSelectCity(null);
                if (showOnlyFavorites && onToggleOnlyFavorites) onToggleOnlyFavorites();
              }}
              className="px-5 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm shadow-md shadow-orange-500/20"
            >
              {t.resetFilter}
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
