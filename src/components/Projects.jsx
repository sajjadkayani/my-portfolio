import { motion } from 'framer-motion'

const projects = [
  {
    title: "ELEVA — Full SaaS Platform",
    description: "A complete SaaS platform built from ground up including CRM, visual page builder, funnel builder, project management, team management, real-time chat, and prospecting modules. Built custom rich text editor with TipTap v3 and GrapeJS page builder from scratch.",
    tags: ["React.js", "TipTap v3", "ProseMirror", "GrapeJS", "Yjs", "Node.js", "MongoDB"],
    link: "https://dev.agencyeleva.com",
    featured: true,
  },
  {
    title: "4XHUB — Forex Trading Platform",
    description: "International forex trading platform integrating MT4 and MT5 trading engines with a full client portal serving real traders globally. Led complete frontend development and delivered on deadline.",
    tags: ["React.js", "MT4", "MT5", "REST APIs", "TypeScript"],
    link: "https://4xhub-int.com",
    featured: true,
  },
  {
    title: "Tamadres — Ecommerce Platform",
    description: "High-traffic Turkish bookstore built on Magento serving thousands of daily users. Integrated complex third-party APIs and maintained production codebase at Senior Engineer level.",
    tags: ["Magento", "REST APIs", "JavaScript", "CSS"],
    link: "https://tamadres.com",
    featured: false,
  },
  {
    title: "MyDasma — Wedding Ecommerce",
    description: "Albanian wedding ecommerce platform with multiple payment methods including installment payment systems. Built for the Albanian market with complex order management.",
    tags: ["React.js", "REST APIs", "JavaScript"],
    link: "https://mydasma.com",
    featured: false,
  },
  {
    title: "Zikra Infotech — Agency Website",
    description: "US-based digital marketing agency website serving healthcare and business clients across America. Built with WordPress with custom theme and integrations.",
    tags: ["WordPress", "HTML", "CSS", "JavaScript"],
    link: "https://zikrainfotech.com",
    featured: false,
  },
]

const ExternalLinkIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
)

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-blue-400 text-sm font-medium mb-2 uppercase tracking-widest"
        >
          What I Have Built
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white mb-12"
        >
          Projects
        </motion.h2>

        {/* Featured projects */}
        <div className="flex flex-col gap-6 mb-6">
          {projects.filter(p => p.featured).map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-blue-500/30 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <span className="text-blue-400 text-xs uppercase tracking-widest font-medium">Featured Project</span>
                  <h3 className="text-white font-bold text-xl mt-1">{project.title}</h3>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200 flex-shrink-0 mt-1"
                >
                  <ExternalLinkIcon />
                </a>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, j) => (
                  <span
                    key={j}
                    className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other projects */}
        <div className="grid md:grid-cols-3 gap-4">
          {projects.filter(p => !p.featured).map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-blue-500/30 transition-all duration-300 flex flex-col gap-3"
            >
              <div className="flex items-start justify-between">
                <h3 className="text-white font-semibold text-sm">{project.title}</h3>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-blue-400 transition-colors duration-200 flex-shrink-0"
                >
                  <ExternalLinkIcon />
                </a>
              </div>

              <p className="text-gray-400 text-xs leading-relaxed flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {project.tags.slice(0, 3).map((tag, j) => (
                  <span
                    key={j}
                    className="px-2 py-0.5 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}