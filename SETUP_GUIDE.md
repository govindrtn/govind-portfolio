# 🚀 Complete Setup Guide - Govind Maithil Portfolio

## Quick Start (5 minutes)

### Option 1: Using npm (Recommended)

```bash
# 1. Navigate to project directory
cd govind-portfolio

# 2. Install all dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open browser and visit: http://localhost:5173
```

### Option 2: Using yarn

```bash
cd govind-portfolio
yarn install
yarn dev
```

### Option 3: Using pnpm

```bash
cd govind-portfolio
pnpm install
pnpm dev
```

---

## 📋 Step-by-Step Setup

### Step 1: Prerequisites Check

Make sure you have Node.js installed:

```bash
node --version  # Should be v18.0.0 or higher; Node.js 24 LTS recommended
npm --version   # Should be v6.0.0 or higher
```

If not installed, download from [nodejs.org](https://nodejs.org)

### Step 2: Install Dependencies

```bash
npm install
```

This will install all required packages:

- react & react-dom
- framer-motion (animations)
- lucide-react (icons)
- tailwindcss (styling)
- vite (build tool)

### Step 3: Verify Installation

After installation, verify all dependencies are installed:

```bash
ls node_modules | grep -E "react|framer|lucide|tailwind"
```

### Step 4: Start Development Server

```bash
npm run dev
```

You should see output like:

```
  VITE v5.0.2  ready in xxx ms

  ➜  Local:   http://localhost:5173/
  ➜  press h to show help
```

### Step 5: Open in Browser

The browser should open automatically. If not, visit: http://localhost:5173

---

## 🎨 Customize Your Portfolio

### 1. Update Personal Information

Edit `src/data/portfolioData.js`:

```javascript
export const portfolioData = {
  personal: {
    name: "Your Name",
    title: "Your Title",
    email: "your@email.com",
    phone: "+91 1234567890",
    // ... update other fields
  },
  // ... update other sections
};
```

### 2. Add Your Projects

In `src/data/portfolioData.js`, update the `projects` array:

```javascript
projects: [
  {
    id: 1,
    name: "Project Name",
    domain: "Domain",
    description: "Project description...",
    features: ["Feature 1", "Feature 2"],
    technologies: ["React", "Tailwind CSS"],
    link: "https://your-project-link.com",
  },
  // ... add more projects
];
```

### 3. Update Experience

Edit experience array in `src/data/portfolioData.js`:

```javascript
experience: [
  {
    id: 1,
    company: "Company Name",
    role: "Your Role",
    duration: "Jan 2024 – Present",
    project: "Project Name",
    description: "What you did...",
    responsibilities: ["Task 1", "Task 2"],
    modules: ["Module 1", "Module 2"],
  },
];
```

### 4. Customize Colors

Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      'primary': '#3B82F6',      // Change primary blue
      'primary-dark': '#1E40AF', // Change darker blue
      'dark': '#0F172A',         // Change background
      'dark-light': '#1E293B',   // Change light background
    }
  }
}
```

### 5. Update Contact Information

In `src/data/portfolioData.js`, update:

```javascript
personal: {
  email: 'your@email.com',
  phone: '+91 1234567890',
  location: 'Your City, Country',
  linkedin: 'linkedin.com/in/yourprofile',
  github: 'github.com/yourname',
}
```

---

## 🔨 Available Commands

```bash
# Start development server (with hot reload)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Check Node version
node --version

# Check npm version
npm --version
```

---

## 📁 Project Structure Explained

```
govind-portfolio/
│
├── src/                          # Source code
│   ├── components/               # React components
│   │   ├── Navbar.jsx           # Navigation bar
│   │   ├── Hero.jsx             # Hero section
│   │   ├── About.jsx            # About section
│   │   ├── Experience.jsx       # Experience timeline
│   │   ├── Projects.jsx         # Projects showcase
│   │   ├── Skills.jsx           # Skills section
│   │   ├── Services.jsx         # Services offered
│   │   ├── Education.jsx        # Education info
│   │   ├── Contact.jsx          # Contact form
│   │   ├── Footer.jsx           # Footer
│   │   └── ThemeToggle.jsx      # Dark/Light mode
│   │
│   ├── data/
│   │   └── portfolioData.js     # All portfolio content
│   │
│   ├── App.jsx                  # Main App component
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global styles
│
├── public/                       # Static assets (if any)
│
├── index.html                    # HTML entry point
├── vite.config.js               # Vite configuration
├── tailwind.config.js           # Tailwind configuration
├── postcss.config.js            # PostCSS configuration
├── package.json                 # Dependencies & scripts
├── .gitignore                   # Git ignore rules
└── README.md                    # Documentation
```

---

## 🚀 Building for Production

### Create Optimized Build

```bash
npm run build
```

This generates a `dist/` folder with optimized files ready for deployment.

### Test Production Build Locally

```bash
npm run preview
```

This runs the production build locally for testing.

---

## 🌐 Deployment Options

### Option 1: Vercel (Easiest)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Select your GitHub repository
5. Click "Deploy"

**Configuration:**

- Framework: Vite
- Build Command: `npm run build`
- Output Directory: `dist`

### Option 2: Netlify

1. Build your project: `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag and drop the `dist` folder
4. Or connect your GitHub repository

### Option 3: GitHub Pages

1. Add to `vite.config.js`:

```javascript
export default defineConfig({
  base: "/repository-name/",
  // ...
});
```

2. Build: `npm run build`
3. Push `dist` folder to `gh-pages` branch

### Option 4: Traditional Hosting

1. Build: `npm run build`
2. Upload `dist/` folder to your hosting
3. Set web root to `dist/` folder

---

## 🆘 Troubleshooting

### Issue: "npm: command not found"

**Solution:** Install Node.js from [nodejs.org](https://nodejs.org)

### Issue: Port 5173 already in use

**Solution:** Kill the process or use a different port:

```bash
npm run dev -- --port 3000
```

### Issue: Module not found errors

**Solution:** Reinstall dependencies:

```bash
rm -rf node_modules package-lock.json
npm install
```

### Issue: Tailwind CSS not working

**Solution:** Make sure `index.css` is imported in `main.jsx`:

```javascript
import "./index.css";
```

### Issue: Framer Motion animations not working

**Solution:** Check if framer-motion is installed:

```bash
npm install framer-motion
```

### Issue: Icons not showing

**Solution:** Verify lucide-react is installed:

```bash
npm install lucide-react
```

---

## ✅ Verification Checklist

After setup, verify everything is working:

- [ ] `npm install` completed without errors
- [ ] `npm run dev` starts the server successfully
- [ ] Browser opens to http://localhost:5173
- [ ] All sections visible (Home, About, Projects, etc.)
- [ ] Navigation links work
- [ ] Animations are smooth
- [ ] Responsive design on mobile
- [ ] Contact form can be filled
- [ ] No console errors (F12 → Console)
- [ ] Theme toggle works (if implemented)

---

## 🔐 Best Practices

1. **Never commit node_modules**
   - Already in .gitignore

2. **Keep sensitive data in environment variables**
   - Create `.env.local` file
   - Add to `.gitignore`

3. **Test before deployment**

   ```bash
   npm run build
   npm run preview
   ```

4. **Keep dependencies updated**

   ```bash
   npm update
   npm audit
   ```

5. **Use Git for version control**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio setup"
   ```

---

## 📚 Learning Resources

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev/guide)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Guide](https://www.framer.com/motion)
- [MDN Web Docs](https://developer.mozilla.org)

---

## 📞 Support

For issues or questions:

- Email: govindmaithilrtn@gmail.com
- Phone: +91 8602443526
- LinkedIn: linkedin.com/in/govind-maithil-30a20816a

---

**Happy coding! 🎉**
