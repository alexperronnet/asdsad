#!/usr/bin/env sh

# build
npm run build

# navigate into the build output directory
cd dist

# Initialize a git repository
git init

# Add changes to git
git add -A

# Check if main branch exists
if git ls-remote --exit-code --heads origin deploy; then
  git checkout main
else
  git checkout -b main
fi

# Commit changes
git commit -m 'Deploy'

# Push to deploy branch
git push -f git@github.com:alexperronnet/openclassrooms-p4-gameon.git main:deploy

cd -