#!/bin/bash
set -e

echo "Installing Git LFS..."
git lfs install

echo "Checking Git remotes..."
git remote -v 2>/dev/null || echo "No remotes configured"

# Determine the remote name and URL
REMOTE_NAME="origin"
REMOTES=$(git remote 2>/dev/null || echo "")
if [ -z "$REMOTES" ] || ! echo "$REMOTES" | grep -q "^origin$"; then
  echo "Origin remote not found, checking for other remotes..."
  if [ -n "$REMOTES" ]; then
    REMOTE_NAME=$(echo "$REMOTES" | head -n1)
    echo "Using existing remote: $REMOTE_NAME"
  else
    # No remotes found, add origin
    echo "No remotes found, adding origin..."
    # Try to get URL from Vercel env vars or use known URL
    if [ -n "$VERCEL_GIT_REPO_URL" ]; then
      REPO_URL="$VERCEL_GIT_REPO_URL"
    elif [ -n "$VERCEL_GIT_REPO_SLUG" ]; then
      REPO_URL="https://github.com/$VERCEL_GIT_REPO_SLUG.git"
    else
      # Fallback to known repository URL
      REPO_URL="https://github.com/PriyamRajvanshi/NrityaIsha.git"
    fi
    echo "Adding origin remote: $REPO_URL"
    git remote add origin "$REPO_URL"
    REMOTE_NAME="origin"
  fi
fi

CURRENT_REMOTE=$(git remote get-url "$REMOTE_NAME")
echo "Current remote ($REMOTE_NAME): $CURRENT_REMOTE"

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
git remote set-url "$REMOTE_NAME" "$HTTPS_REMOTE"

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

