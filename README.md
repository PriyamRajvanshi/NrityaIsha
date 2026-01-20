# NitryaIsha - Classical Dance Website

A modern, responsive website for a dance portfolio and school, built with React and Tailwind CSS.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean and elegant design inspired by classical dance aesthetics
- **Multiple Pages**: Home, About, Trainings, Blog, and Contact pages
- **Interactive Components**: Training plan selector, blog preview, statistics, and more
- **React Router**: Smooth navigation between pages
- **Tailwind CSS**: Utility-first CSS framework for rapid styling

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navigation header
│   │   ├── Footer.jsx          # Footer component
│   │   └── sections/           # Page sections
│   │       ├── Hero.jsx
│   │       ├── Stats.jsx
│   │       ├── TrainingPlans.jsx
│   │       ├── Approach.jsx
│   │       ├── BlogPreview.jsx
│   │       └── Community.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Trainings.jsx
│   │   ├── Blog.jsx
│   │   └── Contact.jsx
│   ├── App.jsx                 # Main app component with routing
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## Customization

### Colors

Edit `tailwind.config.js` to change the primary color scheme. The current theme uses a red/primary color palette.

### Content

- Update text content in the respective component files
- Replace placeholder images with your own
- Modify the blog posts array in `src/pages/Blog.jsx`
- Update contact information in `src/pages/Contact.jsx` and `src/components/Footer.jsx`

### Styling

- Global styles: `src/index.css`
- Component-specific styles: Use Tailwind classes directly in components
- Custom CSS classes: Defined in `src/index.css` under `@layer components`

## Technologies Used

- **React 18**: UI library
- **React Router**: Client-side routing
- **Vite**: Build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **PostCSS**: CSS processing

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for personal and commercial use.

