# Carousel Videos

Place your carousel videos in this folder (`public/videos/`).

## How to add videos:

1. Copy your video files to this `public/videos/` folder
2. Update the `videos` array in `src/components/sections/Carousel.jsx` with your video filenames

## Example:

If you have these videos:
- `dance1.mp4`
- `dance2.mp4`
- `dance3.mp4`

Then in `Carousel.jsx`, update the `videos` array like this:

```javascript
const videos = [
  '/videos/dance1.mp4',
  '/videos/dance2.mp4',
  '/videos/dance3.mp4',
]
```

## Supported formats:
- MP4 (recommended - best browser support)
- WebM
- OGG

## Video Features:
- Videos automatically play when their slide is active
- Videos pause when switching to another slide
- When a video ends, the carousel automatically moves to the next slide
- Videos are muted by default (required for autoplay in most browsers)
- Videos loop is disabled by default (each video plays once)

## Tips:
- Use MP4 format (H.264 codec) for best compatibility
- Optimize videos for web (compress to reduce file size)
- Recommended resolution: 1920x1080 or lower
- Keep video files under 50MB for better loading performance
- Videos are set to `muted` and `playsInline` for mobile compatibility

## Video Controls:
- Click left/right arrows to navigate between videos
- Click indicator dots at the bottom to jump to a specific video
- Videos will automatically advance to the next slide when they finish playing


