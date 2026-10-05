import { site } from "@/data/site";

// Tells search engines in a structured way: "this site is about this person".
// Email and phone are deliberately left out.
export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.role,
    url: site.siteUrl,
    image: site.photo ? `${site.siteUrl}${site.photo}` : undefined,
    sameAs: site.links.map((l) => l.href),
    alumniOf: { "@type": "CollegeOrUniversity", name: "The Neotia University" },
    knowsAbout: ["Python", "Django", "FastAPI", "Machine Learning", "REST APIs", "RAG"],
  };

  return (
    <script
      type="application/ld+json"
      // Safe: the data is our own constants; "<" is escaped so it can never close the tag.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}