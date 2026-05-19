"use client";

import { useEffect, useState } from "react";

export default function AboutHero() {
  const images = [
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2083&auto=format&fit=crop",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[520px] w-full overflow-hidden">

      {/* BACKGROUND IMAGES */}
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt="Hero Background"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[2000ms] ${
            currentImage === index
              ? "opacity-100"
              : "opacity-0"
          }`}
        />
      ))}

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60" />

      {/* CONTENT */}
      <div className="relative z-10 flex h-full items-center justify-center">

        <div className="mx-auto max-w-[1000px] px-10 text-center">

          {/* SMALL TEXT */}
          <p className="text-[15px] uppercase tracking-[5px] text-white">
            BOOK YOUR TRIPS ONLINE
          </p>

          {/* HEADING */}
          <h1 className="mt-8 text-[68px] font-light uppercase leading-[84px] tracking-[1px] text-white">
            NEED A CAR HIRE
            <br />
            SERVICE?
          </h1>

          {/* DESCRIPTION */}
          <p className="mx-auto mt-8 max-w-[950px] text-[18px] leading-[38px] text-[#e5e5e5]">
            We consider it vital that you want the perfect
            vehicle so we always make sure you have a wide
            range of vehicles tailored to meet your needs.
          </p>

          {/* SUBTEXT */}
          <p className="mt-12 text-[18px] text-white">
            Intra & Inter State Car Hire Services.
          </p>

          {/* BUTTONS */}
          <div className="mt-10 flex justify-center gap-5">

            <button className="h-[56px] bg-[#00A878] px-5 lg:px-10 text-[13px] uppercase tracking-[2px] text-white transition hover:bg-[#008F67]">
              Get Started
            </button>

            <button className="h-[56px] border border-white px-5 lg:px-10 text-[13px] uppercase tracking-[2px] text-white transition hover:bg-white hover:text-black">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}