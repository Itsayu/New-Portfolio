'use client';

import React, { useState, useEffect } from 'react';
import GitHubCalendar from 'react-github-calendar';
import styles from "../../../styles/scss/sections/index/career.module.scss";
import SectionTitle from "../../blocks/section.title";
import Section from "../../structure/section";
import Container from "../../structure/container";

const currentYear = new Date().getFullYear(); // Evaluates to current year

export default function GithubGraphSection() {
    const [year, setYear] = useState<number>(currentYear);
    const [mounted, setMounted] = useState<boolean>(false);

    // FIX: Client-side hydration gate. 
    // Prevents the third-party calendar from evaluating window/document references during Vercel's static builds.
    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <Section classProp={`${styles.section} borderBottom`}>
            <Container spacing={['verticalXXXLrg']}>
                <SectionTitle
                    title="Github Contributions"
                    preTitle="My Way"
                    subTitle={`My GitHub Contributions show my ongoing open-source involvement in ${year}, a fulfilling hobby I engage in during my free time.`}
                />
                <section className={`${styles.area}`}>
                    <div className={styles.company}>
                        <div className={` w-full space-y-6 pb-18 pt-100 md:space-y-12`}>
                            <div className="mt-3 flex flex-wrap gap-3 text-md leading-7">
                                <button
                                    key={currentYear}
                                    className="cursor-pointer text-primary-500 hover:text-primary-800"
                                    onClick={() => setYear(currentYear)}
                                >
                                    {currentYear}
                                </button>
                            </div>
                            <div
                                className="p-4 w-full md:p-6 flex justify-center items-center overflow-hidden rounded-md border-2 border-opacity-60 border-gray-700 transition-all hover:border-primary-900"
                            >
                                <div className="w-full max-w-screen-md">
                                    {mounted ? (
                                        <GitHubCalendar
                                            key={`${year}-calendar`}
                                            username="itsayu"
                                            year={year}
                                            colorScheme="dark"
                                        />
                                    ) : (
                                        /* Safe structural placeholder to prevent layout shifts during hydration */
                                        <div style={{ minHeight: '160px', width: '100%' }} />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Container>
        </Section>
    );
}