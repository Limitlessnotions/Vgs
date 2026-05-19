"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RoundTripPage() {

  const router = useRouter();

  /* =====================================
     FORM STATE
  ===================================== */

  const [from, setFrom] =
    useState("F.C.T (Abuja)");

  const [to, setTo] =
    useState("Plateau (Jos)");

  const [vehicle, setVehicle] =
    useState("Prestige - 5 Seater");

  const [seats, setSeats] =
    useState("1");

  const [departureDate, setDepartureDate] =
    useState("");

  const [returnDate, setReturnDate] =
    useState("");

  /* =====================================
     CONTINUE
  ===================================== */

  const handleContinue = () => {

    router.push(
      `/bookings/round-trip/select-departure?from=${encodeURIComponent(
        from
      )}&to=${encodeURIComponent(
        to
      )}&vehicle=${encodeURIComponent(
        vehicle
      )}&seats=${encodeURIComponent(
        seats
      )}&departureDate=${encodeURIComponent(
        departureDate
      )}&returnDate=${encodeURIComponent(
        returnDate
      )}`
    );
  };

  return (
    <main className="min-h-screen bg-[#efefef]">

      <Navbar />

      {/* =====================================
          HERO
      ===================================== */}

      <section className="relative flex min-h-[350px] items-center justify-center overflow-hidden">

        {/* BACKGROUND */}

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=2072&auto=format&fit=crop')",
          }}
        />

        {/* OVERLAY */}

        <div className="absolute inset-0 bg-black/70" />

        {/* CONTENT */}

        <div className="relative z-10 px-5 text-center text-white">

          <p className="text-[12px] uppercase tracking-[6px] text-[#00A878]">
            Round Trip Booking
          </p>

          <h1 className="mt-6 text-[42px] lg:text-[72px] font-light uppercase leading-[1.1]">

            Book Your
            <br />
            Round Trip
          </h1>

          <p className="mx-auto mt-8 max-w-[700px] text-[15px] leading-[32px] text-[#d8d8d8]">

            Plan your departure and return
            journey together with comfort,
            convenience and flexible travel
            scheduling.
          </p>
        </div>
      </section>

      {/* =====================================
          FORM SECTION
      ===================================== */}

      <section className="px-5 py-24 lg:px-10">

        <div className="mx-auto max-w-[900px] bg-white p-8 shadow-sm lg:p-16">

          {/* HEADING */}

          <div>

            <p className="text-[12px] uppercase tracking-[5px] text-[#777]">
              Travel Information
            </p>

            <h2 className="mt-5 text-[34px] lg:text-[52px] font-light uppercase leading-[1.1] text-[#222]">

              Round Trip
              Reservation
            </h2>
          </div>

          {/* FORM */}

          <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-2">

            {/* FROM */}

            <div>

              <label className="mb-4 block text-[13px] uppercase tracking-[4px] text-[#555]">
                Travelling From
              </label>

              <select
                value={from}
                onChange={(e) =>
                  setFrom(
                    e.target.value
                  )
                }
                className="h-[62px] w-full border border-[#d8d8d8] bg-[#f8f8f8] px-5 text-[15px] text-black outline-none focus:border-[#00A878]"
              >
                <option>
                  F.C.T (Abuja)
                </option>

                <option>
                  Plateau (Jos)
                </option>

                <option>
                  Kaduna
                </option>
              </select>
            </div>

            {/* TO */}

            <div>

              <label className="mb-4 block text-[13px] uppercase tracking-[4px] text-[#555]">
                Travelling To
              </label>

              <select
                value={to}
                onChange={(e) =>
                  setTo(
                    e.target.value
                  )
                }
                className="h-[62px] w-full border border-[#d8d8d8] bg-[#f8f8f8] px-5 text-[15px] text-black outline-none focus:border-[#00A878]"
              >
                <option>
                  Plateau (Jos)
                </option>

                <option>
                  Kaduna
                </option>

                <option>
                  F.C.T (Abuja)
                </option>
              </select>
            </div>

            {/* VEHICLE */}

            <div>

              <label className="mb-4 block text-[13px] uppercase tracking-[4px] text-[#555]">
                Type Of Vehicle
              </label>

              <select
                value={vehicle}
                onChange={(e) =>
                  setVehicle(
                    e.target.value
                  )
                }
                className="h-[62px] w-full border border-[#d8d8d8] bg-[#f8f8f8] px-5 text-[15px] text-black outline-none focus:border-[#00A878]"
              >
                <option>
                  Prestige - 5 Seater
                </option>

                <option>
                  Regular - 12 Seater
                </option>

                <option>
                  Executive Bus
                </option>
              </select>
            </div>

            {/* SEATS */}

            <div>

              <label className="mb-4 block text-[13px] uppercase tracking-[4px] text-[#555]">
                Number Of Seats
              </label>

              <input
                type="number"
                min={1}
                max={10}
                value={seats}
                onChange={(e) =>
                  setSeats(
                    e.target.value
                  )
                }
                className="h-[62px] w-full border border-[#d8d8d8] bg-[#f8f8f8] px-5 text-[15px] text-black outline-none focus:border-[#00A878]"
              />
            </div>

            {/* DEPARTURE DATE */}

            <div>

              <label className="mb-4 block text-[13px] uppercase tracking-[4px] text-[#555]">
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
                className="h-[62px] w-full border border-[#d8d8d8] bg-[#f8f8f8] px-5 text-[15px] text-black outline-none focus:border-[#00A878]"
              />
            </div>

            {/* RETURN DATE */}

            <div>

              <label className="mb-4 block text-[13px] uppercase tracking-[4px] text-[#555]">
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
                className="h-[62px] w-full border border-[#d8d8d8] bg-[#f8f8f8] px-5 text-[15px] text-black outline-none focus:border-[#00A878]"
              />
            </div>
          </div>

          {/* BUTTON */}

          <button
            onClick={handleContinue}
            className="mt-16 h-[62px] bg-[#00A878] px-12 text-[12px] uppercase tracking-[4px] text-white transition hover:bg-[#008F67]"
          >
            Continue Booking
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}