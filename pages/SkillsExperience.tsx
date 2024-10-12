// import React from 'react';
// import Image from 'next/image';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faCopyright,
//   faHtml5,
//   faCss3Alt,
//   faJs,
//   faReact,
//   faBootstrap,
//   faGit,
//   faGithub,
//   faGitlab,
// } from '@fortawesome/free-brands-svg-icons';
// import {
//   faDatabase,
//   faCode,
//   faServer,
//   faBrowser,
//   faTerminal,
//   faCloud,
// } from '@fortawesome/free-solid-svg-icons';
// import { SiTypescript, SiNextdotjs, SiTailwindcss } from "react-icons/si";
// import styles from '../src/styles/scss/structure/skillsExperience.module.scss';

// interface ExperienceItem {
//   company: string;
//   logo: string;
//   role: string;
//   period: string;
//   description: string;
// }

// interface Skill {
//   name: string;
//   icon: any;
//   color: string;
// }

// export default function SkillsExperience() {
//   const programmingLanguages: Skill[] = [
//     { name: 'C++', icon: faCode, color: '#00599C' },
//     { name: 'Typescript', icon: SiTypescript, color: '#3776AB' },
//     { name: 'C', icon: faCode, color: '#A8B9CC' },
//     { name: 'HTML', icon: faHtml5, color: '#E34F26' },
//     { name: 'CSS', icon: faCss3Alt, color: '#1572B6' },
//     { name: 'JavaScript', icon: faJs, color: '#F7DF1E' },
//   ];

//   const frameworks: Skill[] = [
//     { name: 'ReactJS', icon: faReact, color: '#61DAFB' },
//     { name: 'NextJs', icon: SiNextdotjs, color: '#000000' }, // Replace with faReact as faN is not available
//     { name: 'Bootstrap', icon: faBootstrap, color: '#7952B3' },
//     { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
//     { name: 'jQuery', icon: faCode, color: '#0769AD' },
//   ];

//   const tools: Skill[] = [
//     { name: 'MySQL', icon: faDatabase, color: '#4479A1' },
//     { name: 'Postman', icon: faServer, color: '#FF6C37' },
//     { name: 'VS Code', icon: faBrowser, color: '#007ACC' },
//     { name: 'Git', icon: faGit, color: '#F05032' },
//     { name: 'GitHub', icon: faGithub, color: '#000000' },
//     { name: 'GitLab', icon: faGitlab, color: '#FCA121' },
//     { name: 'Netlify', icon: faCloud, color: '#00C7B7' },
//     { name: 'ViteJS', icon: faTerminal, color: '#646CFF' },
//   ];

//   const experience: ExperienceItem[] = [
//     {
//       company: 'CodersCanteen',
//       logo: '/logos/coderscanteen.png',
//       role: 'Co-Founder, & Content Writer',
//       period: 'Mar 2022 - May 2024',
//       description:
//         'Our platform serves as a hub for a variety of computer science courses and blogs. Operated entirely by students, our community strives to establish itself as a prominent coding platform, providing valuable resources and fostering learning opportunities.',
//     },
//     {
//       company: 'Zymo.app',
//       logo: '/logos/zymo.png',
//       role: 'Web Developer Intern',
//       period: 'Mar 2023 - May 2023',
//       description:
//         'Our platform serves as a hub for a variety of computer science courses and blogs. Operated entirely by students, our community strives to establish itself as a prominent coding platform, providing valuable resources and fostering learning opportunities.',
//     },
//     {
//       company: 'Gravity Infinity',
//       logo: '/logos/gravity.png',
//       role: 'Web Developer',
//       period: 'Aug 2023 - Feb 2024',
//       description:
//         'Our platform serves as a hub for a variety of computer science courses and blogs. Operated entirely by students, our community strives to establish itself as a prominent coding platform, providing valuable resources and fostering learning opportunities.',
//     },
//     {
//       company: 'Beta Byte Technologies',
//       logo: '/logos/bbt.png',
//       role: 'Web Developer',
//       period: 'Feb 2023 - May 2024',
//       description:
//         'Our platform serves as a hub for a variety of computer science courses and blogs. Operated entirely by students, our community strives to establish itself as a prominent coding platform, providing valuable resources and fostering learning opportunities.',
//     },
//     {
//       company: 'Niwi.ai',
//       logo: '/logos/niwi.png',
//       role: 'Software Engineer',
//       period: 'May 2024 - Present',
//       description:
//         'Our platform serves as a hub for a variety of computer science courses and blogs. Operated entirely by students, our community strives to establish itself as a prominent coding platform, providing valuable resources and fostering learning opportunities.',
//     },
//   ];

//   return (
//     <div className={styles.skillsContainer}>
//       <div className={styles.content}>
//         <h1 className={styles.title}>Skills & Experience</h1>

//         <div className={styles.gridContainer}>
//           {/* Skills Section */}
//           <div className={styles.skillsSection}>
//             {/* Programming Languages */}
//             <div className={styles.skillCategory}>
//               <h2>Programming Languages</h2>
//               <div className={styles.skillGrid}>
//                 {programmingLanguages.map((lang, index) => (
//                   <div key={index} className={styles.skillCard}>
//                     <div className={styles.iconContainer}>
//                       <FontAwesomeIcon
//                         icon={lang.icon}
//                         className={styles.icon}
//                         style={{ color: lang.color }}
//                       />
//                     </div>
//                     <span className={styles.skillName}>{lang.name}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Frameworks/Libraries */}
//             <div className={styles.skillCategory}>
//               <h2>Frameworks/Libraries</h2>
//               <div className={styles.skillGrid}>
//                 {frameworks.map((framework, index) => (
//                   <div key={index} className={styles.skillCard}>
//                     <div className={styles.iconContainer}>
//                       <FontAwesomeIcon
//                         icon={framework.icon}
//                         className={styles.icon}
//                         style={{ color: framework.color }}
//                       />
//                     </div>
//                     <span className={styles.skillName}>{framework.name}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Tools */}
//             <div className={styles.skillCategory}>
//               <h2>Tools</h2>
//               <div className={styles.skillGrid}>
//                 {tools.map((tool, index) => (
//                   <div key={index} className={styles.skillCard}>
//                     <div className={styles.iconContainer}>
//                       <FontAwesomeIcon
//                         icon={tool.icon}
//                         className={styles.icon}
//                         style={{ color: tool.color }}
//                       />
//                     </div>
//                     <span className={styles.skillName}>{tool.name}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Experience Section */}
//           <div className={styles.experienceSection}>
//             {experience.map((item, index) => (
//               <div key={index} className={styles.experienceItem}>
//                 <div className={styles.timelineDot} />

//                 <div className={styles.experienceHeader}>
//                   <div className={styles.logoContainer}>
//                     <Image
//                       src={item.logo}
//                       alt={item.company}
//                       width={100} // Specify width
//                       height={100} // Specify height
//                       objectFit="contain"
//                       className={styles.logo}
//                     />
//                   </div>
//                   <div className={styles.companyInfo}>
//                     <h3>{item.company}</h3>
//                     <p className={styles.period}>{item.period}</p>
//                   </div>
//                 </div>

//                 <h4 className={styles.role}>{item.role}</h4>
//                 <p className={styles.description}>{item.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }










import React from 'react';
import Image from 'next/image';
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
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiVisualstudiocode } from "react-icons/si";
import styles from '../src/styles/scss/structure/skillsExperience.module.scss';

interface ExperienceItem {
  company: string;
  logo: string;
  role: string;
  period: string;
  description: string;
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
    { name: 'C', icon: <FontAwesomeIcon icon={faCode} />, color: 'var(--icon-color)' },
    { name: 'HTML', icon: <FontAwesomeIcon icon={faHtml5} />, color: '#E34F26' },
    { name: 'CSS', icon: <FontAwesomeIcon icon={faCss3Alt} />, color: '#1572B6' },
    { name: 'JavaScript', icon: <FontAwesomeIcon icon={faJs} />, color: '#F7DF1E' },
  ];

  const frameworks: Skill[] = [
    { name: 'ReactJS', icon: <FontAwesomeIcon icon={faReact} />, color: 'var(--icon-color)' },
    { name: 'NextJs', icon: <SiNextdotjs />, color: 'var(--icon-color)' },
    { name: 'Bootstrap', icon: <FontAwesomeIcon icon={faBootstrap} />, color: 'var(--icon-color)' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'var(--icon-color)' },
    { name: 'jQuery', icon: <FontAwesomeIcon icon={faCode} />, color: 'var(--icon-color)' },
  ];

  const tools: Skill[] = [
    { name: 'MySQL', icon: <FontAwesomeIcon icon={faDatabase} />, color: 'var(--icon-color)' },
    { name: 'Postman', icon: <FontAwesomeIcon icon={faServer} />, color: 'var(--icon-color)' },
    { name: 'VS Code', icon: <SiVisualstudiocode />, color: 'var(--icon-color)' }, // Added VS Code
    { name: 'Git', icon: <FontAwesomeIcon icon={faGit} />, color: 'var(--icon-color)' },
    { name: 'GitHub', icon: <FontAwesomeIcon icon={faGithub} />, color: 'var(--icon-color)' },
    { name: 'GitLab', icon: <FontAwesomeIcon icon={faGitlab} />, color: 'var(--icon-color)' },
    { name: 'Netlify', icon: <FontAwesomeIcon icon={faCloud} />, color: 'var(--icon-color)' },
    { name: 'ViteJS', icon: <FontAwesomeIcon icon={faTerminal} />, color: 'var(--icon-color)' },
  ];

  const experience: ExperienceItem[] = [
    {
      company: 'CodersCanteen',
      logo: '/logos/codersCanteen.png',
      role: 'Co-Founder & Content Writer',
      period: 'Mar 2022 - May 2024',
      description:
        'Led content creation and community building for a student-operated platform offering coding tutorials, courses, and blogs.',
    },
    {
      company: 'Zymo.app',
      logo: '/logos/zymo.jpeg',
      role: 'Web Developer Intern',
      period: 'Mar 2023 - May 2023',
      description:
        'Developed user-centric web features and optimized existing solutions for a client-focused platform.',
    },
    {
      company: 'Gravity Infinity',
      logo: '/logos/gravity.jpeg',
      role: 'Web Developer',
      period: 'Aug 2023 - Feb 2024',
      description:
        'Collaborated in building responsive web applications and modernizing the company’s web assets for enhanced user experience.',
    },
    {
      company: 'Beta Byte Technologies',
      logo: '/logos/bbt.jpeg',
      role: 'Web Developer',
      period: 'Feb 2023 - May 2024',
      description:
        'Engaged in full-stack development tasks, contributing to both front-end and back-end projects.',
    },
    {
      company: 'Niwi.ai',
      logo: '/logos/niwi.jpeg',
      role: 'Software Engineer',
      period: 'May 2024 - Present',
      description:
        'Currently contributing to scalable software solutions and working on core platform functionalities.',
    },
  ];

  return (
    <div className={styles.skillsContainer}>
      <div className={styles.content}>
        <h1 className={styles.title}>Skills & Experience</h1>

        <div className={styles.gridContainer}>
          {/* Skills Section */}
          <div className={styles.skillsSection}>
            {/* Programming Languages */}
            <div className={styles.skillCategory}>
              <h2>Programming Languages</h2>
              <div className={styles.skillGrid}>
                {programmingLanguages.map((lang, index) => (
                  <div key={index} className={styles.skillCard}>
                    <div className={styles.iconContainer}>
                      {lang.icon}
                    </div>
                    <span className={styles.skillName}>{lang.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Frameworks/Libraries */}
            <div className={styles.skillCategory}>
              <h2>Frameworks/Libraries</h2>
              <div className={styles.skillGrid}>
                {frameworks.map((framework, index) => (
                  <div key={index} className={styles.skillCard}>
                    <div className={styles.iconContainer}>
                      {framework.icon}
                    </div>
                    <span className={styles.skillName}>{framework.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className={styles.skillCategory}>
              <h2>Tools</h2>
              <div className={styles.skillGrid}>
                {tools.map((tool, index) => (
                  <div key={index} className={styles.skillCard}>
                    <div className={styles.iconContainer}>
                      {tool.icon}
                    </div>
                    <span className={styles.skillName}>{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div className={styles.experienceSection}>
            {experience.map((item, index) => (
              <div key={index} className={styles.experienceItem}>
                <div className={styles.timelineDot} />

                <div className={styles.experienceHeader}>
                  <div className={styles.logoContainer}>
                    <Image
                      src={item.logo}
                      alt={item.company}
                      width={100}
                      height={100}
                      style={{ objectFit: 'contain' }}
                      className={styles.logo}
                    />
                  </div>
                  <div className={styles.companyInfo}>
                    <h3>{item.company}</h3>
                    <p className={styles.period}>{item.period}</p>
                  </div>
                </div>

                <h4 className={styles.role}>{item.role}</h4>
                <p className={styles.description}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
