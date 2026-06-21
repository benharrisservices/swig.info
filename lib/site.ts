export const site = {
  name: "SWIG",
  legalName: "SWIG Studio Ltd",
  companyNumber: "17267035",
  domain: "swig.info",
  url: "https://swig.info",
  tagline: "Hospitality and event logistics.",
  statement:
    "We design and deploy mobile, modular event bars — built around the space, styled to the event, and ready before doors.",
  description:
    "SWIG is a hospitality and event logistics company specialising in mobile and modular bar deployments — stylistically and spatially designed to fit the event they're part of. Ten years of bars people remember, set up on time, anywhere in the UK.",
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
    name: "Mobile & modular bars",
    desc: "Bars that travel and reconfigure to any space, built before doors.",
  },
  {
    num: "02",
    name: "Spatial & styled",
    desc: "Designed into the room and styled to the event, not dropped in.",
  },
  {
    num: "03",
    name: "Cocktails & beverage",
    desc: "A serious list, freshly squeezed, poured by people from London's best rooms.",
  },
  {
    num: "04",
    name: "Crew & service",
    desc: "Experienced people. One supervisor. One standard, first guest to last.",
  },
  {
    num: "05",
    name: "Equipment & deployment",
    desc: "Our own kit, installed and tested before anyone arrives.",
  },
  {
    num: "06",
    name: "On the night",
    desc: "When something needs fixing, we fix it before a guest ever notices.",
  },
] as const;

export const steps = [
  { num: "01", name: "Brief", desc: "We work out what you need, where, and by when, before anything moves. One person to deal with, everything agreed in writing." },
  { num: "02", name: "Plan", desc: "We design the bar into the room and schedule the kit, the drinks and the crew around your running order." },
  { num: "03", name: "Setup", desc: "We set it all up and test it before doors open. Signed off before we hand it over." },
  { num: "04", name: "Run", desc: "Best cocktails on site, fresh juice, top-tier presentation and industry-leading speed — one supervisor owns the floor." },
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
    d: "Planning an event? Want the bar done properly? Start here.",
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
  { label: "How we run it", href: "#operations" },
  { label: "Infrastructure", href: "#infrastructure" },
] as const;
