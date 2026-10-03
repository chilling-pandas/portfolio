// PROJECTS — add, remove or reorder entries. Only real work goes here.
// To add a project later: copy one block, change the values. Empty links are hidden.
export type Project = {
  slug: string;
  title: string;
  summary: string;
  category: string; // used for filter tabs later
  highlights: string[];
  tech: string[];
  github?: string;
  demo?: string;
  image?: string; // e.g. "/projects/smartlogix.webp"
};

export const projects: Project[] = [
  {
    slug: "smartlogix-ai",
    title: "Smartlogix-AI",
    summary: "AI-powered logistics system predicting product demand and shipment ETA for smarter supply chain decisions.",
    category: "AI / ML",
    highlights: [
      "Built FastAPI REST APIs for demand prediction and ETA estimation, with structured request validation and SQLAlchemy ORM on PostgreSQL for prediction traceability.",
      "Trained a logistic regression model for demand-level classification and benchmarked multiple regressors for ETA, selecting XGBoost as the best performer (R² 0.76, MAE 1.195).",
      "Containerized with Docker, set up CI with GitHub Actions, and deployed live on AWS EC2 behind an Nginx reverse proxy, with a Streamlit dashboard for real-time analytics.",
    ],
    tech: ["Python", "FastAPI", "XGBoost", "PostgreSQL", "Docker", "GitHub Actions", "AWS EC2", "Nginx", "Streamlit", "Matplotlib"],
    github: "https://github.com/chilling-pandas/SMARTLOGIX-AI", // TODO
    demo: "https://smartlogix-ai.duckdns.org/", // TODO
  },
  {
    slug: "ragnosis",
    title: "RAGnosis",
    summary: "RAG-based AI learning tool that generates quiz questions and summaries from PDFs using semantic search.",
    category: "AI / ML",
    highlights: [
      "Built a retrieval pipeline with FAISS and Hugging Face sentence-transformers to fetch relevant content from documents.",
      "Created a PDF-to-vector pipeline: documents split into 500-character chunks, embedded, and indexed in FAISS to support topic summaries and quiz generation.",
      "Connected a locally hosted LLM (Qwen via Ollama) to generate structured questions at three difficulty levels and concise summaries.",
      "Built a FastAPI backend with request validation, paired with a Streamlit UI for real-time answer validation and scoring.",
    ],
    tech: ["Python", "FastAPI", "FAISS", "sentence-transformers", "Qwen / Ollama", "Streamlit"],
    github: "https://github.com/chilling-pandas/RAGnosis", // TODO
  },
  {
    slug: "empcore",
    title: "Empcore",
    summary: "Employee management and role-based access control platform built with Django and DRF.",
    category: "Backend",
    highlights: [
      "Built a Django/DRF backend for employee CRUD, departments, profiles, JWT authentication and REST APIs.",
      "Implemented role- and department-based access control for Admin, HR, Manager and Employee users.",
      "Developed an invitation-based onboarding workflow: HR/Admin invite users, and employee records are created when an invitation is accepted.",
      "Tested the APIs with Postman and implemented pagination, search, filtering, ordering, select_related() optimization and transaction-safe invitation redemption.",
    ],
    tech: ["Python", "Django", "Django REST Framework", "PostgreSQL", "JWT", "Postman"],
    github: "https://github.com/chilling-pandas/EmpCore", // TODO
  },
  {
    slug: "clinic-management",
    title: "Clinic Management System",
    summary: "Serverless web platform that automates token routing and patient queue management between doctors and receptionists.",
    category: "Web",
    highlights: [
      "Built with Vanilla JavaScript, HTML5 and CSS3 to remove manual workflow bottlenecks between doctors and receptionists.",
      "Designed a fully serverless backend on Firebase (Firestore, Authentication, Hosting) for secure login and real-time medical data sync.",
      "Developed core modules: auto-incrementing token generator, role-specific dashboards, electronic health record (EHR) tracking and automated invoicing/billing.",
      "Protected sensitive patient data with strict Firebase security rules and client-side input sanitization, plus activity logging for operational transparency.",
    ],
    tech: ["JavaScript", "HTML5", "CSS3", "Firebase", "Firestore", "Firebase Auth"],
    github: "https://github.com/chilling-pandas/Clinic_Management_System-main", // TODO
  },
];