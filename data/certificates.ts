// CERTIFICATES & ACHIEVEMENTS — add a block for each new item. Empty fields are hidden.
// For a certificate PDF: put the file in /public/certificates and set "file" to its path.
export type Item = {
  title: string;
  type: "certificate" | "achievement";
  category: string;
  issuer?: string;
  year?: string; // TODO: add years, e.g. "2025"
  description?: string;
  file?: string; // shows a "View certificate" link when set
};

export const certificates: Item[] = [
  {
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    type: "certificate",
    category: "Cloud",
    issuer: "Oracle",
    file: "/certificates/oracle-ai-foundations.pdf",
  },
  {
    title: "NASA Space Apps Challenge Hackathon",
    type: "achievement",
    category: "Hackathon",
    issuer: "NASA",
    description: "Proposed a 6-month roadmap for a weather prediction system using historical NASA datasets.",
  },
  {
    title: "Exploring SAP Cloud ERP (Beginner Level)",
    type: "certificate",
    category: "Cloud",
    file: "/certificates/sap-cloud-erp.pdf",
  },
  {
    title: "PCAP: Programming Essentials in Python",
    type: "certificate",
    category: "Programming",
    file: "/certificates/pcap-python.pdf",
  },
  {
    title: "Cisco NDG Linux Essentials",
    type: "certificate",
    category: "Linux",
    issuer: "Cisco",
    file: "/certificates/cisco-linux-essentials.pdf",
  },
];