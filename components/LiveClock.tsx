"use client";

import { useEffect, useState } from "react";

export default function LiveClock() {
  const [time, setTime] = useState("--:--:--");

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Europe/London",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
      timeZoneName: "short",
    });
    const tick = () => {
      try {
        const parts = fmt.formatToParts(new Date());
        const get = (t: string) =>
          parts.find((p) => p.type === t)?.value ?? "";
        const hms = `${get("hour")}:${get("minute")}:${get("second")}`;
        const zone = get("timeZoneName");
        setTime(zone ? `${hms} ${zone}` : hms);
      } catch {
        setTime("");
      }
    };
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <span className="v" suppressHydrationWarning>
      {time}
    </span>
  );
}
