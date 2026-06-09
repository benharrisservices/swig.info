export default function Infrastructure() {
  return (
    <section
      className="panel panel--light section"
      id="infrastructure"
      data-nav="light"
      data-sec-target
    >
      <div className="wrap">
        <div className="eyebrow mono reveal">
          <span>04</span> Infrastructure
          <span className="rule" aria-hidden="true" />
          <span>Built to stay</span>
        </div>
        <h2 className="vision__lede reveal" data-d="1">
          If you&apos;re planning years ahead,{" "}
          <span className="muted">you want a supplier who is too.</span>
        </h2>

        <div className="vision__cols">
          <div className="vision__col reveal" data-d="1">
            <h3>What we're doing</h3>
            <p>
              Investing continuously in world class equipment, vehicles,
              workshop and crew. Owned and maintained by us, not hired in.
            </p>
          </div>
          <div className="vision__col reveal" data-d="2">
            <h3>Why it matters</h3>
            <p>
              When you're planning a season of events, you want to know your
              supplier will still be standing, with the kit and the people, when
              the day comes.
            </p>
          </div>
          <div className="vision__col reveal" data-d="3">
            <h3>What you get</h3>
            <p>
              A standing operation, not freelancers assembled for the day. The
              kind of supplier you build plans around, year after year.
            </p>
          </div>
        </div>

        <a className="opcta reveal" data-d="3" href="#contact">
          <span className="opcta__txt">Tell us what you need</span>
          <span className="opcta__arrow" aria-hidden="true">
            →
          </span>
        </a>

        <a className="opcta reveal" data-d="3" href="#contact">
          <span className="opcta__txt">Review the programme</span>
          <span className="opcta__arrow" aria-hidden="true">
            →
          </span>
        </a>
      </div>
    </section>
  );
}
