"use client";

export const dynamic =
  "force-dynamic";

import { useState } from "react";

import {
  useRouter,
  useSearchParams,
} from "next/navigation";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SelectDepartureSeatsPage() {

  const router = useRouter();

  const searchParams =
    useSearchParams();

  /* =========================
     QUERY PARAMS
  ========================== */

  const from =
    searchParams.get("from") || "";

  const to =
    searchParams.get("to") || "";

  const seats =
    searchParams.get("seats") || "1";

  const departureDate =
    searchParams.get(
      "departureDate"
    ) || "";

  const returnDate =
    searchParams.get(
      "returnDate"
    ) || "";

  /* =========================
     DEPARTURE DETAILS
  ========================== */

  const departureVehicle =
    searchParams.get(
      "departureVehicle"
    ) || "";

  const departureTime =
    searchParams.get(
      "departureTime"
    ) || "";

  const departureAmount =
    searchParams.get(
      "departureAmount"
    ) || "₦13,500";

  /* =========================
     RETURN DETAILS
  ========================== */

  const returnVehicle =
    searchParams.get(
      "returnVehicle"
    ) || "";

  const returnTime =
    searchParams.get(
      "returnTime"
    ) || "";

  const returnAmount =
    searchParams.get(
      "returnAmount"
    ) || "₦13,500";

  /* =========================
     SEAT CONFIG
  ========================== */

  const requestedSeats =
    Number(seats);

  const getSeatCount = () => {

    const match =
      departureVehicle.match(
        /\d+/
      );

    if (!match) return 12;

    return Number(match[0]);
  };

  const totalSeats =
    getSeatCount();

  const occupiedSeats =
    totalSeats === 5
      ? [2]
      : totalSeats === 12
      ? [3, 7, 10]
      : [5, 8];

  const allSeats =
    Array.from(
      {
        length: totalSeats,
      },
      (_, i) => i + 1
    );

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
     HANDLE CLICK
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
      requestedSeats
    ) {

      alert(
        `You can only select ${requestedSeats} seat(s)`
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
      departureAmount.replace(
        /[₦,]/g,
        ""
      )
    );

  const departureTotal =
    numericAmount *
    requestedSeats;

  /* =========================
     CONTINUE
  ========================== */

  const handleContinue = () => {

    if (
      selectedSeats.length !==
      requestedSeats
    ) {

      alert(
        `Please select ${requestedSeats} seat(s)`
      );

      return;
    }

    router.push(
      `/bookings/round-trip/select-return-seats?from=${encodeURIComponent(
        from
      )}&to=${encodeURIComponent(
        to
      )}&seats=${encodeURIComponent(
        seats
      )}&departureDate=${encodeURIComponent(
        departureDate
      )}&returnDate=${encodeURIComponent(
        returnDate
      )}&departureVehicle=${encodeURIComponent(
        departureVehicle
      )}&departureTime=${encodeURIComponent(
        departureTime
      )}&departureAmount=${encodeURIComponent(
        departureAmount
      )}&returnVehicle=${encodeURIComponent(
        returnVehicle
      )}&returnTime=${encodeURIComponent(
        returnTime
      )}&returnAmount=${encodeURIComponent(
        returnAmount
      )}&selectedDepartureSeats=${encodeURIComponent(
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

                  Departure Seat Selection
                </p>

                <h1 className="page-title mt-5 leading-[1.1] text-[#222]">

                  Select
                  <br />
                  Departure Seats
                </h1>

                <p className="mt-6 text-[15px] leading-[30px] text-[#666]">

                  Choose your preferred
                  departure seats for your
                  outbound journey.
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

              {/* VEHICLE LAYOUT */}

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

              {/* BUTTON */}

              <button
                onClick={
                  handleContinue
                }
                className="primary-button mt-14 lg:mt-16"
              >

                Continue To Return Seats
              </button>
            </div>

            {/* =========================
                SUMMARY
            ========================== */}

            <div className="summary-card">

              <div className="bg-white p-8 shadow-sm lg:p-10">

                <h2 className="text-[30px] font-light text-[#222]">

                  Trip Summary
                </h2>

                <div className="mt-10 space-y-10">

                  {/* DEPARTURE */}

                  <div>

                    <p className="text-[12px] uppercase tracking-[4px] text-[#888]">

                      Departure Trip
                    </p>

                    <div className="mt-4 space-y-2">

                      <p className="text-[18px] text-[#222]">

                        {from} → {to}
                      </p>

                      <p className="text-[15px] text-[#666]">

                        {
                          departureTime
                        }
                      </p>

                      <p className="text-[15px] text-[#666]">

                        {
                          departureVehicle
                        }
                      </p>
                    </div>
                  </div>

                  {/* RETURN */}

                  <div>

                    <p className="text-[12px] uppercase tracking-[4px] text-[#888]">

                      Return Trip
                    </p>

                    <div className="mt-4 space-y-2">

                      <p className="text-[18px] text-[#222]">

                        {to} → {from}
                      </p>

                      <p className="text-[15px] text-[#666]">

                        {returnTime}
                      </p>

                      <p className="text-[15px] text-[#666]">

                        {
                          returnVehicle
                        }
                      </p>
                    </div>
                  </div>

                  {/* SEATS */}

                  <div>

                    <p className="text-[12px] uppercase tracking-[4px] text-[#888]">

                      Selected Seats
                    </p>

                    <p className="mt-4 break-words text-[18px] text-[#222]">

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

                    <p className="mt-4 text-[18px] text-[#222]">

                      {
                        requestedSeats
                      }{" "}
                      Passenger(s)
                    </p>
                  </div>

                  {/* TOTAL */}

                  <div className="border-t border-[#e5e5e5] pt-8">

                    <p className="text-[12px] uppercase tracking-[4px] text-[#888]">

                      Departure Total
                    </p>

                    <p className="mt-3 break-words text-[34px] font-light text-[#00A878] lg:text-[42px]">

                      ₦
                      {departureTotal.toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}