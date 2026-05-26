import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Head from "next/head"; 
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
import ConfettiComponent from "../src/components/ConfettiComponent"; 

interface HomePageProps {
  spacing: string[];
}

export default function HomePage({ spacing }: HomePageProps) {
  const [showConfetti, setShowConfetti] = useState(false);
  const [componentsLoaded, setComponentsLoaded] = useState(false);

  useEffect(() => {
    const hasSeenConfetti = localStorage.getItem("hasSeenConfetti");

    if (!hasSeenConfetti) {
      setShowConfetti(true);
      localStorage.setItem("hasSeenConfetti", "true");
    }

    const timer = setTimeout(() => {
      setComponentsLoaded(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Using semantic <main> tag to tell search engines this is the primary content area
  const renderContent = () => (
    <main id="primary-content">
      <Hero />
      <Looking />
      <AboutTerminal />
      <About />
      <GithubGraphSection />
      <FeaturedProjects />
      <Technical />
      <Career />
      <QnA />
    </main>
  );

  return (
    <>
      {/* SEO Metadata Section 
        Replace placeholder brand names with your actual personal name if preferred 
      */}
      <Head>
        <title>Full Stack Software Engineer Portfolio | Web Developer</title>
        <meta 
          name="description" 
          content="Explore the professional portfolio of a Full Stack Software Engineer. Featuring production-ready projects, open-source GitHub contributions, technical expertise, and full-stack web development insights." 
        />
        <meta 
          name="keywords" 
          content="Software Engineer, Full Stack Developer, Web Developer Portfolio, Next.js, React, Go lang, Frontend Engineer, Github Graph, Technical Career" 
        />
        
        {/* Open Graph Tags for Social Media (LinkedIn, Twitter/X, etc.) */}
        <meta property="og:title" content="Full Stack Software Engineer Portfolio" />
        <meta property="og:description" content="Explore my full-stack web development journey, technical expertise, and featured projects." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.jpg" /> {/* Replace with a real cover image path if available */}
        
        {/* Search Engine Robots Rules */}
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yourdomain.com" /> {/* Replace with your real website URL */}
      </Head>

      <div>
        <TitleIndex />
        <Color colors={colors} />
        {showConfetti && <ConfettiComponent onComplete={() => setShowConfetti(false)} />}
        {renderContent()}
      </div>
    </>
  );
}