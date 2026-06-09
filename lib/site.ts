export const site = {
  name: "SWIG",
  legalName: "SWIG Studio Ltd",
  companyNumber: "17267035",
  domain: "swig.info",
  url: "https://swig.info",
  tagline: "Hospitality and event logistics.",
  statement:
    "We run the logistics behind events and hospitality, so the day goes to plan.",
  description:
    "SWIG runs the logistics behind events and hospitality across the UK. We supply the equipment, build the bars and run the crews, ready when you need them and set up on time.",
  hq: "Shoreditch, London",
  coverage: "Working across the UK",
  phone: {
    display: "020 8087 4616",
    href: "tel:02080874616",
    intl: "+44 20 8087 4616",
  },
  what3words: {
    words: "///trout.forms.flats",
    url: "https://what3words.com/trout.forms.flats",
  },
  // Used only inside mailto links, never shown as text.
  email: { hello: "hello@swig.info" },
} as const;

export const capabilities = [
  {
    num: "01",
    name: "Hospitality Logistics",
    desc: "The right equipment. The right place. The right time. Accounted for.",
  },
  {
    num: "02",
    name: "Event Builds",
    desc: "Built before opening. Gone after closing. No surprises.",
  },
  {
    num: "03",
    name: "Equipment & Setup",
    desc: "Installed. Tested. Ready before anyone arrives.",
  },
  {
    num: "04",
    name: "Bar Systems",
    desc: "Built to pour from the first order. Designed to keep service moving.",
  },
  {
    num: "05",
    name: "Event Staffing",
    desc: "Experienced people. One supervisor. One standard.",
  },
  {
    num: "06",
    name: "Rapid Response",
    desc: "When something fails, we fix it before guests notice.",
  },
] as const;

export const steps = [
  { num: "01", name: "Brief", desc: "We work out what you need, where, and by when, before anything moves. One person to deal with, everything agreed in writing." },
  { num: "02", name: "Plan", desc: "We schedule the kit, the crews and the deliveries around your running order, and build in cover for the moments that can't go wrong." },
  { num: "03", name: "Setup", desc: "We set it all up and test it before doors open. Signed off before we hand it over." },
  { num: "04", name: "Run", desc: "Our crew runs the service on the night, led by one supervisor who owns the floor and keeps it right." },
  { num: "05", name: "Packdown", desc: "We take it down, clear the site and send you an honest account of what got used. You get the space back exactly as we found it." },
] as const;

export const specs = [
  { v: "Minutes", k: "We respond in minutes, not hours. Everything we run moves at that speed." },
  { v: "Nationwide", k: "Supporting venues and events across the United Kingdom." },
  { v: "Ready", k: "Our equipment. Our vehicles. Our people. Ready before you need them.", live: true },
] as const;

export const cards = [
  {
    k: "Hello",
    role: "Customer support",
    d: "Questions, introductions, anything at all.",
    cta: "Say hello",
    email: "hello@swig.info",
    subject: "Website enquiry",
  },
  {
    k: "Bookings",
    role: "Bookings team",
    d: "Planning an event? Need crew or equipment? Start here.",
    cta: "Speak to bookings",
    email: "bookings@swig.info",
    subject: "Event enquiry",
  },
  {
    k: "Accounts",
    role: "Accounts & finance",
    d: "Invoices, payments, purchase orders and supplier queries.",
    cta: "Speak to accounts",
    email: "accounts@swig.info",
    subject: "Accounts enquiry",
  },
  {
    k: "Director",
    role: "The heart of the operation",
    d: "Large partnerships, interesting ideas, major projects. Straight to Ben.",
    cta: "Speak directly with Ben",
    email: "ben@swig.info",
    subject: "For Ben",
  },
] as const;

export const nav = [
  { label: "Inside SWIG", href: "#orientation" },
  { label: "What we run", href: "#capabilities" },
  { label: "How it runs", href: "#operations" },
  { label: "Infrastructure", href: "#infrastructure" },
] as const;
