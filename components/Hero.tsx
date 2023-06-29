"use client";

import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
  const handeScroll = () => {};

  return (
    <div className="hero">
      <div className="hero__wrapper">
        <h1 className="hero__title">
          Find, book or rent a car - quickly and easily!
        </h1>

        <p className="hero__subtitle">
          Streamline your car rental business with our all-in-one platform.
        </p>

        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handeScroll}
        />
      </div>

      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src="/hero.png"
            alt="hero_car"
            fill
            className="object-contain"
          />
        </div>

        <div className="hero__image-overlay"></div>
      </div>
    </div>
  );
};

export default Hero;
