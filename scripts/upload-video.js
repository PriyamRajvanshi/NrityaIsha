#!/usr/bin/env node

/**
 * Script to upload video to Vercel Blob
 * 
 * Prerequisites:
 * 1. Install Vercel CLI: npm i -g vercel
 * 2. Login: vercel login
 * 3. Link your project: vercel link
 * 
 * Usage:
 * node scripts/upload-video.js [path-to-video-file]
 * 
 * Example:
 * node scripts/upload-video.js public/videos/NI.mov
 */

import { put } from '@vercel/blob';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function uploadVideo() {
  const videoPath = process.argv[2] || resolve(__dirname, '../public/videos/NI.mov');
  
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    console.error('❌ Error: BLOB_READ_WRITE_TOKEN environment variable is not set.');
    console.log('\nTo get your token:');
    console.log('1. Go to https://vercel.com/dashboard');
    console.log('2. Navigate to your project settings');
    console.log('3. Go to Storage > Blob');
    console.log('4. Copy the BLOB_READ_WRITE_TOKEN');
    console.log('\nThen run:');
    console.log(`export BLOB_READ_WRITE_TOKEN="your-token-here"`);
    console.log(`node scripts/upload-video.js ${videoPath}`);
    process.exit(1);
  }

  try {
    console.log(`📤 Uploading video: ${videoPath}`);
    
    const videoBuffer = readFileSync(videoPath);
    const fileName = videoPath.split('/').pop();
    
    const blob = await put(fileName, videoBuffer, {
      access: 'public',
      token: process.env.BLOB_READ_WRITE_TOKEN,
    });

    console.log('\n✅ Video uploaded successfully!');
    console.log('\n📋 Add this to your .env file:');
    console.log(`VITE_VIDEO_URL=${blob.url}`);
    console.log('\nOr update src/config/video.js directly with:');
    console.log(`export const VIDEO_URL = '${blob.url}'`);
    console.log('\n🔗 Blob URL:', blob.url);
    
  } catch (error) {
    console.error('❌ Error uploading video:', error.message);
    console.log('\nTroubleshooting:');
    console.log('1. Make sure BLOB_READ_WRITE_TOKEN is set correctly');
    console.log('2. Ensure the video file exists at the specified path');
    console.log('3. Check your Vercel project has Blob storage enabled');
    process.exit(1);
  }
}

uploadVideo();

