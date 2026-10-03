// SKILLS — shown in this order. Move a block to reorder; set scroll: true for a moving ticker box.
export type SkillGroup = { name: string; items: string[]; scroll?: boolean };

export const skillGroups: SkillGroup[] = [
  { name: "Languages", items: ["Python", "HTML", "C++", "SQL"] },
  {
    name: "Backend & Libraries",
    items: ["Django", "Django REST Framework", "FastAPI", "scikit-learn", "pandas", "NumPy", "TensorFlow"],
  },
  {
    name: "AI / ML",
    scroll: true,
    items: [
      "XGBoost", "RAG", "Semantic search", "sentence-transformers", "Transformers",
      "ML algorithms", "Model Deployment", "LangChain", "Local LLM",
    ],
  },
  {
    name: "Tools & Platforms",
    scroll: true,
    items: ["Hugging Face", "VS Code", "PyCharm", "Kaggle", "Colab", "Antigravity"],
  },
  { name: "Database", items: ["PostgreSQL", "FAISS", "Vector(DB)"] },
  { name: "DevOps / Cloud", items: ["Docker", "AWS", "GitHub Actions", "Git", "Render", "Postman"] },
];