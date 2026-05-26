import React from 'react';
import Head from 'next/head'; // Imported for SEO Meta tags
import Section from '../../structure/section';
import Container from '../../structure/container';
import Image from 'next/image';
import SectionTitle from '../../blocks/section.title';
import Icon from '../../utils/icon';
import css from '../../../styles/scss/sections/articles/recent.module.scss';
import button from '../../../styles/scss/blocks/button.module.scss'; 

interface MediumArticle {
    title: string;
    pubDate: string;
    link: string;
    author: string;
    thumbnail: string;
    description: string; 
    categories: string[];
}

interface RecentArticlesProps {
    mediumArticles: {
        feed: any; 
        items: MediumArticle[];
    };
}

const RecentArticles: React.FC<RecentArticlesProps> = ({ mediumArticles }) => {
    const articles = mediumArticles?.items || [];

    const getImageUrl = (item: MediumArticle) => {
        if (item.thumbnail && item.thumbnail !== "") return item.thumbnail;
        const imgRegex = /<img[^>]+src="([^">]+)"/;
        const match = item.description.match(imgRegex);
        return match ? match[1] : '/images/placeholder-blog.jpg';
    };

    return (
        <>
            {/* Dynamic Blog SEO Setup */}
            <Head>
                <title>Technical Articles & Blog | Software Engineering Insights</title>
                <meta 
                    name="description" 
                    content="Read the latest technical articles, tutorials, and creative writing pieces. Covering full stack development, modern frameworks, and software engineering methodologies." 
                />
                <meta name="keywords" content="Software Engineering Blog, Medium Articles, Tech Tutorials, Web Development Blog, Creative Writing" />
                <meta property="og:title" content="Technical Articles & Blog | Software Engineering Insights" />
                <meta property="og:description" content="Read recent technical publication items and tutorials covering modern software engineering." />
                <meta property="og:type" content="blog" />
                <meta name="robots" content="index, follow" />
            </Head>

            <Section classProp="borderBottom">
                <Container spacing={['verticalXXXXLrg']}>
                    <SectionTitle
                        title="Recent Medium Articles"
                        preTitle="Informative"
                        subTitle="A personal quest to become a better creative writer."
                    />
                    
                    <section className={css.projects} aria-label="Medium Publication Feed">
                        {articles.length > 0 ? (
                            articles.map(({ title, pubDate, link, author, thumbnail, description, categories }, index) => {
                                const date = new Date(pubDate).toDateString();
                                const displayImage = getImageUrl({ title, pubDate, link, author, thumbnail, description, categories });

                                return (
                                    <article key={index} className={css.project}>
                                        <span className={css.featuredImage}>
                                            <Image 
                                                src={displayImage} 
                                                height={400} 
                                                width={600} 
                                                alt={`Cover image for article: ${title}`} // More descriptive Alt tag
                                                loading="lazy" // Changed to lazy to optimize page loading speeds (LCP)
                                                style={{ objectFit: 'cover' }}
                                            />
                                        </span>

                                        {/* SEO FIX: Changed from generic <span> to semantic <h3> heading */}
                                        <h3 className={css.header}>
                                            <a href={link} rel="noopener noreferrer" target="_blank">
                                                {title} <Icon icon={['fad', 'arrow-up-right-from-square']} />
                                            </a>
                                        </h3>

                                        <span className={css.descriptionContainer}></span>

                                        <div className={css.details}>
                                            <p>By {author}</p>
                                            <p className={css.pushedAt}><time dateTime={pubDate}>{date}</time></p>
                                        </div>

                                        <span className={css.topicsContainer}>
                                            {categories.map((topic, i) => (
                                                <span key={i} className={css.topics}>
                                                    <Icon icon={['fab', 'medium']} /> {topic}
                                                </span>
                                            ))}
                                        </span>
                                    </article>
                                );
                            })
                        ) : (
                            <p>No articles found. Please check your Medium RSS feed.</p>
                        )}
                    </section>

                    {/* --- READ MORE LINK (SEO FIX: Changed from <button> to crawlable <a> anchor) --- */}
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}>
                        <a 
                            href="https://medium.com/@itsayu" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`button ${button.primary}`} 
                            style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}
                        >
                            More Articles on Medium
                            <Icon icon={['fab', 'medium']} />
                        </a>
                    </div>

                </Container>
            </Section>
        </>
    );
};

export default RecentArticles;