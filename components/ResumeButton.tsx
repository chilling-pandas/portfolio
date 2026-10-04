"use client";

// Opens the resume drawer. Use it anywhere a "Resume" button is needed.
export default function ResumeButton({
  className = "",
  children = "Resume",
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-haspopup="dialog"
      onClick={() => window.dispatchEvent(new Event("open-resume"))}
      className={className}
    >
      {children}
    </button>
  );
}