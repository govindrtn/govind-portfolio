import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export function About() {
  return (
    <section
      id="about"
      className="section-shell section-tinted"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            {portfolioData.about.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="grid gap-4 md:grid-cols-2"
        >
          {portfolioData.about.highlights.map((highlight, index) => (
            <motion.div
              key={highlight}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="highlight-card"
            >
              <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
              <span>{highlight}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
