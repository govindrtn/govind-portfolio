import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";

export function Skills() {
  const skillCategories = [
    { title: "Frontend", skills: portfolioData.skills.frontend },
    {
      title: "State & Architecture",
      skills: portfolioData.skills.stateAndArch,
    },
    { title: "Backend, API & Tools", skills: portfolioData.skills.apiAndTools },
    { title: "Other", skills: portfolioData.skills.other },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            My expertise across frontend and backend web development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="glass-dark p-6 rounded-lg border border-slate-700"
            >
              <h3 className="theme-accent-text text-xl font-bold mb-6">
                {category.title}
              </h3>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-3"
              >
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="badge cursor-pointer group"
                  >
                    <span>
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Core strengths */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 glass-dark p-8 rounded-lg border border-slate-700"
        >
          <h3 className="theme-accent-text text-xl font-bold mb-8">
            Core Strengths
          </h3>

          <div className="grid gap-x-8 gap-y-6 md:grid-cols-2">
            {[
              { name: "React.js", level: 90 },
              { name: "JavaScript & TypeScript", level: 90 },
              { name: "Responsive UI Engineering", level: 88 },
              { name: "State Management", level: 84 },
              { name: "REST API Integration", level: 88 },
              { name: "Node.js & Express.js", level: 65 },
            ].map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-slate-300 font-medium">
                    {skill.name}
                  </span>
                  <span className="theme-accent-text font-bold">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-3 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: (index % 7) * 0.08 }}
                    viewport={{ once: true }}
                    className="theme-progress h-full rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
