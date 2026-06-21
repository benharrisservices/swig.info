export default function Orientation() {
  return (
    <section
      className="panel panel--light section"
      id="orientation"
      data-nav="light"
      data-sec-target
    >
      <div className="wrap">
        <div className="eyebrow mono reveal">
          <span>01</span> Overview
          <span className="rule" aria-hidden="true" />
          <span>Before doors open</span>
        </div>
        <h2 className="lede reveal" data-d="1">
          Guests remember the night.{" "}
          <span className="muted">We remember everything before it.</span>
        </h2>

        <div className="orient__grid">
          <div className="orient__body reveal" data-d="2">
            <p>
              Every event runs on work nobody sees. The bar built before
              doors. Fresh juice cut, ice in, garnish ready. Crew who know the
              running order. When it goes well, no one notices. When it goes
              wrong, everyone does.
            </p>
            <p>
              Usually that lands on whoever signed the contract. We take it off
              their plate. Our bar, our kit, our crew, ready to pour. Anywhere
              in the UK.
            </p>
          </div>
          <div className="orient__facts reveal" data-d="3">
            <div className="factrow">
              <span className="k">What we do</span>
              <span className="v">Premium event bars &amp; beverage</span>
            </div>
            <div className="factrow">
              <span className="k">Where</span>
              <span className="v">Across the UK</span>
            </div>
            <div className="factrow">
              <span className="k">Base</span>
              <span className="v">Shoreditch, London</span>
            </div>
            <div className="factrow">
              <span className="k">Kit</span>
              <span className="v">Our own, kept ready</span>
            </div>
            <div className="factrow">
              <span className="k">Size of job</span>
              <span className="v">One event to ongoing partnership</span>
            </div>
            <div className="factrow">
              <span className="k">Reply</span>
              <span className="v">Within minutes</span>
            </div>
          </div>
        </div>

        <a className="opcta reveal" data-d="3" href="#contact">
          <span className="opcta__txt">Tell us about your event</span>
          <span className="opcta__arrow" aria-hidden="true">
            →
          </span>
        </a>

        <a className="opcta reveal" data-d="3" href="#contact">
          <span className="opcta__txt">Talk through the bar</span>
          <span className="opcta__arrow" aria-hidden="true">
            →
          </span>
        </a>
      </div>
    </section>
  );
}
