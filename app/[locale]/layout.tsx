import React, { FC } from 'react';
import { LocaleSwitcher } from '../../src/components/LocaleSwitcher';
import I18nProvider from '../../src/i18n/I18nContext';
import LocaleLink from '../../src/i18n/LocaleLink';
import { Locales } from '../../src/i18n';

export type LocaleLayoutType = {
    children: React.ReactNode;
    params: { locale: Locales };
}

const LocaleLayout:FC<LocaleLayoutType> = ({ children, params: { locale } }) => {
    return (
        <I18nProvider value={locale}>
            <nav className={'fixed w-full flex p-2'}>
                <div className={'mr-auto flex gap-2'}>
                    <LocaleLink href={'/'}>Home</LocaleLink>
                    <LocaleLink href={'/about'}>About</LocaleLink>
                </div>

                <LocaleSwitcher className={'flex ml-auto gap-2'} currentLocale={locale} />
            </nav>

            {children}
        </I18nProvider>
    );
}

export default LocaleLayout;
