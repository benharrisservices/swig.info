import { cards, site } from "@/lib/site";
import Wordmark from "@/components/Wordmark";

const mailto = (email: string, subject: string, body?: string) =>
  `mailto:${email}?subject=${encodeURIComponent(subject)}${
    body ? `&body=${encodeURIComponent(body)}` : ""
  }`;

export default function Contact() {
  return (
    <section
      className="panel panel--dark section contact"
      id="contact"
      data-nav="dark"
      data-sec-target
    >
      <div className="wrap">
        <div className="eyebrow mono reveal">
          <span>05</span> Enquiries
          <span className="rule" aria-hidden="true" />
          <span>Start here</span>
        </div>
        <h2 className="contact__lede reveal" data-d="1">
          Tell us about the event.
        </h2>
        <p className="contact__sub reveal" data-d="2">
          Send whatever you have. A date, a venue, half a plan. We'll come
          back quickly with how we'd run it.
        </p>
        <a className="contact__call reveal" data-d="2" href={site.phone.href}>
          <span className="mono contact__call-k">Call</span>
          <span className="contact__call-num">{site.phone.display}</span>
        </a>

        <div className="cards">
          {cards.map((c, i) => (
            <a
              className="card reveal"
              data-d={i + 1}
              key={c.k}
              href={mailto(
                c.email,
                c.subject,
                c.k === "Hello" ? "Hello SWIG,\n\n" : undefined
              )}
            >
              <div className="card__head">
                <span className="card__k mono">{c.k}</span>
                <svg
                  className="card__bubble"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M1.5 2.5h11v7h-6l-3 2.8v-2.8h-2z"
                    stroke="currentColor"
                    strokeWidth="1.1"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="card__role">{c.role}</span>
              <p className="card__d">{c.d}</p>
              <span className="card__cta">
                <span className="card__cta-txt">{c.cta}</span>
                <span className="card__cta-arrow" aria-hidden="true">
                  →
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>

      <footer className="panel--dark footer">
        <div className="wrap">
          <div className="footer__top">
            <div className="footer__mark reveal">
              <Wordmark />
            </div>
            <div className="footer__meta reveal" data-d="1">
              <span className="mono">{site.legalName}</span>
              <span className="mono">{site.coverage}</span>
              <a className="mono footer__tel" href={site.phone.href}>
                {site.phone.display}
              </a>
              <span className="mono">{site.domain}</span>
            </div>
          </div>
          <div className="footer__bar">
            <span className="mono">
              © {new Date().getFullYear()} {site.legalName} · Company No.{" "}
              {site.companyNumber} · Registered in England &amp; Wales
            </span>
            <span className="mono">Shoreditch, London</span>
          </div>
        </div>
      </footer>
    </section>
  );
}
