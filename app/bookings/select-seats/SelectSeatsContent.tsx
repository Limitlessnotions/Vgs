"use client";

export const dynamic =
  "force-dynamic";

import { useState } from "react";

import {
  useSearchParams,
  useRouter,
} from "next/navigation";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SelectSeatsPage() {

  const searchParams =
    useSearchParams();

  const router =
    useRouter();

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

  const amount =
    searchParams.get("amount") || "₦13,500";

  const seatsParam =
    searchParams.get("seats");

  const seatsRequested =
    seatsParam &&
    !isNaN(Number(seatsParam))
      ? Number(seatsParam)
      : 1;

  /* =========================
     DYNAMIC SEAT COUNT
  ========================== */

  const getSeatCount = () => {

    const match =
      vehicle.match(/\d+/);

    if (!match) return 12;

    return Number(match[0]);
  };

  const totalSeats =
    getSeatCount();

  const allSeats =
    Array.from(
      { length: totalSeats },
      (_, i) => i + 1
    );

  /* =========================
     OCCUPIED SEATS
  ========================== */

  const occupiedSeats =
    totalSeats === 5
      ? [2]
      : totalSeats === 9
      ? [2, 5]
      : [3, 7, 10];

  /* =========================
     SELECTED SEATS
  ========================== */

  const [
    selectedSeats,
    setSelectedSeats,
  ] = useState<number[]>(
    []
  );

  /* =========================
     HANDLE SEAT CLICK
  ========================== */

  const handleSeatClick = (
    seat: number
  ) => {

    if (
      occupiedSeats.includes(
        seat
      )
    ) {
      return;
    }

    const alreadySelected =
      selectedSeats.includes(
        seat
      );

    if (alreadySelected) {

      setSelectedSeats(
        selectedSeats.filter(
          (s) => s !== seat
        )
      );

      return;
    }

    if (
      selectedSeats.length >=
      seatsRequested
    ) {

      alert(
        `You can only select ${seatsRequested} seat(s)`
      );

      return;
    }

    setSelectedSeats([
      ...selectedSeats,
      seat,
    ]);
  };

  /* =========================
     TOTAL
  ========================== */

  const numericAmount =
    Number(
      amount.replace(
        /[₦,]/g,
        ""
      )
    );

  const total =
    numericAmount *
    seatsRequested;

  /* =========================
     PROCEED
  ========================== */

  const proceedBooking = () => {

    if (
      selectedSeats.length !==
      seatsRequested
    ) {

      alert(
        `Please select ${seatsRequested} seat(s)`
      );

      return;
    }

    router.push(
      `/bookings/passenger-details?from=${encodeURIComponent(
        from
      )}&to=${encodeURIComponent(
        to
      )}&vehicle=${encodeURIComponent(
        vehicle
      )}&time=${encodeURIComponent(
        time
      )}&amount=${encodeURIComponent(
        amount
      )}&selectedSeats=${encodeURIComponent(
        selectedSeats.join(
          ", "
        )
      )}`
    );
  };

  return (
    <main className="min-h-screen bg-[#efefef]">

      <Navbar />

      <section className="section-spacing">

        <div className="page-container">

          <div className="responsive-grid">

            {/* =========================
                LEFT
            ========================== */}

            <div className="bg-white p-6 shadow-sm lg:p-14">

              {/* HEADER */}

              <div>

                <p className="text-[12px] uppercase tracking-[5px] text-[#777]">

                  Seat Selection
                </p>

                <h1 className="page-title mt-5 leading-[1.1] text-[#222]">

                  {from}
                  <br />
                  To
                  <br />
                  {to}
                </h1>

                <p className="mt-6 text-[22px] uppercase tracking-[1px] text-[#00A878] lg:text-[26px]">

                  {vehicle}
                </p>

                <p className="mt-3 text-[15px] text-[#666]">

                  Departure Time:{" "}
                  {time}
                </p>
              </div>

              {/* LEGEND */}

              <div className="mt-12 flex flex-wrap gap-6 lg:mt-14">

                {/* BOOKED */}

                <div className="flex items-center gap-3">

                  <div className="h-[18px] w-[18px] bg-[#ff6b81]" />

                  <p className="text-[14px] text-[#555]">

                    Booked
                  </p>
                </div>

                {/* AVAILABLE */}

                <div className="flex items-center gap-3">

                  <div className="h-[18px] w-[18px] border border-[#ccc] bg-white" />

                  <p className="text-[14px] text-[#555]">

                    Available
                  </p>
                </div>

                {/* SELECTED */}

                <div className="flex items-center gap-3">

                  <div className="h-[18px] w-[18px] bg-[#00A878]" />

                  <p className="text-[14px] text-[#555]">

                    Selected
                  </p>
                </div>
              </div>

              {/* VEHICLE */}

              <div className="seat-layout-wrapper mt-14 lg:mt-16">

                <div className="w-fit rounded-[24px] border-2 border-[#222] bg-[#f9f9f9] px-6 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12">

                  {/* DRIVER */}

                  <div className="mb-10">

                    <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full border-[3px] border-[#555] text-[28px] lg:h-[70px] lg:w-[70px] lg:text-[34px]">

                      🛞
                    </div>
                  </div>

                  {/* SEATS */}

                  <div className="grid grid-cols-2 gap-x-6 gap-y-5 sm:gap-x-10 sm:gap-y-6 lg:gap-x-12 lg:gap-y-7">

                    {allSeats.map(
                      (seat) => {

                        const isOccupied =
                          occupiedSeats.includes(
                            seat
                          );

                        const isSelected =
                          selectedSeats.includes(
                            seat
                          );

                        return (

                          <button
                            key={seat}
                            onClick={() =>
                              handleSeatClick(
                                seat
                              )
                            }
                            disabled={
                              isOccupied
                            }
                            className={`flex h-[58px] w-[68px] items-center justify-center border text-[18px] font-light transition-all duration-200 sm:h-[64px] sm:w-[76px] lg:h-[70px] lg:w-[84px] lg:text-[20px] ${
                              isOccupied
                                ? "cursor-not-allowed border-[#ff6b81] bg-[#ff6b81] text-white"
                                : isSelected
                                ? "border-[#00A878] bg-[#00A878] text-white"
                                : "border-[#d8d8d8] bg-white text-[#222] hover:border-[#00A878] hover:bg-[#00A878] hover:text-white"
                            }`}
                          >
                            {seat}
                          </button>
                        );
                      }
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* =========================
                SUMMARY
            ========================== */}

            <div className="summary-card">

              <div className="bg-white p-8 shadow-sm lg:p-10">

                <h2 className="text-[30px] font-light text-[#222]">

                  Booking Summary
                </h2>

                <div className="mt-10 space-y-8">

                  {/* ROUTE */}

                  <div>

                    <p className="text-[12px] uppercase tracking-[4px] text-[#888]">

                      Route
                    </p>

                    <p className="mt-3 text-[18px] text-[#222]">

                      {from} → {to}
                    </p>
                  </div>

                  {/* VEHICLE */}

                  <div>

                    <p className="text-[12px] uppercase tracking-[4px] text-[#888]">

                      Vehicle
                    </p>

                    <p className="mt-3 text-[18px] text-[#222]">

                      {vehicle}
                    </p>
                  </div>

                  {/* TIME */}

                  <div>

                    <p className="text-[12px] uppercase tracking-[4px] text-[#888]">

                      Departure Time
                    </p>

                    <p className="mt-3 text-[18px] text-[#222]">

                      {time}
                    </p>
                  </div>

                  {/* SEATS */}

                  <div>

                    <p className="text-[12px] uppercase tracking-[4px] text-[#888]">

                      Selected Seats
                    </p>

                    <p className="mt-3 break-words text-[18px] text-[#222]">

                      {selectedSeats.join(
                        ", "
                      ) || "None"}
                    </p>
                  </div>

                  {/* PASSENGERS */}

                  <div>

                    <p className="text-[12px] uppercase tracking-[4px] text-[#888]">

                      Passengers
                    </p>

                    <p className="mt-3 text-[18px] text-[#222]">

                      {
                        seatsRequested
                      }{" "}
                      Passenger(s)
                    </p>
                  </div>

                  {/* TOTAL */}

                  <div className="border-t border-[#e5e5e5] pt-8">

                    <p className="text-[12px] uppercase tracking-[4px] text-[#888]">

                      Total Amount
                    </p>

                    <p className="mt-3 break-words text-[34px] font-light text-[#00A878] lg:text-[42px]">

                      ₦
                      {total.toLocaleString()}
                    </p>
                  </div>
                </div>

                {/* BUTTON */}

                <button
                  onClick={
                    proceedBooking
                  }
                  className="primary-button mt-14 w-full"
                >

                  Proceed To Passenger Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}