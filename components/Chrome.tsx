import Wordmark from "@/components/Wordmark";

export function Veil() {
  return (
    <div className="veil" aria-hidden="true">
      <span className="veil__mark">
        <Wordmark />
      </span>
      <span className="veil__mark">LONDON · OPERATIONAL</span>
      <span className="veil__bar" />
    </div>
  );
}

const DATUM: { id: string; label: string }[] = [
  { id: "orientation", label: "Overview" },
  { id: "capabilities", label: "Capabilities" },
  { id: "operations", label: "Operations" },
  { id: "infrastructure", label: "Infrastructure" },
  { id: "contact", label: "Enquiries" },
];

export function Datum() {
  return (
    <nav className="datum" aria-label="Section index">
      {DATUM.map((item, i) => (
        <a
          key={item.id}
          className="datum__item"
          href={`#${item.id}`}
          aria-label={item.label}
        >
          <span className="datum__num" aria-hidden="true">
            {String(i + 1).padStart(2, "0")}
          </span>
          <span className="datum__tick" aria-hidden="true" />
        </a>
      ))}
    </nav>
  );
}
