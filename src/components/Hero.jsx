import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, MapPin, Sparkles } from "lucide-react";
import { AnimatedCounter } from "./AnimatedCounter";
import { portfolioData } from "../data/portfolioData";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export function Hero() {
  const stats = portfolioData.stats;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="hero-orb absolute -top-40 -right-40 w-96 h-96 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="hero-orb hero-orb-secondary absolute -bottom-40 -left-40 w-96 h-96 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="hero-layout grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center"
        >
          <div className="hero-copy text-center lg:text-left">
            <motion.div variants={itemVariants} className="space-y-5">
              <div className="eyebrow mx-auto lg:mx-0">
                <Sparkles className="w-4 h-4" />
                Available for exciting frontend projects
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.05] tracking-tight">
                Building interfaces that feel
                <span className="gradient-text block">fast and effortless.</span>
              </h1>

              <h2 className="theme-accent-text text-xl sm:text-2xl font-semibold">
                Hi, I&apos;m {portfolioData.personal.name}, a React Developer.
              </h2>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                {portfolioData.personal.description}
              </p>
              <div className="flex items-center justify-center lg:justify-start gap-2 text-sm text-slate-500 dark:text-slate-400">
                <MapPin className="theme-accent-text w-4 h-4" />
                {portfolioData.personal.location}
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="hero-actions flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mt-8"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                Explore My Work
                <ArrowDown className="w-4 h-4" />
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary inline-flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Contact Me
              </motion.a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="hero-socials flex justify-center lg:justify-start gap-3 mt-6"
            >
              {[
                {
                  href: `https://${portfolioData.personal.linkedin}`,
                  label: "LinkedIn",
                  Icon: Linkedin,
                },
                { href: `https://${portfolioData.personal.github}`, label: "GitHub", Icon: Github },
                { href: `mailto:${portfolioData.personal.email}`, label: "Email", Icon: Mail },
              ].map(({ href, label, Icon }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="social-button"
                  whileHover={{ y: -4 }}
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="hero-visual relative max-w-md mx-auto w-full"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="profile-frame"
            >
              <div className="profile-image-wrap">
                <img
                  src={portfolioData.personal.profileImage}
                  alt={`${portfolioData.personal.name} profile`}
                  className="profile-image"
                />
              </div>
              <div className="profile-status">
                <span /> Open to work
              </div>
            </motion.div>
            <div className="stats-grid grid grid-cols-2 gap-3 mt-5">
              {stats.map((stat) => (
                <motion.div key={stat.label} whileHover={{ y: -5 }} className="stat-card">
                  <AnimatedCounter
                    value={stat.value}
                    decimals={stat.decimals}
                    suffix={stat.suffix}
                  />
                  <span>{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
