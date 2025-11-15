# UI Website Template Starter

A modern, responsive website template based on a clean SaaS landing page design. Perfect for customer service software, SaaS products, or any business website.

## Features

- **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices
- **Modern Design** - Clean, professional UI with smooth animations
- **Easy to Customize** - Well-organized CSS with CSS variables for quick theming
- **Interactive Components** - Smooth scrolling, hover effects, and carousel testimonials
- **No Dependencies** - Pure HTML, CSS, and vanilla JavaScript

## File Structure

```
.
├── index.html          # Main HTML file
├── styles.css          # All styling and responsive design
├── script.js           # Interactive functionality
└── README.md          # This file
```

## Getting Started

### Option 1: Open Directly
Simply open `index.html` in your web browser to view the template.

### Option 2: Local Server
For the best experience, run a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## Customization Guide

### Colors
Edit CSS variables in `styles.css`:

```css
:root {
    --primary-purple: #6941C6;    /* Brand purple */
    --primary-red: #E31B54;       /* CTA buttons */
    --text-dark: #101828;         /* Primary text */
    --text-gray: #475467;         /* Secondary text */
    --bg-light: #F9FAFB;          /* Light backgrounds */
}
```

### Content
- **Navigation**: Edit the nav links in the `<nav>` section of `index.html`
- **Hero Section**: Update the title, description, and buttons
- **Features**: Modify the 6 feature cards with your own content
- **Testimonials**: Add/edit testimonials in `script.js` (testimonials array)
- **Company Logos**: Replace with your actual partner logos

### Typography
The template uses system fonts by default. To add custom fonts:

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

:root {
    --font-family: 'Inter', sans-serif;
}
```

### Images
Replace the placeholder hero image by:
1. Adding your image to the project folder
2. Updating the `src` in the `.hero-image img` element
3. Setting `display: block` in CSS for the image

## Sections Overview

### Navigation Bar
- Sticky header with logo and menu items
- Dropdown indicators for Products and Resources
- Login and Sign up CTAs

### Hero Section
- Eye-catching headline and subheading
- Primary and secondary CTA buttons
- Hero image placeholder (customize with your image)

### Companies Section
- Social proof with company logos
- Easily add/remove company logos

### Features Section
- 6 feature cards in a responsive grid
- Icons and descriptions for each feature
- Smooth hover animations

### Testimonial Section
- Rotating testimonial carousel
- 5-star rating display
- Customer quote with author attribution
- Image placeholder for customer photo

### Footer
- Simple copyright notice
- Easily expandable for links and additional info

## Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: Below 768px

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Customization Tips

1. **Change the color scheme**: Update CSS variables for instant theme changes
2. **Add more sections**: Copy and modify existing section HTML/CSS
3. **Replace icons**: The template uses emoji icons - replace with SVG or icon fonts
4. **Add animations**: The template includes basic animations - extend with CSS keyframes
5. **Integrate forms**: Add signup forms with your preferred backend/service

## Performance

- No external dependencies or frameworks
- Minimal CSS and JavaScript
- Optimized for fast loading
- Lightweight and performant

## Credits

Design inspired by modern SaaS landing pages with a focus on clean aesthetics and user experience.

## License

This template is free to use for personal and commercial projects.

---

**Need help?** Feel free to customize this template to match your brand and requirements!