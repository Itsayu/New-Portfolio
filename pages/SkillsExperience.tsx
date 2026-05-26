import React from 'react';
import Image from 'next/image';
import Head from 'next/head'; // Imported for SEO Meta tags
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faBootstrap,
  faGit,
  faGithub,
  faGitlab,
} from '@fortawesome/free-brands-svg-icons';
import {
  faDatabase,
  faCode,
  faServer,
  faTerminal,
  faCloud,
} from '@fortawesome/free-solid-svg-icons';
import { 
  SiTypescript, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiVisualstudiocode,
  SiGo,          
  SiAngular,     
  SiIonic,       
  SiMongodb,     
  SiFirebase,    
  SiVercel       
} from "react-icons/si";
import styles from '../src/styles/scss/structure/skillsExperience.module.scss';

interface ExperienceItem {
  company: string;
  logo: string;
  role: string;
  period: string;
  description: string;
  current?: boolean;
}

interface Skill {
  name: string;
  icon: JSX.Element;
  color: string;
}

export default function SkillsExperience() {
  const programmingLanguages: Skill[] = [
    { name: 'C++', icon: <FontAwesomeIcon icon={faCode} />, color: 'var(--icon-color)' },
    { name: 'Typescript', icon: <SiTypescript />, color: 'var(--icon-color)' },
    { name: 'Go lang', icon: <SiGo />, color: 'var(--icon-color)' }, 
    { name: 'C', icon: <FontAwesomeIcon icon={faCode} />, color: 'var(--icon-color)' },
    { name: 'HTML', icon: <FontAwesomeIcon icon={faHtml5} />, color: '#E34F26' },
    { name: 'CSS', icon: <FontAwesomeIcon icon={faCss3Alt} />, color: '#1572B6' },
    { name: 'JavaScript', icon: <FontAwesomeIcon icon={faJs} />, color: '#F7DF1E' },
  ];

  const frameworks: Skill[] = [
    { name: 'ReactJS', icon: <FontAwesomeIcon icon={faReact} />, color: 'var(--icon-color)' },
    { name: 'NextJs', icon: <SiNextdotjs />, color: 'var(--icon-color)' },
    { name: 'Angular', icon: <SiAngular />, color: 'var(--icon-color)' }, 
    { name: 'Ionic', icon: <SiIonic />, color: 'var(--icon-color)' },     
    { name: 'Bootstrap', icon: <FontAwesomeIcon icon={faBootstrap} />, color: 'var(--icon-color)' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'var(--icon-color)' },
    { name: 'jQuery', icon: <FontAwesomeIcon icon={faCode} />, color: 'var(--icon-color)' },
  ];

  const tools: Skill[] = [
    { name: 'MySQL', icon: <FontAwesomeIcon icon={faDatabase} />, color: 'var(--icon-color)' },
    { name: 'MongoDB', icon: <SiMongodb />, color: 'var(--icon-color)' }, 
    { name: 'Firebase', icon: <SiFirebase />, color: 'var(--icon-color)' }, 
    { name: 'Postman', icon: <FontAwesomeIcon icon={faServer} />, color: 'var(--icon-color)' },
    { name: 'VS Code', icon: <SiVisualstudiocode />, color: 'var(--icon-color)' },
    { name: 'Git', icon: <FontAwesomeIcon icon={faGit} />, color: 'var(--icon-color)' },
    { name: 'GitHub', icon: <FontAwesomeIcon icon={faGithub} />, color: 'var(--icon-color)' },
    { name: 'GitLab', icon: <FontAwesomeIcon icon={faGitlab} />, color: 'var(--icon-color)' },
    { name: 'Vercel', icon: <SiVercel />, color: 'var(--icon-color)' }, 
    { name: 'Netlify', icon: <FontAwesomeIcon icon={faCloud} />, color: 'var(--icon-color)' },
    { name: 'ViteJS', icon: <FontAwesomeIcon icon={faTerminal} />, color: 'var(--icon-color)' },
  ];

  const experience: ExperienceItem[] = [
    {
      company: 'Niwi.ai',
      logo: '/logos/niwi.jpeg',
      role: 'Software Engineer',
      period: 'May 2024 - Present',
      description: 'Currently contributing to scalable software solutions and working on core platform functionalities.',
      current: true,
    },
    {
      company: 'Beta Byte Technologies',
      logo: '/logos/bbt.jpeg',
      role: 'Web Developer',
      period: 'Feb 2024 - May 2024',
      description: 'Engaged in full-stack development tasks, contributing to both front-end and back-end projects.',
    },
    {
      company: 'Gravity Infinity',
      logo: '/logos/gravity.jpeg',
      role: 'Web Developer',
      period: 'Aug 2023 - Feb 2024',
      description: "Collaborated in building responsive web applications and modernizing the company's web assets for enhanced user experience.",
    },
    {
      company: 'Zymo.app',
      logo: '/logos/zymo.jpeg',
      role: 'Web Developer Intern',
      period: 'Mar 2023 - May 2023',
      description: 'Developed user-centric web features and optimized existing solutions for a client-focused platform.',
    },
    {
      company: 'CodersCanteen',
      logo: '/logos/codersCanteen.png',
      role: 'Co-Founder & Content Writer',
      period: 'Mar 2022 - May 2024',
      description: 'Led content creation and community building for a student-operated platform offering coding tutorials, courses, and blogs.',
    },
  ];

  return (
    <>
      {/* Dynamic SEO Meta Tags (Change placeholder text to your actual name) */}
      <Head>
        <title>Skills & Professional Experience | Software Engineer Portfolio</title>
        <meta 
          name="description" 
          content="Explore my professional journey and technical expertise. Proficient in Next.js, React, Go lang, Angular, MongoDB, Tailwind CSS, and cloud deployment tools like Vercel." 
        />
        <meta name="keywords" content="Software Engineer, Web Developer, React, Next.js, Go lang, Angular, Ionic, MongoDB, Firebase, Vercel, Portfolio, Work Experience" />
        <meta property="og:title" content="Skills & Professional Experience | Software Engineer Portfolio" />
        <meta property="og:description" content="A summary of core technical skills and professional web development journey." />
        <meta name="robots" content="index, follow" />
      </Head>

      <div className={styles.skillsContainer}>
        <main className={styles.content}>
          <h1 className={styles.title}>Skills & Experience</h1>

          <div className={styles.gridContainer}>
            {/* Skills Section (Changed to semantic <section>) */}
            <section className={styles.skillsSection} aria-label="Technical Skills">
              
              {/* Programming Languages */}
              <div className={styles.skillCategory}>
                <h2>Programming Languages</h2>
                <div className={styles.skillGrid}>
                  {programmingLanguages.map((lang, index) => (
                    <div key={index} className={styles.skillCard}>
                      <div className={styles.iconContainer} aria-hidden="true">
                        {lang.icon}
                      </div>
                      <span className={styles.skillName}>{lang.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Frameworks/Libraries */}
              <div className={styles.skillCategory}>
                <h2>Frameworks & Libraries</h2>
                <div className={styles.skillGrid}>
                  {frameworks.map((framework, index) => (
                    <div key={index} className={styles.skillCard}>
                      <div className={styles.iconContainer} aria-hidden="true">
                        {framework.icon}
                      </div>
                      <span className={styles.skillName}>{framework.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div className={styles.skillCategory}>
                <h2>Tools & Databases</h2>
                <div className={styles.skillGrid}>
                  {tools.map((tool, index) => (
                    <div key={index} className={styles.skillCard}>
                      <div className={styles.iconContainer} aria-hidden="true">
                        {tool.icon}
                      </div>
                      <span className={styles.skillName}>{tool.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Experience Section (Changed to semantic <section>) */}
            <section className={styles.experienceSection} aria-label="Professional Journey">
              <h2 className={styles.experienceTitle}>Professional Journey</h2>
              <div className={styles.timelineWrapper}>
                {experience.map((item, index) => (
                  /* Changed individual experiences into <article> elements for better SEO context */
                  <article 
                    key={index} 
                    className={`${styles.experienceCard} ${item.current ? styles.currentRole : ''}`}
                  >
                    {item.current && (
                      <div className={styles.currentBadge}>
                        <span className={styles.pulseIndicator}></span>
                        Current
                      </div>
                    )}
                    
                    <div className={styles.cardHeader}>
                      <div className={styles.logoWrapper}>
                        <Image
                          src={item.logo}
                          alt={`${item.company} logo`} // Better descriptive Alt text
                          width={60}
                          height={60}
                          style={{ objectFit: 'contain' }}
                          className={styles.companyLogo}
                        />
                      </div>
                      
                      <div className={styles.headerContent}>
                        <h3 className={styles.companyName}>{item.company}</h3>
                        <p className={styles.roleName}>{item.role}</p>
                        <p className={styles.periodText}>{item.period}</p>
                      </div>
                    </div>

                    <p className={styles.descriptionText}>{item.description}</p>
                    
                    <div className={styles.cardDecoration} aria-hidden="true"></div>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}