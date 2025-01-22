import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import smallPNG from "../assets/images/hero/small.png";
import smallJPG from "../assets/images/hero/small.jpg";
import mediumPNG from "../assets/images/hero/medium.png";
import mediumJPG from "../assets/images/hero/medium.jpg";
import largePNG from "../assets/images/hero/large.png";
import largeJPG from "../assets/images/hero/large.jpg";
import "swiper/css";

const Hero = () => {
  return (
    <div className="hero container">
      <Swiper
        loop={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="hero__slider"
      >
        <SwiperSlide>
          <picture>
            <source
              srcSet={smallPNG}
              type="image/png"
              media="(max-width: 320px)"
            />
            <source
              srcSet={smallJPG}
              type="image/jpeg"
              media="(max-width: 320px)"
            />
            <source
              srcSet={mediumPNG}
              type="image/png"
              media="(max-width: 1280px)"
            />
            <source
              srcSet={mediumJPG}
              type="image/jpeg"
              media="(max-width: 1280px)"
            />
            <source srcSet={largePNG} type="image/png" />
            <source srcSet={largeJPG} type="image/jpeg" />
            <img src={largeJPG} alt="Hero Slide 1" className="hero__image" />
          </picture>
        </SwiperSlide>

        <SwiperSlide>
          <picture>
            <source
              srcSet={smallPNG}
              type="image/png"
              media="(max-width: 320px)"
            />
            <source
              srcSet={smallJPG}
              type="image/jpeg"
              media="(max-width: 320px)"
            />
            <source
              srcSet={mediumPNG}
              type="image/png"
              media="(max-width: 1280px)"
            />
            <source
              srcSet={mediumJPG}
              type="image/jpeg"
              media="(max-width: 1280px)"
            />
            <source srcSet={largePNG} type="image/png" />
            <source srcSet={largeJPG} type="image/jpeg" />
            <img src={largeJPG} alt="Hero Slide 2" className="hero__image" />
          </picture>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
