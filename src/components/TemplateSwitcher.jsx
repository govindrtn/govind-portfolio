import { AnimatePresence, motion } from "framer-motion";
import { Check, Palette } from "lucide-react";
import { useEffect, useState } from "react";

const templates = [
  { id: "ocean", label: "Ocean", colors: ["#2563eb", "#7c3aed"] },
  { id: "emerald", label: "Emerald", colors: ["#059669", "#0d9488"] },
  { id: "sunset", label: "Sunset", colors: ["#ea580c", "#e11d48"] },
  { id: "minimal", label: "Minimal", colors: ["#334155", "#94a3b8"] },
];

export function TemplateSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [template, setTemplate] = useState(
    () => localStorage.getItem("portfolio-template") || "ocean",
  );

  useEffect(() => {
    document.documentElement.dataset.template = template;
    localStorage.setItem("portfolio-template", template);
  }, [template]);

  return (
    <div className="relative">
      <motion.button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="theme-toggle"
        aria-label="Choose portfolio template"
        title="Choose portfolio template"
      >
        <Palette className="h-5 w-5" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            className="template-menu"
          >
            <p className="template-menu-title">Choose color</p>
            {templates.map((option) => (
              <button
                key={option.id}
                type="button"
                onClick={() => {
                  setTemplate(option.id);
                  setIsOpen(false);
                }}
                className="template-option"
              >
                <span
                  className="template-swatch"
                  style={{
                    background: `linear-gradient(135deg, ${option.colors[0]}, ${option.colors[1]})`,
                  }}
                />
                <span>{option.label}</span>
                {template === option.id && <Check className="ml-auto h-4 w-4" />}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
