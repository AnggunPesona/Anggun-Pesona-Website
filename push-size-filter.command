#!/bin/bash
# Double-click this file to push the size filter changes to GitHub.
# This script clears any stale git lock, then commits and pushes.

cd "$(dirname "$0")" || exit 1

echo "→ Clearing any stale git lock files..."
rm -f .git/index.lock .git/HEAD.lock 2>/dev/null

echo "→ Staging changes..."
git add -A

echo "→ Committing..."
git commit -m "Add size filter to In-Stocks and Pre-Orders catalogues

- New Size (EU) dropdown alongside category/brand filters on both pages
- Sizes auto-populated from product data, sorted numerically
- Hides automatically if no products have sizes defined
- Handles both global sizes (35,36,37) and per-colour variants (Black:35,36|White:37,38)
- Fix syntax error in SOURCED_PHOTOS Machino entry"

echo "→ Pushing to GitHub..."
git push

echo ""
echo "✓ Done! Press any key to close this window."
read -n 1
