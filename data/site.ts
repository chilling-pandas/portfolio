// SITE SETTINGS — edit freely. Everything on the site reads from /data.
export const site = {
  siteUrl: "https://portfolio-sourav-manna.vercel.app",
  googleVerification: "", // paste the Google code here in step 3
    about: [
    "I'm a B.Tech Computer Science student (2022–2026) at The Neotia University, focused on Python backend development and machine learning.",
    "I've worked on Django REST APIs during an internship and on ML projects covering logistics prediction and retrieval-augmented generation (RAG). I'm looking for fresher and intern roles where I can keep building real systems.",
  ],
  typedRoles: ["ML & Backend Developer", "Python · Django · FastAPI", "RAG & Semantic Search"],
  email: "souravmanna41860@gmail.com",
  phone: "+919883316279",
  location: "Kolkata, India",
  relocation: "Open to relocate anywhere",
  formEndpoint: "https://formspree.io/f/mrpbwzbe", // paste your Formspree URL here, e.g. "https://formspree.io/f/xxxxxxx"
  badge: "ML & Backend Developer",
  headlineStart: "Building reliable",
  headlineAccent: "backend and ML systems",
  headlineEnd: "that ship.",
  photo: "/images/me.jpg", // put your photo in /public/images and set e.g. "/images/me.jpg"
  name: "Sourav Manna",
  initials: "SM",
  role: "ML & Python Backend Developer",
  intro:
    "I build APIs and machine-learning systems with Python, Django and FastAPI. B.Tech CSE student, looking for fresher and intern roles.",
  status: "Open to fresher / intern roles", // set to "" to hide the status line
// TODO: add your email
  resumeUrl: "/resume.pdf", // TODO: put resume.pdf in /public and set "/resume.pdf"
  links: [
    { label: "GitHub", href: "https://github.com/chilling-pandas" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/sourav-manna-100590279" },
    // { label: "LeetCode", href: "https://leetcode.com/u/98_Sourav/" },
  ],
  // Contact mode: "links" now; switch to "form" later when we decide.
  contactMode: "links" as "links" | "form",
};

// NAVIGATION — set ready:true when a page exists. Add/remove/reorder items freely.
export const nav = [
  { label: "Overview", href: "/", ready: true },
  { label: "Projects", href: "/projects", ready: true },
  { label: "Experience", href: "/experience", ready: true },
  { label: "Certificates", href: "/certificates", ready: true },
  { label: "Skills", href: "/skills", ready: true },
  { label: "Education", href: "/education", ready: true },
  { label: "Reach Me", href: "/#contact", ready: true },
];
