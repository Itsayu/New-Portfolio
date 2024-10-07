// import React, { useState, useEffect } from "react";
// import colors from "../src/content/index/_colors.json";
// import TitleIndex from "./title.index";
// import dynamic from "next/dynamic";

// // Dynamic imports
// const Hero = dynamic(() => import("../src/components/sections/index/hero"));
// const Looking = dynamic(() => import("../src/components/sections/index/looking"));
// const About = dynamic(() => import("../src/components/sections/index/home"));
// const Technical = dynamic(() => import("../src/components/sections/index/technical"));
// const Career = dynamic(() => import("../src/components/sections/index/optional/career"));
// const FeaturedProjects = dynamic(() => import("../src/components/sections/projects/featured"));
// const QnA = dynamic(() => import("../src/components/sections/index/qna"));
// const Color = dynamic(() => import("../src/components/utils/page.colors"));
// import settings from "../src/content/_settings.json";
// import GithubGraphSection from "../src/components/sections/index/github.graph";
// import AboutTerminal from "../src/components/AboutTerminal";

// interface HomePageProps {
//   spacing: string[];
// }

// export default function HomePage({ spacing }: HomePageProps) {
//   const [componentsLoaded, setComponentsLoaded] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setComponentsLoaded(true);
//     }, 2000);
//     return () => clearTimeout(timer);
//   }, []);

//   const renderContent = () => (
//     <div>
//       <Hero />
//       <Looking />
//       <AboutTerminal />
//       <About />
//       <GithubGraphSection />
//       <FeaturedProjects />
//       <Technical />
//       <Career />
//       <QnA />
//     </div>
//   );

//   return (
//     <div>
//       <TitleIndex />
//       <Color colors={colors} />
//       {/* Directly render content as we no longer want the LoadingAnim */}
//       {renderContent()}
//     </div>
//   );
// }





import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import colors from "../src/content/index/_colors.json";
import TitleIndex from "./title.index";

const Hero = dynamic(() => import("../src/components/sections/index/hero"));
const Looking = dynamic(() => import("../src/components/sections/index/looking"));
const About = dynamic(() => import("../src/components/sections/index/home"));
const Technical = dynamic(() => import("../src/components/sections/index/technical"));
const Career = dynamic(() => import("../src/components/sections/index/optional/career"));
const FeaturedProjects = dynamic(() => import("../src/components/sections/projects/featured"));
const QnA = dynamic(() => import("../src/components/sections/index/qna"));
const Color = dynamic(() => import("../src/components/utils/page.colors"));
import GithubGraphSection from "../src/components/sections/index/github.graph";
import AboutTerminal from "../src/components/AboutTerminal";
import ConfettiComponent from "../src/components/ConfettiComponent"; // Import your Confetti component

interface HomePageProps {
  spacing: string[];
}

export default function HomePage({ spacing }: HomePageProps) {
  const [showConfetti, setShowConfetti] = useState(false);
  const [componentsLoaded, setComponentsLoaded] = useState(false);

  useEffect(() => {
    // Check if the user has already seen the confetti effect
    const hasSeenConfetti = localStorage.getItem("hasSeenConfetti");

    if (!hasSeenConfetti) {
      setShowConfetti(true);
      localStorage.setItem("hasSeenConfetti", "true");
    }

    // Set componentsLoaded to true after a delay
    const timer = setTimeout(() => {
      setComponentsLoaded(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const renderContent = () => (
    <div>
      <Hero />
      <Looking />
      <AboutTerminal />
      <About />
      <GithubGraphSection />
      <FeaturedProjects />
      <Technical />
      <Career />
      <QnA />
    </div>
  );

  return (
    <div>
      <TitleIndex />
      <Color colors={colors} />
      {showConfetti && <ConfettiComponent onComplete={() => setShowConfetti(false)} />}
      {renderContent()}
    </div>
  );
}
