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
      className="bg-gradient-to-br from-zinc-900 to-black h-screen relative"
    >
      <div className="container max-w-7xl w-full mx-auto p-4 py-20 flex h-screen justify-between items-center gap-20">
        <div className="content selectable flex flex-col justify-between h-auto max-w-3/5 w-full">
          <div>
            <h2 className="text-4xl text-white font-display">Serviços</h2>
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
              slidesPerView={3}
              watchSlidesProgress
              className="swiper mySwiper"
              effect="fade"
            >
              <SwiperSlide className="">
                <div className="p-10 mt-4 mr-4 rounded-md text-white bg-gradient-to-br from-zinc-900 to-black/20 border border-solid border-zinc-800/50">
                  <p>Lorem Ipsum</p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="">
                <div className="p-10 mt-4 mr-4 rounded-md text-white bg-gradient-to-br from-zinc-900 to-black/20 border border-solid border-zinc-800/50">
                  <p>Lorem Ipsum</p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="">
                <div className="p-10 mt-4 mr-4 rounded-md text-white bg-gradient-to-br from-zinc-900 to-black/20 border border-solid border-zinc-800/50">
                  <p>Lorem Ipsum</p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="">
                <div className="p-10 mt-4 mr-4 rounded-md text-white bg-gradient-to-br from-zinc-900 to-black/20 border border-solid border-zinc-800/50">
                  <p>Lorem Ipsum</p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="slider max-w-2/5 w-full shrink-0">
          <Swiper
            modules={[Thumbs, EffectFade]}
            className="swiper max-w-full mySwiper2"
            thumbs={{ swiper: thumbsSwiper }}
            effect="fade"
          >
            <SwiperSlide>
              <img
                src="https://swiperjs.com/demos/images/nature-1.jpg"
                alt="Nature 1"
                loading="lazy"
                className="w-full rounded-md"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://swiperjs.com/demos/images/nature-2.jpg"
                alt="Nature 2"
                loading="lazy"
                className="w-full rounded-md"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://swiperjs.com/demos/images/nature-3.jpg"
                alt="Nature 3"
                loading="lazy"
                className="w-full rounded-md"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://swiperjs.com/demos/images/nature-4.jpg"
                alt="Nature 4"
                loading="lazy"
                className="w-full rounded-md"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </motion.section>
  );
};

export default SliderSection;
