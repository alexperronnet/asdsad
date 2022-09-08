#!/usr/bin/env sh

# build
npm run build

# navigate into the build output directory
cd dist

git init
git add -A

# Check if a branch exists
if git ls-remote --exit-code --heads origin deploy; then
  git checkout main
else
  git checkout -b main
fi

git commit -m 'Deploy'
git push -f git@github.com:alexperronnet/openclassrooms-p4-gameon.git main:deploy

cd -