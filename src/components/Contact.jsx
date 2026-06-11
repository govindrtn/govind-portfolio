import { motion } from "framer-motion";
import { CheckCircle2, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { portfolioData } from "../data/portfolioData";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    requirementType: "Business Website",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus("success");
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        requirementType: "Business Website",
        message: "",
      });

      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: portfolioData.personal.email,
      href: `mailto:${portfolioData.personal.email}`,
      color: "theme-accent-text",
    },
    {
      icon: Phone,
      label: "Phone",
      value: portfolioData.personal.phone,
      href: `tel:${portfolioData.personal.phone.replace(/\s/g, "")}`,
      color: "text-purple-400",
    },
    {
      icon: MapPin,
      label: "Location",
      value: portfolioData.personal.location,
      href: "https://www.google.com/maps/search/?api=1&query=India",
      color: "text-red-400",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: portfolioData.personal.linkedin,
      href: `https://linkedin.com/in/govind-maithil-30a20816a`,
      color: "text-cyan-400",
    },
  ];

  return (
    <section
      id="contact"
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
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Let's discuss your next project or web development requirement
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <motion.a
                key={index}
                href={info.href}
                target={info.href.startsWith("http") ? "_blank" : "_self"}
                rel={info.href.startsWith("http") ? "noopener noreferrer" : ""}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="theme-hover-border glass-dark p-6 rounded-lg border border-slate-700 transition-all text-center group"
              >
                <div
                  className={`w-12 h-12 ${info.color} mx-auto mb-3 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <p className="text-sm text-slate-500 mb-1">{info.label}</p>
                <p className="text-slate-300 font-medium text-sm break-all">{info.value}</p>
              </motion.a>
            );
          })}
        </div>

        {/* Contact Form and Info */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-dark p-8 rounded-lg border border-slate-700"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send me a Message</h3>

            {submitStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mb-6 p-4 bg-green-500/20 border border-green-500/50 text-green-300 rounded-lg text-sm"
              >
                ✓ Thank you! Your requirement has been received. I'll contact you soon.
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 1234567890"
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Requirement Type
                </label>
                <select
                  name="requirementType"
                  value={formData.requirementType}
                  onChange={handleChange}
                  className="w-full"
                >
                  {portfolioData.requirementTypes.map((type, index) => (
                    <option key={index} value={type} className="bg-slate-900">
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project or requirement..."
                  rows="5"
                  className="w-full resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn-primary font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass-dark p-8 rounded-lg border border-slate-700">
              <h3 className="text-xl font-bold text-white mb-4">What happens next</h3>
              <ol className="space-y-4 text-sm text-slate-400">
                {[
                  "I review your goals, scope, and current challenges.",
                  "We align on the most practical approach and priorities.",
                  "You receive clear updates throughout implementation.",
                ].map((step) => (
                  <li key={step} className="flex items-start gap-3">
                    <CheckCircle2 className="theme-accent-text mt-0.5 h-5 w-5 flex-shrink-0" />
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="glass-dark p-8 rounded-lg border border-slate-700">
              <h3 className="text-xl font-bold text-white mb-4">Response Time</h3>
              <p className="text-slate-400 text-sm mb-4">
                I typically respond within 24 hours. For time-sensitive requirements, send a quick
                WhatsApp message.
              </p>
              <div className="flex gap-3 pt-4 border-t border-slate-700">
                <motion.a
                  href={`https://wa.me/918602443526?text=Hi%20Govind,%20I%20want%20to%20discuss%20a%20website%20or%20web%20application%20requirement.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="flex-1 btn-secondary text-center"
                >
                  WhatsApp
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
