"use client";

import { useState, useCallback } from "react";
import QrCode from "./QrCode";

function Stars() {
  return (
    <div className="flex items-center justify-center gap-1.5" aria-hidden>
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} width="26" height="26" viewBox="0 0 24 24" className="text-gold drop-shadow-sm">
          <path
            fill="currentColor"
            d="M12 2.6l2.7 5.9 6.4.7-4.8 4.3 1.3 6.3L12 16.9 6.4 19.8l1.3-6.3L2.9 9.2l6.4-.7z"
          />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewCard({ businessName, reviewLink, tagline, tips }) {
  const [tipIndex, setTipIndex] = useState(() => Math.floor(Math.random() * tips.length));
  const [swapKey, setSwapKey] = useState(0);
  const [copied, setCopied] = useState(false);

  const linkReady = !reviewLink.includes("REPLACE_WITH_YOUR_REVIEW_LINK");

  const nextTip = useCallback(() => {
    setTipIndex((prev) => {
      if (tips.length < 2) return prev;
      let n = prev;
      while (n === prev) n = Math.floor(Math.random() * tips.length);
      return n;
    });
    setSwapKey((k) => k + 1);
  }, [tips.length]);

  const copyLink = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(reviewLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable */
    }
  }, [reviewLink]);

  return (
    <main className="relative z-10 flex min-h-[100dvh] items-center justify-center px-5 py-10">
      <section className="rise w-full max-w-md rounded-[28px] border border-ink/10 bg-cream/80 p-7 shadow-card backdrop-blur-sm sm:p-9">
        <p className="text-center text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-clay">
          Share your experience
        </p>

        <h1 className="mt-3 text-center font-display text-[2.1rem] font-600 leading-[1.05] text-ink sm:text-[2.4rem]">
          {businessName}
        </h1>

        {tagline ? (
          <p className="mt-3 text-center text-[0.95rem] leading-relaxed text-ink/70">{tagline}</p>
        ) : null}

        <div className="mt-6">
          <Stars />
        </div>

        <a
          href={linkReady ? reviewLink : undefined}
          target="_blank"
          rel="noopener noreferrer"
          aria-disabled={!linkReady}
          className={`mt-7 flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-4 text-center text-lg font-600 text-cream transition active:scale-[0.98] ${
            linkReady
              ? "bg-clay shadow-[0_12px_30px_-10px_rgba(180,71,31,0.7)] hover:bg-[#9c3c19]"
              : "pointer-events-none bg-ink/30"
          }`}
        >
          Leave a Google review
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M7 17L17 7M17 7H9M17 7v8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>

        {!linkReady ? (
          <p className="mt-3 text-center text-xs leading-relaxed text-clay">
            Setup note: add your Google review link in{" "}
            <code className="rounded bg-ink/10 px-1 py-0.5">lib/config.js</code> to activate the button.
          </p>
        ) : null}

        <div className="mt-7 rounded-2xl border border-gold/40 bg-gold/10 p-4">
          <div className="flex items-center justify-between">
            <span className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-sage">
              Not sure what to say?
            </span>
            <button onClick={nextTip} className="text-[0.72rem] font-600 text-clay underline-offset-2 hover:underline">
              Another idea
            </button>
          </div>
          <p key={swapKey} className="tip-swap mt-2 text-[0.98rem] leading-relaxed text-ink">
            {tips[tipIndex]}
          </p>
        </div>

        {linkReady ? (
          <div className="mt-7 flex flex-col items-center gap-3 border-t border-ink/10 pt-7">
            <QrCode value={reviewLink} />
            <p className="text-center text-xs leading-relaxed text-ink/60">
              On a counter or receipt? Customers can scan this to review on their phone.
            </p>
            <button onClick={copyLink} className="text-xs font-600 text-sage underline-offset-2 hover:underline">
              {copied ? "Link copied ✓" : "Copy review link"}
            </button>
          </div>
        ) : null}

        <p className="mt-7 text-center text-[0.7rem] leading-relaxed text-ink/45">
          Please share only your own genuine experience. Real, honest reviews help other people the most.
        </p>
      </section>
    </main>
  );
}
