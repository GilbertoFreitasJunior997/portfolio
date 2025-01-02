import Head from "next/head";

const siteUrl = "https://gilberto-freitas-portfolio.vercel.app/";
export const SEOConfig = {
	siteName: "Gilberto Freitas - Portfolio",
	description:
		"Professional portfolio showcasing my work in web development, including projects in React, Next.js, and more.",
	twitterHandle: "@beto_peloso",
	imageUrl: `${siteUrl}portfolio-display.png`,
	ogType: "website",
};

export const SEO = () => {
	const { siteName, description, ogType, imageUrl, twitterHandle } = SEOConfig;

	return (
		<Head>
			{/* Essential Meta Tags */}
			<title>{siteName}</title>
			<meta name="description" content={description} />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link rel="canonical" href={siteUrl} />

			{/* Open Graph */}
			<meta property="og:type" content={ogType} />
			<meta property="og:title" content={siteName} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={imageUrl} />
			<meta property="og:url" content={siteUrl} />
			<meta property="og:site_name" content={siteName} />

			{/* Twitter */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:site" content={twitterHandle} />
			<meta name="twitter:title" content={siteName} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={imageUrl} />

			{/* Favicon  */}
			<link rel="icon" type="image/x-icon" href="/favicon.ico" />
			<link
				rel="icon"
				type="image/png"
				sizes="16x16"
				href="/favicon-16x16.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="32x32"
				href="/favicon-32x32.png"
			/>
			<link
				rel="apple-touch-icon"
				sizes="180x180"
				href="/apple-touch-icon.png"
			/>
			<link rel="manifest" href="/site.webmanifest" />

			{/* Android Chrome Icons */}
			<link
				rel="icon"
				type="image/png"
				sizes="192x192"
				href="/android-chrome-192x192.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="512x512"
				href="/android-chrome-512x512.png"
			/>

			<meta
				name="keywords"
				content="web developer, portfolio, react, next.js, javascript, gilberto freitas, typescript, javascript, frontend"
			/>
			<meta name="author" content="Gilberto Freitas" />
			<meta name="robots" content="index, follow" />
		</Head>
	);
};
