# Neural Interface Design - HTML/CSS/JS Version

This folder contains the vanilla HTML/CSS/JS version of the Neural Interface Design landing page, converted from the React/TypeScript implementation.

## 📁 Folder Structure

```
reference/
├── index.html       # Main HTML file with all page structure
├── styles.css       # Complete CSS with responsive design
├── script.js        # JavaScript for interactivity and animations
├── assets/          # Folder for images, videos, and other assets
└── README.md        # This file
```

## 🚀 Features

### Fully Responsive Design
- **Desktop** (1920px+): Full-width layout with large typography
- **Laptop** (1024px - 1919px): Adjusted spacing and font sizes
- **Tablet** (768px - 1023px): 2-column grids, stacked features
- **Mobile** (320px - 767px): Single column, mobile navigation menu

### Interactive Components
- **Mobile Menu**: Hamburger menu for mobile devices
- **Smooth Scrolling**: Animated navigation between sections
- **HLS Video Streaming**: Support for adaptive video streaming
- **Scroll Animations**: Fade-in effects on scroll
- **Stats Counter**: Animated number counting
- **Parallax Effects**: Subtle parallax on hero section
- **Video Autoplay**: Smart video playback based on viewport visibility

### Accessibility Features
- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Reduced motion support for users with motion sensitivity
- Touch device optimizations

## 🎨 Design Features

### Glassmorphism Effects
Two types of glass effects are implemented:
- **liquid-glass**: Light glass effect with subtle backdrop blur
- **liquid-glass-strong**: Stronger glass effect with enhanced blur

### Typography
- **Heading Font**: Instrument Serif (italic)
- **Body Font**: Barlow (300, 400, 500, 600)

### Color Scheme
- Primary Background: Black (#000)
- Text: White with varying opacity levels
- Accent: White on black for CTAs

## 📱 Responsive Breakpoints

```css
/* Tablets */
@media (max-width: 1024px)

/* Mobile */
@media (max-width: 768px)

/* Small Mobile */
@media (max-width: 480px)
```

## 🎬 Video Implementation

The site uses three types of video loading:

1. **Direct MP4 (Hero)**: Direct video URL with poster image
2. **HLS Streaming**: Adaptive streaming for other sections using HLS.js
3. **Lazy Loading**: Videos load only when they enter the viewport

## 🔧 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari 14+, Chrome Mobile)

## 📝 Usage

Simply open `index.html` in a modern web browser. No build process or dependencies required!

For local development, you can use any local server:

```bash
# Python 3
python -m http.server 8000

# Node.js (http-server)
npx http-server

# PHP
php -S localhost:8000
```

Then visit `http://localhost:8000`

## 🖼️ Assets Folder

Place your images and media files in the `assets/` folder:

- `hero_bg.jpeg` - Hero section background image
- Any additional images or videos
- Icons or logos

## ⚡ Performance Optimizations

- Lazy loading for videos
- Intersection Observer for scroll animations
- CSS animations with GPU acceleration
- Debounced scroll handlers
- Reduced motion support
- Touch device optimizations

## 🎯 Key Differences from React Version

1. **No Build Step**: Pure HTML/CSS/JS - no compilation needed
2. **No Dependencies**: Except for HLS.js CDN for video streaming
3. **Vanilla JS**: All React functionality converted to native JavaScript
4. **Manual Animation**: IntersectionObserver replaces Framer Motion
5. **Static Content**: No state management needed

## 📄 File Details

### index.html
- Complete page structure
- All sections: Hero, Process, Services, Features, Stats, Testimonials, CTA
- Semantic HTML5 markup
- Mobile-friendly meta tags

### styles.css
- All styles in one file
- Organized by sections
- Responsive media queries
- Custom CSS variables
- Glassmorphism effects

### script.js
- Mobile menu toggle
- Smooth scrolling
- HLS video setup
- Scroll animations
- Stats counter animation
- Parallax effects
- Performance optimizations

## 🔄 Converting Back to React

If you need to convert this back to React:
1. Split HTML sections into React components
2. Convert CSS classes to CSS modules or styled-components
3. Replace vanilla JS with React hooks (useState, useEffect)
4. Use Framer Motion for animations
5. Implement proper state management

## 📞 Support

For questions or issues with this implementation, please refer to the main project documentation.

---

**Version**: 1.0.0
**Last Updated**: March 2026
**License**: Same as main project
