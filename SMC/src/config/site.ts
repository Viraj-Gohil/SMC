/**
 * Site-wide configuration
 * Centralized place for app constants and settings
 */
export const siteConfig = {
  name: "Shree Manav Classes",
  description: "Shree Manav Classes offers AC classrooms, CCTV-monitored security, and expert tuition for Class 5th–12th students in Chhani.",
  url: process.env.NEXT_PUBLIC_APP_URL || "https://shreemanavclasses.com",
  links: {
    facebook: "https://www.facebook.com/ketam.nagarsheth",
    instagram: "https://www.instagram.com/nagarshethketan3",
  },
  creator: "Shree Manav Classes",
};

export type SiteConfig = typeof siteConfig;
