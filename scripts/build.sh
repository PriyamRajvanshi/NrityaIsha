#!/bin/bash
set -e

echo "Setting up Git LFS..."
# Initialize Git LFS
git lfs install

# Pull LFS files if in a git repository
if [ -d .git ]; then
  echo "Pulling Git LFS files..."
  git lfs pull || {
    echo "git lfs pull failed, trying alternative methods..."
    git lfs fetch --all && git lfs checkout || {
      echo "Warning: Could not fetch LFS files. Build may be missing large files."
    }
  }
fi

echo "Building application..."
vite build

