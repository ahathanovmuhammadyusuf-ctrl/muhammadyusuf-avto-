import React, { useEffect, useState } from 'react';
import { Gauge } from 'lucide-react';

interface PreloaderProps {
  onComplete: () => void;
  languageText?: string;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete, languageText = "AvtoMaslahat yuklanmoqda..." }) => {
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFading(true);
      setTimeout(() => {
        onComplete();
      }, 500);
    }, 900);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950 text-white transition-opacity duration-500 ${
        fading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="relative flex items-center justify-center">
        {/* Outer glowing pulsing ring */}
        <div className="absolute w-28 h-28 rounded-full border-4 border-orange-500/20 animate-ping" />

        {/* Spinning rim / car wheel */}
        <div className="w-20 h-20 rounded-full border-4 border-dashed border-orange-500 animate-spin flex items-center justify-center">
          <div className="w-12 h-12 rounded-full border-2 border-slate-700 bg-slate-900 flex items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-orange-500" />
          </div>
        </div>

        {/* Speedometer overlay icon */}
        <div className="absolute text-orange-400">
          <Gauge className="w-7 h-7" />
        </div>
      </div>

      <div className="mt-6 text-center">
        <h2 className="text-2xl font-bold tracking-tight text-white flex items-center justify-center gap-2">
          Avto<span className="text-orange-500">Maslahat</span>
        </h2>
        <p className="mt-2 text-sm text-slate-400 font-medium">
          {languageText}
        </p>
      </div>
    </div>
  );
};
