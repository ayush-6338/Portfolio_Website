import React from 'react';
import { motion } from 'framer-motion';

const CodingJourney = () => {
  return (
    <section id="coding-journey" className="relative py-20 px-5 sm:px-10 flex flex-col items-center overflow-hidden bg-[#0a0a0a]">
      {/* Background Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-[#FFC300] opacity-10 blur-[100px] rounded-full pointer-events-none" />

      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="z-10 text-center mb-12 sm:mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
          Coding <span className="text-[#FFC300]">Journey</span>
        </h2>
        <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-4">
          Consistently solving problems to strengthen data structures and algorithms skills.
        </p>
      </motion.div>

      {/* LeetCode Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="z-10 w-full max-w-3xl"
      >
        <a 
          href="https://leetcode.com/Ayush07raj" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block group cursor-pointer"
        >
          <div className="relative p-4 sm:p-6 md:p-8 rounded-2xl md:rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 transition-all duration-300 ease-out group-hover:scale-105 group-hover:border-[#FFC300]/60 group-hover:shadow-[0_0_40px_rgba(255,195,0,0.15)] flex flex-col items-center overflow-hidden">
            {/* Inner subtle glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#FFC300]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            
            <img 
              src="https://leetcard.jacoblin.cool/Ayush07raj?theme=light&font=Donegal%20One&ext=heatmap" 
              alt="Ayush LeetCode Stats" 
              className="w-full h-auto object-contain rounded-lg md:rounded-xl relative z-10 filter drop-shadow hover:drop-shadow-lg transition-all"
              loading="lazy"
            />
          </div>
        </a>
      </motion.div>
    </section>
  );
};

export default CodingJourney;
