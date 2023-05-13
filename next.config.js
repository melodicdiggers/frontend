/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	images: {
		domains: ['backend-production-ef30.up.railway.app', 'scontent.cdninstagram.com'],
	},
}

module.exports = nextConfig
