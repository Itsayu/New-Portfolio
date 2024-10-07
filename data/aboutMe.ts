// data/aboutMe.ts
// interface ContentItem {
//   input: string;
//   return: string;
// }

// const style = (colorMode: 'light' | 'dark') =>
//   `color: var(--chakra-colors-brand-${
//     colorMode === 'light' ? '600' : '300'
//   });font-weight: 500;`;

// const info = (colorMode: 'light' | 'dark'): ContentItem[] => [
//   {
//     input: 'self.learnAboutMe()',
//     return: 'Loaded data...',
//   },
//   {
//     input: 'self.currentLocation',
//     return: '"Chandigarh, India"',
//   },
//   {
//     input: 'self.interests',
//     return: '["web dev", "software development", "reading"]',
//   },
//   {
//     input: 'self.education',
//     return: '"B.Tech - Chandigarh Group of Colleges"',
//   },
//   {
//     input: 'self.skills',
//     return: '[ "JavaScript", "Typescript", "React.Js", "Next.JS", "Bootstrap", "Tailwind", "SASS", "git"]',
//   },
//   {
//     input: 'self.contactMe()',
//     return: `["<a style="${style(colorMode)}" rel="noopener" href="https://www.linkedin.com/in/itsayu/">LinkedIn</a>", "<a style="${style(colorMode)}" rel="noopener" href="https://github.com/itsayu">Github</a>", "<a rel="noopener" style="${style(colorMode)}" href="mailto:ayushtiwari.connect@gmail.com">Email</a>"]`,
//   },
// ];

// export default info;











// data/aboutMe.ts

interface ContentItem {
  input: string;
  return: string;
}

const style = (colorMode: 'light' | 'dark') =>
  `color: var(--chakra-colors-brand-${colorMode === 'light' ? '600' : '300'}); font-weight: 500;`;

// Function to create a styled link
const createLink = (url: string, text: string, colorMode: 'light' | 'dark') => 
  `<a style="${style(colorMode)}" rel="noopener" href="${url}">${text}</a>`;

// Function to return an array of ContentItem objects based on the provided color mode
const info = (colorMode: 'light' | 'dark'): ContentItem[] => [
  {
    input: 'self.learnAboutMe()',
    return: 'Loaded data...',
  },
  {
    input: 'self.currentLocation',
    return: '"Chandigarh, India"',
  },
  {
    input: 'self.interests',
    return: '["web dev", "software development", "reading"]',
  },
  {
    input: 'self.education',
    return: '"B.Tech - Chandigarh Group of Colleges"',
  },
  {
    input: 'self.skills',
    return: '[ "JavaScript", "Typescript", "React.Js", "Next.JS", "Bootstrap", "Tailwind", "SASS", "git"]',
  },
  {
    input: 'self.contactMe()',
    return: `[
      ${createLink('https://www.linkedin.com/in/itsayu/', 'LinkedIn', colorMode)},
      ${createLink('https://github.com/itsayu', 'Github', colorMode)},
      ${createLink('mailto:ayushtiwari.connect@gmail.com', 'Email', colorMode)}
    ]`,
  },
];

export default info;
