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
          <span>How we work</span>
        </div>
        <h2 className="model__lede reveal" data-d="1">
          Every job runs the same way, from the first brief to the final pack
          down. Planned properly, written down, with one person responsible.
        </h2>

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
              <div className="spec__v">{s.v}</div>
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
