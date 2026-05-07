import React from 'react';
import Section from '../../structure/section';
import Container from '../../structure/container';
import Image from 'next/image';
import SectionTitle from '../../blocks/section.title';
import Icon from '../../utils/icon';
import css from '../../../styles/scss/sections/articles/recent.module.scss';
import button from '../../../styles/scss/blocks/button.module.scss'; // Ensure you import your button styles

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
        <Section classProp="borderBottom">
            <Container spacing={['verticalXXXXLrg']}>
                <SectionTitle
                    title="Recent Medium Articles"
                    preTitle="Informative"
                    subTitle="A personal quest to become a better creative writer."
                />
                
                <section className={css.projects}>
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
                                            alt={title} 
                                            loading="eager" 
                                            style={{ objectFit: 'cover' }}
                                        />
                                    </span>

                                    <span className={css.header}>
                                        <a href={link} rel="noreferrer" target="_blank">
                                            {title} <Icon icon={['fad', 'arrow-up-right-from-square']} />
                                        </a>
                                    </span>

                                    <span className={css.descriptionContainer}></span>

                                    <span className={css.details}>
                                        <p>By {author}</p>
                                        <p className={css.pushedAt}>{date}</p>
                                    </span>

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

                {/* --- READ MORE BUTTON --- */}
                <section style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}>
                    <button 
                        className={`button ${button.primary}`} 
                        onClick={() => window.open("https://medium.com/@itsayu", "_blank")}
                        style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
                    >
                        More Articles on Medium
                        <Icon icon={['fab', 'medium']} />
                    </button>
                </section>

            </Container>
        </Section>
    );
};

export default RecentArticles;