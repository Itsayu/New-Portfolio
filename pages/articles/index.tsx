import React from "react";
import dynamic from 'next/dynamic';
import Color from '../../src/components/utils/page.colors';
import colors from '../../src/content/articles/_colors.json';
import settings from '../../src/content/_settings.json';
import TitleArticles from './title.articles';
import DevToRecent from '../../src/components/sections/articles/recents.blogs';

// 1. FIXED: Added 'description' to match the updated recent.articles component precisely
interface MediumArticle {
	title: string;
	pubDate: string;
	link: string;
	author: string;
	thumbnail: string;
	description: string; // Added to fix type mismatch
	categories: string[];
}

interface RecentArticlesProps {
	mediumArticles: {
		feed: any; 
		items: MediumArticle[];
	};
}

// 2. FIXED: Removed the manual ComponentType allocation. Let next/dynamic handle type inference safely.
const RecentArticles = dynamic<RecentArticlesProps>(
	() => import('../../src/components/sections/articles/recent.articles')
);

const Articles: React.FC<{ mediumArticles: any; devToArticles: any }> = ({ mediumArticles, devToArticles }) => {
	return (
		<>
			<TitleArticles />
			<Color colors={colors} />
			<RecentArticles mediumArticles={mediumArticles} />
			<DevToRecent devToArticles={devToArticles} />
		</>
	);
};

// 3. OPTIMIZED: Cleaning up the artificial waterfalls created by fake Promise.all setups
export async function getServerSideProps({ res }: any) {
	res.setHeader('Cache-Control', 'public, s-maxage=600, stale-while-revalidate=59');

	try {
		// Fetch both endpoints in actual parallel execution (faster load speeds)
		const [mediumRSS, devToArticles] = await Promise.all([
			fetch(`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/${settings.username.medium}`),
			fetch(`https://dev.to/api/articles?username=${settings.username.dev}&per_page=8`)
		]);

		// Parse JSON streams simultaneously 
		const [mediumArticles, devToData] = await Promise.all([
			mediumRSS.json(),
			devToArticles.json()
		]);

		return { 
			props: { 
				mediumArticles, 
				devToArticles: devToData 
			} 
		};
	} catch (error) {
		console.error("Error loading articles server-side:", error);
		// Return graceful fallbacks so the page doesn't completely crash on API downtime
		return {
			props: {
				mediumArticles: { feed: {}, items: [] },
				devToArticles: []
			}
		};
	}
}

export default Articles;