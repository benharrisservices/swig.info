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
              <span>What we do</span>
            </div>
            <h2 className="cap__title reveal" data-d="1">
              Six parts of the job,
              <br />
              one team running them.
            </h2>
          </div>
          <p className="cap__note reveal" data-d="2">
            Hire us for one bar, or for everything behind a season of events.
            Either way it's one team, one standard and one number to call.
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
