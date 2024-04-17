export type Language = 'en' | 'pt';

export interface LanguageContextProps {
    language: Language;
    setLanguage: (language: Language) => Promise<void>;
    isLoading: boolean;
}
