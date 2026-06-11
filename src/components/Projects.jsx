import { motion } from "framer-motion";
import { ExternalLink, Github, KeyRound, Lock } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-slate-900/50"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Showcase of my recent work in web development
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {portfolioData.projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group glass-dark flex h-full flex-col rounded-lg overflow-hidden border border-slate-700 hover:border-blue-500 transition-all duration-300"
            >
              {/* Project Header */}
              <div className="project-header bg-gradient-to-r from-blue-600/20 to-blue-500/20 p-6 border-b border-slate-700">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-sm text-blue-400">{project.domain}</p>
                  </div>
                </div>
              </div>

              {/* Project Body */}
              <div className="flex-1 p-6 space-y-4">
                <p className="text-slate-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                {project.demoCredentials && (
                  <div className="rounded-lg border border-blue-500/30 bg-blue-500/10 p-3">
                    <p className="mb-2 flex items-center gap-2 text-xs font-semibold text-blue-300">
                      <KeyRound className="h-4 w-4" />
                      Demo Login
                    </p>
                    <div className="space-y-1 text-xs text-slate-300">
                      <p>
                        Username:{" "}
                        <span className="font-mono text-white">
                          {project.demoCredentials.username}
                        </span>
                      </p>
                      <p>
                        Password:{" "}
                        <span className="font-mono text-white">
                          {project.demoCredentials.password}
                        </span>
                      </p>
                    </div>
                  </div>
                )}

                {/* Features */}
                <div>
                  <p className="text-xs font-semibold text-slate-400 mb-2">
                    Key Features:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.features.slice(0, 4).map((feature, idx) => (
                      <span key={idx} className="badge text-xs">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div>
                  <p className="text-xs font-semibold text-slate-400 mb-2">
                    Tech Stack:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-slate-800 text-slate-300 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer with Links */}
              <div className="border-t border-slate-700 p-4 flex gap-3 bg-slate-900/50">
                {project.link ? (
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-4 bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 rounded-lg transition-colors text-sm font-medium"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </motion.a>
                ) : (
                  <span className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-4 bg-blue-500/10 text-blue-500 rounded-lg text-sm font-medium">
                    <Lock className="w-4 h-4" />
                    Private Project
                  </span>
                )}
                {project.codeLink && (
                  <motion.a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-4 bg-slate-700/50 hover:bg-slate-700 text-slate-300 rounded-lg transition-colors text-sm font-medium"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
