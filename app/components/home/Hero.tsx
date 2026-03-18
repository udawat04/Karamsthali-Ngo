import React from "react";

const Hero = () => {
  return (
    <div className="relative min-h-screen py-30">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('https://html.awaikenthemes.com/aasha/images/hero-bg-image.jpg')] bg-cover bg-center "></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#03352c]/90 via-[#03352c]/60 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center min-h-screen px-10 ">
        <div className="max-w-2xl ">
          {/* Small Badge */}
          <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full inline-block mb-6 text-white text-sm">
            Driving Positive Change Worldwide
          </div>

          {/* Heading */}
          <h1 className="text-6xl text-white font-bold leading-tight">
            Empowering Communities,
            <br />
            Inspiring Change
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
