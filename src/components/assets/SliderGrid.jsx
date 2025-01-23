import React from "react";
import { Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const SliderGrid = () => {
  const [thumbsSwiper, setThumbsSwiper] = React.useState(null);

  return (
    <>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode
        watchSlidesProgress
        className="swiper size-full mySwiper"
      >
        <SwiperSlide>
          <div className="p-10 rounded-md bg-gradient-to-br from-zinc-900 to-black/20 border border-solid border-zinc-800/50 size-fit">
            <p>Lorem Ipsum</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-10 rounded-md bg-gradient-to-br from-zinc-900 to-black/20 border border-solid border-zinc-800/50 size-fit">
            <p>Lorem Ipsum</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-10 rounded-md bg-gradient-to-br from-zinc-900 to-black/20 border border-solid border-zinc-800/50 size-fit">
            <p>Lorem Ipsum</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-10 rounded-md bg-gradient-to-br from-zinc-900 to-black/20 border border-solid border-zinc-800/50 size-fit">
            <p>Lorem Ipsum</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SliderGrid;
