# Booking setup — self-collect & delivery

This is a one-time setup. It's all clicks in your browser — **no Terminal**. It takes about 5–10 minutes.

At the end you'll send me **two links**, and I'll switch the booking feature on.

The booking button stays **hidden** on the website until this is done, so nothing looks broken in the meantime.

---

## Part A — the availability tab (which slots customers can pick)

1. Open your Google Sheet (the same one that has your **Tracking** tab).
2. At the bottom-left, click the little **+** to add a new tab. Double-click its name and rename it exactly:

   ```
   Booking
   ```

3. In the very first row, type these five headings, one per cell (A1 to E1):

   | Method | Location | Date | Time | Available |
   |--------|----------|------|------|-----------|

4. Below that, add one row per slot. Examples:

   | Method | Location | Date | Time | Available |
   |----------|--------------|-------------|-------------------|-----------|
   | Collect | Lambak Kanan | Sat, 12 Jul | 10:00 AM onwards | Yes |
   | Collect | Lambak Kanan | Sat, 12 Jul | 4:00 PM onwards | Yes |
   | Collect | Sg Liang | Fri, 11 Jul | 4:00 PM onwards | Yes |
   | Collect | Sg Liang | Sun, 13 Jul | 11:00 AM onwards | Yes |
   | Delivery | Batch 1 | Sat, 12 Jul | Morning (9 AM–12 PM) | Yes |
   | Delivery | Batch 2 | Sat, 12 Jul | Afternoon (2–5 PM) | Yes |
   | Delivery | Batch 3 | Sun, 13 Jul | Evening (5–8 PM) | Yes |

   Notes:
   - **Method** is either `Collect` or `Delivery`.
   - **Location** for collect is `Lambak Kanan` or `Sg Liang`. For delivery it's `Batch 1`, `Batch 2`, `Batch 3`.
   - **For Sg Liang, only add Friday & Sunday dates** (that's your rule).
   - Set **Available** to `No` to grey out a slot without deleting it.
   - Add, edit, or delete rows any time — the website updates automatically.

5. Publish this tab so the website can read it:
   - Top menu: **File → Share → Publish to web**
   - In the **first dropdown**, choose the **Booking** tab (not "Entire Document").
   - In the **second dropdown**, choose **Comma-separated values (.csv)**.
   - Click **Publish**, confirm **OK**, then **copy the link** it shows you.
   - 👉 This link is **AVAIL_CSV** — save it to send me.

---

## Part B — where bookings get saved (the receiver)

1. In the same Google Sheet, top menu: **Extensions → Apps Script**.
2. A code editor opens in a new tab. Delete anything in the box.
3. Open the file **`track/bookings-apps-script.gs`** (in your project folder), copy everything, and paste it into the editor.
   - *(Optional)* If you'd like an email each time someone books, put your email between the quotes on the `NOTIFY_EMAIL` line.
4. Click the **Save** icon (💾).
5. Click **Deploy → New deployment**.
6. Click the **gear icon** ⚙️ next to "Select type" and choose **Web app**.
7. Fill in:
   - **Description:** `Bookings`
   - **Execute as:** `Me`
   - **Who has access:** `Anyone`
8. Click **Deploy**. Google will ask you to **authorize**:
   - Choose your Google account.
   - If you see "Google hasn't verified this app", click **Advanced → Go to (project name) → Allow**. This is normal for your own scripts.
9. It shows a **Web app URL** ending in **`/exec`**. Click **Copy**.
   - 👉 This link is **SUBMIT_URL** — save it to send me.

You don't need to make a "Bookings" tab yourself — it appears automatically the first time someone books.

---

## Part C — send me the two links

Paste these back to me:

- **AVAIL_CSV** = the `.csv` link from Part A step 5
- **SUBMIT_URL** = the `/exec` link from Part B step 9

I'll drop them into the website, do a final check, and give you **one copy-paste Terminal command** to publish it live.

---

## How it works day-to-day (once live)

1. Item arrives & you've checked it → set that order's status to **`Ready for collection`** in your Tracking tab.
2. Text the customer: *"Your order's ready 💕 book your pickup/delivery here 👉 https://anggunpesona.github.io/track?order=THEIR-ORDER-NO&book=1"* — that link opens their order and jumps straight to booking.
3. They book on the site → it lands as a tidy row in your **Bookings** tab (order, method, date, slot/batch, address).
4. You glance at Bookings, then update that order's status to **`Booked for collection`** (or `Booked for delivery`). Put the agreed slot in a **`Slot`** column in Tracking if you'd like it shown on their timeline.
5. Send your confirmation text with the final details. Done 💕
