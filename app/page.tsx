import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Industries from "@/components/sections/Industries";
import Why from "@/components/sections/Why";
import Pricing from "@/components/sections/Pricing";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <Process />
      <Industries />
      <Why />
      <Pricing />
      <CTA />
    </>
  );
}
