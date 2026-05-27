import React, { useState, useEffect } from 'react';
import styles from '../../styles/AboutTerminal.module.css';

// TypeWriter Component
const TypeWriter: React.FC<{
  text: string;
  delay?: number;
  onComplete?: () => void;
  className?: string;
}> = ({ text, delay = 50, onComplete, className = '' }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    } else if (onComplete) {
      onComplete();
    }
  }, [currentIndex, delay, text, onComplete]);

  return <span className={className}>{displayText}</span>;
};

// Enhanced Statement Component with HTML parsing
const Statement: React.FC<{
  thisIndex: number;
  setVisibleIndex: (index: number) => void;
  visibleIndex: number;
  input: string;
  return: string;
}> = ({ thisIndex, setVisibleIndex, visibleIndex, input, return: returnValue }) => {
  const [showReturn, setShowReturn] = useState(false);

  useEffect(() => {
    if (visibleIndex === thisIndex && !showReturn) {
      const timer = setTimeout(() => {
        setShowReturn(true);
        setVisibleIndex(thisIndex + 1);
      }, (input.length * 50) + 500);

      return () => clearTimeout(timer);
    }
    // FIXED: Added 'showReturn' to the dependency array below to satisfy react-hooks/exhaustive-deps
  }, [visibleIndex, thisIndex, setVisibleIndex, input.length, showReturn]);

  const formatReturn = (value: string) => {
    try {
      // Try to parse as JSON first (for arrays and objects)
      const parsed = JSON.parse(value);
      if (Array.isArray(parsed)) {
        // Handle arrays that might contain HTML
        return parsed.map((item, index) => {
          if (typeof item === 'string' && item.includes('</a>')) {
            // Parse HTML content
            return (
              <React.Fragment key={index}>
                {index > 0 && ', '}
                <span dangerouslySetInnerHTML={{ __html: item }} />
              </React.Fragment>
            );
          }
          return (
            <React.Fragment key={index}>
              {index > 0 && ', '}
              {JSON.stringify(item)}
            </React.Fragment>
          );
        });
      }
      return JSON.stringify(parsed);
    } catch (e) {
      // If not valid JSON, check if it's HTML
      if (typeof value === 'string' && value.includes('</a>')) {
        return <span dangerouslySetInnerHTML={{ __html: value }} />;
      }
      // Return as is if not JSON or HTML
      return value;
    }
  };

  if (visibleIndex < thisIndex) return null;

  return (
    <div className={styles.statement}>
      <span className={styles.prompt}>&gt; </span>
      {visibleIndex === thisIndex ? (
        <TypeWriter 
          text={input}
          delay={50}
          className={styles.typedInput}
        />
      ) : (
        <span>{input}</span>
      )}
      {showReturn && (
        <div className={styles.returnValue}>
          {formatReturn(returnValue)}
        </div>
      )}
    </div>
  );
};

export default Statement;