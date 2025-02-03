import React from "react";
import { Thumbs, Grid, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion, useScroll, useTransform } from "framer-motion";
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/grid";
import "swiper/css/effect-fade";

const SliderSection = ({ scrollYProgress }) => {
  const [thumbsSwiper, setThumbsSwiper] = React.useState(null);
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

  return (
    <motion.section
      style={{ scale, rotate }}
      className="bg-gradient-to-br from-zinc-900 to-black h-fit md:h-screen relative"
    >
      <div className="container max-w-7xl w-full mx-auto p-4 py-20 flex flex-col md:flex-row h-fit md:h-screen justify-between items-center gap-20">
        <div className="content selectable flex flex-col justify-between h-auto md:max-w-3/5 w-full">
          <div>
            <h2>Serviços</h2>
            <p className="text-white text-balance max-w-8/12 mt-4 mb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="cards-grid w-full">
            <Swiper
              onSwiper={setThumbsSwiper}
              grid={{
                fill: "row",
                rows: 2,
              }}
              slidesPerView={2}
              watchSlidesProgress
              className="swiper mySwiper"
              effect="fade"
            >
              <SwiperSlide className="group">
                <div className="p-10 mt-4 mr-4 group-has['.swiper-slide-thumb-active']:bg-red-300 rounded-md text-white bg-gradient-to-br from-zinc-900 to-black/20 border border-solid border-zinc-800/50">
                  <p>Lorem Ipsum</p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="group">
                <div className="p-10 mt-4 mr-4 group-has['.swiper-slide-thumb-active']:bg-red-300 rounded-md text-white bg-gradient-to-br from-zinc-900 to-black/20 border border-solid border-zinc-800/50">
                  <p>Lorem Ipsum</p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="group">
                <div className="p-10 mt-4 mr-4 group-has['.swiper-slide-thumb-active']:bg-red-300 rounded-md text-white bg-gradient-to-br from-zinc-900 to-black/20 border border-solid border-zinc-800/50">
                  <p>Lorem Ipsum</p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="group">
                <div className="p-10 mt-4 mr-4 group-has['.swiper-slide-thumb-active']:bg-red-300 rounded-md text-white bg-gradient-to-br from-zinc-900 to-black/20 border border-solid border-zinc-800/50">
                  <p>Lorem Ipsum</p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="slider md:max-w-3/5 w-full shrink-0">
          <Swiper
            modules={[Thumbs, EffectFade]}
            className="swiper max-w-full mySwiper2"
            thumbs={{ swiper: thumbsSwiper }}
            effect="fade"
          >
            <SwiperSlide>
              <img
                src="../images/services/notebook-mockup-google.png"
                alt="Nature 1"
                loading="lazy"
                className="w-full rounded-md mix-blend-multiply bg-blend-multiply"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="../images/services/notebook-mockup-development.png"
                alt="Nature 2"
                loading="lazy"
                className="w-full rounded-md mix-blend-multiply bg-blend-multiply"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="../images/services/notebook-mockup-desing.png"
                alt="Nature 3"
                loading="lazy"
                className="w-full rounded-md mix-blend-multiply bg-blend-multiply"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="../images/services/notebook-mockup-social.png"
                alt="Nature 4"
                loading="lazy"
                className="w-full rounded-md mix-blend-multiply bg-blend-multiply"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </motion.section>
  );
};

export default SliderSection;
