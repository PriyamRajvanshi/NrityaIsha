# Carousel Images

Place your carousel images in this folder (`public/images/`).

## How to add images:

1. Copy your image files to this `public/images/` folder
2. Update the `images` array in `src/components/sections/Carousel.jsx` with your image filenames

## Example:

If you have these images:
- `dance1.jpg`
- `dance2.jpg`
- `dance3.jpg`

Then in `Carousel.jsx`, update the `images` array like this:

```javascript
const images = [
  '/images/dance1.jpg',
  '/images/dance2.jpg',
  '/images/dance3.jpg',
]
```

## Supported formats:
- JPG/JPEG
- PNG
- WebP
- Any image format supported by browsers

## Tips:
- Use high-quality images for best results
- Recommended aspect ratio: 16:9 or similar wide format
- Image size: Optimize images for web (under 1MB per image recommended)


