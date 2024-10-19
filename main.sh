#!/bin/bash

# Check for an environment variable to skip installation
if [ "$SKIP_INSTALLATION" != "1" ]; then
  echo "Installing dependencies..."
  npm install --legacy-peer-deps
else
  echo "Skipping dependency installation..."
fi

# Start your application
export NODE_OPTIONS=--openssl-legacy-provider
npm start