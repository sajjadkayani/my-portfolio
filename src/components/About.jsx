import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-blue-400 text-sm font-medium mb-2 uppercase tracking-widest"
        >
          About Me
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white mb-10"
        >
          Who I Am
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-5"
          >
            <p className="text-gray-400 text-lg leading-relaxed">
              I am a Senior Frontend Engineer based in Rawalpindi, Pakistan,
              with 4 years of experience building complex, production-grade web
              applications for international clients.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              I specialize in rich text editor engineering, visual page
              builders, and large-scale React architectures. Currently I am a
              core engineer at Adabra building a full SaaS platform from the
              ground up.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              I have delivered live projects for clients across Turkey, Albania,
              and the United States — from high-traffic ecommerce platforms to
              international forex trading systems.
            </p>

            <div className="flex gap-4 mt-2">
              <a
                href="mailto:sajjad.ali.kayani@gmail.com"
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-200 hover:scale-105 text-sm"
              >
                Get In Touch
              </a>
              <a
                href="https://github.com/sajjadkayani"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-gray-600 text-gray-400 font-semibold rounded-lg hover:border-gray-400 hover:text-white transition-all duration-200 hover:scale-105 text-sm"
              >
                GitHub
              </a>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { number: "4+", label: "Years Experience" },
              { number: "10+", label: "Projects Delivered" },
              { number: "3", label: "Countries Served" },
              { number: "1", label: "SaaS Platform Built" },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col gap-1"
              >
                <span className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  {stat.number}
                </span>
                <span className="text-gray-400 text-sm">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
