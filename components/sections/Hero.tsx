import LiveClock from "@/components/LiveClock";
import Wordmark from "@/components/Wordmark";
import { site } from "@/lib/site";

export default function Hero() {
  return (
    <section className="panel panel--dark" id="top" data-nav="dark">
      <div className="wrap hero">
        <div className="hero__top h-anim" data-d="1">
          <span className="mono hero__status">
            <span className="live" aria-hidden="true" />
            Status · Operational
          </span>
          <span className="mono">Working across the UK</span>
        </div>

        <div className="hero__center">
          <h1 className="wordmark h-anim" data-d="2">
            <Wordmark />
          </h1>
          <p className="hero__statement h-anim" data-d="3">
            {site.statement}
          </p>
          <p className="hero__sub h-anim" data-d="4">
            We supply the kit, build the bars and run the crews for events,
            venues, festivals and hospitality across the UK. It arrives ready,
            set up right and on time.
          </p>
          <a className="opcta h-anim" data-d="4" href="#contact">
            <span className="opcta__txt">Enquire now</span>
            <span className="opcta__arrow" aria-hidden="true">
              →
            </span>
          </a>
        </div>

        <div className="hero__bottom h-anim" data-d="4">
          <div className="hero__meta">
            <div>
              <span className="mono k">Headquarters</span>
              <span className="v">{site.hq}</span>
            </div>
            <div>
              <span className="mono k">what3words</span>
              <a
                className="v hero__w3w"
                href={site.what3words.url}
                target="_blank"
                rel="noreferrer"
              >
                {site.what3words.words}
              </a>
            </div>
            <div>
              <span className="mono k">London time</span>
              <LiveClock />
            </div>
          </div>
          <a
            className="scrollcue mono"
            href="#orientation"
            aria-label="Scroll to overview"
          >
            <span className="scrollcue__line" aria-hidden="true" />
            Scroll
          </a>
        </div>
      </div>
    </section>
  );
}
