# Assets Folder

This folder contains images, videos, and other media assets for the Neural Interface Design website.

## Recommended Assets

Place the following files in this folder:

- `hero_bg.jpeg` - Hero section background image (1920x1080 or larger)
- `logo.svg` - Neural logo (optional)
- Additional images or videos as needed

## Image Specifications

### Hero Background
- Format: JPEG or WebP
- Dimensions: 1920x1080 minimum (or higher for retina displays)
- File size: Keep under 500KB for optimal performance
- Content: Abstract neural/tech imagery

### General Guidelines
- Use modern image formats (WebP, AVIF) when possible
- Optimize all images before adding them
- Consider providing multiple sizes for responsive images
- Use lazy loading for images below the fold

## Video Assets

If you want to host videos locally instead of using streaming:

- Format: MP4 (H.264 codec)
- Keep file sizes reasonable (<10MB per video)
- Provide poster images for all videos

## Adding Assets to HTML

To use an asset in the HTML:

```html
<!-- Image -->
<img src="assets/your-image.jpg" alt="Description">

<!-- Video poster -->
<video poster="assets/hero_bg.jpeg" src="assets/video.mp4">
```

## Note

Currently, the site uses external video URLs. If you want to use local assets:
1. Download the videos
2. Place them in this folder
3. Update the `src` attributes in `index.html`
