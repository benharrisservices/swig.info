"use client";

import { useEffect, useState } from "react";

// Sunrise/sunset for London via the standard NOAA approximation.
// Good to a minute or two, which is all a status line needs.
const LAT = 51.5245;
const LNG = -0.0786; // Shoreditch

function solarEventUTC(date: Date, sunrise: boolean): Date {
  const rad = Math.PI / 180;
  const start = Date.UTC(date.getUTCFullYear(), 0, 0);
  const n = Math.floor((date.getTime() - start) / 86400000);
  const lngHour = LNG / 15;
  const t = n + (((sunrise ? 6 : 18) - lngHour) / 24);
  const M = 0.9856 * t - 3.289;
  let L =
    M + 1.916 * Math.sin(M * rad) + 0.02 * Math.sin(2 * M * rad) + 282.634;
  L = ((L % 360) + 360) % 360;
  let RA = Math.atan(0.91764 * Math.tan(L * rad)) / rad;
  RA = ((RA % 360) + 360) % 360;
  RA += Math.floor(L / 90) * 90 - Math.floor(RA / 90) * 90;
  RA /= 15;
  const sinDec = 0.39782 * Math.sin(L * rad);
  const cosDec = Math.cos(Math.asin(sinDec));
  const cosH =
    (Math.cos(90.833 * rad) - sinDec * Math.sin(LAT * rad)) /
    (cosDec * Math.cos(LAT * rad));
  let H = Math.acos(cosH) / rad;
  if (sunrise) H = 360 - H;
  H /= 15;
  const T = H + RA - 0.06571 * t - 6.622;
  const UT = (((T - lngHour) % 24) + 24) % 24;
  const ms = Date.UTC(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate()
  );
  return new Date(ms + UT * 3600000);
}

function nextEvent(now: Date): { label: string; at: Date } {
  const sunsetToday = solarEventUTC(now, false);
  if (now < sunsetToday) return { label: "Sunset in", at: sunsetToday };
  const tomorrow = new Date(now.getTime() + 86400000);
  const sunriseTomorrow = solarEventUTC(tomorrow, true);
  if (now < sunriseTomorrow)
    return { label: "Sunrise in", at: sunriseTomorrow };
  return { label: "Sunset in", at: solarEventUTC(tomorrow, false) };
}

function fmt(ms: number): string {
  const s = Math.max(0, Math.floor(ms / 1000));
  const h = String(Math.floor(s / 3600)).padStart(2, "0");
  const m = String(Math.floor((s % 3600) / 60)).padStart(2, "0");
  const sec = String(s % 60).padStart(2, "0");
  return `${h}:${m}:${sec}`;
}

export default function SolarClock() {
  const [text, setText] = useState("Sunset in --:--:--");

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const { label, at } = nextEvent(now);
      setText(`${label} ${fmt(at.getTime() - now.getTime())}`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return <span className="v">{text}</span>;
}

// Civil-twilight boundary uses zenith 96 deg in the same approximation.
function civilEventUTC(date: Date, dawn: boolean): Date {
  const rad = Math.PI / 180;
  const start = Date.UTC(date.getUTCFullYear(), 0, 0);
  const n = Math.floor((date.getTime() - start) / 86400000);
  const lngHour = LNG / 15;
  const t = n + (((dawn ? 6 : 18) - lngHour) / 24);
  const M = 0.9856 * t - 3.289;
  let L =
    M + 1.916 * Math.sin(M * rad) + 0.02 * Math.sin(2 * M * rad) + 282.634;
  L = ((L % 360) + 360) % 360;
  let RA = Math.atan(0.91764 * Math.tan(L * rad)) / rad;
  RA = ((RA % 360) + 360) % 360;
  RA += Math.floor(L / 90) * 90 - Math.floor(RA / 90) * 90;
  RA /= 15;
  const sinDec = 0.39782 * Math.sin(L * rad);
  const cosDec = Math.cos(Math.asin(sinDec));
  const cosH =
    (Math.cos(96 * rad) - sinDec * Math.sin(LAT * rad)) /
    (cosDec * Math.cos(LAT * rad));
  let H = Math.acos(Math.min(1, Math.max(-1, cosH))) / rad;
  if (dawn) H = 360 - H;
  H /= 15;
  const T = H + RA - 0.06571 * t - 6.622;
  const UT = (((T - lngHour) % 24) + 24) % 24;
  const ms = Date.UTC(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate()
  );
  return new Date(ms + UT * 3600000);
}

export function SolarPhase() {
  const [text, setText] = useState("Daylight");

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const sunrise = solarEventUTC(now, true);
      const sunset = solarEventUTC(now, false);
      const dawn = civilEventUTC(now, true);
      const dusk = civilEventUTC(now, false);
      let phase = "Night";
      if (now >= sunrise && now < sunset) phase = "Daylight";
      else if (now >= dawn && now < sunrise) phase = "Civil twilight";
      else if (now >= sunset && now < dusk) phase = "Civil twilight";
      setText(phase);
    };
    tick();
    const id = setInterval(tick, 30000);
    return () => clearInterval(id);
  }, []);

  return <span className="v">{text}</span>;
}
