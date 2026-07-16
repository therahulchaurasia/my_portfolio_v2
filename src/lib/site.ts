// Single source of truth for site-wide SEO values. Every canonical URL,
// OG tag, sitemap and robots entry derives from `url`.
export const SITE = {
  name: "Rahul",
  url: "https://workwithrahul.com",
  title: "Work With Rahul",
  description:
    "Websites designed and built to win you customers. No templates, no AI sameness. One person who designs it, codes it, and makes it convert.",
  email: "hi@workwithrahul.com",
  twitterHandle: "@rahul_twtss",
  twitter: "https://x.com/rahul_twtss",
  cal: "https://cal.com/rahul-chaurasiya/intro-and-discovery-call",
} as const
