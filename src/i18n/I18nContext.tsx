'use client';

import React, { createContext } from 'react';
import { Locales } from './i18n.types';

export const I18nContext = createContext<{locale: Locales} | null>(null);

export type I18nProviderProps = {
    children: React.ReactNode;
    value: Locales;
}

const I18nProvider = ({ children, value }: I18nProviderProps) => {
    return (
        <I18nContext.Provider value={{ locale: value }}>
            {children}
        </I18nContext.Provider>
    );
}

export default I18nProvider;
