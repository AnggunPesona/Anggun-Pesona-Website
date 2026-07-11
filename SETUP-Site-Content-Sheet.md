# Site Content Sheet — Setup Guide

Your home page featured trio and all Reviews now read from **one Google Sheet** called
**"Anggun Pesona Site Content"** — already created in your Google Drive, already filled with your
current content across four tabs, and already connected to the site's code.

Two small steps are left, then you're done forever.

Sheet link: https://docs.google.com/spreadsheets/d/1pegGwEjddFshFg9MoV51r2PfLwa3Ls76YUv_vEUakLA/edit

---

## Step 1 — Make the sheet readable by the website (30 seconds)

The website can only read the sheet if it's shared publicly (view-only). I can't change sharing for
you, so please do this one bit:

1. Open the sheet (link above).
2. Click **Share** (top-right).
3. Under **General access**, change "Restricted" to **Anyone with the link**.
4. Make sure the role on the right says **Viewer**.
5. Click **Done**.

That's it — no one can edit it except you; the public can only view.

---

## Step 2 — Publish the site (one Terminal command)

I've already put the sheet into the code. To make it live, open **Terminal** and paste this **one**
line, then press Enter:

```
cd "/Users/linamunirah/Documents/Claude/Projects/Anggun Pesona Website" && git add -A && git commit -m "Reviews + home featured now load from Site Content sheet" && git push
```

Wait about 1 minute, then open your site and hard-refresh (Cmd+Shift+R). The home trio and Reviews
will now be coming from the sheet.

---

## From now on — how you update (the easy part)

Open the **Anggun Pesona Site Content** sheet and edit the tab you want. No code, no Terminal, ever again.

| To change… | Go to tab | What to type |
|---|---|---|
| Home "favourites" trio | **Featured** | `photo` = one Google Drive image link · `caption` = e.g. "Clogs with Bow (B$38)" |
| Customer reviews | **Reviews** | `photos` = one or more Drive links (commas between) · `caption` = your words |
| Bride-to-be reviews | **BridalReviews** | same as Reviews |
| "Successfully sourced" | **Sourced** | same as Reviews |

- **Row order = display order.** Top row shows first. To feature something new, put it in the top row.
- Multiple photos in one card: paste several Drive links in the same `photos` cell, separated by commas.
- Changes show on the live site within a minute or two (Google caches briefly; a hard-refresh helps).

**Important:** every Drive image link must itself be shared **"Anyone with the link → Viewer"**,
or the photo won't appear on the site. (In Drive: right-click the image file → Share.)

---

## Good to know

- If you ever leave a tab empty, the site quietly falls back to a built-in copy of your current
  content — it will never show a blank section.
- The four starter files in the `_setup/` folder are just backups of what's already in the sheet;
  you don't need to do anything with them.
