#!/bin/bash
cd "/Users/linamunirah/Documents/Claude/Projects/Anggun Pesona Website"
rm -f .git/index.lock
git add -A
git commit -m "Convert SPA to multi-page site with clean URLs — /preorders, /instocks, /bridal, /reviews, /shop, /about"
git push origin main
echo "Done! Check https://anggunpesona.github.io/"
