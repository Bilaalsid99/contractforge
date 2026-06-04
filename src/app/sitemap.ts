import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://contractforge.co.uk";
  const now = new Date();

  return [
    // Core pages
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
      priority: 0.95,
    },

    // Builder / action step
    {
      url: `${baseUrl}/generate`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // Main free template previews
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
      priority: 0.75,
    },
    {
      url: `${baseUrl}/personal-trainer-waiver-form-uk`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/personal-trainer-terms-and-conditions-uk`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/personal-trainer-cancellation-policy-template`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
    },

    // Supporting free template previews
    {
      url: `${baseUrl}/personal-trainer-gdpr-privacy-notice-uk`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/personal-trainer-photo-video-release-form-uk`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/home-visit-personal-training-waiver-uk`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },

    // Trust / legal pages
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