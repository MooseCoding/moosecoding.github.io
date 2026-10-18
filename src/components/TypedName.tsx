"use client";

import { useEffect, useState } from "react";

export function TypedName({ text }: { text: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) {
      setCount(text.length);
      return;
    }

    let current = 0;
    let timer = 0;
    const start = window.setTimeout(() => {
      timer = window.setInterval(() => {
        current += 1;
        setCount(current);
        if (current >= text.length) window.clearInterval(timer);
      }, 48);
    }, 180);

    return () => {
      window.clearTimeout(start);
      window.clearInterval(timer);
    };
  }, [text]);

  return (
    <h1 className="min-h-[1.25em] font-mono text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
      <span className="sr-only">{text}</span>
      <span className="hero-name" aria-hidden="true">
        {text.slice(0, count)}
      </span>
      <span className="typed-caret" aria-hidden="true" />
    </h1>
  );
}
