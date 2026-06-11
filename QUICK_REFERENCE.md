# 🎯 Quick Reference Guide

## Installation (Copy & Paste)

```bash
# Navigate to project
cd govind-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Browser will open at: **http://localhost:5173**

---

## Quick Customization

### Change Name

File: `src/data/portfolioData.js`

```javascript
personal: {
  name: 'Your Name', // ← Change here
  title: 'Your Title',
  // ...
}
```

### Add Project

File: `src/data/portfolioData.js`

```javascript
projects: [
  // ... existing projects
  {
    id: 4,
    name: "Your Project",
    domain: "Your Domain",
    description: "Description",
    features: ["Feature 1", "Feature 2"],
    technologies: ["React", "Tailwind"],
    link: "#",
  },
];
```

### Update Email

File: `src/data/portfolioData.js`

```javascript
personal: {
  email: 'your@email.com', // ← Change here
  // ...
}
```

### Change Primary Color

File: `tailwind.config.js`

```javascript
colors: {
  'primary': '#FF6B6B', // ← Change to your color
  'primary-dark': '#FF5252',
}
```

---

## File Locations

| What          | Where                       |
| ------------- | --------------------------- |
| Your content  | `src/data/portfolioData.js` |
| Colors        | `tailwind.config.js`        |
| Navbar        | `src/components/Navbar.jsx` |
| Hero section  | `src/components/Hero.jsx`   |
| Global styles | `src/index.css`             |
| HTML template | `index.html`                |

---

## Common Commands

```bash
# Development
npm run dev              # Start dev server
npm run build           # Create production build
npm run preview         # Preview production build

# Maintenance
npm update              # Update all packages
npm audit               # Check for vulnerabilities
npm install [package]   # Install new package
npm uninstall [package] # Remove package
```

---

## Component Structure

Each component:

1. Imports dependencies
2. Defines component function
3. Uses Framer Motion for animations
4. Returns JSX
5. Exported for use in App

Example:

```javascript
import { motion } from "framer-motion";

export function MyComponent() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      {/* Content */}
    </motion.div>
  );
}
```

---

## Styling with Tailwind

Common patterns used:

```javascript
// Colors
className = "text-blue-400"; // Text color
className = "bg-slate-800"; // Background
className = "border-slate-700"; // Border

// Sizing
className = "w-full"; // Full width
className = "h-screen"; // Full height
className = "p-4"; // Padding
className = "m-2"; // Margin

// Responsive
className = "md:grid-cols-2"; // Medium+ screens
className = "sm:text-lg"; // Small+ screens
className = "lg:px-8"; // Large+ screens

// Flexbox
className = "flex items-center gap-4";
className = "grid md:grid-cols-2 gap-8";
```

---

## Adding Icons

Icons from lucide-react:

```javascript
import { Mail, Github, Linkedin } from 'lucide-react';

// Use in component
<Mail className="w-5 h-5" />
<Github className="w-5 h-5" />
<Linkedin className="w-5 h-5" />
```

Common icons: Mail, Phone, MapPin, Github, Linkedin, Code, Briefcase, Calendar, CheckCircle2, ArrowDown, Menu, X, Moon, Sun

---

## Adding Animations

Basic Framer Motion:

```javascript
// Fade in on mount
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.6 }}
>
  Content
</motion.div>

// Animate on scroll
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
>
  Content
</motion.div>

// Hover effects
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Click me
</motion.button>
```

---

## Form Handling (Contact Form)

In `Contact.jsx`:

```javascript
const [formData, setFormData] = useState({
  name: "",
  email: "",
  message: "",
});

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));
};

const handleSubmit = (e) => {
  e.preventDefault();
  // Handle form submission
};
```

---

## Environment Variables (Optional)

Create `.env.local`:

```
VITE_API_URL=https://api.example.com
VITE_EMAIL_SERVICE_KEY=your_key_here
```

Use in code:

```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

---

## Deploying

### To Vercel (Recommended)

1. Push to GitHub
2. Connect at vercel.com
3. Auto-deploys on every push

### To Netlify

1. Run `npm run build`
2. Drag `dist/` folder to netlify.com
3. Or connect GitHub repo

### To Traditional Hosting

1. Run `npm run build`
2. Upload `dist/` folder
3. Set web root to `dist/`

---

## Troubleshooting Quick Fixes

```bash
# Port in use?
npm run dev -- --port 3000

# Dependencies broken?
rm -rf node_modules package-lock.json
npm install

# Want fresh start?
npm cache clean --force
npm install

# Check what's installed?
npm list
```

---

## Resources

- **React**: https://react.dev
- **Tailwind**: https://tailwindcss.com/docs
- **Framer Motion**: https://www.framer.com/motion
- **Vite**: https://vitejs.dev
- **Lucide Icons**: https://lucide.dev

---

## Directory Tree

```
govind-portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Services.jsx
│   │   ├── Education.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── ThemeToggle.jsx
│   ├── data/
│   │   └── portfolioData.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── .gitignore
├── README.md
└── SETUP_GUIDE.md
```

---

## Contact

- **Email**: govindmaithilrtn@gmail.com
- **Phone**: +91 8602443526
- **WhatsApp**: https://wa.me/918602443526

---

**Last Updated**: June 2026 | Version 1.0.0
