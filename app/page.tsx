import Navigation from "@/components/Navigation";
import ScrollChoreography from "@/components/ScrollChoreography";
import { Veil, Datum } from "@/components/Chrome";
import Hero from "@/components/sections/Hero";
import Orientation from "@/components/sections/Orientation";
import Capabilities from "@/components/sections/Capabilities";
import Operations from "@/components/sections/Operations";
import Infrastructure from "@/components/sections/Infrastructure";
import Contact from "@/components/sections/Contact";

export default function Page() {
  return (
    <>
      <a href="#main" className="skip">
        Skip to content
      </a>
      <Veil />
      <Datum />
      <Navigation />
      <ScrollChoreography />
      <main id="main">
        <Hero />
        <Orientation />
        <Capabilities />
        <Operations />
        <Infrastructure />
        <Contact />
      </main>
    </>
  );
}
