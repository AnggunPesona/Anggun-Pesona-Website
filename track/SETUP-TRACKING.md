# Pre-Order Tracking — Setup Guide (private version)

Your tracking page at **anggunpesona.github.io/track** is connected to your Google Sheet.
This version keeps your main sheet **private** and only exposes the three safe columns
(Order No, Status, ETA) to the website.

---

## First — why is "the whole sheet" readable at all?

Your website has no server or database. When a customer types their order number, their
**browser downloads the published sheet and searches it locally** — the "type your number" filter
happens *after* the data has already reached them. A static site simply can't ask Google for "just
one row" privately, because there's no server in the middle to do that lookup.

So privacy can't come from the search box. It has to come from **limiting what's in the public data**.
That's what the hidden tab below does: the public part contains only Order No, Status, and ETA —
never customer names, phone numbers, or your private Notes. (A determined person could still list
those three harmless columns; they just can never see anything sensitive.)

---

## Step 1 — Keep your main sheet PRIVATE

If you turned on "Anyone with the link" earlier, turn it back off:
**Share → General access → Restricted → Done.** Your `Orders` tab (with `Notes`) stays private.

---

## Step 2 — Create the public "Tracking" tab

1. In the **same** spreadsheet, click the **+** at the bottom-left to add a tab.
2. Rename it to **`Tracking`**.
3. Click cell **A1** and paste exactly this:

```
=QUERY(Orders!A:D, "select A, B, C where A is not null", 1)
```

This automatically lists **Order No → Status → ETA** for every order and updates the instant you
change anything in `Orders`. It deliberately leaves out column D (`Notes`). You never type in this tab.

> If your columns ever move, the rule is: `select` the Order No, Status, and ETA columns by their
> letters, and leave out Notes.

---

## Step 3 — Publish ONLY the Tracking tab

1. **File → Share → Publish to web.**
2. In the dialog's **Link** tab, open the left dropdown and choose **`Tracking`** (not "Entire Document").
3. Set the format on the right to **Comma-separated values (.csv)**.
4. Click **Publish → OK.**
5. **Copy the link it gives you** — it looks like
   `https://docs.google.com/spreadsheets/d/e/2PACX-.../pub?gid=…&single=true&output=csv`

This publishes *only* the Tracking tab. The rest of your spreadsheet stays private.

---

## Step 4 — Send me that published link

Paste it to me and I'll drop it into the site (into `TRACK_CONFIG.CSV_URL`). If you'd rather do it
yourself, open `track/index.html` and set:

```js
CSV_URL: 'PASTE_THE_PUBLISHED_CSV_LINK_HERE',
```

---

## Step 5 — Publish the website change

Open **Terminal**, paste this, press **Enter**:

```bash
cd ~/Documents/Claude/Projects/"Anggun Pesona Website" && git add -A && git commit -m "Private tracking via published Tracking tab + ETA" && git push
```

Then open **anggunpesona.github.io/track** and test with a real order number (e.g. `July26A01`).

---

## Your daily routine

In the **Orders** tab: set each order's **Status** dropdown, and type an **ETA** when you have one
(e.g. `10th July – 11th July`). Both flow to the website within a minute. Keep `Notes` for private
info — it's never published.

**Status flow:** `Order placed → Waiting for Shipment → In Transit → Arrived in Brunei`, then either
`Ready for collection → Collected` (self-collect) or `Booked for delivery → Picked up by courier →
Delivered`. `In Transit - Targeted upcoming ETA` is read as **In Transit**.

## Housekeeping

- **Duplicate order numbers** (e.g. `July26A05`, `July26A10`, `June26P25`) — the page shows the
  first match, so keep each number unique.
- **Direct link per customer:** `anggunpesona.github.io/track?order=July26A01`
