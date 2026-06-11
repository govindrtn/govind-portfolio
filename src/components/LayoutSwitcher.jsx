import { AnimatePresence, motion } from "framer-motion";
import { Check, Columns, LayoutGrid, List, Rows } from "lucide-react";
import { useEffect, useState } from "react";

const layouts = [
  { id: "classic", label: "Classic", description: "Balanced cards", Icon: LayoutGrid },
  { id: "split", label: "Split", description: "Visual first", Icon: Columns },
  { id: "editorial", label: "Editorial", description: "Magazine style", Icon: Rows },
  { id: "compact", label: "Compact", description: "Dense and quick", Icon: List },
];

export function LayoutSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [layout, setLayout] = useState(() => localStorage.getItem("portfolio-layout") || "split");

  useEffect(() => {
    document.documentElement.dataset.layout = layout;
    localStorage.setItem("portfolio-layout", layout);
  }, [layout]);

  return (
    <div className="relative">
      <motion.button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="theme-toggle"
        aria-label="Choose portfolio layout"
        title="Choose portfolio layout"
      >
        <LayoutGrid className="h-5 w-5" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            className="template-menu"
          >
            <p className="template-menu-title">Choose layout</p>
            {layouts.map(({ id, label, description, Icon }) => (
              <button
                key={id}
                type="button"
                onClick={() => {
                  setLayout(id);
                  setIsOpen(false);
                }}
                className="template-option"
              >
                <span className="layout-option-icon">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="min-w-0">
                  <span className="block">{label}</span>
                  <span className="layout-option-description">{description}</span>
                </span>
                {layout === id && <Check className="ml-auto h-4 w-4" />}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
