import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            My professional journey in frontend development
          </p>
        </motion.div>

        <div className="space-y-8 relative">
          {/* Timeline line */}
          <div className="theme-accent-gradient hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full" />

          {portfolioData.experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-8 items-start"
            >
              {/* Timeline dot */}
              <div className="hidden md:flex justify-center">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="theme-accent-bg w-4 h-4 rounded-full border-4 border-slate-900 relative z-10"
                />
              </div>

              {/* Content */}
              <motion.div
                whileHover={{ y: -5 }}
                className={`glass-dark p-6 rounded-lg border border-slate-700 ${index % 2 === 1 ? "md:mr-8" : "md:ml-8"}`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="theme-accent-text text-xl font-bold">{exp.role}</h3>
                    <p className="text-slate-400">{exp.company}</p>
                  </div>
                  <Briefcase className="theme-accent-text w-5 h-5 flex-shrink-0" />
                </div>

                <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
                  <Calendar className="w-4 h-4" />
                  {exp.duration}
                </div>

                {exp.project && (
                  <p className="theme-accent-text text-sm font-semibold mb-3">
                    Project: {exp.project}
                  </p>
                )}
                {exp.projects && (
                  <p className="theme-accent-text text-sm font-semibold mb-3">
                    Projects: {exp.projects.join(", ")}
                  </p>
                )}

                <p className="text-slate-300 text-sm mb-4">{exp.description}</p>

                <div className="mb-4">
                  <p className="text-xs font-semibold text-slate-400 mb-2">Key Responsibilities:</p>
                  <ul className="space-y-1">
                    {exp.responsibilities.slice(0, 3).map((resp, idx) => (
                      <li key={idx} className="text-sm text-slate-400 flex items-start gap-2">
                        <span className="theme-accent-text mt-1">•</span>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>

                {exp.modules && (
                  <div className="flex flex-wrap gap-2">
                    {exp.modules.map((module, idx) => (
                      <span key={idx} className="badge text-xs">
                        {module}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
