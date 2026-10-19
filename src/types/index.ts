export type Language = 'uz' | 'ru' | 'en' | 'tr';

export interface Car {
  id: string;
  name: string;
  year: number;
  price: number; // in USD
  city: string; // key matching city IDs
  imageUrl: string;
  mileage: string;
  fuel: string;
  transmission: string;
  engine: string;
  badge?: string;
}

export interface Tip {
  id: string;
  iconName: string;
  title: Record<Language, string>;
  sentence1: Record<Language, string>;
  sentence2: Record<Language, string>;
  category: string;
}

export interface QuizQuestion {
  id: number;
  question: Record<Language, string>;
  options: Record<Language, string[]>;
  correctIndex: number;
  explanation: Record<Language, string>;
}

export interface CityInfo {
  id: string;
  name: Record<Language, string>;
  country: Record<Language, string>;
  imageUrl: string;
  description: Record<Language, string>;
}
