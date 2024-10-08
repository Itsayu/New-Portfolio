// // pages/tools.tsx
// import React, { useState } from "react";
// import Image from "next/image";
// import styles from "../src/styles/scss/Tools.module.scss";

// interface Tool {
//   name: string;
//   category: string;
//   description: string;
//   icon: string;
// }

// const tools: Tool[] = [
//   {
//     name: "Discord",
//     category: "Windows",
//     description: "A voice chat app.",
//     icon: "/icons/discord.png",
//   },
//   {
//     name: "VS Code",
//     category: "Windows",
//     description: "A powerful code editor for all your programming needs.",
//     icon: "/icons/vscode.png",
//   },
//   {
//     name: "Visual Studio Code",
//     category: "Windows",
//     description: "A powerful code editor for all your programming needs.",
//     icon: "/icons/vscode.png",
//   },
//   {
//     name: "Spotify",
//     category: "Windows",
//     description: "For music",
//     icon: "/icons/spotify.png",
//   },
//   {
//     name: "Grammarly",
//     category: "Chrome",
//     description: "Grammar correction and writing enhancement tool.",
//     icon: "/icons/grammarly.png",
//   },
//   {
//     name: "Google Keep",
//     category: "Chrome",
//     description: "Organize your notes and thoughts.",
//     icon: "/icons/keep.png",
//   },
//   {
//     name: "Figma",
//     category: "Web",
//     description: "Design and prototype websites and apps collaboratively.",
//     icon: "/icons/figma.png",
//   },
//   {
//     name: "Notion",
//     category: "Web",
//     description: "All-in-one workspace for notes, tasks, and databases.",
//     icon: "/icons/notion.png",
//   },
//   {
//     name: "HTML5",
//     category: "Web",
//     description: "A markup language for the structure of web pages.",
//     icon: "/icons/html.png",
//   },
//   {
//     name: "CSS3",
//     category: "Web",
//     description: "A style sheet language for the design of web pages.",
//     icon: "/icons/css.png",
//   },
//   {
//     name: "JavaScript",
//     category: "Web",
//     description: "A programming language for the web.",
//     icon: "/icons/javascript.png",
//   },
//   {
//     name: "TypeScript",
//     category: "Web",
//     description:
//       "A typed superset of JavaScript that compiles to plain JavaScript.",
//     icon: "/icons/typeScript.png",
//   },
//   {
//     name: "ReactJS",
//     category: "Web",
//     description: "A JavaScript library for building user interfaces.",
//     icon: "/icons/react.png",
//   },
//   {
//     name: "NextJS",
//     category: "Web",
//     description: "A React framework for production.",
//     icon: "/icons/next.png",
//   },
//   {
//     name: "Bootstrap",
//     category: "Web",
//     description: "A CSS framework for building responsive websites.",
//     icon: "/icons/bootstrap.png",
//   },
//   {
//     name: "Tailwind CSS",
//     category: "Web",
//     description: "A utility-first CSS framework for rapid UI development.",
//     icon: "/icons/typeScript.png",
//   },
//   {
//     name: "Git",
//     category: "Web",
//     description: "A distributed version control system.",
//     icon: "/icons/git.png",
//   },
//   {
//     name: "GitHub",
//     category: "Web",
//     description:
//       "A platform for hosting and collaborating on Git repositories.",
//     icon: "/icons/github.png",
//   },
//   {
//     name: "CodePen",
//     category: "Web",
//     description:
//       "An online community for testing and showcasing user-created HTML, CSS, and JavaScript code snippets.",
//     icon: "/icons/codepen.png",
//   },
//   {
//     name: "Repl.it",
//     category: "Web",
//     description: "An online IDE for programming in many languages.",
//     icon: "/icons/repl.png",
//   },
// ];

// export default function Tools() {
//   const [selectedCategory, setSelectedCategory] = useState<string>("Web");

//   const categories = ["Web", "Windows", "Chrome"];

//   const filteredTools = tools.filter(
//     (tool) => tool.category === selectedCategory
//   );

//   return (
//     <div ClassName={styles.toolsBody}>
//       <div className={styles.container}>
//         <p className={styles.subtitle}>Some tools that I find useful :)</p>
//         <h1 className={styles.title}>Tools</h1>

//         <div className={styles.filter}>
//           {categories.map((category) => (
//             <button
//               key={category}
//               className={`${styles.filterButton} ${
//                 selectedCategory === category ? styles.active : ""
//               }`}
//               onClick={() => setSelectedCategory(category)}
//             >
//               {category}
//             </button>
//           ))}
//         </div>

//         <div className={styles.grid}>
//           {filteredTools.map((tool, index) => (
//             <div key={index} className={styles.card}>
//               <div className={styles.icon}>
//                 <Image src={tool.icon} alt={tool.name} width={50} height={50} />
//               </div>
//               <div className={styles.content}>
//                 <h3 className={styles.name}>{tool.name}</h3>
//                 <span className={styles.category}>{tool.category}</span>
//                 <p className={styles.description}>{tool.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }





// pages/tools.tsx
import React, { useState } from "react";
import Image from "next/image";
import styles from "../src/styles/scss/Tools.module.scss";

interface Tool {
  name: string;
  category: string;
  description: string;
  icon: string;
}

const tools: Tool[] = [
  {
    name: "Discord",
    category: "Windows",
    description: "A voice chat app.",
    icon: "/icons/discord.png",
  },
  {
    name: "VS Code",
    category: "Windows",
    description: "A powerful code editor for all your programming needs.",
    icon: "/icons/vscode.png",
  },
  {
    name: "Spotify",
    category: "Windows",
    description: "For music",
    icon: "/icons/spotify.png",
  },
  {
    name: "Grammarly",
    category: "Chrome",
    description: "Grammar correction and writing enhancement tool.",
    icon: "/icons/grammarly.png",
  },
  {
    name: "Google Keep",
    category: "Chrome",
    description: "Organize your notes and thoughts.",
    icon: "/icons/keep.png",
  },
  {
    name: "Figma",
    category: "Web",
    description: "Design and prototype websites and apps collaboratively.",
    icon: "/icons/figma.png",
  },
  {
    name: "Notion",
    category: "Web",
    description: "All-in-one workspace for notes, tasks, and databases.",
    icon: "/icons/notion.png",
  },
  {
    name: "HTML5",
    category: "Web",
    description: "A markup language for the structure of web pages.",
    icon: "/icons/html.png",
  },
  {
    name: "CSS3",
    category: "Web",
    description: "A style sheet language for the design of web pages.",
    icon: "/icons/css.png",
  },
  {
    name: "JavaScript",
    category: "Web",
    description: "A programming language for the web.",
    icon: "/icons/javascript.png",
  },
  {
    name: "TypeScript",
    category: "Web",
    description:
      "A typed superset of JavaScript that compiles to plain JavaScript.",
    icon: "/icons/typeScript.png",
  },
  {
    name: "ReactJS",
    category: "Web",
    description: "A JavaScript library for building user interfaces.",
    icon: "/icons/react.png",
  },
  {
    name: "NextJS",
    category: "Web",
    description: "A React framework for production.",
    icon: "/icons/next.png",
  },
  {
    name: "Bootstrap",
    category: "Web",
    description: "A CSS framework for building responsive websites.",
    icon: "/icons/bootstrap.png",
  },
  {
    name: "Tailwind CSS",
    category: "Web",
    description: "A utility-first CSS framework for rapid UI development.",
    icon: "/icons/tailwind.png", // Fixed path to tailwind icon
  },
  {
    name: "Git",
    category: "Web",
    description: "A distributed version control system.",
    icon: "/icons/git.png",
  },
  {
    name: "GitHub",
    category: "Web",
    description:
      "A platform for hosting and collaborating on Git repositories.",
    icon: "/icons/github.png",
  },
  {
    name: "CodePen",
    category: "Web",
    description:
      "An online community for testing and showcasing user-created HTML, CSS, and JavaScript code snippets.",
    icon: "/icons/codepen.png",
  },
  {
    name: "Repl.it",
    category: "Web",
    description: "An online IDE for programming in many languages.",
    icon: "/icons/repl.png",
  },
];

export default function Tools() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Web");

  const categories = ["Web", "Windows", "Chrome"];

  const filteredTools = tools.filter(
    (tool) => tool.category === selectedCategory
  );

  return (
    <div className={styles.toolsBody}> {/* Fixed typo here */}
      <div className={styles.container}>
        <p className={styles.subtitle}>Some tools that I find useful :)</p>
        <h1 className={styles.title}>Tools</h1>

        <div className={styles.filter}>
          {categories.map((category) => (
            <button
              key={category}
              className={`${styles.filterButton} ${
                selectedCategory === category ? styles.active : ""
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {filteredTools.length > 0 ? (
            filteredTools.map((tool, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.icon}>
                  <Image src={tool.icon} alt={tool.name} width={50} height={50} />
                </div>
                <div className={styles.content}>
                  <h3 className={styles.name}>{tool.name}</h3>
                  <span className={styles.category}>{tool.category}</span>
                  <p className={styles.description}>{tool.description}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No tools available in this category.</p> // Handle empty state
          )}
        </div>
      </div>
    </div>
  );
}
