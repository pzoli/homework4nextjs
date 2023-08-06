import { NextResponse, NextRequest } from 'next/server';

const allowedOrigins = process.env.NODE_ENV === 'production'
    ? ['https://www.yoursite.com', 'https://yoursite.com']
    : ['http://localhost:3000']

export function middleware(request: NextRequest) {
    const origin = request.headers.get('origin')
    console.log("Origin: ", origin)

    if (origin && !allowedOrigins.includes(origin)) {
        return new NextResponse(null, {
            status: 400,
            statusText: "Bad Request",
            headers: {
                'Access-Control-Allow-Origin': origin || '*',
                'Content-Type': 'text/plain'
            }
        })
    }

    console.log('>>>> MIDDLEWARE <<<<')
    console.log("Method: ", request.method)
    console.log("URL: ", request.url)
    console.log('---- MIDDLEWARE ----')
    return NextResponse.next();
}

export const config = {
    matcher: '/api/:path*',
}
