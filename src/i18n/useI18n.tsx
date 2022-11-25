import { useCallback, useContext, useMemo } from 'react';
import { I18nContext } from './I18nContext';

import ru from '../../lang/ru.json';
import en from '../../lang/en.json';

export type LocaleMessagesTypeRu = keyof typeof ru;
export type LocaleMessagesTypeEn = keyof typeof en;
export type LocaleMessagesType = LocaleMessagesTypeRu | LocaleMessagesTypeEn;

export type UseI18n = {
    t: (id: LocaleMessagesType) => string;
}

export const useI18n = (): UseI18n => {
    const context = useContext(I18nContext);

    const t = useCallback((id: LocaleMessagesType): string => {
        if (!context?.locale) {
            return id;
        }

        const localesObject = getLocaleJsonByLocale(context?.locale);

        if (!localesObject) {
            return id;
        }

        return localesObject[id] ?? id;
    }, [context?.locale]);

    return useMemo(() => ({ t }), [context?.locale]);
}

const getLocaleJsonByLocale = (locale: string) => {
    switch (locale) {
        case 'ru':
            return ru;
        case 'en':
            return en;
        default:
            return;
    }
}
