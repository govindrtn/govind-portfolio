import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/govind-maithil-30a20816a",
      icon: Linkedin,
    },
    {
      name: "GitHub",
      url: "https://github.com/govindrtn",
      icon: Github,
    },
    {
      name: "Email",
      url: `mailto:${portfolioData.personal.email}`,
      icon: Mail,
    },
  ];

  return (
    <footer className="bg-slate-900/50 border-t border-slate-700 mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold text-white mb-4">
              Govind Maithil
            </h3>
            <p className="text-slate-400 text-sm">
              Frontend Developer specializing in React.js, creating responsive
              and modern web applications.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {["Home", "About", "Projects", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-slate-400 hover:text-blue-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold text-white mb-4">Connect</h3>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={index}
                    href={link.url}
                    target={link.url.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.url.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 bg-slate-800/50 hover:bg-blue-600 text-slate-300 hover:text-white rounded-lg transition-all"
                    aria-label={link.name}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 pt-8">
          {/* Bottom */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-sm"
          >
            <div className="flex items-center gap-2">
              © {currentYear} Govind Maithil. All rights reserved.
              <Heart className="w-4 h-4 text-red-500 inline" />
            </div>
            <p>Built with React.js, Vite, and Tailwind CSS</p>
            <a
              href="#home"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              Back to top ↑
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
