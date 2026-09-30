import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
    ],
  },
  {
    category: "Editor Engineering",
    skills: [
      "TipTap v3",
      "ProseMirror",
      "GrapeJS",
      "Yjs",
      "Real-time Collaboration",
    ],
  },
  {
    category: "Styling",
    skills: ["Tailwind CSS", "SASS", "SCSS", "Bootstrap", "Material UI"],
  },
  {
    category: "Backend & Database",
    skills: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
  },
  {
    category: "CMS & Ecommerce",
    skills: ["WordPress", "Magento"],
  },
  {
    category: "Tools & Workflow",
    skills: [
      "Git",
      "Redux",
      "Redux Toolkit",
      "Agile",
      "Performance Testing",
      "Cross-browser Compatibility",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full rounded-xl border border-white/10"
        >
          <source src="/editor-demo.mp4" type="video/mp4" />
        </video> */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-blue-400 text-sm font-medium mb-2 uppercase tracking-widest"
        >
          What I Know
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white mb-12"
        >
          Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {skillGroups.map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-xl p-6"
            >
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest text-blue-400">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, j) => (
                  <span
                    key={j}
                    className="px-3 py-1.5 bg-white/5 border border-white/10 text-gray-300 text-sm rounded-lg hover:border-blue-500 hover:text-blue-400 transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
