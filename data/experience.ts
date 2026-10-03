// EXPERIENCE — newest first. Add a block for each new role; empty fields are hidden.
export type Role = {
  company: string;
  role: string;
  location: string;
  start: string;
  end: string;
  points: string[];
  tech: string[];
};

export const experience: Role[] = [
  {
    company: "Unified Mentor Jobs",
    role: "ML Intern",
    location: "Noida",
    start: "01/2026",
    end: "07/2026",
    points: [
      "Preprocessed a customer dataset of about 9,000 records for churn prediction, handling missing values and applying one-hot encoding to categorical features to prepare a clean training dataset.",
      "Trained a Random Forest classifier to predict customer churn and evaluated its performance to identify the key churn-driving factors for business decisions.",
    ],
    tech: [], // TODO: add the tools you used, e.g. "Python", "scikit-learn", "pandas"
  },
  {
    company: "Think Again Lab",
    role: "Intern",
    location: "Kolkata",
    start: "07/2024",
    end: "12/2024",
    points: [
      "Implemented JWT-based authentication with secure login and signup flows, supporting 500+ active users and cutting session errors by 30%.",
      "Integrated real-time map services using the OSM API and synced data in real time through Firebase (Auth, Firestore, Realtime DB) across 1,000+ concurrent users.",
      "Developed and shipped web applications with Django, contributing 3,200+ lines of code and resolving 15+ critical bugs for a consistent, responsive user experience.",
    ],
    tech: ["Python", "Django", "Firebase", "REST APIs", "OSM API", "HTML", "MVT"],
  },
];