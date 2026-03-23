import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      // Show button when user scrolls down exactly past the hero
      if (latest > 0.05) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-8 right-8 z-50 flex flex-col items-center gap-2 pointer-events-auto"
    >
      <button
        onClick={scrollToTop}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#0a0a0a] bg-opacity-80 backdrop-blur-md shadow-[0_0_15px_rgba(255,195,0,0.1)] group transition-all duration-300 hover:scale-110 hover:shadow-[0_0_25px_rgba(255,195,0,0.4)]"
        aria-label="Scroll to top"
      >
        {/* SVG Progress Circle Background */}
        <svg className="absolute inset-0 w-full h-full transform -rotate-90 pointer-events-none" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="46"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="4"
            fill="none"
          />
          {/* Framer Motion Animated Progress Circle */}
          <motion.circle
            cx="50"
            cy="50"
            r="46"
            stroke="#FFC300"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            style={{
              pathLength: scaleX
            }}
          />
        </svg>

        {/* Content (Percentage or Arrow) */}
        <div className="absolute flex items-center justify-center text-[#FFC300] font-bold text-sm pointer-events-none transition-all duration-300">
          {isHovered ? (
            <motion.svg 
              initial={{ y: 5, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </motion.svg>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <MathText progress={scaleX} />
            </motion.div>
          )}
        </div>
      </button>
    </motion.div>
  );
};

// Component to dynamically display the rounded percentage integer
const MathText = ({ progress }) => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    return progress.on("change", v => setPercent(Math.round(v * 100)));
  }, [progress]);

  return <span className="pt-0.5">{percent}%</span>;
};

export default ScrollToTop;
