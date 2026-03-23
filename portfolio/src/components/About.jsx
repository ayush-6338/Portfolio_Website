import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className="py-24 bg-[#0a0a0a] text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-[#FFC300]/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:mb-20 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            About <span className="text-[#FFC300]">Me</span>
          </h2>
          <div className="w-24 h-1.5 bg-[#FFC300] mt-4 rounded-full mx-auto md:mx-0"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left Column - Text Details */}
          <motion.div
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
  className="space-y-6 text-gray-300 text-lg leading-relaxed text-justify md:text-left"
>
  <motion.p variants={itemVariants}>
    I'm <strong className="text-white">Ayush Raj</strong>, a Computer Science student at <strong className="text-white">Lovely Professional University</strong> passionate about building web applications. I create fast, secure digital experiences that solve real-world problems.
  </motion.p>
  
  <motion.p variants={itemVariants}>
    I've developed platforms like <strong className="text-white">Gig Nova</strong>, a startup marketplace connecting founders and talent, and <strong className="text-white">SkyNote</strong>, an AI-powered note-taking app. Proficient in the <span className="text-white">MERN stack</span>, I'm expanding into <span className="text-[#FFC300]">Generative AI (Infosys)</span> and <span className="text-[#FFC300]">Cloud Computing (NPTEL)</span>.
  </motion.p>
  
  <motion.p variants={itemVariants}>
    Beyond web development, I have training in <strong className="text-white">Android Development at LPU</strong> and strong <span className="text-white">Data Structures</span> knowledge, enabling a problem-solving approach. I'm a dedicated learner, eager to tackle challenges and deliver functional solutions.
  </motion.p>
</motion.div>

          {/* Right Column - Fact Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {/* Fact Card 1 */}
            <motion.div 
              variants={itemVariants}
              className="bg-[#161616]/60 backdrop-blur-md border border-[#FFC300]/12 p-8 rounded-2xl hover:border-[#FFC300]/40 hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="text-[#FFC300] text-xl font-bold mb-3 tracking-wide">Full Stack</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Expertise in React.js, Node.js, Express, MongoDB, MySQL, and Postman.
              </p>
            </motion.div>

            {/* Fact Card 2 */}
            <motion.div 
  variants={itemVariants}
  className="bg-[#161616]/60 backdrop-blur-md border border-[#FFC300]/12 p-8 rounded-2xl hover:border-[#FFC300]/40 hover:-translate-y-1 transition-all duration-300"
>
  <h3 className="text-[#FFC300] text-xl font-bold mb-3 tracking-wide">Training</h3>
  <p className="text-sm text-gray-400 leading-relaxed">
    Android Development training at LPU.<br />
    Built mobile apps with Kotlin and Firebase.
  </p>
</motion.div>

            {/* Fact Card 3 */}
            <motion.div 
              variants={itemVariants}
              className="bg-[#161616]/60 backdrop-blur-md border border-[#FFC300]/12 p-8 rounded-2xl hover:border-[#FFC300]/40 hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="text-[#FFC300] text-xl font-bold mb-3 tracking-wide">Algorithms</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Excellent grip on DSA, C++, Java, Python, and logical problem solving.
              </p>
            </motion.div>

            {/* Fact Card 4 */}
            <motion.div 
              variants={itemVariants}
              className="bg-[#161616]/60 backdrop-blur-md border border-[#FFC300]/12 p-8 rounded-2xl hover:border-[#FFC300]/40 hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="text-[#FFC300] text-xl font-bold mb-3 tracking-wide">AI & Cloud</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Equipped with Generative AI capabilities (Infosys) and Cloud computing (NPTEL).
              </p>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
