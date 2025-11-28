#!/bin/bash

set -e

echo "Building all packages..."

# Build shared-ui first (core package)
echo "Building shared-ui..."
npx nx build shared-ui

# Build wrappers
echo "Building shared-ui-angular..."
npx nx build shared-ui-angular

echo "Building shared-ui-react..."
npx nx build shared-ui-react

echo "Building shared-ui-vue..."
npx nx build shared-ui-vue

echo "All packages built successfully!"

echo ""
echo "Publishing packages to local registry..."

# Check if Verdaccio is running
if ! curl -s http://localhost:4873/ > /dev/null; then
    echo "Error: Verdaccio is not running!"
    echo "Start it with: npm run registry:start"
    exit 1
fi

# Publish packages
echo "Publishing @stencil-nx-project/shared-ui..."
cd packages/shared-ui
npm publish --registry http://localhost:4873/
cd ../..

echo "Publishing @stencil-nx-project/shared-ui-angular..."
cd packages/shared-ui-angular
npm publish --registry http://localhost:4873/
cd ../..

echo "Publishing @stencil-nx-project/shared-ui-react..."
cd packages/shared-ui-react
npm publish --registry http://localhost:4873/
cd ../..

echo "Publishing @stencil-nx-project/shared-ui-vue..."
cd packages/shared-ui-vue
npm publish --registry http://localhost:4873/
cd ../..

echo ""
echo "All packages published successfully to http://localhost:4873/"
echo "View packages at: http://localhost:4873/"
