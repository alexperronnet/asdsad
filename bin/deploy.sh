#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

git init
git add -A
git checkout -b main
git commit -m 'Deploy'
git push -f git@github.com:alexperronnet/openclassrooms-p4-gameon.git main:deploy

cd -