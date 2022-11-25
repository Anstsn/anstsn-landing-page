import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const { nextUrl } = request;

    if (nextUrl.pathname === '/') {
        return NextResponse.redirect(new URL('/ru', request.url))
    }

    // const requestHeaders = new Headers(request.headers);
    // requestHeaders.set('x-version', '13');
    //
    // const response = NextResponse.next({
    //     request: {
    //         headers: requestHeaders,
    //     },
    //     // status: 404,
    // });
    //
    // response.headers.set('x-version', '13');
    // return response;
}

export const config = {
    matcher: '/:path*',
};
