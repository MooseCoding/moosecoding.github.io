"use client";

import { useEffect, useRef, useState } from "react";

const POOL = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function poolFor(text: string) {
  const fromTitle = [...new Set(text.replace(/\s/g, "").split(""))].join("");
  return `${fromTitle}${POOL}`;
}

function frame(text: string, lockedCount: number, pool: string) {
  return text
    .split("")
    .map((ch, i) => {
      if (ch === " " || i < lockedCount) return ch;
      return pool[Math.floor(Math.random() * pool.length)] ?? ch;
    })
    .join("");
}

export function DecodeText({
  text,
  onLocked,
}: {
  text: string;
  onLocked?: () => void;
}) {
  const [display, setDisplay] = useState(text);
  const onLockedRef = useRef(onLocked);
  onLockedRef.current = onLocked;

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) {
      setDisplay(text);
      onLockedRef.current?.();
      return;
    }

    const pool = poolFor(text);
    const duration = Math.min(560, Math.max(420, text.length * 28));
    const started = performance.now();
    let notified = false;

    const timer = window.setInterval(() => {
      const t = Math.min(1, (performance.now() - started) / duration);
      const lockedCount = Math.floor(t * text.length);
      setDisplay(t >= 1 ? text : frame(text, lockedCount, pool));

      if (t < 1) return;

      window.clearInterval(timer);
      if (!notified) {
        notified = true;
        onLockedRef.current?.();
      }
    }, 32);

    return () => window.clearInterval(timer);
  }, [text]);

  return (
    <>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">{display}</span>
    </>
  );
}
