import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://contractforge.co.uk";
  const now = new Date();

  return [
    // Core pages (highest priority)
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/client-onboarding-pack`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    // Builder (secondary)
    {
      url: `${baseUrl}/generate`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // BOF template pages (SEO drivers)
    {
      url: `${baseUrl}/personal-trainer-contract-template-uk`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/personal-trainer-par-q-form-uk`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/personal-trainer-waiver-form-uk`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/personal-trainer-terms-and-conditions-uk`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/personal-trainer-cancellation-policy-template`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // Supporting / trust pages
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ];
}