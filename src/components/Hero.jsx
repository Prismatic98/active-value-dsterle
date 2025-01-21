import React from "react";
import smallPNG from "../assets/images/hero/small.png";
import smallJPG from "../assets/images/hero/small.jpg";
import mediumPNG from "../assets/images/hero/medium.png";
import mediumJPG from "../assets/images/hero/medium.jpg";
import largePNG from "../assets/images/hero/large.png";
import largeJPG from "../assets/images/hero/large.jpg";

const Hero = () => {
  return (
    <div className="hero container">
      <picture>
        <source srcSet={smallPNG} type="image/png" media="(max-width: 320px)" />
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

        <source srcSet={largeJPG} type="image/png" />
        <source srcSet={largeJPG} type="image/jpeg" />

        <img
          src="@/images/hero/3690x1083.jpg"
          alt="Hero"
          className="hero__image"
        />
      </picture>
    </div>
  );
};

export default Hero;
