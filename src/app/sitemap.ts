import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.liberiatraffic.com";
  const routes = [
    "",
    "/services",
    "/services/driver-license",
    "/services/vehicle-registration",
    "/services/vehicle-inspection",
    "/services/license-plates",
    "/pricing",
    "/road-signs",
    "/practice-test",
    "/practice-test/study",
    "/faq",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));
}
