import React, { useState } from 'react';
import { 
  Phone, 
  Send, 
  MapPin, 
  MessageSquare, 
  CheckCircle2, 
  AlertCircle, 
  Clock,
  Sparkles
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface ContactSectionProps {
  lang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang }) => {
  const t = translations[lang];

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [phoneError, setPhoneError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!phone.trim()) {
      setPhoneError(t.formPhoneError);
      setIsSuccess(false);
      return;
    }

    // Phone validated
    setPhoneError(null);
    setIsSuccess(true);
    setName('');
    setPhone('');
    setMessage('');

    // Reset success notification after 7 seconds
    setTimeout(() => {
      setIsSuccess(false);
    }, 7000);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-orange-100 dark:bg-orange-950/60 border border-orange-200 dark:border-orange-800 text-orange-600 dark:text-orange-400 text-xs font-bold tracking-wide uppercase mb-3">
            Bog'lanish
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.contactTitle}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            {t.contactSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Phone Card (Clickable) */}
            <a
              href="tel:+998901234567"
              className="group block p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-orange-500/50 transition-all hover:scale-105"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-orange-500/10 text-orange-500 flex items-center justify-center shrink-0 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-1">
                    {t.contactPhoneTitle}
                  </span>
                  <span className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors block">
                    +998 90 123 45 67
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 block mt-1 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-orange-500" />
                    {t.contactPhoneSub}
                  </span>
                </div>
              </div>
            </a>

            {/* Telegram Card (Clickable) */}
            <a
              href="https://t.me/avtomaslahat_uz"
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-sky-500/50 transition-all hover:scale-105"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-sky-500/10 text-sky-500 flex items-center justify-center shrink-0 group-hover:bg-sky-500 group-hover:text-white transition-colors">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-1">
                    {t.contactTgTitle}
                  </span>
                  <span className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white group-hover:text-sky-500 transition-colors block">
                    {t.contactTgVal}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 block mt-1">
                    {t.contactTgSub}
                  </span>
                </div>
              </div>
            </a>

            {/* Address Card */}
            <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-1">
                    {t.contactAddrTitle}
                  </span>
                  <span className="text-base sm:text-lg font-bold text-slate-900 dark:text-white block leading-snug">
                    {t.contactAddrVal}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 block mt-1">
                    {t.contactAddrSub}
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form with Validation */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg">
              
              <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-2">
                Xabar qoldiring
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
                Ma'lumotlaringizni qoldiring, mutaxassislarimiz tez fursatda bog'lanishadi.
              </p>

              {/* Success Notification Banner */}
              {isSuccess && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 border-2 border-emerald-500 text-emerald-900 dark:text-emerald-200 flex items-start gap-3 animate-in fade-in zoom-in-95">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-extrabold text-base block">
                      {t.formSuccess}
                    </span>
                  </div>
                </div>
              )}

              {/* Form Element */}
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Name Field */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                    {t.formNameLabel}
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t.formNamePlaceholder}
                    className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-orange-500/40 focus:outline-none transition-all"
                  />
                </div>

                {/* Phone Field (Validated) */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                    {t.formPhoneLabel}
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      if (phoneError) setPhoneError(null);
                    }}
                    placeholder={t.formPhonePlaceholder}
                    className={`w-full px-4 py-3 rounded-2xl bg-white dark:bg-slate-950 border text-slate-900 dark:text-white text-sm focus:outline-none transition-all ${
                      phoneError
                        ? 'border-red-500 focus:ring-2 focus:ring-red-500/40'
                        : 'border-slate-200 dark:border-slate-800 focus:ring-2 focus:ring-orange-500/40'
                    }`}
                  />
                  {/* Red Error Message */}
                  {phoneError && (
                    <div className="mt-2 flex items-center gap-1.5 text-xs font-bold text-red-600 dark:text-red-400 animate-in fade-in">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{phoneError}</span>
                    </div>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                    {t.formMessageLabel}
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={t.formMessagePlaceholder}
                    className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-orange-500/40 focus:outline-none transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white font-extrabold text-base shadow-lg shadow-orange-500/30 transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  <span>{t.formSubmitBtn}</span>
                </button>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
