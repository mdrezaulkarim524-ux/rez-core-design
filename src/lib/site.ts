export const COMPANY = {
  name: "REZ INTERNATIONAL LTD",
  displayName: "REZ INTERNATIONAL",
  domain: "rezinternational.com",
  crn: "17320050",
  crnLabel: "Company Registration No. 17320050 — Registered in England and Wales",
  address: "8 Sea Road, Bexhill on Sea, TN40 1ED, United Kingdom",
  email: "contact@rezinternational.com",
  whatsapp: "https://wa.me/441424909330",
} as const;


export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Our Expertise", to: "/expertise", hasDropdown: true },
  { label: "Brand Protection & Supply Chain", to: "/brand-protection" },
  { label: "Book a Meeting", to: "/book-a-meeting" },
  { label: "Contact Us", to: "/contact" },
] as const;

export const SECTORS = [
  "Home & Kitchen",
  "Baby & Nursery",
  "Health & Personal Care",
  "Beauty & Cosmetics",
  "Pet Supplies",
  "Sports & Outdoors",
  "Garden & DIY",
  "Toys & Games",
  "Household Essentials",
] as const;
