'use client';

import React, { FC, useContext, useEffect, useState } from 'react';
import Link, { LinkProps } from 'next/link';
import { I18nContext } from './I18nContext';
import i18nConfig from './i18n.config';

export type LocaleLinkProps = {
    href: string;
    children: React.ReactNode;
} & LinkProps;

const LocaleLink:FC<LocaleLinkProps> = (props) => {
    const context = useContext(I18nContext);

    const [href, setHref] = useState<string>(props.href);

    useEffect(() => {
        if (!context?.locale) {
            return;
        }

        const { defaultLocale, locales } = i18nConfig;
        let propsHref = props.href;

        locales.forEach(locale => {
            if (propsHref.startsWith(`/${locale}`)) {
                propsHref = propsHref.replace(`/${locale}`, '');
            }
        });

        setHref(`/${context.locale}${propsHref}`);
    }, [context?.locale]);

    return (
        <Link { ...props } href={href} />
    );
}

export default LocaleLink;
