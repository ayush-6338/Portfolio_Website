import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project, onSelect, index }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.55, delay: index * 0.12, ease: 'easeOut' }}
      whileHover={{ y: -8, scale: 1.01 }}
      className="group relative"
    >
      <button
        type="button"
        onClick={() => onSelect(project)}
        className="relative grid w-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] text-left backdrop-blur-2xl transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC300]/70 lg:grid-cols-[1.08fr_1fr]"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFC300]/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="absolute -left-12 top-8 h-40 w-40 rounded-full bg-[#FFC300]/10 blur-[90px] transition duration-500 group-hover:bg-[#FFC300]/20" />
        <div className="pointer-events-none absolute inset-0 rounded-[2rem] border border-transparent transition duration-300 group-hover:border-[#FFC300]/40 group-hover:shadow-[0_0_42px_rgba(255,195,0,0.12)]" />

        <div className="relative overflow-hidden border-b border-white/10 lg:border-b-0 lg:border-r">
          {project.featured && (
            <span className="absolute left-5 top-5 z-20 rounded-full border border-[#FFC300]/30 bg-black/45 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-[#FFC300] backdrop-blur-md">
              Featured
            </span>
          )}

          <div className="relative aspect-[16/11] h-full min-h-[250px] w-full bg-[#0b0b0b]">
            <motion.img
              src={project.images[0]}
              alt={`${project.title} preview`}
              className="absolute inset-0 h-full w-full object-cover transition duration-500 ease-out group-hover:scale-105 group-hover:opacity-0"
            />
            <motion.img
              src={project.images[1]}
              alt={`${project.title} alternate preview`}
              className={`absolute inset-0 h-full w-full object-cover opacity-0 transition duration-500 ease-out group-hover:scale-110 group-hover:opacity-100 ${project.title === 'Gignova' ? 'object-[20%_center]' : ''}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
          </div>
        </div>

        <div className="relative flex flex-col justify-between p-6 md:p-8">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#FFC300] shadow-[0_0_18px_rgba(255,195,0,0.65)]" />
              <p className="text-xs font-medium uppercase tracking-[0.34em] text-[#FFC300]/85">
                {project.category}
              </p>
            </div>

            <h3 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
              {project.title}
            </h3>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300 md:text-base">
              {project.shortDescription}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-2.5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-[#FFC300]/18 bg-black/30 px-3 py-1.5 text-xs font-medium text-slate-200 transition-colors duration-300 group-hover:border-[#FFC300]/35"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-between gap-4">
            <p className="text-sm text-slate-400">Click to explore the full case study.</p>
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#FFC300]/22 bg-[#FFC300]/10 text-[#FFC300] transition-transform duration-300 group-hover:translate-x-1">
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                <path
                  d="M7 12h10m0 0-4-4m4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
        </div>
      </button>
    </motion.article>
  );
};

export default ProjectCard;
