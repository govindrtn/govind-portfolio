import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { TemplateSwitcher } from "./TemplateSwitcher";
import { ThemeToggle } from "./ThemeToggle";
import { portfolioData } from "../data/portfolioData";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 navbar-shell ${isScrolled ? "navbar-scrolled" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between items-center">
          {/* Logo */}
          <motion.a
            href="#home"
            className="flex items-center gap-2 font-bold"
            whileHover={{ scale: 1.05 }}
          >
            <span className="logo-mark">GM</span>
            <span className="hidden sm:inline text-slate-900 dark:text-white">
              {portfolioData.personal.name}
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                className="nav-link relative group"
                whileHover={{ y: -2 }}
              >
                {item.name}
                <span className="theme-accent-gradient absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>

          {/* Theme Toggle + Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <TemplateSwitcher />
            <ThemeToggle />

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden icon-button"
              aria-label={isOpen ? "Close navigation" : "Open navigation"}
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden mobile-menu"
          >
            {navItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="mobile-nav-link"
                whileHover={{ x: 4 }}
              >
                {item.name}
              </motion.a>
            ))}
          </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
