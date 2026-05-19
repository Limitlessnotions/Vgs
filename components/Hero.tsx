"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function Hero() {

  const router = useRouter();

  /* =========================
     IMAGES
  ========================== */

  const images = [
    "/images/slide1.jpg",
    "/images/slide2.jpg",
    "/images/slide3.jpg",
  ];

  /* =========================
     STATES
  ========================== */

  const [currentSlide, setCurrentSlide] =
    useState(0);

  const [activeTab, setActiveTab] =
    useState("book");

  const [
    travellingFrom,
    setTravellingFrom,
  ] = useState("");

  const [
    travellingTo,
    setTravellingTo,
  ] = useState("");

  const [
    vehicleType,
    setVehicleType,
  ] = useState("");

  const [
    numberOfSeats,
    setNumberOfSeats,
  ] = useState("");

  const [
    departureDate,
    setDepartureDate,
  ] = useState("");

  const [
    returnDate,
    setReturnDate,
  ] = useState("");

  /* =========================
     SLIDER
  ========================== */

  const nextSlide = () => {

    setCurrentSlide((prev) =>
      prev === images.length - 1
        ? 0
        : prev + 1
    );
  };

  const prevSlide = () => {

    setCurrentSlide((prev) =>
      prev === 0
        ? images.length - 1
        : prev - 1
    );
  };

  /* =========================
     HANDLE SEARCH
  ========================== */

  const handleSearch = () => {

    if (activeTab === "charter") {

      alert(
        "Charter booking submitted successfully"
      );

      return;
    }

    if (
      !travellingFrom ||
      !travellingTo ||
      !vehicleType ||
      !numberOfSeats ||
      !departureDate
    ) {

      alert(
        "Please complete all fields"
      );

      return;
    }

    if (activeTab === "round") {

      if (!returnDate) {

        alert(
          "Please select return date"
        );

        return;
      }

      router.push(
        `/bookings/round-trip?from=${encodeURIComponent(
          travellingFrom
        )}&to=${encodeURIComponent(
          travellingTo
        )}&vehicle=${encodeURIComponent(
          vehicleType
        )}&seats=${encodeURIComponent(
          numberOfSeats
        )}&departureDate=${encodeURIComponent(
          departureDate
        )}&returnDate=${encodeURIComponent(
          returnDate
        )}`
      );

      return;
    }

    router.push(
      `/bookings/select-vehicles?from=${encodeURIComponent(
        travellingFrom
      )}&to=${encodeURIComponent(
        travellingTo
      )}&vehicle=${encodeURIComponent(
        vehicleType
      )}&seats=${encodeURIComponent(
        numberOfSeats
      )}&date=${encodeURIComponent(
        departureDate
      )}`
    );
  };

  /* =========================
     INPUT STYLES
  ========================== */

  const inputStyles =
    "h-[52px] w-full lg:w-[340px] border border-[#d8d8d8] bg-white px-4 text-[14px] text-black outline-none";

  /* =========================
     BOOK TRIP FORM
  ========================== */

  const renderBookTrip = () => (

    <>
      {/* FROM */}

      <div>

        <label className="mb-3 block text-[14px] text-[#333]">
          Travelling From :
        </label>

        <select
          value={travellingFrom}
          onChange={(e) =>
            setTravellingFrom(
              e.target.value
            )
          }
          className={inputStyles}
        >

          <option value="">
            Select City
          </option>

          <option>
            F.C.T (Abuja)
          </option>

          <option>
            Plateau (Jos)
          </option>

          <option>
            Benue (Makurdi)
          </option>
        </select>
      </div>

      {/* TO */}

      <div>

        <label className="mb-3 block text-[14px] text-[#333]">
          Travelling To :
        </label>

        <select
          value={travellingTo}
          onChange={(e) =>
            setTravellingTo(
              e.target.value
            )
          }
          className={inputStyles}
        >

          <option value="">
            Select City
          </option>

          <option>
            Kaduna
          </option>

          <option>
            Lagos
          </option>

          <option>
            Abuja
          </option>
        </select>
      </div>

      {/* VEHICLE */}

      <div>

        <label className="mb-3 block text-[14px] text-[#333]">
          Type of Vehicle
        </label>

        <select
          value={vehicleType}
          onChange={(e) =>
            setVehicleType(
              e.target.value
            )
          }
          disabled={
            !travellingFrom ||
            !travellingTo
          }
          className={`${inputStyles} ${
            !travellingFrom ||
            !travellingTo
              ? "cursor-not-allowed bg-[#f5f5f5] text-[#aaa]"
              : ""
          }`}
        >

          <option value="">
            Select Type
          </option>

          {travellingFrom &&
            travellingTo && (
              <>
                <option>
                  Regular - 12 Seater
                </option>

                <option>
                  Prestige - 5 Seater
                </option>

                <option>
                  Regular - 9 Seater
                </option>

                <option>
                  Classic - 12 Seater
                </option>

                <option>
                  Regular - 10 Seater
                </option>
              </>
            )}
        </select>
      </div>

      {/* SEATS */}

      <div>

        <label className="mb-3 block text-[14px] text-[#333]">
          Number of Seats
        </label>

        <input
          type="number"
          min={1}
          max={12}
          value={numberOfSeats}
          onChange={(e) =>
            setNumberOfSeats(
              e.target.value
            )
          }
          placeholder="1"
          className={inputStyles}
        />
      </div>

      {/* DATE */}

      <div>

        <label className="mb-3 block text-[14px] text-[#333]">
          Departure Date
        </label>

        <input
          type="date"
          value={departureDate}
          onChange={(e) =>
            setDepartureDate(
              e.target.value
            )
          }
          className={inputStyles}
        />
      </div>
    </>
  );

  /* =========================
     ROUND TRIP
  ========================== */

  const renderRoundTrip = () => (

    <>
      {renderBookTrip()}

      <div>

        <label className="mb-3 block text-[14px] text-[#333]">
          Return Date
        </label>

        <input
          type="date"
          value={returnDate}
          onChange={(e) =>
            setReturnDate(
              e.target.value
            )
          }
          className={inputStyles}
        />
      </div>
    </>
  );

  return (

    <section className="min-h-screen bg-[#efefef] px-5 py-14 lg:px-20 lg:py-24">

      <div className="mx-auto flex max-w-[1600px] flex-col gap-14 lg:flex-row lg:items-start lg:justify-between lg:gap-14">

        {/* LEFT */}

        <div className="w-full pt-4 lg:w-[430px] lg:pt-8">

          {/* HEADING */}

          <h1 className="text-[28px] font-light uppercase leading-[42px] tracking-[1px] text-[#222] lg:text-[34px] lg:leading-[58px]">

            BOOK YOUR
            <br />
            TRIP NOW
          </h1>

          <p className="mt-1 text-[16px] text-[#444]">
            Shuttle Bus Service
          </p>

          {/* TABS */}

          <div className="mt-10 flex flex-nowrap overflow-x-auto pb-2 lg:mt-16 lg:overflow-visible">

            <button
              onClick={() =>
                setActiveTab("book")
              }
              className={`border px-4 py-3 text-[10px] uppercase tracking-wide transition lg:px-5 lg:py-4 lg:text-[11px] ${
                activeTab === "book"
                  ? "border-[#d8d8d8] bg-white text-black"
                  : "border-transparent bg-transparent text-black"
              }`}
            >
              BOOK A TRIP
            </button>

            <button
              onClick={() =>
                setActiveTab("round")
              }
              className={`border px-4 py-3 text-[10px] uppercase tracking-wide transition lg:px-5 lg:py-4 lg:text-[11px] ${
                activeTab === "round"
                  ? "border-[#d8d8d8] bg-white text-black"
                  : "border-transparent bg-transparent text-black"
              }`}
            >
              ROUND TRIP
            </button>

            <button
              onClick={() =>
                setActiveTab(
                  "charter"
                )
              }
              className={`border px-4 py-3 text-[10px] uppercase tracking-wide transition lg:px-5 lg:py-4 lg:text-[11px] ${
                activeTab ===
                "charter"
                  ? "border-[#d8d8d8] bg-white text-black"
                  : "border-transparent bg-transparent text-black"
              }`}
            >
              CHARTER A VEHICLE
            </button>
          </div>

          {/* FORM */}

          <div className="mt-12 space-y-6 lg:mt-20 lg:space-y-8">

            {activeTab ===
              "book" &&
              renderBookTrip()}

            {activeTab ===
              "round" &&
              renderRoundTrip()}

            <button
              type="button"
              onClick={
                handleSearch
              }
              className="mt-6 h-[54px] w-[170px] bg-[#00A878] text-[12px] uppercase tracking-[3px] text-white transition hover:bg-[#008F67]"
            >
              {activeTab ===
              "charter"
                ? "SUBMIT"
                : "CONTINUE"}
            </button>
          </div>
        </div>

        {/* RIGHT */}

        {/* RIGHT */}

<div className="relative flex w-full items-center justify-center lg:w-[48%]">

  <div className="relative h-[240px] w-full overflow-hidden bg-white sm:h-[320px] lg:h-[520px] lg:max-w-[540px]">

            <img
              src={
                images[
                  currentSlide
                ]
              }
              alt="VGS Banner"
              className="h-full w-full object-cover"
            />

            {/* LEFT */}

            <button
              onClick={prevSlide}
              className="absolute left-[8px] top-1/2 z-30 flex h-[36px] w-[36px] -translate-y-1/2 items-center justify-center bg-[#8e8e8e] text-white opacity-90 transition hover:bg-black"
            >
              <ChevronLeft
                size={18}
                strokeWidth={3}
              />
            </button>

            {/* RIGHT */}

            <button
              onClick={nextSlide}
              className="absolute right-[8px] top-1/2 z-30 flex h-[36px] w-[36px] -translate-y-1/2 items-center justify-center bg-[#8e8e8e] text-white opacity-90 transition hover:bg-black"
            >
              <ChevronRight
                size={18}
                strokeWidth={3}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}