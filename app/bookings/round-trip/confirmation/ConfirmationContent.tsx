"use client";
export const dynamic =
  "force-dynamic";

import Link from "next/link";

import {
  useSearchParams,
} from "next/navigation";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RoundTripConfirmationPage() {

  const searchParams =
    useSearchParams();

  /* =====================================
     QUERY PARAMS
  ===================================== */

  const from =
    searchParams.get("from") || "";

  const to =
    searchParams.get("to") || "";

  const departureDate =
    searchParams.get(
      "departureDate"
    ) || "";

  const returnDate =
    searchParams.get(
      "returnDate"
    ) || "";

  /* =====================================
     DEPARTURE
  ===================================== */

  const departureVehicle =
    searchParams.get(
      "departureVehicle"
    ) || "";

  const departureTime =
    searchParams.get(
      "departureTime"
    ) || "";

  const selectedDepartureSeats =
    searchParams.get(
      "selectedDepartureSeats"
    ) || "";

  /* =====================================
     RETURN
  ===================================== */

  const returnVehicle =
    searchParams.get(
      "returnVehicle"
    ) || "";

  const returnTime =
    searchParams.get(
      "returnTime"
    ) || "";

  const selectedReturnSeats =
    searchParams.get(
      "selectedReturnSeats"
    ) || "";

  /* =====================================
     TOTAL
  ===================================== */

  const grandTotal =
    searchParams.get(
      "grandTotal"
    ) || "0";

  /* =====================================
     PASSENGERS
  ===================================== */

  const departureSeatArray =
    selectedDepartureSeats
      .split(",")
      .map((seat) =>
        seat.trim()
      )
      .filter(Boolean);

  /* =====================================
     BOOKING REFERENCE
  ===================================== */

  const bookingReference =
    `VGS-${Math.floor(
      10000 +
        Math.random() * 90000
    )}`;

  return (
    <main className="min-h-screen bg-[#efefef]">

      <Navbar />

      <section className="px-5 py-20">

        <div className="mx-auto max-w-[950px] bg-white p-8 shadow-sm lg:p-16">

          {/* =====================================
              SUCCESS ICON
          ===================================== */}

          <div className="flex justify-center">

            <div className="flex h-[100px] w-[100px] items-center justify-center rounded-full bg-[#00A878] text-[48px] text-white">

              ✓
            </div>
          </div>

          {/* =====================================
              HEADER
          ===================================== */}

          <div className="mt-10 text-center">

            <p className="text-[12px] uppercase tracking-[6px] text-[#777]">
              Round Trip Booking
            </p>

            <h1 className="mt-6 text-[40px] lg:text-[64px] font-light uppercase leading-[1.1] text-[#222]">

              Booking
              <br />
              Confirmed
            </h1>

            <p className="mx-auto mt-8 max-w-[650px] text-[16px] leading-[32px] text-[#666]">
              Your round-trip reservation
              has been successfully completed.
              Please keep your booking
              reference safe for future
              verification.
            </p>
          </div>

          {/* =====================================
              BOOKING REFERENCE
          ===================================== */}

          <div className="mt-16 border-2 border-dashed border-[#00A878] bg-[#f8fffc] px-8 py-12 text-center">

            <p className="text-[12px] uppercase tracking-[6px] text-[#777]">
              Booking Reference
            </p>

            <h2 className="mt-6 text-[44px] lg:text-[60px] font-light uppercase tracking-[3px] text-[#00A878]">

              {bookingReference}
            </h2>
          </div>

          {/* =====================================
              JOURNEY DETAILS
          ===================================== */}

          <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-2">

            {/* =====================================
                DEPARTURE
            ===================================== */}

            <div className="rounded-[14px] border border-[#e5e5e5] bg-[#fafafa] p-8">

              <p className="text-[12px] uppercase tracking-[5px] text-[#777]">
                Departure Journey
              </p>

              <div className="mt-8 space-y-5">

                {/* ROUTE */}

                <div>

                  <p className="text-[14px] text-[#777]">
                    Route
                  </p>

                  <p className="mt-2 text-[24px] font-light text-[#222]">
                    {from} → {to}
                  </p>
                </div>

                {/* DATE */}

                <div>

                  <p className="text-[14px] text-[#777]">
                    Departure Date
                  </p>

                  <p className="mt-2 text-[18px] text-[#222]">
                    {departureDate}
                  </p>
                </div>

                {/* TIME */}

                <div>

                  <p className="text-[14px] text-[#777]">
                    Departure Time
                  </p>

                  <p className="mt-2 text-[18px] text-[#222]">
                    {departureTime}
                  </p>
                </div>

                {/* VEHICLE */}

                <div>

                  <p className="text-[14px] text-[#777]">
                    Vehicle
                  </p>

                  <p className="mt-2 text-[18px] text-[#222]">
                    {
                      departureVehicle
                    }
                  </p>
                </div>

                {/* SEATS */}

                <div>

                  <p className="text-[14px] text-[#777]">
                    Seats Reserved
                  </p>

                  <p className="mt-2 text-[18px] text-[#00A878]">
                    {
                      selectedDepartureSeats
                    }
                  </p>
                </div>
              </div>
            </div>

            {/* =====================================
                RETURN
            ===================================== */}

            <div className="rounded-[14px] border border-[#e5e5e5] bg-[#fafafa] p-8">

              <p className="text-[12px] uppercase tracking-[5px] text-[#777]">
                Return Journey
              </p>

              <div className="mt-8 space-y-5">

                {/* ROUTE */}

                <div>

                  <p className="text-[14px] text-[#777]">
                    Route
                  </p>

                  <p className="mt-2 text-[24px] font-light text-[#222]">
                    {to} → {from}
                  </p>
                </div>

                {/* DATE */}

                <div>

                  <p className="text-[14px] text-[#777]">
                    Return Date
                  </p>

                  <p className="mt-2 text-[18px] text-[#222]">
                    {returnDate}
                  </p>
                </div>

                {/* TIME */}

                <div>

                  <p className="text-[14px] text-[#777]">
                    Return Time
                  </p>

                  <p className="mt-2 text-[18px] text-[#222]">
                    {returnTime}
                  </p>
                </div>

                {/* VEHICLE */}

                <div>

                  <p className="text-[14px] text-[#777]">
                    Vehicle
                  </p>

                  <p className="mt-2 text-[18px] text-[#222]">
                    {returnVehicle}
                  </p>
                </div>

                {/* SEATS */}

                <div>

                  <p className="text-[14px] text-[#777]">
                    Seats Reserved
                  </p>

                  <p className="mt-2 text-[18px] text-[#00A878]">
                    {
                      selectedReturnSeats
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* =====================================
              TOTALS
          ===================================== */}

          <div className="mt-16 rounded-[14px] bg-[#f8f8f8] px-8 py-10">

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">

              {/* PASSENGERS */}

              <div>

                <p className="text-[12px] uppercase tracking-[4px] text-[#777]">
                  Passenger Count
                </p>

                <p className="mt-3 text-[24px] font-light text-[#222]">

                  {
                    departureSeatArray.length
                  }{" "}
                  Passenger(s)
                </p>
              </div>

              {/* TOTAL */}

              <div>

                <p className="text-[12px] uppercase tracking-[4px] text-[#777]">
                  Grand Total
                </p>

                <p className="mt-3 text-[44px] font-light text-[#00A878]">

                  ₦
                  {Number(
                    grandTotal
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