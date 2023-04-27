interface PageProps {
	params: {
		slug: string
	}
}

/* export async function generateStaticParams() {
	const posts = await fetch('https://.../posts').then((res) => res.json());
  
	return posts.map((post) => ({
	  slug: post.slug,
	}));
  } */

export default function Page({ params }: PageProps) {
	return <div>{params.slug}</div>
}
