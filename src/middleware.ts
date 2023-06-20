import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'

export async function middleware(req: NextRequest) {
	const session = await getToken({ req, secret: process.env.AUTH_SECRET })
	if (!session && req.nextUrl.pathname.length > 1) {
		const url = req.nextUrl.clone()
		url.pathname = '/login'
		return NextResponse.redirect(url)
	}

	return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
	matcher: ['/checkout'],
}
