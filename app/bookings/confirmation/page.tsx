"use client";

import Link from "next/link";

import {
  useSearchParams,
} from "next/navigation";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ConfirmationPage() {

  const searchParams =
    useSearchParams();

  /* =====================================
     QUERY PARAMS
  ===================================== */

  const from =
    searchParams.get("from") || "";

  const to =
    searchParams.get("to") || "";

  const vehicle =
    searchParams.get("vehicle") || "";

  const time =
    searchParams.get("time") || "";

  const total =
    searchParams.get("total") || "0";

  const selectedSeats =
    searchParams.get(
      "selectedSeats"
    ) || "";

  /* =====================================
     PASSENGER COUNT
  ===================================== */

  const seatArray =
    selectedSeats
      .split(",")
      .map((seat) => seat.trim())
      .filter(Boolean);

  /* =====================================
     BOOKING REFERENCE
  ===================================== */

  const bookingReference =
    `VGS-${Math.floor(
      10000 + Math.random() * 90000
    )}`;

  return (
    <main className="min-h-screen bg-[#efefef]">

      <Navbar />

      <section className="px-5 py-20">

        <div className="mx-auto max-w-[900px] bg-white p-8 lg:p-16 shadow-sm">

          {/* =====================================
              SUCCESS ICON
          ===================================== */}

          <div className="flex justify-center">

            <div className="flex h-[95px] w-[95px] items-center justify-center rounded-full bg-[#00A878] text-[44px] text-white">

              ✓
            </div>
          </div>

          {/* =====================================
              HEADER
          ===================================== */}

          <div className="mt-10 text-center">

            <p className="text-[12px] uppercase tracking-[6px] text-[#777]">
              Booking Successful
            </p>

            <h1 className="mt-6 text-[38px] lg:text-[62px] font-light uppercase leading-[1.1] text-[#222]">

              Booking
              <br />
              Confirmed
            </h1>

            <p className="mx-auto mt-8 max-w-[620px] text-[15px] leading-[32px] text-[#666]">
              Your trip reservation has been
              successfully completed. Please
              keep your booking reference safe.
            </p>
          </div>

          {/* =====================================
              BOOKING REFERENCE
          ===================================== */}

          <div className="mt-16 border-2 border-dashed border-[#00A878] bg-[#f8fffc] px-8 py-12 text-center">

            <p className="text-[12px] uppercase tracking-[6px] text-[#777]">
              Booking Reference
            </p>

            <h2 className="mt-6 text-[42px] lg:text-[56px] font-light uppercase tracking-[3px] text-[#00A878]">

              {bookingReference}
            </h2>
          </div>

          {/* =====================================
              BOOKING DETAILS
          ===================================== */}

          <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-2">

            {/* LEFT */}

            <div className="space-y-8">

              {/* ROUTE */}

              <div>

                <p className="text-[12px] uppercase tracking-[4px] text-[#888]">
                  Route
                </p>

                <p className="mt-3 text-[20px] text-[#222]">
                  {from} → {to}
                </p>
              </div>

              {/* VEHICLE */}

              <div>

                <p className="text-[12px] uppercase tracking-[4px] text-[#888]">
                  Vehicle
                </p>

                <p className="mt-3 text-[20px] text-[#222]">
                  {vehicle}
                </p>
              </div>

              {/* SEATS */}

              <div>

                <p className="text-[12px] uppercase tracking-[4px] text-[#888]">
                  Seats Reserved
                </p>

                <p className="mt-3 text-[20px] text-[#222]">
                  {selectedSeats}
                </p>
              </div>
            </div>

            {/* RIGHT */}

            <div className="space-y-8">

              {/* TIME */}

              <div>

                <p className="text-[12px] uppercase tracking-[4px] text-[#888]">
                  Departure Time
                </p>

                <p className="mt-3 text-[20px] text-[#222]">
                  {time}
                </p>
              </div>

              {/* PASSENGERS */}

              <div>

                <p className="text-[12px] uppercase tracking-[4px] text-[#888]">
                  Passenger Count
                </p>

                <p className="mt-3 text-[20px] text-[#222]">
                  {
                    seatArray.length
                  }{" "}
                  Passenger(s)
                </p>
              </div>

              {/* AMOUNT */}

              <div>

                <p className="text-[12px] uppercase tracking-[4px] text-[#888]">
                  Amount Paid
                </p>

                <p className="mt-3 text-[32px] font-light text-[#00A878]">

                  ₦
                  {Number(
                    total
                  ).toLocaleString()}
                </p>
              </div>
            </div>
          </div>

          {/* =====================================
              NOTICE
          ===================================== */}

          <div className="mt-16 border-l-[5px] border-[#00A878] bg-[#f8f8f8] px-6 py-6">

            <p className="text-[15px] leading-[30px] text-[#555]">
              Please arrive at the terminal
              at least 30 minutes before
              departure with a valid means
              of identification.
            </p>
          </div>

          {/* =====================================
              ACTION BUTTONS
          ===================================== */}

          <div className="mt-16 flex flex-wrap justify-center gap-5">

            {/* PRINT */}

            <button className="h-[58px] border border-[#222] bg-white px-10 text-[12px] uppercase tracking-[4px] text-[#222] transition hover:bg-[#222] hover:text-white">

              Print Ticket
            </button>

            {/* DOWNLOAD */}

            <button className="h-[58px] border border-[#00A878] bg-white px-10 text-[12px] uppercase tracking-[4px] text-[#00A878] transition hover:bg-[#00A878] hover:text-white">

              Download Ticket
            </button>

            {/* HOME */}

            <Link href="/">

              <button className="h-[58px] bg-[#00A878] px-10 text-[12px] uppercase tracking-[4px] text-white transition hover:bg-[#008F67]">

                Return Home
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}