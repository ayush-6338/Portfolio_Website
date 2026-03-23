import React from 'react';
import { motion } from 'framer-motion';

const skillCards = [
  {
    title: 'Frontend Development',
    description:
      'I enjoy building responsive interfaces that feel smooth, intuitive, and easy to use across any device.',
    icons: [
      {
        name: 'React',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
            <circle cx="12" cy="12" r="1.8" fill="currentColor" />
            <ellipse cx="12" cy="12" rx="9" ry="3.8" stroke="currentColor" strokeWidth="1.6" />
            <ellipse
              cx="12"
              cy="12"
              rx="9"
              ry="3.8"
              stroke="currentColor"
              strokeWidth="1.6"
              transform="rotate(60 12 12)"
            />
            <ellipse
              cx="12"
              cy="12"
              rx="9"
              ry="3.8"
              stroke="currentColor"
              strokeWidth="1.6"
              transform="rotate(120 12 12)"
            />
          </svg>
        ),
      },
      {
        name: 'JavaScript',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
            <rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="1.6" />
            <path d="M10 8v6.2c0 1.8-1 2.8-2.7 2.8-.9 0-1.7-.2-2.3-.7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M13.5 15.4c.6 1 1.5 1.6 2.8 1.6 1.2 0 2-.6 2-1.5 0-1-.6-1.4-2.2-2l-.6-.3c-1.9-.8-2.9-1.8-2.9-3.6 0-1.8 1.4-3 3.5-3 1.5 0 2.6.5 3.3 1.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
      },
      {
        name: 'Tailwind',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
            <path
              d="M7 9.5c1.2-2 2.6-2.8 4.3-2.5 1 .2 1.7.8 2.5 1.5.9.8 1.8 1.6 3.2 1.6 1.6 0 3-.9 4-2.7-1.2 2-2.6 2.8-4.3 2.5-1-.2-1.7-.8-2.5-1.5-.9-.8-1.8-1.6-3.2-1.6-1.6 0-3 .9-4 2.7Zm-4 4.4c1.2-2 2.6-2.8 4.3-2.5 1 .2 1.7.8 2.5 1.5.9.8 1.8 1.6 3.2 1.6 1.6 0 3-.9 4-2.7-1.2 2-2.6 2.8-4.3 2.5-1-.2-1.7-.8-2.5-1.5-.9-.8-1.8-1.6-3.2-1.6-1.6 0-3 .9-4 2.7Z"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ),
      },
      {
        name: 'HTML/CSS',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
            <path d="M8 8 4.5 12 8 16M16 8l3.5 4-3.5 4M13.5 6l-3 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
      },
    ],
  },
  {
    title: 'Backend Development',
    description:
      'I like working on backend systems, handling data cleanly, and building APIs that stay reliable when it matters most.',
    icons: [
      {
        name: 'Node.js',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
            <path d="M12 3.5 18.5 7v10L12 20.5 5.5 17V7L12 3.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
            <path d="M12 7.2v9.6M9.3 8.7v6.6M14.7 8.7v6.6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
        ),
      },
      {
        name: 'Express',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
            <path d="M5 8.5h10.5M5 12h8M5 15.5h10.5M16 9l3 3-3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
      },
      {
        name: 'MongoDB',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
            <path d="M12 4c2.3 2.4 3.5 5 3.5 7.8 0 3.6-1.7 6.2-3.5 8.2-1.8-2-3.5-4.6-3.5-8.2C8.5 9 9.7 6.4 12 4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
            <path d="M12 7.5v11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
        ),
      },
      {
        name: 'SQL',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
            <ellipse cx="12" cy="6.5" rx="5.5" ry="2.5" stroke="currentColor" strokeWidth="1.6" />
            <path d="M6.5 6.5v8c0 1.4 2.5 2.5 5.5 2.5s5.5-1.1 5.5-2.5v-8" stroke="currentColor" strokeWidth="1.6" />
            <path d="M6.5 10.5c0 1.4 2.5 2.5 5.5 2.5s5.5-1.1 5.5-2.5" stroke="currentColor" strokeWidth="1.6" />
          </svg>
        ),
      },
    ],
  },
  {
    title: 'Tools & Technologies',
    description:
      'My workflow stays practical and collaborative with the tools that keep shipping, debugging, and iteration smooth.',
    icons: [
      {
        name: 'Git',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
            <path d="M12 4 20 12 12 20 4 12 12 4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
            <circle cx="9" cy="9" r="1.2" fill="currentColor" />
            <circle cx="15" cy="15" r="1.2" fill="currentColor" />
            <path d="M10 10l4 4M12 12V7.8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
        ),
      },
      {
        name: 'GitHub',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
            <path d="M9 18c-4 1.2-4-2-5.5-2.5M14.5 20v-3.1c0-1 .1-1.6-.4-2.2 2.7-.3 5.4-1.3 5.4-5.8A4.5 4.5 0 0 0 18.3 6c.1-.4.5-1.8-.1-3-1.2 0-2 .8-2.5 1.2A8.8 8.8 0 0 0 12 3.6c-1.2 0-2.4.2-3.5.6C8 3.8 7.2 3 6 3c-.6 1.2-.2 2.6-.1 3A4.5 4.5 0 0 0 4.7 9c0 4.5 2.7 5.5 5.4 5.8-.4.4-.6 1-.6 1.9V20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
      },
      {
        name: 'Postman',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
            <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="1.6" />
            <path d="m10 14 6-6M11.8 8.2 16 8l-.2 4.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
      },
      {
        name: 'VS Code',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
            <path d="M16.5 4.5 8.5 8.5v7l8 4 2-1.2V5.7l-2-1.2Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
            <path d="M8.5 8.5 4.5 11.7l4 4.8M8.5 15.5 4.5 12.3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
      },
    ],
  },
  {
    title: 'Problem Solving / Core Skills',
    description:
      'I like breaking complex ideas into clear steps, writing maintainable logic, and learning fast when the challenge shifts.',
    icons: [
      {
        name: 'DSA',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
            <path d="M6 7h12M6 12h7M6 17h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            <circle cx="17" cy="12" r="2.2" stroke="currentColor" strokeWidth="1.6" />
          </svg>
        ),
      },
      {
        name: 'Logic',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
            <path d="M9 18h6M10 21h4M8.5 14.5c-1.3-1-2-2.4-2-4.1A5.5 5.5 0 0 1 12 5a5.5 5.5 0 0 1 5.5 5.4c0 1.7-.7 3.1-2 4.1-.7.6-1 .9-1.1 1.5H9.6c-.1-.6-.4-.9-1.1-1.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
      },
      {
        name: 'Debugging',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
            <path d="M9 9.5a3 3 0 1 1 6 0v1.2a4.3 4.3 0 0 1-1.2 3L12 15.5l-1.8-1.8A4.3 4.3 0 0 1 9 10.7V9.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
            <path d="M12 15.5V20M5 12h3M16 12h3M7.5 6.5l2 2M16.5 6.5l-2 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        ),
      },
      {
        name: 'Teamwork',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
            <circle cx="8" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.6" />
            <circle cx="16" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.6" />
            <path d="M4.5 18c.7-2.3 2.4-3.5 5-3.5s4.3 1.2 5 3.5M11.5 18c.6-1.8 2-2.8 4.5-2.8 1.7 0 3 .5 3.9 1.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        ),
      },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const SkillCard = ({ title, description, icons }) => {
  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="group relative overflow-hidden rounded-3xl border border-[#FFC300]/12 bg-[#161616]/60 p-6 md:p-7 backdrop-blur-xl"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFC300]/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="absolute -right-12 -top-12 h-28 w-28 rounded-full bg-[#FFC300]/10 blur-3xl transition duration-300 group-hover:bg-[#FFC300]/20" />
      <div className="absolute inset-[1px] rounded-[calc(1.5rem-1px)] bg-gradient-to-b from-white/[0.05] to-transparent opacity-70" />

      <div className="relative z-10 flex h-full flex-col">
        <div className="mb-5 flex items-center justify-between gap-4">
          <div>
            <p className="mb-2 text-sm uppercase tracking-[0.25em] text-[#FFC300]/80">Expertise</p>
            <h3 className="text-xl font-semibold text-white md:text-2xl">{title}</h3>
          </div>
          <span className="h-3 w-3 rounded-full bg-[#FFC300] shadow-[0_0_18px_rgba(255,195,0,0.65)]" />
        </div>

        <p className="mb-8 text-sm leading-7 text-slate-300 md:text-base">{description}</p>

        <div className="mt-auto flex flex-wrap gap-3">
          {icons.map((item) => (
            <motion.div
              key={item.name}
              whileHover={{ scale: 1.12, rotate: 4 }}
              transition={{ type: 'spring', stiffness: 280, damping: 16 }}
              className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#FFC300]/15 bg-black/35 text-[#FFC300] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition-colors duration-300 group-hover:border-[#FFC300]/35"
              aria-label={item.name}
              title={item.name}
            >
              {item.icon}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 rounded-3xl border border-transparent transition duration-300 group-hover:border-[#FFC300]/50 group-hover:shadow-[0_0_30px_rgba(255,195,0,0.14)]" />
    </motion.article>
  );
};

const Skill = () => {
  return (
    <section id="skills" className="relative overflow-hidden bg-[#050505] py-24 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-16 h-72 w-72 -translate-x-1/2 rounded-full bg-[#FFC300]/8 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-[#FFC300]/5 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#FFC300]">Skills</p>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Building products with a mix of
            <span className="text-[#FFC300]"> design sense, logic, and reliable code</span>
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-400 md:text-lg">
            The stack I use most often, the tools that keep my workflow sharp, and the core strengths I bring into every project.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:gap-7"
        >
          {skillCards.map((card) => (
            <SkillCard key={card.title} {...card} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skill;
