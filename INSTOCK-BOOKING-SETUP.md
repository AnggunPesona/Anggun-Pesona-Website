# In-stock booking link — setup

**What this is:** an admin-only page at **`/book`** where you type an in-stock
order straight into the Bookings sheet — Order no., Name, Item bought, then the
collection or delivery slot. No spreadsheet, no typing rows by hand.

It saves to the **same "Bookings" tab** as every pre-order booking, so:

* the tick-boxes (Confirm ✅ / On its way 🛵 / Collected 📦) work exactly the same
* the **9 PM Telegram list picks it up automatically**
* you get the usual instant Telegram alert, marked 🛍 **IN-STOCK**

In-stock orders do **not** get a customer tracking page, and nothing is written
to the published Tracking tab — the name and item live only on the private
Bookings tab, in two new columns (**L = Name**, **M = Item**).

---

## Step 1 — put the page live

Open **Terminal** and paste this whole line, then press Enter:

```
cd "/Users/linamunirah/Documents/Claude/Projects/Anggun Pesona Website" && git add track/index.html book/index.html && git commit -m "Add admin in-stock booking link at /book" && git push
```

Give GitHub a minute or two, then open **https://anggunpesona.github.io/book**
Bookmark it on your phone — that's the link.

---

## Step 2 — update the booking script

1. Open your Google Sheet → **Extensions → Apps Script**.
2. In the file list on the left, click the file that holds the booking code
   (the one starting `Anggun Pesona — Bookings receiver`).
3. Click once inside the code, press **Cmd + A** (select all), then **Delete**.
4. Open `booking-apps-script.gs` from your website folder, **Cmd + A**, **Cmd + C**,
   and paste it into the empty editor.
5. Press **Cmd + S** to save.

### Then redeploy — this part matters

Saving alone is **not** enough for the website to see the new code.

1. Top right: **Deploy → Manage deployments**.
2. Click the **active** deployment (the one whose Web app URL starts
   `AKfycbxk4SbLnhpmLzI4z5aUC1ThSCT6s2GIlommd6gEXPfiaIs1zJZ8hVLr9CznYUDkPvTf`).
3. Click the **pencil ✏️** (Edit) at the top right of that panel.
4. **Version → New version**, then **Deploy**.
5. The Web app URL must stay **exactly the same** as before. If it changed, tell me.

> If you see other, archived deployments in that list, delete them — a stale one
> is what broke the Telegram alerts back in August.

---

## Step 3 — update the digest script

Same editor, the **digest** file this time (`digest.gs`, the one starting
`Anggun Pesona — Daily pickup digest`).

1. Click inside it → **Cmd + A** → **Delete**.
2. Copy all of `digest-apps-script.gs` from your website folder and paste it in.
3. **Cmd + S**.

**No redeploy needed** for this one, and **do not** re-run `setupDigestTriggers` —
your 9 PM timer stays exactly as it is.

---

## Step 4 — test it

In the Apps Script editor, pick **`testInstock`** from the function dropdown at
the top and press **▶ Run**. You should get:

* a Telegram alert headed **🛍 New IN-STOCK booking**
* a new row at the bottom of your Bookings tab, with **Name** in column L and
  **Item** in column M (the headers are added automatically the first time)

Delete that test row when you're happy.

Then try the real thing: open **/book**, fill it in with a date of **tomorrow**,
save it, and check that tonight's 9 PM list includes it.

---

## Day-to-day

1. Customer pays for an in-stock item.
2. Open **/book**, type Order no. / Name / Item, pick the slot, **Save booking**.
3. Tap **+ Add another booking** if you have more.
4. Confirm the slot with the tick-box on the Bookings tab as usual.
5. It appears in the 9 PM list, and disappears once you tick **Collected 📦**.

---

## Delivery: every day, minus your days off

On the **admin form only**, delivery can work as an open calendar instead of
fixed batches. Customers are not affected — they still see Batch 1 / 2 / 3 on
the tracker exactly as they do now.

### Turning it on

The calendar appears automatically as soon as there are **no open delivery rows**
on your Booking tab. So on that tab, set your **Batch 1 / 2 / 3** rows to
`Available = No`. (Retiring a batch this way does *not* block its date — the
calendar ignores any row whose Location says "Batch".)

Put them back to `Available = Yes` whenever you want the batches again. Nothing
is deleted and you can switch back and forth freely.

### Blocking out days you're away

First, add one new column to the **Booking** tab, headed **`Date To`**
(next to your existing `Date` column).

Then add a row for each time you're unavailable:

| Method | Location | Date | Date To | Time | Available |
|---|---|---|---|---|---|
| Delivery | Away – Miri | 10/09/2026 | 14/09/2026 | | No |
| Delivery | Hari Raya | 20/09/2026 | | | No |

* **Location** is just your note to yourself — it shows under the calendar so you
  remember why a day is closed.
* **Date To** empty = a single day off.
* Dates can be written however you like — `10/09/2026`, `2026-09-10`,
  `10 Sep`, `Thu, 10 Sep` all work.

Blocked days appear greyed out and can't be picked, and the form refuses them
on save as a second line of defence.

---

## How the reminder knows it's finished

In-stock orders have no Tracking row, so the **Collected 📦 tick-box on the
Bookings tab** is what clears them. Two things make that easy:

* **Anything with a date clears itself.** The 9 PM list only ever asks "what's
  booked for tomorrow?" — once that day has passed, the row can't come back.
* **Fixed delivery batches now get a date stamped on them.** Previously a batch
  booking saved with an empty Date and the reminder had to look the batch *name*
  up every night — so reusing "Batch 1" for a new date could drag an old delivery
  back into the list. The admin form now saves the batch's real date, so it
  behaves like every other booking. You'll see the date in the green
  confirmation after you save.

Ticking **Collected 📦** is still the tidiest way to close a booking off, but you
won't get chased if you forget.
