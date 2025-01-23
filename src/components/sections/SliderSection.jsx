import React from "react";
import { Thumbs, Grid } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/grid";

const SliderSection = () => {
  const [thumbsSwiper, setThumbsSwiper] = React.useState(null);

  return (
    <section>
      <div className="container max-w-7xl w-full mx-auto p-4 py-20 flex justify-between items-stretch gap-20">
        <div className="content selectable flex flex-col justify-between h-full gap-10 max-w-2/3 w-full shrink-0">
          <div>
            <h2 className="text-4xl text-white font-display">Serviços</h2>
            <p className="text-white text-balance max-w-8/12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
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
              >
                <SwiperSlide className="">
                  <div className="p-10 mt-4 mr-4 rounded-md bg-gradient-to-br from-zinc-900 to-black/20 border border-solid border-zinc-800/50">
                    <p>Lorem Ipsum</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="">
                  <div className="p-10 mt-4 mr-4 rounded-md bg-gradient-to-br from-zinc-900 to-black/20 border border-solid border-zinc-800/50">
                    <p>Lorem Ipsum</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="">
                  <div className="p-10 mt-4 mr-4 rounded-md bg-gradient-to-br from-zinc-900 to-black/20 border border-solid border-zinc-800/50">
                    <p>Lorem Ipsum</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="">
                  <div className="p-10 mt-4 mr-4 rounded-md bg-gradient-to-br from-zinc-900 to-black/20 border border-solid border-zinc-800/50">
                    <p>Lorem Ipsum</p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
        <div className="slider max-w-1/3 w-full shrink-0">
          <Swiper
            modules={[Thumbs]}
            className="swiper max-w-full mySwiper2"
            thumbs={{ swiper: thumbsSwiper }}
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
    </section>
  );
};

export default SliderSection;
