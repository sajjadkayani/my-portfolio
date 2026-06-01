import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600 opacity-10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl w-full z-10">
        
        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-blue-400 text-lg font-medium mb-4"
        >
          Hi, I am
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-6xl md:text-8xl font-bold text-white mb-4 leading-tight"
        >
          Sajjad Ali
        </motion.h1>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl md:text-4xl font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-6"
        >
          Senior Frontend Engineer
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed"
        >
          Specializing in React.js, rich text editors, and visual page builders. 
          Building complex SaaS platforms with 4 years of international experience.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-200 hover:scale-105"
          >
            View My Work
          </a>
           <a
            href="#contact"
            className="px-8 py-4 border border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-200 hover:scale-105"
          >
            Contact Me
          </a>
           <a
            href="https://github.com/sajjadkayani"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-gray-600 text-gray-400 font-semibold rounded-lg hover:border-gray-400 hover:text-white transition-all duration-200 hover:scale-105"
          >
            GitHub
          </a>
        </motion.div>

        {/* Tech tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-wrap gap-2 mt-12"
        >
          {["React.js", "TypeScript", "TipTap", "ProseMirror", "GrapeJS", "Yjs", "Node.js", "MongoDB"].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-white/5 border border-white/10 text-gray-400 text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-gray-600 text-xs">scroll down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-[1px] h-8 bg-gradient-to-b from-blue-500 to-transparent"
        />
      </motion.div>

    </section>
  )
}