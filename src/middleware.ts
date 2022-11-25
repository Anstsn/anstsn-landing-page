import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import i18nConfig from './i18n/i18n.config';

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(request: NextRequest) {
    const { nextUrl } = request;

    if (PUBLIC_FILE.test(nextUrl.pathname) || nextUrl.pathname.includes("/api")) {
        return undefined;
    }

    if (!i18nConfig.locales.some(locale => nextUrl.pathname.startsWith(`/${locale}`))) {
        const { origin } = new URL(request.nextUrl);
        const urlWithoutOrigin = request.nextUrl.toString().replace(origin, '');

        return NextResponse.redirect(new URL(`/${i18nConfig.defaultLocale}${urlWithoutOrigin}`, request.url))
    }
}

export const config = {
    matcher: '/:path*',
};
