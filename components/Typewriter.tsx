"use client";
import { useEffect, useState } from "react";

export default function Typewriter({ words }: { words: string[] }) {
  const [i, setI] = useState(0);
  const [text, setText] = useState(words[0] ?? "");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (words.length < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const word = words[i % words.length];
    const holding = !deleting && text === word;
    const t = setTimeout(
      () => {
        if (!deleting) {
          if (text === word) setDeleting(true);
          else setText(word.slice(0, text.length + 1));
        } else if (text === "") {
          setDeleting(false);
          setI(i + 1);
        } else {
          setText(text.slice(0, -1));
        }
      },
      holding ? 1600 : deleting ? 35 : 70,
    );
    return () => clearTimeout(t);
  }, [text, deleting, i, words]);

  return (
    <>
      <span className="sr-only">{words.join(", ")}</span>
      <span aria-hidden>
        {text}
        <span className="caret" />
      </span>
    </>
  );
}