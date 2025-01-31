import React, { useRef } from "react";
import { motion, useSpring, useScroll } from "framer-motion";
import Hero from "../components/sections/Hero";
import SliderSection from "../components/sections/SliderSection";

const Perspective = () => {
  const container = useRef(null);
  console.log(container);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  return (
    <main ref={container} className="h-[200vh]  bg-zinc-800" id="hero-parallax">
      <Hero scrollYProgress={scrollYProgress} />
      <SliderSection scrollYProgress={scrollYProgress} />
    </main>
  );
};

export default Perspective;
