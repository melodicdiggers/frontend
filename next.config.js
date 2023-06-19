/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	images: {
		domains: ['backend-production-ef30.up.railway.app', 'scontent.cdninstagram.com', 'localhost'],
	},
	env: {
		MEDIA_HOST: process.env.MEDIA_HOST,
		API_HOST: process.env.API_HOST,
	},
}

module.exports = nextConfig
