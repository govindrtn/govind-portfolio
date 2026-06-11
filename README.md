# Govind Maithil - Personal Portfolio Website

A modern, responsive, and professional portfolio website built with React.js, Vite, Tailwind CSS, and Framer Motion.

## 🎨 Features

- ✅ **Modern Design** - Dark theme with blue corporate accent
- ✅ **Responsive Layout** - Mobile, tablet, and desktop optimized
- ✅ **Smooth Animations** - Section reveals, hover effects, and transitions
- ✅ **Sticky Navigation** - Easy section navigation
- ✅ **Component-Based** - Clean, reusable components
- ✅ **Performance Optimized** - Fast load times with Vite
- ✅ **Accessibility** - Semantic HTML and proper ARIA labels
- ✅ **Production Ready** - No console errors, clean code

## 📋 Sections Included

1. **Navbar** - Sticky, responsive navigation with mobile menu
2. **Hero** - Eye-catching introduction with CTAs and animated background
3. **About** - Profile highlights and expertise areas
4. **Experience** - Timeline of professional experience
5. **Projects** - Showcase of featured projects
6. **Skills** - Technical skills with proficiency levels
7. **Services** - Services offered and contact methods
8. **Education** - Academic background
9. **Contact** - Contact form and information
10. **Footer** - Social links and copyright

## 🛠️ Tech Stack

- **Frontend Framework**: React.js 18.x
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **JavaScript**: Modern ES6+

## 📦 Installation

### Prerequisites

- Node.js (v18.0.0 or higher; Node.js 24 LTS recommended)
- npm or yarn

### Setup Instructions

1. **Navigate to project directory**

   ```bash
   cd govind-portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

   The website will open automatically at `http://localhost:5173`

4. **Build for production**

   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## Free Deployment

This portfolio is ready to deploy on Netlify or Vercel.

### Netlify

1. Push the project to a GitHub repository.
2. In Netlify, select **Add new site > Import an existing project**.
3. Select the repository and deploy. Build settings are configured in
   `netlify.toml`.

### Vercel

1. Push the project to a GitHub repository.
2. In Vercel, select **Add New > Project** and import the repository.
3. Deploy the project. Build settings are configured in `vercel.json`.

## 📁 Project Structure

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
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## 🎯 Customization

### Update Personal Information

Edit `src/data/portfolioData.js` to update:

- Name, email, phone, and social links
- Experience details and projects
- Skills and services
- Education information

### Modify Colors

Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      'primary': '#3B82F6',  // Change primary color
      'dark': '#0F172A',     // Change dark background
    }
  }
}
```

### Update Animations

Modify animation speeds in:

- `tailwind.config.js` for global animations
- Individual component files for specific animations

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Vercel automatically builds and deploys

### Deploy to Netlify

1. Build the project: `npm run build`
2. Connect your Git repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### Deploy to GitHub Pages

1. Update `vite.config.js`:
   ```javascript
   export default defineConfig({
     base: "/repository-name/",
     // ...
   });
   ```
2. Build: `npm run build`
3. Push `dist` folder to `gh-pages` branch

## 📝 Content Management

All portfolio content is stored in `src/data/portfolioData.js`. This centralized approach makes it easy to:

- Update experience and projects
- Modify skill lists
- Change contact information
- Update service offerings

## ⚡ Performance Tips

- Uses Vite for fast development and optimized builds
- Lazy loading of images and components
- Optimized animations with Framer Motion
- CSS purging with Tailwind
- Minified production builds

## 🐛 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📞 Contact Information

- **Email**: govindmaithilrtn@gmail.com
- **Phone**: +91 8602443526
- **LinkedIn**: linkedin.com/in/govind-maithil-30a20816a
- **Location**: India

## 📄 License

This portfolio website is created for personal use.

## 🙏 Credits

- Built with [React.js](https://react.dev)
- Styled with [Tailwind CSS](https://tailwindcss.com)
- Animated with [Framer Motion](https://www.framer.com/motion)
- Icons by [Lucide React](https://lucide.dev)
- Build tool: [Vite](https://vitejs.dev)

## 📚 Additional Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion)
- [Vite Documentation](https://vitejs.dev/guide)

## 🔄 Version History

### v1.0.0 (Current)

- Initial release
- All sections implemented
- Responsive design
- Smooth animations
- Contact form with validation
- Production-ready

---

**Made with ❤️ by Govind Maithil**
