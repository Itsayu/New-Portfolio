import React from 'react';
import Section from '../../structure/section';
import Container from '../../structure/container';
import SectionTitle from '../../blocks/section.title';
import css from '../../../styles/scss/sections/articles/recent.module.scss';
import Image from 'next/image';
import Icon from '../../utils/icon';

interface DevToArticle {
    title: string;
    description: string;
    user: {
        name: string;
    };
    id: number | string; // Dev.to IDs are usually numbers
    cover_image: string;
    social_image: string; // Fallback if cover_image is missing
    created_at: string;
    url: string;        // Added this to fix the empty link
    tags: string | string[];
}

interface DevToRecentProps {
    devToArticles: DevToArticle[];
}

const DevToRecent: React.FC<DevToRecentProps> = ({ devToArticles }) => {
    // 1. Check if articles exist
    if (!devToArticles || devToArticles.length === 0) {
        return null; 
    }

    return (
        <Section classProp="borderBottom">
            <Container spacing={['verticalXXXXLrg']}>
                <SectionTitle
                    title="Recent Dev.to Blogs"
                    preTitle="Knowledgeable"
                    subTitle="Exploring insights and experiences on Dev.to."
                />
                <section className={css.projects}>
                    {devToArticles.map(({ title, description, user, id, cover_image, social_image, created_at, tags, url }) => {
                        // 2. Format the date
                        const date = new Date(created_at).toLocaleDateString(undefined, {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        });

                        // 3. Robust Tag Handling
                        const tagArray = Array.isArray(tags) 
                            ? tags 
                            : (tags ? tags.split(',').map(t => t.trim()) : []);

                        // 4. Image Fallback Logic
                        // Dev.to sometimes provides cover_image, sometimes social_image
                        const featuredImage = cover_image || social_image || "/img/noimageavailable.jpg";

                        return (
                            <article key={id} className={css.project}>
                                <span className={css.featuredImage}>
                                    <Image 
                                        src={featuredImage} 
                                        height={400} 
                                        width={600} 
                                        alt={title} 
                                        loading="eager"
                                        style={{ objectFit: 'cover' }}
                                    />
                                </span>
                                
                                <span className={css.header}>
                                    {/* 5. Fixed Link URL */}
                                    <a href={url} rel="noreferrer" target="_blank">
                                        {title} <Icon icon={['fad', 'arrow-up-right-from-square']} />
                                    </a>
                                </span>

                                <span className={css.descriptionContainer}>
                                    {/* Using a paragraph or smaller tag is often better for layout than h3 */}
                                    <p className={css.excerpt}>{description}</p>
                                </span>

                                <span className={css.details}>
                                    <p>By {user.name}</p>
                                    <p className={css.pushedAt}>{date}</p>
                                </span>

                                {tagArray.length > 0 && (
                                    <span className={css.topicsContainer}>
                                        {tagArray.map((tag, index) => (
                                            <span key={index} className={css.topics}>
                                                <Icon icon={['fab', 'dev']} /> {tag}
                                            </span>
                                        ))}
                                    </span>
                                )}
                            </article>
                        );
                    })}
                </section>
            </Container>
        </Section>
    );
};

export default DevToRecent;