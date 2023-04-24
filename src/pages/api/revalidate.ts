import { NextApiRequest, NextApiResponse } from 'next'

/**
 * It takes a path as a query parameter, checks for a secret token, and then revalidates the page
 * @param {NextApiRequest} req - NextApiRequest - The request object
 * @param {NextApiResponse} res - NextApiResponse - The response object
 * @returns The revalidate function is being called on the path that is passed in the query.
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (!req.query.path) {
		return res.status(404).json({ message: 'You must pass a path on the query. Ex: /news/:id' })
	}
	// Check for secret to confirm this is a valid request
	if (req.query.secret !== process.env.API_SECRET_TOKEN) {
		return res.status(401).json({ message: 'Invalid token' })
	}

	try {
		// This should be the actual path not a rewritten path
		// e.g. for "/blog/[slug]" this should be "/blog/post-1"
		await res.revalidate(req.query.path.toString())
		return res.json({ revalidated: true })
	} catch (err) {
		// If there was an error, Next.js will continue
		// to show the last successfully generated page
		return res.status(500).send('Error revalidating')
	}
}
