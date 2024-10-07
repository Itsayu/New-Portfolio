import React, { useState, useEffect } from 'react';
import styles from '../../styles/AboutTerminal.module.css';
import info from '../../../data/aboutMe';
import Statement from '../Statement';

const AboutTerminal: React.FC = () => {
  const [visibleIndex, setVisibleIndex] = useState(-1);
  const [finished, setFinished] = useState(false);
  const colorMode = typeof window !== 'undefined' ? 
    (document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light') : 
    'dark';
  
  const content = info(colorMode);

  useEffect(() => {
    if (visibleIndex === content.length - 1) {
      setFinished(true);
    }
  }, [visibleIndex, content.length]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && visibleIndex === -1) {
        setVisibleIndex(0);
      }
    };

    window.addEventListener('keypress', handleKeyPress);
    return () => window.removeEventListener('keypress', handleKeyPress);
  }, [visibleIndex]);

  // Handle both click and touch events
  const handleInteraction = () => {
    if (visibleIndex === -1) {
      setVisibleIndex(0);
    }
  };

  return (
    <div className={styles.terminalContainer}>
      <div className={styles.terminalHeader}>
        <div className={styles.controlButtons}>
          <div className={`${styles.controlButton} ${styles.redButton}`}></div>
          <div className={`${styles.controlButton} ${styles.yellowButton}`}></div>
          <div className={`${styles.controlButton} ${styles.greenButton}`}></div>
        </div>
        <div className={styles.headerTitle}>
          {finished ? 'Executed' : 'Executing'}: introduceSelf.js
        </div>
      </div>
      <div 
        className={styles.terminalBody}
        onClick={handleInteraction}
        role="button"
        tabIndex={0}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            handleInteraction();
          }
        }}
      >
        <div className={styles.terminalBackground}></div>
        <div className={styles.content}>
          {visibleIndex === -1 ? (
            <>
              <div className={styles.statement}>
                <span className={styles.prompt}>&gt; </span>
                self.learnAboutMe()
              </div>
              <div className={styles.statement}>
                {window.innerWidth <= 768 ? 'Tap' : 'Press enter'} to see what I am about
                <span className={styles.cursor}></span>
              </div>
            </>
          ) : (
            content.map((item, i) => (
              <Statement
                key={i}
                thisIndex={i}
                setVisibleIndex={setVisibleIndex}
                visibleIndex={visibleIndex}
                input={item.input}
                return={item.return}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutTerminal;