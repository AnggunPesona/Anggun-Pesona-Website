# Auto-update the tracker after a booking

When a customer books a slot, the website now shows two new steps on the tracker:

```
✓ Ready for collection
● Slot requested      ← lights up the moment they book (shows their slot chip)
○ Slot confirmed      ← lights up when YOUR TEAM confirms
○ Collected
```

The website part is already done (in `track/index.html`). This file covers the
**Google side** so the "Slot requested" step turns on **by itself**.

---

## Part A — one-time Apps Script setup (≈5 min, done once)

### Step 1 — open your Apps Script
1. Open the Google Sheet that your booking form saves into (the **Bookings** sheet).
2. Top menu: **Extensions → Apps Script**. A code window opens.

### Step 2 — paste the new code
Scroll to the very **bottom** of the code, press Enter a few times, and paste this
whole block:

```javascript
/* ====== AUTO-UPDATE TRACKER AFTER A BOOKING ====== */
var TRACK_SHEET_ID = '1ZabtuZ5QFJGBUQvlJduhlhCyTamTGIVdWDkRrhcpc0I'; // Tracking spreadsheet ID (from its URL)
var TRACK_TAB_NAME = 'Tracking';   // the exact tab name the website reads

function updateTracking(e){
  var data;
  try { data = JSON.parse(e.postData.contents); } catch(err){ return; }
  if(!data || !data.order) return;

  var sh = SpreadsheetApp.openById(TRACK_SHEET_ID).getSheetByName(TRACK_TAB_NAME);
  if(!sh) return;

  var values = sh.getDataRange().getValues();
  var head = values[0].map(function(h){ return String(h).trim().toLowerCase(); });
  var iOrder  = head.indexOf('order no');
  if(iOrder < 0) iOrder = head.indexOf('order number');
  var iStatus = head.indexOf('status');
  var iSlot   = head.indexOf('slot');
  var iUpd    = head.indexOf('updated');
  if(iOrder < 0 || iStatus < 0) return;

  var method = String(data.method || '').toLowerCase();
  var isDelivery = method.indexOf('deliver') >= 0;
  var isSgLiang  = method.indexOf('liang')   >= 0;

  var status = isDelivery ? 'Delivery requested'
             : isSgLiang  ? 'Sg Liang — Slot requested'
             :              'Slot requested';

  var chip = isDelivery
      ? [data.batch, data.address].filter(String).join(' · ')
      : [data.date, data.slot].filter(String).join(' · ');

  var target = String(data.order).trim().toLowerCase();
  for(var r = 1; r < values.length; r++){
    var no = String(values[r][iOrder] || '').trim().toLowerCase();
    if(no && no === target){
      sh.getRange(r+1, iStatus+1).setValue(status);
      if(iSlot >= 0 && chip) sh.getRange(r+1, iSlot+1).setValue(chip);
      if(iUpd  >= 0)         sh.getRange(r+1, iUpd+1 ).setValue(new Date());
    }
  }
}
```

Then check the two lines at the top of what you just pasted:
- `TRACK_SHEET_ID` — the long code in your **Tracking** sheet's web address, between
  `/d/` and `/edit`. The value above is your current one — confirm it matches.
- `TRACK_TAB_NAME` — the tab name at the bottom of the Tracking sheet, spelled exactly
  (e.g. `Tracking`).

### Step 3 — call it from your existing code (add ONE line)
Find the line near the top that says `function doPost(e){`.
Somewhere inside that function, **before** its `return` line, add this one line on its own:

```javascript
  updateTracking(e);
```

(If your function reads `function doPost(request){` instead of `(e)`, then write
`updateTracking(request);` to match.)

### Step 4 — save and re-deploy
1. Click the **Save** icon (💾).
2. Top right: **Deploy → Manage deployments**.
3. Click the ✏️ pencil on your existing deployment.
4. **Version →** choose **New version**, then **Deploy**.
5. If Google asks you to **authorize**, click through and **Allow** (it now needs
   permission to write to the Tracking sheet).

That's it — the web link stays the same, so nothing on the website needs changing.

---

## Part B — the words your team types (the confirm step)

The **first** step ("Slot requested") is now automatic. The **second** step
("Slot confirmed") is a one-word change YOU make in the Tracking sheet's **Status**
column when you send the customer their confirmation text.

Copy-paste exactly (the wording matters — it's how the tracker knows which step to light):

| Method                         | Auto-written when they book | You type to confirm        | Final word  |
| ------------------------------ | --------------------------- | -------------------------- | ----------- |
| Self-collect · Lambak Kanan    | `Slot requested`            | `Slot confirmed`           | `Collected` |
| Self-collect · Sg Liang        | `Sg Liang — Slot requested` | `Sg Liang — Slot confirmed`| `Collected` |
| Delivery                       | `Delivery requested`        | `Delivery confirmed`       | `Delivered` |

> For Sg Liang, keep the words **"Sg Liang"** at the front so the tracker keeps showing
> the Sg Liang steps.

---

## Part C — test it once for each method (step by step)

Use a real test order number that exists in your Tracking sheet, and set its Status to
`Ready for collection` first.

### Lambak Kanan
1. Open `.../track?order=YOURTESTNO` on your phone.
2. Tap **Book your collection or delivery → Self-collect → Lambak Kanan**, pick a date +
   time, tap **Send my booking**. You'll see the green "booking request is in!" banner.
3. Open the Tracking sheet — the order's **Status** should now read `Slot requested`
   and the **Slot** cell shows the date/time.
4. Refresh the track page — the stepper now shows **Slot requested** (with the chip).
5. In the sheet, change Status to `Slot confirmed`. Refresh — it advances to
   **Slot confirmed**.
6. Change Status to `Collected`. Refresh — the tracker shows the "thank you" finish.

### Sg Liang
Same as above, but choose **Self-collect → Sg Liang**. The sheet should auto-fill
`Sg Liang — Slot requested`. To confirm, type `Sg Liang — Slot confirmed`, then
`Collected` at the end.

### Delivery
Choose **Delivery**, pick a batch, fill the address, **Send my booking**. The sheet
should auto-fill `Delivery requested`. To confirm, type `Delivery confirmed`. As it
moves, you can later use `Out for delivery` and finally `Delivered`.

---

## If the "Slot requested" step doesn't turn on
- Booking still saved to the Bookings tab, but Status didn't change → re-check Step 3
  (the `updateTracking(e);` line) and that you did **New version** in Step 4.
- Status changed but no chip → make sure the Tracking tab has a column literally named
  **Slot**.
- Nothing happens → the order number the customer typed must match the Tracking sheet's
  **Order No** exactly (spaces/caps are ignored, but the digits must match).
