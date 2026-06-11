import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export function Services() {
  const contactMethods = [
    {
      name: "Call Me",
      description: "Direct phone call",
      action: `tel:${portfolioData.personal.phone.replace(/\s/g, "")}`,
      icon: "Phone",
      color: "from-blue-600 to-blue-500",
    },
    {
      name: "Email Me",
      description: "Send an email",
      action: `mailto:${portfolioData.personal.email}`,
      icon: "Mail",
      color: "from-purple-600 to-purple-500",
    },
    {
      name: "WhatsApp Me",
      description: "Quick message",
      action:
        "https://wa.me/918602443526?text=Hi%20Govind,%20I%20want%20to%20discuss%20a%20website%20or%20web%20application%20requirement.",
      icon: "MessageCircle",
      color: "from-green-600 to-green-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
      id="services"
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
            Services I <span className="gradient-text">Offer</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Need a website or custom web application? I can help you build
            modern, responsive, and professional solutions.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {portfolioData.services.map((service, index) => {
            const IconComponent = Icons[service.icon];
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="glass-dark p-6 rounded-lg border border-slate-700 hover:border-blue-500 transition-all group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {IconComponent && (
                    <IconComponent className="w-6 h-6 text-white" />
                  )}
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                  {service.name}
                </h3>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="glass-dark p-8 rounded-lg border border-slate-700 text-center mb-12"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Have a Project or Requirement?
          </h3>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            I'm here to help you build modern, responsive, and professional
            websites or web applications for your business, personal brand,
            startup, or any custom requirement.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            {contactMethods.map((method, index) => {
              const IconComponent = Icons[method.icon];
              return (
                <motion.a
                  key={index}
                  href={method.action}
                  target={method.action.startsWith("http") ? "_blank" : "_self"}
                  rel={
                    method.action.startsWith("http")
                      ? "noopener noreferrer"
                      : ""
                  }
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r ${method.color} text-white rounded-lg font-semibold hover:shadow-lg transition-all`}
                >
                  {IconComponent && <IconComponent className="w-5 h-5" />}
                  {method.name}
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-slate-400 text-sm mb-4">
            Or connect with me on my social profiles
          </p>
          <div className="flex justify-center gap-4">
            {portfolioData.socialLinks.map((link, index) => {
              const IconComponent = Icons[link.icon];
              return (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-slate-800/50 hover:bg-blue-600 text-slate-300 hover:text-white rounded-lg transition-all"
                  aria-label={link.name}
                >
                  {IconComponent && <IconComponent className="w-5 h-5" />}
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
