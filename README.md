# Review Helper

A clean, mobile-friendly page that helps **your real customers** leave a genuine
Google review for **your** business. One business, one link, honest tips.

## Setup (one file)

Open `lib/config.js` and set:

```js
export const config = {
  businessName: "Your Business Name",
  reviewLink: "https://g.page/r/XXXXXXXXXXXX/review", // your Google review link
  tagline: "Thanks for stopping by!", // optional
};
```

**Getting your Google review link:** search your business on Google, open your
Business Profile, click **"Ask for reviews" / "Get more reviews"**, and copy the
short `g.page/r/.../review` link. Edit prompts in `lib/tips.js`.

## Run locally

```bash
npm install
npm run dev   # http://localhost:3000
```

## Deploy on Vercel

Push to a GitHub repo, then in Vercel: **New Project → import → Deploy**
(Next.js auto-detected). The page is fully static, so hosting is fast and free.

## Tech

Next.js (App Router) · Tailwind CSS · `qrcode` for the scannable code.
