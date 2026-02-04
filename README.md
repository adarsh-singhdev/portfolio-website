# Adarsh Singh - Portfolio Website

A minimalist, fully responsive developer portfolio built with modern web technologies.

## 🎨 Features

- **Minimalist Design** - Clean, elegant interface with warm beige (#E8E3D5) and orange (#D4845C) color palette
- **Fully Responsive** - Optimized for mobile, tablet, and desktop
- **Smooth Animations** - CSS keyframe animations with scroll triggers
- **Blog Section** - Article listing with search, filter, and modal view
- **SEO Optimized** - Meta tags, sitemap, robots.txt, and structured data
- **Accessibility** - WCAG 2.1 AA compliance with ARIA labels and keyboard navigation
- **Performance** - Fast load times with Vite and optimized assets

## 🛠️ Tech Stack

- **React** 19.2.0 - UI framework
- **Vite** 7.3.1 - Build tool
- **Tailwind CSS** 3.4.17 - Utility-first styling
- **Lucide React** - Icon library
- **Google Fonts** - Playfair Display (serif) & Inter (sans-serif)

## 📁 Project Structure

```
src/
├── components/
│   ├── Navigation.jsx     # Fixed sidebar navigation
│   ├── Hero.jsx          # Landing section
│   ├── Projects.jsx      # Project showcase
│   ├── Blog.jsx          # Blog articles
│   ├── Experience.jsx    # Work experience & education
│   ├── Contact.jsx       # Contact section
│   ├── ProgressBar.jsx   # Scroll progress indicator
│   └── LoadingSpinner.jsx # Page loader
├── hooks/
│   └── useHooks.js       # Custom React hooks
├── utils/
│   └── constants.js      # Design tokens
├── App.jsx               # Main app component
└── index.css            # Global styles & animations
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The dev server runs at `http://localhost:5175`

## 📝 Customization

### Update Portfolio Content

Edit the data arrays in each component:

- **Hero.jsx** - Your name, title, social links
- **Projects.jsx** - Your projects and tech stacks
- **Experience.jsx** - Skills, education, certifications
- **Blog.jsx** - Blog articles and categories
- **Contact.jsx** - Contact information

### Change Colors

Edit the color values in:
- `tailwind.config.js` - Theme colors
- `src/utils/constants.js` - Design tokens
- `src/index.css` - Dark mode colors

### Modify Typography

Update font sizes in `tailwind.config.js` fontSize configuration.

## 📱 Sections

- **Home** - Hero section with introduction
- **Projects** - Featured project showcase
- **Blog** - Articles with search and filtering
- **Experience** - Work experience, skills, education
- **Contact** - Contact cards and email CTA

## 🎯 Key Features

- **Smooth Scrolling** - Navigation scrolls to sections smoothly
- **Responsive Navigation** - Desktop sidebar + mobile bottom nav
- **Search & Filter** - Blog articles with search and category filters
- **Modal Articles** - Click blog cards to read full articles in modal
- **Scroll Animations** - Elements animate on scroll with 20% visibility threshold
- **Loading Spinner** - 2-second page load animation
- **Hidden Scrollbar** - Clean interface with hidden vertical scrollbar

## 📊 Performance

- Vite for fast development and optimized builds
- Code splitting for faster initial load
- Lazy loading for images and components
- Minified CSS and JavaScript in production

## 🔐 SEO & Meta Tags

- Open Graph tags for social sharing
- Twitter Card support
- JSON-LD structured data
- Sitemap and robots.txt
- Canonical URLs

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Adarsh Singh**
- Email: adarsh042021@outlook.com
- Phone: +91 7439473588
- LinkedIn: linkedin.com/in/adarsh-singh-/
- GitHub: github.com/adarshsingh-1

---

Built with ❤️ using React and Tailwind CSS
