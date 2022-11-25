'use client'

import React, { FC, useEffect, useState } from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import { Locales } from '../i18n';

const DISABLED_LINK_CLASS_NAMES = 'pointer-events-none opacity-50';

export type LocaleSwitcherProps = {
    className?: string;
    currentLocale: Locales;
}

export const LocaleSwitcher: FC<LocaleSwitcherProps> = (props) => {
    const { className, currentLocale } = props;

    const [url, setUrl] = useState<string>();

    useEffect(() => {
        const { origin } = new URL(window.location.href);

        const urlWithoutOrigin = window.location.href.replace(origin, '').replace('/ru', '').replace('/en', '');

        setUrl(urlWithoutOrigin);
    }, []);

    if (url === undefined) {
        return null;
    }

    return (
        <div className={classNames(className, '')}>
            <Link href={`/ru/${url}`} shallow={false} className={classNames(currentLocale === 'ru' && DISABLED_LINK_CLASS_NAMES)}>RU</Link>
            <Link href={`/en/${url}`} className={classNames(currentLocale === 'en' && DISABLED_LINK_CLASS_NAMES)}>EN</Link>
        </div>
    )
}
