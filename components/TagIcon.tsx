import {
  Award, Brain, Cloud, Code, Cpu, Database, GitBranch, Layers, Server,
  ShieldCheck, Sparkles, Terminal, Trophy, Wrench, type LucideIcon,
} from "lucide-react";

const rules: [RegExp, LucideIcon][] = [
  [/^(python|html|css|c\+\+|javascript|typescript|languages)/i, Code],
  [/postgres|database|faiss|firestore|\bsql\b/i, Database],
  [/\bgit\b|github|actions/i, GitBranch],
  [/docker|linux|nginx|postman|devops|programming/i, Terminal],
  [/aws|cloud|render|ec2|sap/i, Cloud],
  [/django|fastapi|backend|api|streamlit/i, Server],
  [/langchain|llm|rag|semantic|hugging|sentence|local/i, Sparkles],
  [/tensorflow|xgboost|scikit|numpy|pandas|transformer|\bml\b|algorithm|model|ai\b/i, Cpu],
  [/vs code|pycharm|kaggle|colab|antigravity|tools|hackathon/i, Wrench],
  [/security|rbac|auth|jwt/i, ShieldCheck],
  [/web|firebase/i, Layers],
];

export function iconFor(text: string): LucideIcon {
  for (const [re, Icon] of rules) if (re.test(text)) return Icon;
  return Brain;
}

export default function TagIcon({ name, className = "h-3.5 w-3.5 shrink-0 text-accent" }: { name: string; className?: string }) {
  const Icon = iconFor(name);
  return <Icon className={className} aria-hidden />;
}

export { Award, Trophy };