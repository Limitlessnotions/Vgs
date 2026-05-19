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

  /* =========================
     QUERY PARAMS
  ========================== */

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

  /* =========================
     DEPARTURE
  ========================== */

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

  /* =========================
     RETURN
  ========================== */

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

  /* =========================
     TOTAL
  ========================== */

  const grandTotal =
    searchParams.get(
      "grandTotal"
    ) || "0";

  /* =========================
     PASSENGERS
  ========================== */

  const departureSeatArray =
    selectedDepartureSeats
      .split(",")
      .map((seat) =>
        seat.trim()
      )
      .filter(Boolean);

  /* =========================
     BOOKING REF
  ========================== */

  const bookingReference =
    `VGS-${Math.floor(
      10000 +
        Math.random() * 90000
    )}`;

  return (
    <main className="min-h-screen bg-[#efefef]">

      <Navbar />

      <section className="section-spacing">

        <div className="page-container">

          <div className="mx-auto max-w-[1100px] bg-white p-6 shadow-sm lg:p-16">

            {/* SUCCESS */}

            <div className="flex justify-center">

              <div className="flex h-[90px] w-[90px] items-center justify-center rounded-full bg-[#00A878] text-[42px] text-white lg:h-[100px] lg:w-[100px] lg:text-[48px]">

                ✓
              </div>
            </div>

            {/* HEADER */}

            <div className="mt-10 text-center">

              <p className="text-[11px] uppercase tracking-[6px] text-[#777] lg:text-[12px]">

                Round Trip Booking
              </p>

              <h1 className="page-title mt-6 leading-[1.1]">

                Booking
                <br />
                Confirmed
              </h1>

              <p className="mx-auto mt-8 max-w-[650px] text-[15px] leading-[30px] text-[#666]">

                Your round-trip reservation
                has been successfully completed.
                Please keep your booking
                reference safe for future
                verification.
              </p>
            </div>

            {/* REFERENCE */}

            <div className="mt-14 border-2 border-dashed border-[#00A878] bg-[#f8fffc] px-5 py-10 text-center lg:px-8 lg:py-12">

              <p className="text-[11px] uppercase tracking-[6px] text-[#777] lg:text-[12px]">

                Booking Reference
              </p>

              <h2 className="mt-5 break-words text-[34px] font-light uppercase tracking-[3px] text-[#00A878] lg:text-[60px]">

                {bookingReference}
              </h2>
            </div>

            {/* JOURNEYS */}

            <div className="mt-14 grid grid-cols-1 gap-8 lg:mt-16 lg:grid-cols-2 lg:gap-10">

              {/* DEPARTURE */}

              <div className="rounded-[14px] border border-[#e5e5e5] bg-[#fafafa] p-6 lg:p-8">

                <p className="text-[11px] uppercase tracking-[5px] text-[#777] lg:text-[12px]">

                  Departure Journey
                </p>

                <div className="mt-8 space-y-5">

                  <div>

                    <p className="text-[14px] text-[#777]">

                      Route
                    </p>

                    <p className="mt-2 text-[22px] font-light text-[#222] lg:text-[24px]">

                      {from} → {to}
                    </p>
                  </div>

                  <div>

                    <p className="text-[14px] text-[#777]">

                      Departure Date
                    </p>

                    <p className="mt-2 text-[18px] text-[#222]">

                      {departureDate}
                    </p>
                  </div>

                  <div>

                    <p className="text-[14px] text-[#777]">

                      Departure Time
                    </p>

                    <p className="mt-2 text-[18px] text-[#222]">

                      {departureTime}
                    </p>
                  </div>

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

                  <div>

                    <p className="text-[14px] text-[#777]">

                      Seats Reserved
                    </p>

                    <p className="mt-2 break-words text-[18px] text-[#00A878]">

                      {
                        selectedDepartureSeats
                      }
                    </p>
                  </div>
                </div>
              </div>

              {/* RETURN */}

              <div className="rounded-[14px] border border-[#e5e5e5] bg-[#fafafa] p-6 lg:p-8">

                <p className="text-[11px] uppercase tracking-[5px] text-[#777] lg:text-[12px]">

                  Return Journey
                </p>

                <div className="mt-8 space-y-5">

                  <div>

                    <p className="text-[14px] text-[#777]">

                      Route
                    </p>

                    <p className="mt-2 text-[22px] font-light text-[#222] lg:text-[24px]">

                      {to} → {from}
                    </p>
                  </div>

                  <div>

                    <p className="text-[14px] text-[#777]">

                      Return Date
                    </p>

                    <p className="mt-2 text-[18px] text-[#222]">

                      {returnDate}
                    </p>
                  </div>

                  <div>

                    <p className="text-[14px] text-[#777]">

                      Return Time
                    </p>

                    <p className="mt-2 text-[18px] text-[#222]">

                      {returnTime}
                    </p>
                  </div>

                  <div>

                    <p className="text-[14px] text-[#777]">

                      Vehicle
                    </p>

                    <p className="mt-2 text-[18px] text-[#222]">

                      {returnVehicle}
                    </p>
                  </div>

                  <div>

                    <p className="text-[14px] text-[#777]">

                      Seats Reserved
                    </p>

                    <p className="mt-2 break-words text-[18px] text-[#00A878]">

                      {
                        selectedReturnSeats
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* TOTALS */}

            <div className="mt-14 rounded-[14px] bg-[#f8f8f8] px-6 py-8 lg:mt-16 lg:px-8 lg:py-10">

              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">

                {/* PASSENGERS */}

                <div>

                  <p className="text-[12px] uppercase tracking-[4px] text-[#777]">

                    Passenger Count
                  </p>

                  <p className="mt-3 text-[22px] font-light text-[#222] lg:text-[24px]">

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

                  <p className="mt-3 break-words text-[34px] font-light text-[#00A878] lg:text-[44px]">

                    ₦
                    {Number(
                      grandTotal
                    ).toLocaleString()}
                  </p>
                </div>
              </div>
            </div>

            {/* NOTICE */}

            <div className="mt-14 border-l-[5px] border-[#00A878] bg-[#f8f8f8] px-5 py-5 lg:mt-16 lg:px-6 lg:py-6">

              <p className="text-[14px] leading-[28px] text-[#555] lg:text-[15px] lg:leading-[30px]">

                Please arrive at the terminal
                at least 30 minutes before
                departure with a valid means
                of identification.
              </p>
            </div>

            {/* ACTIONS */}

            <div className="mt-14 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:justify-center lg:mt-16">

              {/* PRINT */}

              <button className="h-[56px] border border-[#222] bg-white px-8 text-[11px] uppercase tracking-[4px] text-[#222] transition hover:bg-[#222] hover:text-white">

                Print Ticket
              </button>

              {/* DOWNLOAD */}

              <button className="h-[56px] border border-[#00A878] bg-white px-8 text-[11px] uppercase tracking-[4px] text-[#00A878] transition hover:bg-[#00A878] hover:text-white">

                Download Ticket
              </button>

              {/* HOME */}

              <Link href="/">

                <button className="primary-button w-full sm:w-auto">

                  Return Home
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}