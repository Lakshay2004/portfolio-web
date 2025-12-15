# Modern Developer Portfolio

A high-quality, modern developer portfolio website built with Next.js 14, featuring advanced animations, smooth scrolling, and interactive UI elements.

![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?style=flat-square&logo=tailwind-css)

## 🚀 Features

- ✨ **Custom Cursor Effects** - Animated cursor with magnetic effects on interactive elements
- 🎭 **Smooth Animations** - Powered by Framer Motion and GSAP
- 🌊 **Smooth Scrolling** - Butter-smooth scrolling experience with Lenis
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- 🎨 **Modern Dark Theme** - Beautiful dark theme with vibrant accent colors
- 🎪 **Interactive Sections**:
  - Hero section with animated text and gradient background
  - About Me with parallax effects
  - Skills showcase with animated progress bars
  - Projects carousel with Swiper.js
  - Animated timeline for work experience
  - Contact form with validation
- ⚡ **Performance Optimized** - Built with Next.js 14 for optimal performance
- ♿ **Accessible** - ARIA labels and keyboard navigation support
- 🔍 **SEO Optimized** - Meta tags and Open Graph support

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: 
  - [Framer Motion](https://www.framer.com/motion/) - Page transitions and component animations
  - [GSAP](https://greensock.com/gsap/) - Advanced scroll-triggered animations
- **Smooth Scrolling**: [Lenis](https://lenis.darkroom.engineering/)
- **Carousel**: [Swiper.js](https://swiperjs.com/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)

## 📦 Installation

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Git

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/Lakshay2004/portfolio-web.git
   cd portfolio-web
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization Guide

### 1. Personal Information

Update the following files with your information:

**`app/components/Hero.tsx`**
- Line 77: Update your name
- Line 85: Update your title
- Line 91: Update your tagline

**`app/components/About.tsx`**
- Update the description text
- Update the statistics

**`app/components/Contact.tsx`**
- Update email, location, and phone
- Update social links

**`app/layout.tsx`**
- Update metadata (title, description, etc.)

### 2. Projects

Edit `app/components/Projects.tsx`:

```typescript
const projects = [
  {
    id: 1,
    title: 'Your Project Name',
    description: 'Project description...',
    image: '/images/your-project.jpg',
    tags: ['React', 'Node.js', 'MongoDB'],
    liveUrl: 'https://your-project.com',
    githubUrl: 'https://github.com/yourusername/project',
  },
  // Add more projects...
];
```

### 3. Skills

Edit `app/components/Skills.tsx` to add or modify your skills and proficiency levels.

### 4. Work Experience

Edit `app/components/Experience.tsx` to add your work history.

### 5. Colors & Theme

Edit `app/globals.css`:

```css
:root {
  --background: #0a0a0a;
  --foreground: #ededed;
  --accent: #3b82f6;        /* Change accent color */
  --accent-hover: #2563eb;   /* Change accent hover color */
}
```

### 6. Images

Place your images in the `public/images/` directory and reference them.

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect Next.js
   - Click "Deploy"

3. **Configure custom domain (optional)**
   - In your Vercel project settings, add your custom domain

## 📁 Project Structure

```
portfolio-web/
├── app/
│   ├── components/
│   │   ├── CustomCursor.tsx
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   └── SmoothScroll.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
│   └── images/
├── package.json
└── README.md
```

## 🎯 Performance

- ✅ Optimized for production
- ✅ Code splitting and lazy loading
- ✅ Minimal JavaScript bundle size
- ✅ Server-side rendering for better SEO
- ✅ Static site generation where possible

## 🔧 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📝 License

This project is MIT licensed.

## 💬 Support

If you have any questions or need help:
- GitHub: [@Lakshay2004](https://github.com/Lakshay2004)

## 🙏 Acknowledgments

- Design inspiration: [Muhammad Aamir Malik](https://www.muhammadaamirmalik.com/)
- Built with [Next.js](https://nextjs.org/)
- Animations by [Framer Motion](https://www.framer.com/motion/) and [GSAP](https://greensock.com/)

---

⭐ Star this repo if you find it helpful!

Made with ❤️ by Your Name
