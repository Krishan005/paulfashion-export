import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
    const token = req.cookies.get('auth-token'); // Or whichever method you're using for authentication

    // if (!token) {
    //     return NextResponse.redirect(new URL('/login', req.url));
    // }

    var protectedRoutes = [
        '/dashboard' , "/users"
    ]

    var isProtected = protectedRoutes.some(route => req.nextUrl.pathname.startsWith(route));

    console.log(isProtected);

    if (isProtected) {
        if (!token) {
        return NextResponse.redirect(new URL('/', req.url));
    }
  }
  

    return NextResponse.next();
}

export const config = {
    matcher: ['/dashboard/:id*', "/users/:id*"], // Protect all matching routes
};
