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
          <span>Why we exist</span>
        </div>
        <h2 className="lede reveal" data-d="1">
          Most of what makes an event work happens before anyone arrives. SWIG
          handles that part.{" "}
          <span className="muted">
            By the time the guests walk in, the hard part is done.
          </span>
        </h2>

        <div className="orient__grid">
          <div className="orient__body reveal" data-d="2">
            <p>
              Every event runs on work nobody sees. The kit that turns up on
              time, the bar plumbed before doors, the crew that knows the
              running order. When it goes well, no one notices. When it goes
              wrong, everyone does.
            </p>
            <p>
              Usually that lands on whoever signed the contract. We take it off
              their plate. We keep our own kit, vehicles and crew ready, and
              bring them in when a venue, a festival or a production needs more
              than it can handle on its own. Anywhere in the UK.
            </p>
          </div>
          <div className="orient__facts reveal" data-d="3">
            <div className="factrow">
              <span className="k">What we do</span>
              <span className="v">Hospitality &amp; event logistics</span>
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
              <span className="v">One bar to a full season</span>
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
          <span className="opcta__txt">Talk through the logistics</span>
          <span className="opcta__arrow" aria-hidden="true">
            →
          </span>
        </a>
      </div>
    </section>
  );
}
