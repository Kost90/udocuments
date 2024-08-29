import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
    const url = req.nextUrl;
    const lang = url.searchParams.get('lang');

    if (!lang) {
        url.searchParams.set('lang', 'ua');
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}