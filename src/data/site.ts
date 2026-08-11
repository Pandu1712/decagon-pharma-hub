/**
 * Central, easily editable company content.
 * Replace the bracketed placeholders with real details when available.
 */
export const company = {
  name: "DECAGON",
  tagline: "Believed Quality",
  description:
    "DECAGON is committed to delivering quality-focused pharmaceutical and healthcare solutions across a diverse range of therapeutic categories.",
  address: "[DECAGON Office Address]",
  phone: "[Phone Number]",
  email: "[Email Address]",
  website: "[Website]",
  hours: "Monday – Saturday, 9:00 AM – 6:00 PM",
  /** Set to a real number (e.g. "919999999999") to enable the floating WhatsApp / Call buttons. */
  whatsapp: "",
  callNumber: "",
  mapEmbedUrl: "",
};

export const stats = [
  { value: 25, suffix: "+", label: "Healthcare Products" },
  { value: 10, suffix: "+", label: "Therapeutic Categories" },
  { text: "Quality", label: "Focused Approach" },
  { text: "Trusted", label: "Healthcare Solutions" },
] as const;

export const whyDecagon = [
  {
    title: "Quality Focus",
    text: "Committed to maintaining consistent quality across our product portfolio.",
    accent: "blue",
  },
  {
    title: "Reliable Products",
    text: "A diverse range of pharmaceutical and healthcare solutions.",
    accent: "teal",
  },
  {
    title: "Growing Portfolio",
    text: "Continuously expanding products across multiple therapeutic categories.",
    accent: "purple",
  },
  {
    title: "Healthcare Driven",
    text: "Focused on supporting healthcare professionals and patients.",
    accent: "orange",
  },
  {
    title: "Professional Standards",
    text: "Quality-focused processes and responsible pharmaceutical practices.",
    accent: "blue",
  },
  {
    title: "Believed Quality",
    text: "Our philosophy is built around trust, consistency and quality.",
    accent: "amber",
  },
] as const;

export const qualityPillars = [
  { title: "Quality Assurance", text: "Quality-focused checks across sourcing, production and packaging." },
  { title: "Consistency", text: "Repeatable processes designed to deliver the same standard every batch." },
  { title: "Safety Focus", text: "Responsible pharmaceutical practices with attention to product safety." },
  { title: "Continuous Improvement", text: "Reviewing and refining processes as our portfolio grows." },
];

/** Sample placeholder testimonials — replace with verified customer reviews. */
export const testimonials = [
  {
    quote: "Quality-focused products and a professional approach.",
    name: "Sample Reviewer",
    role: "Consulting Physician",
    org: "[Organization]",
  },
  {
    quote: "A dependable portfolio that covers a wide range of everyday therapeutic needs.",
    name: "Sample Reviewer",
    role: "Orthopedic Surgeon",
    org: "[Organization]",
  },
  {
    quote: "Consistent presentation and clear composition details make prescribing straightforward.",
    name: "Sample Reviewer",
    role: "Diabetologist",
    org: "[Organization]",
  },
  {
    quote: "Responsive team and a steadily expanding product range.",
    name: "Sample Reviewer",
    role: "Pharmacy Owner",
    org: "[Organization]",
  },
];
