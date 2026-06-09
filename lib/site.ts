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
    desc: "Getting equipment and stock where it needs to be, on time and accounted for. We move it, store it and track it, so nothing turns up late or holds up service.",
  },
  {
    num: "02",
    name: "Event Builds",
    desc: "Bars, service stations and temporary structures, built to suit the site and the running order. A corporate party, a festival or a stadium. In before doors, out after the last guest.",
  },
  {
    num: "03",
    name: "Equipment & Setup",
    desc: "Fridges, dispense, glassware and service kit, delivered, installed and tested where you need it. It works before we hand it over, not when the first guests arrive.",
  },
  {
    num: "04",
    name: "Bar Systems",
    desc: "Complete bars, designed, plumbed and pouring from the first order. Built to keep up when the queue is three deep.",
  },
  {
    num: "05",
    name: "On-site Crew",
    desc: "Trained crew and supervisors on the floor, running the night so your people don't have to. We stay until everything's packed away.",
  },
  {
    num: "06",
    name: "Rapid Response",
    desc: "When something breaks or runs low mid-event, we move fast to fix it or get more to you. One fault shouldn't close a bar. With us it doesn't.",
  },
] as const;

export const steps = [
  { num: "01", name: "Brief", desc: "We work out what you need, where, and by when, before anything moves. One person to deal with, everything agreed in writing." },
  { num: "02", name: "Plan", desc: "We schedule the kit, the crews and the deliveries around your running order, and build in cover for the moments that can't go wrong." },
  { num: "03", name: "Set up", desc: "We set it all up and test it before doors open. Signed off before we hand it over." },
  { num: "04", name: "Run", desc: "Our crew runs the service on the night, led by one supervisor who owns the floor and keeps it right." },
  { num: "05", name: "Pack down", desc: "We take it down, clear the site and send you an honest account of what got used. You get the space back exactly as we found it." },
] as const;

export const specs = [
  { v: "Minutes", k: "We reply in minutes, not days." },
  { v: "National", k: "We work right across the UK, from our base in Shoreditch, London." },
  { v: "Ready", k: "Our own equipment, vehicles and crews, ready when you are." },
] as const;

export const cards = [
  {
    k: "Hello",
    d: "Questions, introductions or not sure where to start.",
    cta: "Say hello",
    email: "hello@swig.info",
    subject: "Website enquiry",
  },
  {
    k: "Bookings",
    d: "Planning an event, or need crew and kit on site.",
    cta: "Speak to bookings",
    email: "bookings@swig.info",
    subject: "Event enquiry",
  },
  {
    k: "Accounts",
    d: "Invoices, payments and finance queries.",
    cta: "Speak to accounts",
    email: "accounts@swig.info",
    subject: "Accounts enquiry",
  },
  {
    k: "Director",
    d: "Prefer to skip the queue? Speak directly with Ben about partnerships or significant opportunities.",
    cta: "Speak directly with Ben",
    email: "ben@swig.info",
    subject: "For Ben",
  },
] as const;

export const nav = [
  { label: "Overview", href: "#orientation" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Operations", href: "#operations" },
  { label: "Infrastructure", href: "#infrastructure" },
] as const;
