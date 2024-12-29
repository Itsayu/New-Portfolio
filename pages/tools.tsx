


// pages/tools.tsx
import React, { useState } from "react";
import {
  FaDiscord,
  FaSpotify,
  FaGithub,
  FaFigma,
  FaCodepen,
  FaReact,
  FaJs,
  FaCss3Alt,
  FaHtml5,
  FaGitAlt,
  FaBootstrap,
  FaChrome,
  FaWindows,
  FaNode,
} from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiGrammarly, SiNotion, SiTailwindcss, SiVisualstudiocode } from "react-icons/si";
import styles from "../src/styles/scss/Tools.module.scss";

interface Tool {
  name: string;
  category: string;
  description: string;
  icon: JSX.Element;
}

const tools: Tool[] = [
  {
    name: "Discord",
    category: "Windows",
    description: "A voice chat app.",
    icon: <FaDiscord size={50} />,
  },
  {
    name: "VS Code",
    category: "Windows",
    description: "A powerful code editor for all your programming needs.",
    icon: <SiVisualstudiocode size={50} />,
  },
  {
    name: "Spotify",
    category: "Windows",
    description: "For music",
    icon: <FaSpotify size={50} />,
  },
  {
    name: "Grammarly",
    category: "Chrome",
    description: "Grammar correction and writing enhancement tool.",
    icon: <SiGrammarly size={50} />,
  },
  {
    name: "Google Keep",
    category: "Chrome",
    description: "Organize your notes and thoughts.",
    icon: <FaChrome size={50} />,
  },
  {
    name: "Figma",
    category: "Web",
    description: "Design and prototype websites and apps collaboratively.",
    icon: <FaFigma size={50} />,
  },
  {
    name: "Notion",
    category: "Web",
    description: "All-in-one workspace for notes, tasks, and databases.",
    icon: <SiNotion size={50} />,
  },
  {
    name: "HTML5",
    category: "Web",
    description: "A markup language for the structure of web pages.",
    icon: <FaHtml5 size={50} />,
  },
  {
    name: "CSS3",
    category: "Web",
    description: "A style sheet language for the design of web pages.",
    icon: <FaCss3Alt size={50} />,
  },
  {
    name: "JavaScript",
    category: "Web",
    description: "A programming language for the web.",
    icon: <FaJs size={50} />,
  },
  {
    name: "TypeScript",
    category: "Web",
    description:
      "A typed superset of JavaScript that compiles to plain JavaScript.",
    icon: <SiTypescript size={50} />,
  },
  {
    name: "ReactJS",
    category: "Web",
    description: "A JavaScript library for building user interfaces.",
    icon: <FaReact size={50} />,
  },
  {
    name: "NextJS",
    category: "Web",
    description: "A React framework for production.",
    icon: <SiNextdotjs size={50} />,
  },
  {
    name: "Bootstrap",
    category: "Web",
    description: "A CSS framework for building responsive websites.",
    icon: <FaBootstrap size={50} />,
  },
  {
    name: "Tailwind CSS",
    category: "Web",
    description: "A utility-first CSS framework for rapid UI development.",
    icon: <SiTailwindcss size={50} />,
  },
  {
    name: "Git",
    category: "Web",
    description: "A distributed version control system.",
    icon: <FaGitAlt size={50} />,
  },
  {
    name: "GitHub",
    category: "Web",
    description:
      "A platform for hosting and collaborating on Git repositories.",
    icon: <FaGithub size={50} />,
  },
  {
    name: "CodePen",
    category: "Web",
    description:
      "An online community for testing and showcasing user-created HTML, CSS, and JavaScript code snippets.",
    icon: <FaCodepen size={50} />,
  },
];

export default function Tools() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Web");

  const categories = ["Web", "Windows", "Chrome"];

  const filteredTools = tools.filter(
    (tool) => tool.category === selectedCategory
  );

  return (
    <div className={styles.toolsBody}>
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
                  {tool.icon}
                </div>
                <div className={styles.content}>
                  <h3 className={styles.name}>{tool.name}</h3>
                  <span className={styles.category}>{tool.category}</span>
                  <p className={styles.description}>{tool.description}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No tools available in this category.</p>
          )}
        </div>
      </div>
    </div>
  );
}
