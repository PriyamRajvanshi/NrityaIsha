# Uploading Video to Vercel Blob

This guide will help you upload your video file to Vercel Blob storage, which is optimized for serving large video files.

## Prerequisites

1. **Vercel Account**: Make sure you have a Vercel account and your project is linked
2. **Vercel Blob Storage**: Enable Blob storage in your Vercel project dashboard

## Method 1: Using the Upload Script (Recommended)

### Step 1: Install Dependencies

```bash
npm install
```

### Step 2: Get Your Blob Token

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project
3. Go to **Settings** → **Storage** → **Blob**
4. Copy the `BLOB_READ_WRITE_TOKEN`

### Step 3: Set Environment Variable

```bash
export BLOB_READ_WRITE_TOKEN="your-token-here"
```

Or create a `.env.local` file in the root directory:

```
BLOB_READ_WRITE_TOKEN=your-token-here
```

### Step 4: Upload the Video

```bash
npm run upload-video
```

Or specify a custom path:

```bash
npm run upload-video public/videos/NI.mov
```

### Step 5: Configure the Video URL

After upload, the script will output a Blob URL. Add it to your `.env` file:

```bash
VITE_VIDEO_URL=https://[your-blob-url].public.blob.vercel-storage.com/NI.mov
```

Or update `src/config/video.js` directly:

```javascript
export const VIDEO_URL = 'https://[your-blob-url].public.blob.vercel-storage.com/NI.mov'
```

## Method 2: Using Vercel Dashboard

1. Go to your Vercel project dashboard
2. Navigate to **Storage** → **Blob**
3. Click **Upload** and select your video file (`public/videos/NI.mov`)
4. Copy the public URL
5. Add it to `.env` or `src/config/video.js` as shown above

## Method 3: Using Vercel CLI

```bash
# Install Vercel CLI (if not already installed)
npm i -g vercel

# Login to Vercel
vercel login

# Link your project (if not already linked)
vercel link

# Upload the file
vercel blob put public/videos/NI.mov --token YOUR_BLOB_TOKEN
```

## Environment Variables

Create a `.env` file in the root directory:

```env
VITE_VIDEO_URL=https://[your-blob-url].public.blob.vercel-storage.com/NI.mov
BLOB_READ_WRITE_TOKEN=your-token-here
```

**Important**: Add `.env` to `.gitignore` to keep your tokens secure!

## Benefits of Using Vercel Blob

- ✅ Optimized for large files (no size limits like static hosting)
- ✅ CDN delivery for fast global access
- ✅ Range request support for video streaming
- ✅ No build size concerns
- ✅ Better performance and reliability

## Troubleshooting

### Error: BLOB_READ_WRITE_TOKEN not set
- Make sure you've set the environment variable
- Check that you copied the token correctly from Vercel dashboard

### Error: Video not playing
- Verify the Blob URL is correct
- Check browser console for CORS or loading errors
- Ensure the video format is supported (MP4 recommended)

### Video still not working after upload
- Clear browser cache
- Check that `VITE_VIDEO_URL` is set correctly
- Verify the Blob URL is accessible (try opening it directly in browser)

## Converting Video Format (Optional)

For better browser compatibility, consider converting `.mov` to `.mp4`:

```bash
# Using ffmpeg
ffmpeg -i public/videos/NI.mov -c:v libx264 -c:a aac -movflags +faststart public/videos/NI.mp4
```

Then upload the MP4 file instead.

