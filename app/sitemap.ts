import type { MetadataRoute } from "next";
import { site } from "@/data/site";

// Pages Google should know about. Add a path here when you add a new page.
const routes = ["", "/projects", "/experience", "/certificates", "/skills", "/education"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path) => ({
    url: `${site.siteUrl}${path}`,
    lastModified: new Date(),
  }));
}