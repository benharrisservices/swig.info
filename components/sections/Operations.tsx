import { specs, steps } from "@/lib/site";

export default function Operations() {
  return (
    <section
      className="panel panel--dark section"
      id="operations"
      data-nav="dark"
      data-sec-target
    >
      <div className="wrap">
        <div className="eyebrow mono reveal">
          <span>03</span> Operations
          <span className="rule" aria-hidden="true" />
          <span>Running order</span>
        </div>
        <h2 className="model__lede reveal" data-d="1">
          Good events aren&apos;t improvised.
        </h2>
        <p className="model__sub reveal" data-d="2">
          Good people. Strong systems. Equipment we maintain ourselves. Clear
          plans, quiet execution. One purpose: the event runs perfectly.
        </p>
        <p className="model__kicker mono reveal" data-d="2">
          One system · Five stages
        </p>

        <div className="steps">
          {steps.map((s, i) => (
            <div className="step reveal" data-d={i + 1} key={s.num}>
              <span className="step__num">{s.num}</span>
              <span className="step__name">{s.name}</span>
              <span className="step__desc">{s.desc}</span>
            </div>
          ))}
        </div>

        <div className="specs">
          {specs.map((s, i) => (
            <div className="spec reveal" data-d={i + 1} key={s.v}>
              <div className="spec__v">
                {s.v}
                {"live" in s && s.live ? (
                  <span className="spec__dot" aria-hidden="true" />
                ) : null}
              </div>
              <div className="spec__k">{s.k}</div>
            </div>
          ))}
        </div>

        <a className="opcta reveal" href="#contact">
          <span className="opcta__txt">Plan your event</span>
          <span className="opcta__arrow" aria-hidden="true">
            →
          </span>
        </a>
      </div>
    </section>
  );
}
