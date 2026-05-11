#!/bin/bash
cd "/Users/linamunirah/Documents/Claude/Projects/Anggun Pesona Website"
rm -f .git/index.lock .git/HEAD.lock .git/ORIG_HEAD.lock
git add -A
git commit -m "Fix: remove double padding-top on product detail pages"
git push origin main
echo "Done! Check https://anggunpesona.github.io/"
