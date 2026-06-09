import { capabilities } from "@/lib/site";

export default function Capabilities() {
  return (
    <section
      className="panel panel--light section"
      id="capabilities"
      data-nav="light"
      data-sec-target
      style={{ paddingTop: 0 }}
    >
      <div className="wrap">
        <div className="cap__head">
          <div>
            <div className="eyebrow mono reveal">
              <span>02</span> Capabilities
              <span className="rule" aria-hidden="true" />
              <span>The work</span>
            </div>
            <h2 className="cap__title reveal" data-d="1">
              One team.{" "}
              <span className="muted">Six disciplines.</span>
            </h2>
          </div>
          <p className="cap__note reveal" data-d="2">
            From a single bar to nationwide operations.
          </p>
        </div>

        <div className="index">
          {capabilities.map((c) => (
            <a
              className="row reveal"
              href="#contact"
              key={c.num}
              aria-label={`Enquire about ${c.name}`}
            >
              <span className="row__num">{c.num}</span>
              <span className="row__main">
                <span className="row__name">{c.name}</span>
                <span className="row__desc">{c.desc}</span>
              </span>
              <span className="row__arrow" aria-hidden="true">
                →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
