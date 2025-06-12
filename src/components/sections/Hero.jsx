import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ButtonSec from "../assets/ButtonSec.jsx";

const Hero = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 2], [1, 0.6]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

  return (
    <motion.section
      style={{ scale, rotate }}
      className="relative h-screen w-full overflow-hidden z-0 bg-[#27272a]"
    >
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        playsInline
      >
        <source
          src="/images/videos/hero-home-background.mp4"
          type="video/mp4"
        />
        Seu navegador não suporta vídeo.
      </video>

      {/* Conteúdo da Hero */}
      <div className="relative z-10 container max-w-7xl mx-auto w-full h-full flex flex-row justify-center items-center">
        <div className="left p-4 text-white">
          <span className="text-sm p-4 py-2 border border-white border-solid rounded-full mb-4 block w-fit">
            EMPRESA GOOGLE PARTNER
          </span>
          <h1 className="text-4xl md:text-6xl leading-[0.9em]">
            Explore o marketing com a Panoram Digital.
          </h1>
          <p className="text-xl mt-4 max-w-xl leading-[1.9em]">
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
