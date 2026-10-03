// EDUCATION — newest first. Add or edit entries freely; empty fields are hidden.
export type Education = {
  degree: string;
  school: string;
  period: string; // e.g. "2022 – 2026"
  score: string; // e.g. "CGPA 8.35"
  note?: string;
};

export const education: Education[] = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    school: "The Neotia University",
    period: "2022 – 2026",
    score: "CGPA 8.35",
  },
  {
    degree: "Higher Secondary (HS)",
    school: "Hirapur K K High School",
    period: "", // TODO: add the year if you want it shown, e.g. "2022"
    score: "86.4%",
    note: "Physics, Chemistry, Mathematics (PCM)",
  },
];