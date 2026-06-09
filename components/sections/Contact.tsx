import { cards, site } from "@/lib/site";
import Wordmark from "@/components/Wordmark";

const mailto = (email: string, subject: string) =>
  `mailto:${email}?subject=${encodeURIComponent(subject)}`;

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
          <span>Get in touch</span>
        </div>
        <h2 className="contact__lede reveal" data-d="1">
          Tell us what you're planning.
        </h2>
        <p className="contact__sub reveal" data-d="2">
          Send us the date, the place and roughly what you need. We'll come back
          quickly with how we'd run it, whether that's one bar or a full season.
          Happy to talk early, before anything's fixed.
        </p>
        <a className="contact__call reveal" data-d="2" href={site.phone.href}>
          <span className="mono contact__call-k">Call</span>
          <span className="contact__call-num">{site.phone.display}</span>
        </a>

        <div className="cards">
          {cards.map((c, i) => (
            <article className="card reveal" data-d={i + 1} key={c.k}>
              <div className="card__k mono">{c.k}</div>
              <p className="card__d">{c.d}</p>
              <a className="card__cta" href={mailto(c.email, c.subject)}>
                <span className="card__cta-txt">{c.cta}</span>
                <span className="card__cta-arrow" aria-hidden="true">
                  →
                </span>
              </a>
            </article>
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
