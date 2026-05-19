"use client";

export const dynamic =
  "force-dynamic";

import Link from "next/link";

import {
  useSearchParams,
} from "next/navigation";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ConfirmationPage() {

  const searchParams =
    useSearchParams();

  /* =========================
     QUERY PARAMS
  ========================== */

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

  /* =========================
     PASSENGER COUNT
  ========================== */

  const seatArray =
    selectedSeats
      .split(",")
      .map((seat) => seat.trim())
      .filter(Boolean);

  /* =========================
     BOOKING REFERENCE
  ========================== */

  const bookingReference =
    `VGS-${Math.floor(
      10000 + Math.random() * 90000
    )}`;

  return (
    <main className="min-h-screen bg-[#efefef]">

      <Navbar />

      <section className="section-spacing">

        <div className="page-container">

          <div className="mx-auto max-w-[950px] bg-white p-6 shadow-sm lg:p-16">

            {/* SUCCESS ICON */}

            <div className="flex justify-center">

              <div className="flex h-[90px] w-[90px] items-center justify-center rounded-full bg-[#00A878] text-[42px] text-white lg:h-[100px] lg:w-[100px] lg:text-[48px]">

                ✓
              </div>
            </div>

            {/* HEADER */}

            <div className="mt-10 text-center">

              <p className="text-[11px] uppercase tracking-[6px] text-[#777] lg:text-[12px]">

                Booking Successful
              </p>

              <h1 className="page-title mt-6 leading-[1.1]">

                Booking
                <br />
                Confirmed
              </h1>

              <p className="mx-auto mt-8 max-w-[620px] text-[15px] leading-[30px] text-[#666]">

                Your trip reservation has been
                successfully completed. Please
                keep your booking reference safe.
              </p>
            </div>

            {/* BOOKING REFERENCE */}

            <div className="mt-14 border-2 border-dashed border-[#00A878] bg-[#f8fffc] px-5 py-10 text-center lg:px-8 lg:py-12">

              <p className="text-[11px] uppercase tracking-[6px] text-[#777] lg:text-[12px]">

                Booking Reference
              </p>

              <h2 className="mt-5 break-words text-[34px] font-light uppercase tracking-[3px] text-[#00A878] lg:text-[56px]">

                {bookingReference}
              </h2>
            </div>

            {/* DETAILS */}

            <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-2">

              {/* LEFT */}

              <div className="space-y-8">

                <div>

                  <p className="text-[11px] uppercase tracking-[4px] text-[#888] lg:text-[12px]">

                    Route
                  </p>

                  <p className="mt-3 text-[18px] text-[#222] lg:text-[20px]">

                    {from} → {to}
                  </p>
                </div>

                <div>

                  <p className="text-[11px] uppercase tracking-[4px] text-[#888] lg:text-[12px]">

                    Vehicle
                  </p>

                  <p className="mt-3 text-[18px] text-[#222] lg:text-[20px]">

                    {vehicle}
                  </p>
                </div>

                <div>

                  <p className="text-[11px] uppercase tracking-[4px] text-[#888] lg:text-[12px]">

                    Seats Reserved
                  </p>

                  <p className="mt-3 text-[18px] text-[#222] lg:text-[20px]">

                    {selectedSeats}
                  </p>
                </div>
              </div>

              {/* RIGHT */}

              <div className="space-y-8">

                <div>

                  <p className="text-[11px] uppercase tracking-[4px] text-[#888] lg:text-[12px]">

                    Departure Time
                  </p>

                  <p className="mt-3 text-[18px] text-[#222] lg:text-[20px]">

                    {time}
                  </p>
                </div>

                <div>

                  <p className="text-[11px] uppercase tracking-[4px] text-[#888] lg:text-[12px]">

                    Passenger Count
                  </p>

                  <p className="mt-3 text-[18px] text-[#222] lg:text-[20px]">

                    {seatArray.length} Passenger(s)
                  </p>
                </div>

                <div>

                  <p className="text-[11px] uppercase tracking-[4px] text-[#888] lg:text-[12px]">

                    Amount Paid
                  </p>

                  <p className="mt-3 break-words text-[28px] font-light text-[#00A878] lg:text-[38px]">

                    ₦
                    {Number(
                      total
                    ).toLocaleString()}
                  </p>
                </div>
              </div>
            </div>

            {/* NOTICE */}

            <div className="mt-14 border-l-[5px] border-[#00A878] bg-[#f8f8f8] px-5 py-5 lg:px-6 lg:py-6">

              <p className="text-[14px] leading-[28px] text-[#555] lg:text-[15px] lg:leading-[30px]">

                Please arrive at the terminal
                at least 30 minutes before
                departure with a valid means
                of identification.
              </p>
            </div>

            {/* ACTIONS */}

            <div className="mt-14 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:justify-center">

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