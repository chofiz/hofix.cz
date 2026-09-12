import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://hofix.cz/sitemap.xml",
    host: "https://hofix.cz",
  };
}
