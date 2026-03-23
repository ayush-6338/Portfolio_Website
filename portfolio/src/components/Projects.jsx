import React, { useState } from 'react';
import { motion } from 'framer-motion';
import gignova from '../assets/gignova.png';
import gignova2 from '../assets/gignova2.png';
import skynote from '../assets/skynote.png';
import skynote2 from '../assets/skynote2.png';
import sifire from '../assets/sifire.png';
import sifire2 from '../assets/sifire2.png';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

const projects = [
  {
    title: 'Gignova',
    category: 'Featured Project',
    featured: true,
    shortDescription:
      'A startup marketplace experience designed to connect founders with talent, collaborators, and early momentum in one focused platform.',
    fullDescription:
      'Gignova is a polished marketplace concept for startups and builders, created to make discovery, collaboration, and project visibility feel fast, structured, and trustworthy. The experience focuses on clarity, clean interactions, and a premium product presentation that helps users explore opportunities with confidence.',
    highlights: [
      'Designed a clear discovery flow that helps founders and contributors connect around real opportunities.',
      'Built a modern, conversion-focused interface with strong visual hierarchy and responsive layouts.',
      'Focused on smooth interactions and presentation quality to give the platform a product-ready feel.',
    ],
    techStack: ['React', 'Tailwind CSS', 'Framer Motion', 'JavaScript', 'Node', 'Express', 'API', 'MongoDB'],
    images: [gignova, gignova2],
    githubUrl: 'https://github.com/ayush-6338/Marketplace_for_startups',
    liveUrl: '',
  },
  {
    title: 'SkyNote',
    category: 'Android App',
    featured: false,
    shortDescription:
      'An Android note-taking app experience centered on quick capture, organized content, and a lightweight flow for everyday productivity.',
    fullDescription:
      'SkyNote is a mobile-first note app built with a practical focus on speed, usability, and dependable organization. It aims to make creating, managing, and revisiting notes feel effortless, with a clean interface that supports focused daily use across student and personal workflows.',
    highlights: [
      'Created a streamlined note management experience tailored for fast everyday use on Android.',
      'Structured the interface for readability, clarity, and low-friction navigation on smaller screens.',
      'Balanced utility and simplicity so the app feels approachable while staying productivity-focused.',
    ],
    techStack: ['Android', 'Kotlin', 'Firebase', 'XML'],
    images: [skynote, skynote2],
    githubUrl: 'https://github.com/ayush-6338/skynote',
    liveUrl: '',
  },
  {
    title: 'Fire Safety & Equipment',
    category: 'Web Project',
    featured: false,
    shortDescription:
      'A professional web presence for fire safety services and equipment, built to present offerings clearly and inspire trust.',
    fullDescription:
      'Fire Safety & Equipment is a business-oriented web project that showcases safety products and service information in a straightforward, credible format. The design emphasizes accessibility, clean structure, and practical content presentation so visitors can quickly understand available solutions and take action.',
    highlights: [
      'Presented business services and equipment categories in a way that feels informative and easy to scan.',
      'Used a clean layout system to support credibility, readability, and responsive browsing.',
      'Focused on practical UX choices that help users move from awareness to inquiry without friction.',
    ],
    techStack: ['React', 'Tailwind CSS', 'JavaScript', 'Responsive Design', 'PHP', 'API', 'MySQL'],
    images: [sifire, sifire2],
    githubUrl: 'https://github.com/ayush-6338/SefireMarketing',
    liveUrl: '',
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <section id="projects" className="relative overflow-hidden bg-[#050505] py-24 text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-[#FFC300]/8 blur-[120px]" />
          <div className="absolute bottom-10 left-10 h-64 w-64 rounded-full bg-[#FFC300]/6 blur-[120px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="mx-auto mb-14 max-w-3xl text-center"
          >
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#FFC300]">Projects</p>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Selected work built with
              <span className="text-[#FFC300]"> clean systems and product thinking</span>
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-400 md:text-lg">
              A small collection of projects that reflect how I approach product design, interaction quality, and practical engineering.
            </p>
          </motion.div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                onSelect={setSelectedProject}
              />
            ))}
          </div>
        </div>
      </section>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  );
};

export default Projects;
