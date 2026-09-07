# Daily collection digest — setup

**What you're switching on:** one Telegram message at **9:00 PM** listing tomorrow's
collections and deliveries. (The 7:00 AM "today" reminder is switched off — see below
if you ever want it back.)
itself. Nothing booked → no message at all.

**Time needed:** about 10 minutes, all clicking. No Terminal. Nothing on the website
changes, so **there is no `git push` at the end** and no new deployment to make.

> One thing to know up front: the last time the alerts broke, it was because the website
> was posting to an *old, archived deployment*. That can't happen here — these daily
> messages are run by a timer inside the script itself, not by the web app. Deployments
> are not involved at all.

---

## Step 1 — Open the script

1. Open your **Bookings Google Sheet** (the same one with the Bookings and Tracking tabs).
   Use the same Incognito window / "M" account you always use for it.
2. In the menu bar click **Extensions** → **Apps Script**.
3. A new tab opens with your existing code (`Code.gs`, the booking receiver). **Don't touch it.**

## Step 2 — Add a new file

1. On the left you'll see a **Files** panel with `Code.gs` in it.
2. Click the **+** next to the word "Files" → choose **Script**.
3. It asks for a name. Type:

   ```
   digest
   ```

   and press Enter. (Don't type `.gs` — it adds that itself.)
4. The new empty file opens with a sample `function myFunction() { }` in it.
   **Select everything in that file and delete it**, so the file is completely blank.
   (Click inside the code area, then press **Cmd + A**, then **Delete**.)

## Step 3 — Paste the code

1. Open the file **`digest-apps-script.gs`** that I saved into your website folder.
2. Select all of it and copy it.
3. Click back into the empty `digest.gs` file in Apps Script and paste.
4. Click the **💾 save icon** at the top.

## Step 4 — Check the timezone (important)

The timers run on the *script's* clock, not yours.

1. On the far left, click the **⚙️ gear icon** (Project Settings).
2. Look at **Time zone**. It must say **(GMT+08:00) Brunei** — or another GMT+8 city.
3. If it says something else, click it and change it to Brunei, then go back to the
   code (the **`< >`** icon on the left).

## Step 5 — Send yourself a test

1. Back in the code view, at the top there's a **dropdown listing function names**
   (it probably says `doPost` right now).
2. Click it and choose **`testDigestNow`**.
3. Click **▶ Run**.
4. **The first time only**, Google asks for permission:
   - Click **Review permissions**
   - Choose your account
   - You'll see "Google hasn't verified this app" → click **Advanced** →
     **Go to Anggun Pesona (unsafe)**. This is your own script, it's safe.
   - Click **Allow**.
5. Check the **AP Collection Method** Telegram group. A message should arrive within
   a few seconds.
   - If there are bookings for tomorrow, you'll see the full list.
   - If there aren't, you'll see "Nothing booked for this date" — that's the *test*
     talking. On a real day it would simply stay quiet.

## Step 6 — Switch the daily messages on

1. In the same dropdown, choose **`setupDigestTriggers`**.
2. Click **▶ Run**.
3. Telegram gets a short confirmation: *"⏰ Daily collection digest is switched on."*
   It also prints the timezone, so you can double-check Step 4 was right.

**That's it.** From tonight you'll get the 9 PM list.

---

## Turning it off, or changing it later

| I want to… | Do this |
|---|---|
| **Stop the daily messages** | Run **`removeDigestTriggers`** from the dropdown |
| **Turn them back on** | Run **`setupDigestTriggers`** again |
| **Change the times** | Near the top of `digest.gs`, edit `EVENING_HOUR: 21` and `MORNING_HOUR: 7` (24-hour clock), save, then run **`setupDigestTriggers`** again — it has to be re-run for a time change to take |
| **See today's list on demand** | Run **`testDigestToday`** |
| **See tomorrow's list on demand** | Run **`testDigestNow`** |

Running `setupDigestTriggers` twice is harmless — it clears its own old timers first,
so you'll never end up with doubled messages.

---

## Reading the message

```
🌙 Tomorrow — Fri, 04 Sep 2026
4 collections · 2 deliveries

🏠 Lambak Kanan — self-collect
1. ✅ May26A1234 — Siti Nurul
   Kurta Sofea · Black · size M
   🕒 4:00 PM onwards
2. ⏳ May26A1240 — Hjh Mariam
   Baju Kurung Alia · Sage · size L
   Kurta Sofea · Dusty Pink · size S · x2
   🕒 6:00 PM onwards

⏳ 3 bookings are still unconfirmed — tick "Confirm slot ✅" on the Bookings tab.
🕙 Last pickup 10:00 PM.
```

| Mark | Means |
|---|---|
| ✅ | You've ticked **Confirm slot ✅** — the customer has been told the time |
| ⏳ | Booked, but **you haven't confirmed the slot yet** — she's still waiting to hear from you |
| 🛵 | You've ticked **On its way** — with the runner, or already sent to the Sg Liang team |

Anything you've ticked **Collected 📦** on disappears from the list.

---

## Updating the code later (v1.1 — 4 Sep 2026)

If you already set this up and I've since changed `digest-apps-script.gs`, you don't
redo anything — you just replace the code:

1. Open the script (Step 1 below) and click **digest.gs** in the left list.
2. Click once inside the code, press **Cmd + A** (select all), then **Delete**.
3. Open `digest-apps-script.gs` on your Mac, **Cmd + A**, **Cmd + C**, and paste it in.
4. Click the **floppy-disk save icon**.
5. Pick **setupDigestTriggers** from the function dropdown and click **Run**
   — this is what removes the old 7 AM timer. You'll get a Telegram note
   confirming "☀️ Morning reminder: off".

**What v1.2 changed:** the 7 AM "today" reminder is gone — only the 9 PM
"tomorrow" message is sent now. To bring the morning one back, change
`MORNING_ALSO: false` to `MORNING_ALSO: true` near the top of the code, save,
and run **setupDigestTriggers** again.

**What v1.1 changed:** an order now disappears from the reminder as soon as its
**Tracking** tab status says *Collected*, *Delivered*, *Completed* or *Cancelled* —
you no longer have to tick the "Collected 📦" box on the Bookings tab just to stop
the reminders. (Ticking it still works too.) An order with several lines only drops
off once *all* of its lines are marked done.

---

## Things it handles quietly for you

- **Finished orders.** Anything already marked Collected / Delivered / Completed /
  Cancelled on the **Tracking** tab is left out, whether or not the tick-box was used.
- **Rescheduled bookings.** If a customer uses her reschedule link and books again,
  only the *newest* booking counts. The old slot won't show up.
- **Deliveries on a batch.** A delivery booked onto "Batch 2" has no date of its own —
  the script looks the batch's date up on your **Booking** availability tab and files it
  under the right day.
- **Messy date formats.** Whether the cell reads `Thu, 4 Sep`, `04/09/2026` or Google has
  turned it into a real date, it lands on the same day.
- **Busy days.** If a day is so full the message would be too long for Telegram, it
  splits into two messages instead of failing.

---

## If something looks wrong

**No message arrived at 9 PM.**
Most likely nothing was booked for the next day — that's the intended behaviour. To be
sure the bot is alive, run `testDigestNow`; it always replies. If *that* is silent too,
open Apps Script → **Executions** (the ▶≡ icon on the left) and look for a red failed run.

**Names are missing — it just shows the order number.**
The script looks for a column on your **Tracking** tab headed `Name`, `Customer`,
`Customer Name`, `Buyer` or `Nama`. If your column is called something else, either
rename the header to one of those, or tell me what it's called and I'll add it.

**Items say "(items not listed on the Tracking tab)".**
That order has no matching row on the Tracking tab, usually because the order number is
spelled differently in the two tabs (a stray space is the usual culprit).

**The message arrives at 9:12 PM instead of 9:00.**
Normal. Google's daily timers fire within about a fifteen-minute window. It'll always be
comfortably before the 10 PM cutoff.

**I want the customer's phone number in the message.**
Near the top of `digest.gs`, change `SHOW_PHONE: false` to `SHOW_PHONE: true` and save.
It'll show the number if your Tracking tab has a phone column.

**I'd rather see the shortened order number,** the way the booking alert shows it.
Change `FULL_ORDER_NO: true` to `false` and save.

---

## Safety note

`digest.gs` is a **new, separate file**. It only *reads* your sheets and sends a message —
it never writes a status, never touches a tick-box, and never changes the booking receiver.
If you ever want it gone completely: run `removeDigestTriggers`, then delete the file.

Like the other script files, this one is on the `.gitignore` list, so it can't be pushed
to the public website repo. The bot token stays private.
