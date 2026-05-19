"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

    /* =========================
       CHARTER
    ========================== */

    if (activeTab === "charter") {

      alert(
        "Charter booking submitted successfully"
      );

      return;
    }

    /* =========================
       VALIDATION
    ========================== */

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

    /* =========================
       ROUND TRIP
    ========================== */

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

    /* =========================
       ONE WAY
    ========================== */

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
     REUSABLE FORM INPUT
  ========================== */

  const FormInput = ({
    label,
    placeholder,
    type = "text",
    min,
    max,
  }: {
    label: string;
    placeholder?: string;
    type?: string;
    min?: number;
    max?: number;
  }) => (

    <div>

      <label className="mb-3 block text-[14px] text-[#333]">

        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        min={min}
        max={max}
        className="h-[52px] w-[340px] border border-[#d8d8d8] bg-white px-4 text-[14px] text-black outline-none"
      />
    </div>
  );

  /* =========================
     REUSABLE FORM SELECT
  ========================== */

  const FormSelect = ({
    label,
    options,
  }: {
    label: string;
    options: string[];
  }) => (

    <div>

      <label className="mb-3 block text-[14px] text-[#333]">

        {label}
      </label>

      <select className="h-[52px] w-[340px] border border-[#d8d8d8] bg-white px-4 text-[14px] text-black outline-none">

        {options.map((option) => (

          <option key={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );

  /* =========================
     BOOK A TRIP
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
          className="h-[52px] w-[340px] border border-[#d8d8d8] bg-white px-4 text-[14px] text-black outline-none"
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
          className="h-[52px] w-[340px] border border-[#d8d8d8] bg-white px-4 text-[14px] text-black outline-none"
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
          className={`h-[52px] w-[340px] border px-4 text-[14px] outline-none ${
            !travellingFrom ||
            !travellingTo
              ? "cursor-not-allowed border-[#e5e5e5] bg-[#f5f5f5] text-[#aaa]"
              : "border-[#d8d8d8] bg-white text-black"
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
          className="h-[52px] w-[340px] border border-[#d8d8d8] bg-white px-4 text-[14px] text-black outline-none"
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
          className="h-[52px] w-[340px] border border-[#d8d8d8] bg-white px-4 text-[14px] text-black outline-none"
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

      {/* RETURN DATE */}

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
          className="h-[52px] w-[340px] border border-[#d8d8d8] bg-white px-4 text-[14px] text-black outline-none"
        />
      </div>
    </>
  );

  /* =========================
     CHARTER
  ========================== */

  const renderCharter = () => (

    <>
      <FormInput
        label="Passenger Name :"
        placeholder="Full Name"
      />

      <FormInput
        label="Phone Number :"
        placeholder="08012345678"
      />

      <FormInput
        label="Email :"
        placeholder="name@gmail.com"
        type="email"
      />

      <FormInput
        label="Travelling From :"
        placeholder="Take Off point e.g Jos"
      />

      <FormInput
        label="Destination :"
        placeholder="Arrival point e.g Abuja"
      />

      <FormSelect
        label="Type of Vehicle :"
        options={[
          "Select Type",
          "Luxury Bus",
          "Mini Bus",
          "Executive Ride",
        ]}
      />

      <FormInput
        label="Departure Date :"
        type="date"
      />

      <FormInput
        label="Departure Time :"
        type="time"
      />
    </>
  );

  return (

    <section className="min-h-screen bg-[#efefef] px-20 py-24">

      <div className="mx-auto flex max-w-[1700px] justify-between gap-28">

        {/* LEFT */}

        <div className="w-[430px] pt-8">

          {/* HEADING */}

          <h1 className="text-[34px] font-light uppercase tracking-[1px] leading-[58px] text-[#222]">

            BOOK YOUR
            <br />
            TRIP NOW
          </h1>

          <p className="mt-1 text-[16px] text-[#444]">
            Shuttle Bus Service
          </p>

          {/* TABS */}

          <div className="mt-16 flex">

            <button
              onClick={() =>
                setActiveTab("book")
              }
              className={`border px-5 py-4 text-[11px] uppercase tracking-wide transition ${
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
              className={`border px-5 py-4 text-[11px] uppercase tracking-wide transition ${
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
              className={`border px-5 py-4 text-[11px] uppercase tracking-wide transition ${
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

          <div className="mt-20 space-y-8">

            {activeTab ===
              "book" &&
              renderBookTrip()}

            {activeTab ===
              "round" &&
              renderRoundTrip()}

            {activeTab ===
              "charter" &&
              renderCharter()}

            {/* BUTTON */}

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

        <div className="relative flex items-center justify-center">

          {/* IMAGE */}

          <div className="relative h-[620px] w-[620px] overflow-hidden bg-white">

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