import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const ProjectModal = ({ project, onClose }) => {
  const githubHref = project?.githubUrl || '#';
  const liveHref = project?.liveUrl || project?.githubUrl || '#';

  useEffect(() => {
    if (!project) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          key={project.title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.24, ease: 'easeOut' }}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/70 px-4 py-6 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 28 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 16 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            onClick={(event) => event.stopPropagation()}
            className="relative flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-[1.75rem] border border-white/12 bg-[#111111]/85 text-white shadow-[0_30px_120px_rgba(0,0,0,0.45)] backdrop-blur-2xl lg:max-h-[85vh]"
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#FFC300]/10 via-transparent to-transparent" />
            <div className="pointer-events-none absolute -right-16 top-0 h-52 w-52 rounded-full bg-[#FFC300]/12 blur-[120px]" />

            <div className="relative flex flex-1 flex-col overflow-y-auto p-5 md:p-6 lg:overflow-hidden lg:p-7">
              <div className="mb-6 flex shrink-0 items-start justify-between gap-4">
                <div>
                  <p className="mb-3 text-xs font-medium uppercase tracking-[0.34em] text-[#FFC300]">
                    {project.category}
                  </p>
                  <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
                    {project.title}
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={onClose}
                  className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] text-slate-300 transition hover:border-[#FFC300]/40 hover:text-[#FFC300]"
                  aria-label="Close project details"
                >
                  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                    <path
                      d="M6 6l12 12M18 6 6 18"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>

              <div className="grid gap-5 lg:min-h-0 lg:flex-1 lg:grid-cols-[0.9fr_1fr]">
                <div className="overflow-hidden rounded-[1.35rem] border border-white/10 bg-black/30 lg:h-full">
                  <img
                    src={project.images[1]}
                    alt={`${project.title} detail preview`}
                    className={`h-48 w-full object-cover md:h-56 lg:h-full ${project.title === 'Gignova' ? 'object-[16%_center]' : ''}`}
                  />
                </div>

                <div className="space-y-5 lg:h-full lg:overflow-y-auto lg:pr-3 lg:pb-4">
                  <div>
                    <h4 className="mb-2 text-sm font-semibold uppercase tracking-[0.26em] text-[#FFC300]/90">
                      Overview
                    </h4>
                    <p className="text-sm leading-7 text-slate-300 md:text-base">
                      {project.fullDescription}
                    </p>
                  </div>

                  <div>
                    <h4 className="mb-2 text-sm font-semibold uppercase tracking-[0.26em] text-[#FFC300]/90">
                      Highlights
                    </h4>
                    <ul className="space-y-2.5 text-sm leading-6 text-slate-300 md:text-base">
                      {project.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-3">
                          <span className="mt-2 h-2 w-2 rounded-full bg-[#FFC300]" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="mb-2 text-sm font-semibold uppercase tracking-[0.26em] text-[#FFC300]/90">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2.5">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-[#FFC300]/18 bg-black/35 px-3 py-1.5 text-xs font-medium text-slate-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 pt-1">
                    <a
                      href={githubHref}
                      target="_blank"
                      rel="noreferrer"
                      className={`inline-flex min-w-[140px] items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${
                        project?.githubUrl
                          ? 'bg-[#FFC300] text-black hover:bg-[#ffd34d]'
                          : 'cursor-not-allowed border border-white/10 bg-white/[0.05] text-slate-500'
                      }`}
                      onClick={(event) => {
                        if (!project?.githubUrl) {
                          event.preventDefault();
                        }
                      }}
                    >
                      GitHub
                    </a>
                    <a
                      href={liveHref}
                      target="_blank"
                      rel="noreferrer"
                      className={`inline-flex min-w-[140px] items-center justify-center rounded-full border px-5 py-3 text-sm font-semibold transition ${
                        project?.liveUrl || project?.githubUrl
                          ? 'border-[#FFC300]/35 bg-[#FFC300]/10 text-[#FFC300] hover:border-[#FFC300]/55 hover:bg-[#FFC300]/16'
                          : 'cursor-not-allowed border-white/10 bg-white/[0.05] text-slate-500'
                      }`}
                      onClick={(event) => {
                        if (!project?.liveUrl && !project?.githubUrl) {
                          event.preventDefault();
                        }
                      }}
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default ProjectModal;
