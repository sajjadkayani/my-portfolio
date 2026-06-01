import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center backdrop-blur-md bg-black/20 border-b border-white/5"
    >
      {/* Logo */}
      <a href="#" className="text-white font-bold text-xl">
        SA<span className="text-blue-400">.</span>
      </a>

      {/* Links */}
      <div className="hidden md:flex items-center gap-8">
        {["About", "Skills", "Experience", "Projects", "Contact"].map(
          (item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-400 hover:text-white text-sm font-medium transition-colors duration-200"
            >
              {item}
            </a>
          ),
        )}
      </div>

      {/* CTA */}
      <a
        href="mailto:sajjad.ali.kayani@gmail.com"
        className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-semibold rounded-lg hover:opacity-90 transition-all duration-200"
      >
        Hire Me
      </a>
    </motion.nav>
  );
}
