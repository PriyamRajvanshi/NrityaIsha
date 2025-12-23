#!/bin/bash
set -e

echo "Installing Git LFS..."
git lfs install

echo "Configuring Git remote for LFS..."
CURRENT_REMOTE=$(git remote get-url origin)
echo "Current remote: $CURRENT_REMOTE"

# Convert SSH to HTTPS if needed
if [[ $CURRENT_REMOTE == git@github.com:* ]]; then
  HTTPS_REMOTE=$(echo $CURRENT_REMOTE | sed 's|git@github.com:|https://github.com/|')
else
  HTTPS_REMOTE=$CURRENT_REMOTE
fi

# Ensure .git suffix
if [[ ! $HTTPS_REMOTE == *.git ]]; then
  HTTPS_REMOTE="${HTTPS_REMOTE}.git"
fi

echo "Setting remote to: $HTTPS_REMOTE"
git remote set-url origin "$HTTPS_REMOTE"

# Set Git LFS endpoint explicitly
LFS_ENDPOINT="${HTTPS_REMOTE}/info/lfs"
echo "Setting Git LFS endpoint to: $LFS_ENDPOINT"
git config lfs.url "$LFS_ENDPOINT"

echo "Fetching Git LFS objects..."
git lfs fetch --all

echo "Checking out Git LFS objects..."
git lfs checkout

echo "Building application..."
vite build

