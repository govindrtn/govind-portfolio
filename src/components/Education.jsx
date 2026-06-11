import { motion } from "framer-motion";
import { BookOpen, Calendar, MapPin } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export function Education() {
  const { degree, college, university, duration } = portfolioData.education;

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            My academic background and qualifications
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ y: -5 }}
          className="theme-accent-border max-w-2xl mx-auto glass-dark p-8 rounded-lg border-2 transition-all"
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="theme-accent-gradient w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0">
              <BookOpen className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">{degree}</h3>
              <p className="theme-accent-text font-semibold">{college}</p>
            </div>
          </div>

          <div className="space-y-3 text-slate-300">
            <div className="flex items-center gap-3">
              <MapPin className="theme-accent-text w-5 h-5 flex-shrink-0" />
              <div>
                <p className="text-sm text-slate-500">University</p>
                <p className="font-semibold">{university}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Calendar className="theme-accent-text w-5 h-5 flex-shrink-0" />
              <div>
                <p className="text-sm text-slate-500">Duration</p>
                <p className="font-semibold">{duration}</p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-700">
            <p className="text-slate-400">
              Completed my B.Tech in Electronics & Communication Engineering
              with a focus on problem-solving and technical excellence. This
              foundation has been instrumental in my software development
              journey.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
