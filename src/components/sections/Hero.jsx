import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ButtonSec from "../assets/ButtonSec.jsx";

const Hero = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 2], [1, 0.6]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

  return (
    <motion.section
      style={{ scale, rotate }}
      className="bg-linear-45 from-blue-700 to-indigo-950 sticky top-0 h-screen grid place-items-center z-0"
    >
      <div className="container max-w-7xl mx-auto w-full flex flex-row justify-center items-center">
        <div className="left p-4 text-white">
          <span className="text-sm p-4 py-2 border border-solid rounded-full mb-4 block w-fit">
            EMPRESA GOOGLE PARTNER
          </span>
          <h1>Explore o marketing com a Panoram Digital.</h1>
          <p className="text-xl text-balance mt-4">
            Ajudamos a sua empresa a crescer com estratégias de marketing
            digital personalizadas.
          </p>
          <div className="text-black mt-14 text-xl font-semibold">
            <ButtonSec title="Saiba Mais" url="/services" />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
