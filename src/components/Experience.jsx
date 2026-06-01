import { motion } from 'framer-motion'

const experiences = [
  {
    title: "Senior Frontend Engineer",
    company: "ADABRA",
    location: "Remote",
    period: "January 2025 — Present",
    description: [
      "Core React.js engineer building a large-scale SaaS platform from ground up including CRM, visual page builder, funnel builder, project management, team management, real-time chat, and prospecting modules",
      "Built a custom rich text editor using TipTap v3 and ProseMirror including custom extensions, block-level diffing algorithm, real-time collaboration with Yjs, and remote cursor tracking",
      "Migrated entire editor codebase from TipTap v2 to v3, refactoring all custom extensions, plugins, and integrations",
      "Engineered deep GrapeJS customizations for the visual page builder including custom drag and drop system, intelligent undo/redo history filtering, custom component types, theme system, and full plugin architecture",
    ],
    tags: ["React.js", "TipTap v3", "ProseMirror", "GrapeJS", "Yjs", "TypeScript"],
    current: true,
  },
  {
    title: "Frontend Developer",
    company: "QMH Technologies",
    location: "Islamabad",
    period: "May 2023 — December 2024",
    description: [
      "Architected and shipped 16 high-fidelity landing pages in a 5-day delivery cycle, owning the full pipeline from development to deployment",
      "Promoted from Junior to Mid-level Frontend Developer within first year based on performance and delivery speed",
      "Led React.js frontend development of 4XHUB, an international forex trading platform integrating MT4 and MT5 trading engines",
      "Worked at Senior level on Tamadres.com, a high-traffic Turkish bookstore ecommerce platform on Magento serving thousands of daily users",
      "Led a frontend team on complete end-to-end delivery of 4XHUB project on deadline",
    ],
    tags: ["React.js", "Magento", "REST APIs", "Team Lead"],
    current: false,
  },
  {
    title: "Junior Frontend Developer",
    company: "CODERSGLOBE",
    location: "Islamabad",
    period: "May 2022 — April 2023",
    description: [
      "Self-taught React.js from zero to production level during internship and secured full-time position",
      "Developed MyDasma.com, an Albanian wedding ecommerce platform with multiple payment methods including installment payments",
      "Built Zikra Infotech LLC website, a US-based digital marketing agency serving healthcare and business clients across America",
      "Contributed to web performance optimization and maintained clean scalable codebases",
    ],
    tags: ["React.js", "WordPress", "JavaScript", "HTML", "CSS"],
    current: false,
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-blue-400 text-sm font-medium mb-2 uppercase tracking-widest"
        >
          Where I Have Worked
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white mb-12"
        >
          Experience
        </motion.h2>

        <div className="flex flex-col gap-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-blue-500/30 transition-colors duration-300"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-white font-semibold text-lg">
                      {exp.title}
                    </h3>
                    {exp.current && (
                      <span className="px-2 py-0.5 bg-blue-500/20 border border-blue-500/30 text-blue-400 text-xs rounded-full">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="text-blue-400 font-medium">
                    {exp.company} — {exp.location}
                  </p>
                </div>
                <span className="text-gray-500 text-sm whitespace-nowrap">
                  {exp.period}
                </span>
              </div>

              {/* Description */}
              <ul className="flex flex-col gap-2 mb-4">
                {exp.description.map((point, j) => (
                  <li key={j} className="text-gray-400 text-sm leading-relaxed flex gap-2">
                    <span className="text-blue-400 mt-1 flex-shrink-0">▹</span>
                    {point}
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag, j) => (
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

      </div>
    </section>
  )
}