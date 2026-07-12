# Booking upgrade — auto-update + tick-box confirming

This fixes three things you asked about:

1. **Bookings now move the tracker by themselves** — when a customer books, their order flips to "Slot requested" (or "Delivery requested") automatically. No more doing it by hand.
3 & 4. **Two tick-boxes replace the order-number hunting** — you tick a box in the **Bookings** tab and the matching order updates in the **Tracking** tab for you. You never open Tracking or search an order number again.

It's all clicks in your browser — **no Terminal**. About 5 minutes, done once.

---

## Step 1 — open your Apps Script

1. Open your Google Sheet (the one that has the **Tracking** and **Bookings** tabs).
2. Top menu: **Extensions → Apps Script**. A code window opens in a new tab.

## Step 2 — paste in the new code

1. In the code window, click anywhere in the code, press **Ctrl+A** (Windows) or **⌘+A** (Mac) to select everything, then **Delete**. The box is now empty.
2. Open the file **`booking-apps-script.gs`** in your project folder, select all of it, copy, and **paste** it into the empty Apps Script box.
3. Click the **Save** icon 💾 (top of the window).

> The code already has your Telegram bot details filled in — you don't need to change anything.

## Step 3 — turn the two columns into tick-boxes (run once)

1. Near the top of the code window there's a dropdown that shows a function name (it might say `doPost`). Click it and choose **`setupBookings`**.
2. Click **▶ Run**.
3. The first time, Google asks you to **authorize**: pick your Google account → if you see "Google hasn't verified this app", click **Advanced → Go to (project) → Allow**. (Normal for your own script.)
4. Open your **Bookings** tab — you'll now see two new tick-box columns at the end: **Confirm slot ✅** and **Collected 📦**.

## Step 4 — re-deploy so the website uses the new code

1. Top right: **Deploy → Manage deployments**.
2. Click the ✏️ **pencil** on your existing deployment.
3. **Version →** choose **New version** → **Deploy**.
4. If asked to authorize again, **Allow**.

That's it. The web link stays the same, so nothing on the website needs changing.

---

## How you'll work day-to-day now

1. Item's ready → set that order's Status to **`Ready for collection`** in the Tracking tab (same as before), and text the customer their booking link.
2. They book on the site → it lands in **Bookings** *and* their order automatically becomes **Slot requested** — the tracker moves on its own. ✅ (issue 1 fixed)
3. When you've texted them to confirm → in the **Bookings** tab, tick **Confirm slot ✅** on that row. The order flips to "Slot confirmed" for you. (issues 3 & 4 fixed)
4. When the runner picks it up / you hand items to the Sg Liang team → tick **On its way 🛵**. (For a normal Lambak collect there's no middle step, so you can skip this box.)
5. When they've collected / you've delivered → tick **Collected 📦** on that same row. The order flips to Collected / Delivered.

You stay in the Bookings tab the whole time — the order number, method, date and slot are all on that one row, so there's nothing to look up and no chance of updating the wrong order. If an order has several rows (different colours), ticking once updates them all.

### The exact status words (for reference only — the tick-boxes type these for you)

| Method                      | On booking (automatic) | Tick **Confirm slot ✅** | Tick **On its way 🛵** | Tick **Collected 📦** |
| --------------------------- | ---------------------- | ------------------------ | ---------------------- | --------------------- |
| Self-collect · Lambak Kanan | `Slot requested`       | `Slot confirmed`         | *(no middle step)*     | `Collected`           |
| Self-collect · Sg Liang     | `Sg Liang — Slot requested` | `Sg Liang — Slot confirmed` | `Items with Sg Liang team` | `Sg Liang — Collected` |
| Delivery                    | `Delivery requested`   | `Delivery confirmed`     | `Picked up by runner`  | `Delivered`           |

---

## If something doesn't work

- **Booking saved but tracker didn't move** → re-check Step 4 (you must pick **New version**), and that your status-editing tab is named exactly **Tracking** (if it's a different name, change `ORDERS_TAB` at the top of the code).
- **Ticking a box does nothing** → make sure you ran **`setupBookings`** in Step 3 and authorized. The tick-box handler runs automatically after that.
- **Wrong order updated** → shouldn't happen now; the tick-box always uses the order number on that same row.
