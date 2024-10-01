// params comes automatically when using dynamic route snytax
export default function BlogPostPage({ params }) {
	return (
		<main>
			<h1>{params.slug}</h1>
		</main>
	);
}
