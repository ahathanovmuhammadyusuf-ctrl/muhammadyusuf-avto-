import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  HelpCircle, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  ArrowRight, 
  Trophy, 
  Award,
  Sparkles,
  Volume2
} from 'lucide-react';
import { Language } from '../types';
import { quizQuestions } from '../data/quiz';
import { translations } from '../data/translations';
import { sounds } from '../utils/sound';

interface QuizSectionProps {
  lang: Language;
}

export const QuizSection: React.FC<QuizSectionProps> = ({ lang }) => {
  const t = translations[lang];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const currentQuestion = quizQuestions[currentIndex];
  const totalQuestions = quizQuestions.length;

  const handleSelectOption = (idx: number) => {
    if (isAnswered) return;

    setSelectedOption(idx);
    setIsAnswered(true);

    const isCorrect = idx === currentQuestion.correctIndex;
    if (isCorrect) {
      setScore((prev) => prev + 1);
      sounds.playCorrect();
    } else {
      sounds.playWrong();
    }
  };

  const handleNextQuestion = () => {
    if (currentIndex + 1 < totalQuestions) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setIsCompleted(true);
      // Trigger confetti if high score
      if (score >= 6) {
        try {
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
          });
        } catch {
          // ignore
        }
      }
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setIsCompleted(false);
  };

  // Verdict calculation
  const getVerdict = () => {
    if (score >= 7) {
      return {
        badge: t.quizResultGreat,
        feedback: t.quizGreatFeedback,
        color: 'text-emerald-500',
        bg: 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800',
        icon: <Trophy className="w-12 h-12 text-yellow-500 animate-bounce" />
      };
    }
    if (score >= 4) {
      return {
        badge: t.quizResultGood,
        feedback: t.quizGoodFeedback,
        color: 'text-amber-500',
        bg: 'bg-amber-50 dark:bg-amber-950/40 border-amber-300 dark:border-amber-800',
        icon: <Award className="w-12 h-12 text-amber-500" />
      };
    }
    return {
      badge: t.quizResultPoor,
      feedback: t.quizPoorFeedback,
      color: 'text-orange-500',
      bg: 'bg-orange-50 dark:bg-orange-950/40 border-orange-300 dark:border-orange-800',
      icon: <HelpCircle className="w-12 h-12 text-orange-500" />
    };
  };

  return (
    <section id="quiz" className="py-16 sm:py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-orange-100 dark:bg-orange-950/60 border border-orange-200 dark:border-orange-800 text-orange-600 dark:text-orange-400 text-xs font-bold tracking-wide uppercase mb-3">
            Bilimni Sinash
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.quizTitle}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            {t.quizSubtitle}
          </p>
        </div>

        {/* Quiz Container Box */}
        <div className="rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-lg">
          
          {!isCompleted ? (
            <div className="space-y-6">
              
              {/* Header Bar: Progress & Current Score */}
              <div className="flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400">
                <span className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-orange-500" />
                  {t.quizQuestion} {currentIndex + 1} {t.quizOf} {totalQuestions}
                </span>

                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1 text-xs text-slate-400">
                    <Volume2 className="w-4 h-4 text-orange-500" /> Ovozli
                  </span>
                  <span className="px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-950/60 text-orange-600 dark:text-orange-400 font-bold">
                    {t.quizScore}: {score}
                  </span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-slate-200 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
                <div
                  className="bg-orange-500 h-full transition-all duration-300"
                  style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
                />
              </div>

              {/* Question Text */}
              <div className="py-2">
                <h3 className="text-lg sm:text-2xl font-bold text-slate-900 dark:text-white leading-relaxed">
                  {currentQuestion.question[lang]}
                </h3>
              </div>

              {/* 4 Options Grid */}
              <div className="grid grid-cols-1 gap-3 sm:gap-3.5">
                {currentQuestion.options[lang].map((optionText, idx) => {
                  const isSelected = selectedOption === idx;
                  const isCorrect = idx === currentQuestion.correctIndex;

                  let optionStyles = 'bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-100 hover:border-orange-400 hover:bg-orange-50/50 dark:hover:bg-orange-950/20';

                  if (isAnswered) {
                    if (isCorrect) {
                      // Correct answer green
                      optionStyles = 'bg-emerald-50 dark:bg-emerald-950/50 border-emerald-500 text-emerald-800 dark:text-emerald-200 font-bold shadow-md';
                    } else if (isSelected && !isCorrect) {
                      // Wrong answer red
                      optionStyles = 'bg-red-50 dark:bg-red-950/50 border-red-500 text-red-800 dark:text-red-200 font-bold';
                    } else {
                      optionStyles = 'bg-white/50 dark:bg-slate-950/40 border-slate-200 dark:border-slate-800/40 opacity-60 text-slate-500';
                    }
                  }

                  return (
                    <button
                      key={idx}
                      disabled={isAnswered}
                      onClick={() => handleSelectOption(idx)}
                      className={`w-full text-left p-4 rounded-2xl border-2 transition-all flex items-center justify-between text-sm sm:text-base ${optionStyles}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-7 h-7 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center font-mono font-bold text-xs shrink-0">
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span>{optionText}</span>
                      </div>

                      {/* Status indicator on answer */}
                      {isAnswered && (
                        <div>
                          {isCorrect && (
                            <span className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-bold text-xs">
                              <CheckCircle2 className="w-5 h-5" />
                              <span>{t.quizCorrect}</span>
                            </span>
                          )}
                          {isSelected && !isCorrect && (
                            <span className="inline-flex items-center gap-1 text-red-600 dark:text-red-400 font-bold text-xs">
                              <XCircle className="w-5 h-5" />
                              <span>{t.quizWrong}</span>
                            </span>
                          )}
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Answer Explanation & Feedback Banner */}
              {isAnswered && (
                <div className={`p-4 rounded-2xl border animate-in fade-in duration-200 ${
                  selectedOption === currentQuestion.correctIndex
                    ? 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200'
                    : 'bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-800 text-red-900 dark:text-red-200'
                }`}>
                  <div className="flex items-start gap-2.5">
                    {selectedOption === currentQuestion.correctIndex ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    )}
                    <div>
                      <span className="font-extrabold text-sm block">
                        {selectedOption === currentQuestion.correctIndex ? t.quizCorrect : t.quizWrong}
                      </span>
                      <p className="text-xs sm:text-sm mt-1 leading-relaxed opacity-90">
                        {currentQuestion.explanation[lang]}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Next Question / Finish Action */}
              {isAnswered && (
                <div className="pt-2 flex justify-end">
                  <button
                    onClick={handleNextQuestion}
                    className="py-3 px-6 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm sm:text-base flex items-center gap-2 shadow-lg shadow-orange-500/25 transition-all hover:scale-105 active:scale-95"
                  >
                    <span>{currentIndex + 1 < totalQuestions ? t.quizNext : t.quizFinish}</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              )}

            </div>
          ) : (
            /* Quiz Completed Screen */
            <div className="py-8 text-center space-y-6 animate-in zoom-in-95 duration-300">
              {(() => {
                const verdict = getVerdict();
                return (
                  <>
                    <div className="flex justify-center">{verdict.icon}</div>

                    <div className="space-y-2">
                      <span className="text-xs uppercase font-bold tracking-widest text-slate-400">
                        Yakuniy natija
                      </span>
                      <h3 className={`text-3xl sm:text-4xl font-extrabold ${verdict.color}`}>
                        {verdict.badge}
                      </h3>
                      <div className="text-2xl font-black text-slate-800 dark:text-white font-mono">
                        {score} / {totalQuestions}
                      </div>
                    </div>

                    <div className={`p-5 rounded-2xl border max-w-md mx-auto text-sm leading-relaxed ${verdict.bg}`}>
                      {verdict.feedback}
                    </div>

                    <div className="pt-4">
                      <button
                        onClick={handleRestart}
                        className="py-3.5 px-7 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-base flex items-center justify-center gap-2 mx-auto shadow-lg shadow-orange-500/25 transition-all hover:scale-105 active:scale-95"
                      >
                        <RotateCcw className="w-5 h-5" />
                        <span>{t.quizRestart}</span>
                      </button>
                    </div>
                  </>
                );
              })()}
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
