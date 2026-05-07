"use client";

import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion, AnimatePresence } from "framer-motion";

import Section from "../../structure/section";
import Container from "../../structure/container";
import Image from "next/image";

import space from "../../utils/spacing";
import HeroBg from "../../blocks/hero.bg/section-bg-color";

import hero from "../../../styles/scss/sections/index/hero.module.scss";
import button from "../../../styles/scss/blocks/button.module.scss";
import content from "../../../content/index/hero.json";

export default function Hero() {
  const [typingStatus, setTypingStatus] = useState("Initializing");
  const [activeTooltip, setActiveTooltip] = useState(null);

  return (
    <Section classProp={`${hero.section}`}>
      <Container spacing={"VerticalXXXL"}>
        {/* --- PRE-HEADER --- */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
          <TypeAnimation
            className={`${hero.preHeader}`}
            sequence={[
              content.intro.startDelay,
              () => setTypingStatus("typing"),
              content.intro.start,
              () => setTypingStatus("typed"),
              content.intro.deleteDelay,
              () => setTypingStatus("deleting"),
              content.intro.end,
              () => setTypingStatus("deleted"),
              content.intro.restartDelay,
            ]}
            speed={content.intro.speed}
            deletionSpeed={content.intro.deletionSpeed}
            wrapper={content.intro.wrapper}
            repeat={Infinity}
          />
        </div>

        {/* --- HEADER SECTION --- */}
        <section>
          <h1 className={hero.header} style={{ marginBottom: '0.5rem' }}>
            {content.header.name}
          </h1>
          
          {/* UPDATED: Smaller USP font */}
          <p 
            className={hero.primaryDim} 
            style={{ 
              fontSize: '1.25rem', // Smaller font size
              fontWeight: '400', 
              letterSpacing: '0.02em',
              marginTop: '-5px',
              opacity: 0.8 
            }}
          >
            {content.header.usp}
          </p>
        </section>

        {/* --- PARAGRAPH --- */}
        <section>
          <p className={`${hero.primaryBright} subtitle ${space(["verticalLrg"])}`}>
            {content.paragraph}
          </p>
        </section>

        {/* --- BUTTONS --- */}
        <section style={{ position: "relative", gap: "1rem", display: "flex", flexWrap: "wrap", alignItems: "center" }}>
          
          <div style={{ position: 'relative' }}>
            <button
              className={`button ${button.primary}`}
              onClick={() => (window.location = "mailto:ayushtiwari.connect@gmail.com")}
              onMouseEnter={() => setActiveTooltip("hire")}
              onMouseLeave={() => setActiveTooltip(null)}
            >
              {content.buttons.primary.title}
            </button>
            <AnimatePresence>
              {activeTooltip === "hire" && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 10 }}
                  style={{ position: 'absolute', bottom: '120%', left: 0, zIndex: 10 }}
                >
                  <Image src="/gif/hireme.gif" width={100} height={100} alt="Hire Me" style={{ borderRadius: '10px' }} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div style={{ position: 'relative' }}>
            <button
              className={`button ${button.secondary}`}
              onClick={() => window.open("https://www.linkedin.com/in/itsayu", "_blank")}
              onMouseEnter={() => setActiveTooltip("social")}
              onMouseLeave={() => setActiveTooltip(null)}
            >
              {content.buttons.secondary.title}
            </button>
            <AnimatePresence>
              {activeTooltip === "social" && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 10 }}
                  style={{ position: 'absolute', bottom: '120%', left: 0, zIndex: 10 }}
                >
                  <Image src="/gif/yes.gif" width={100} height={100} alt="LinkedIn" style={{ borderRadius: '10px' }} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button
            className={`button ${button.secondary}`}
            onClick={() => window.open("https://drive.google.com/drive/folders/13ncmo_Bc6XPbUB24bceaTTAkgDcfso3y?usp=sharing", "_blank")}
          >
            View Resume
          </button>
        </section>
      </Container>
      <HeroBg theme="bg-color-1" />
    </Section>
  );
}