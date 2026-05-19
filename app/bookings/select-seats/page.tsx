"use client";

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SelectSeatsPage() {

  const searchParams = useSearchParams();
  const router = useRouter();

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

  /* =====================================
     DYNAMIC SEAT COUNT
  ===================================== */

  const getSeatCount = () => {

    const match = vehicle.match(/\d+/);

    if (!match) return 12;

    return Number(match[0]);
  };

  const totalSeats = getSeatCount();

  const allSeats = Array.from(
    { length: totalSeats },
    (_, i) => i + 1
  );

  /* =====================================
     OCCUPIED SEATS
  ===================================== */

  const occupiedSeats =
    totalSeats === 5
      ? [2]
      : totalSeats === 9
      ? [2, 5]
      : [3, 7, 10];

  /* =====================================
     SELECTED SEATS
  ===================================== */

  const [selectedSeats, setSelectedSeats] =
    useState<number[]>([]);

  /* =====================================
     HANDLE SEAT CLICK
  ===================================== */

  const handleSeatClick = (seat: number) => {

    if (occupiedSeats.includes(seat))
      return;

    const alreadySelected =
      selectedSeats.includes(seat);

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

  /* =====================================
     TOTAL
  ===================================== */

  const numericAmount = Number(
    amount.replace(/[₦,]/g, "")
  );

  const total =
    numericAmount * seatsRequested;

  /* =====================================
     PROCEED
  ===================================== */

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
        selectedSeats.join(", ")
      )}`
    );
  };

  return (
    <main className="min-h-screen bg-[#efefef]">

      <Navbar />

      <section className="px-10 py-24">

        <div className="mx-auto grid max-w-[1180px] grid-cols-[620px_360px] gap-24">

          {/* LEFT */}

          <div>

            <div>

              <p className="text-[13px] uppercase tracking-[2px] text-[#777]">
                Seat Selection
              </p>

              <h1 className="mt-4 text-[40px] font-light uppercase leading-[58px] text-[#222]">

                {from}

                <br />

                TO

                <br />

                {to}
              </h1>

              <p className="mt-5 text-[20px] uppercase tracking-[1px] text-[#00A878]">
                {vehicle}
              </p>

              <p className="mt-3 text-[14px] text-[#666]">
                Departure Time: {time}
              </p>
            </div>

            {/* LEGEND */}

            <div className="mt-14 flex items-center gap-6">

              <div className="flex items-center gap-2">

                <div className="h-[18px] w-[18px] bg-[#ff6b81]" />

                <p className="text-[13px] text-[#555]">
                  Booked
                </p>
              </div>

              <div className="flex items-center gap-2">

                <div className="h-[18px] w-[18px] border border-[#ccc] bg-white" />

                <p className="text-[13px] text-[#555]">
                  Available
                </p>
              </div>

              <div className="flex items-center gap-2">

                <div className="h-[18px] w-[18px] bg-[#00A878]" />

                <p className="text-[13px] text-[#555]">
                  Selected
                </p>
              </div>
            </div>

            {/* VEHICLE */}

            <div className="mt-14 w-fit rounded-[24px] border-2 border-[#222] bg-[#f9f9f9] px-16 py-12">

              <div className="mb-10">

                <div className="flex h-[70px] w-[70px] items-center justify-center rounded-full border-[3px] border-[#555] text-[34px]">
                  🛞
                </div>
              </div>

              {/* SEATS */}

              <div className="grid grid-cols-2 gap-x-14 gap-y-7">

                {allSeats.map((seat) => {

                  const isOccupied =
                    occupiedSeats.includes(seat);

                  const isSelected =
                    selectedSeats.includes(seat);

                  return (
                    <button
                      key={seat}
                      onClick={() =>
                        handleSeatClick(seat)
                      }
                      disabled={isOccupied}
                      className={`flex h-[68px] w-[82px] items-center justify-center border text-[20px] font-light transition-all duration-200 ${
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
                })}
              </div>
            </div>
          </div>

          {/* SUMMARY */}

          <div className="sticky top-[140px] h-fit border border-[#d8d8d8] bg-white px-10 py-12 shadow-sm">

            <h2 className="text-[30px] font-light text-[#222]">
              Booking Summary
            </h2>

            <div className="mt-10 space-y-8">

              <div>

                <p className="text-[12px] uppercase tracking-[3px] text-[#888]">
                  Route
                </p>

                <p className="mt-3 text-[17px] text-[#222]">
                  {from} → {to}
                </p>
              </div>

              <div>

                <p className="text-[12px] uppercase tracking-[3px] text-[#888]">
                  Vehicle
                </p>

                <p className="mt-3 text-[17px] text-[#222]">
                  {vehicle}
                </p>
              </div>

              <div>

                <p className="text-[12px] uppercase tracking-[3px] text-[#888]">
                  Selected Seats
                </p>

                <p className="mt-3 text-[17px] text-[#222]">
                  {selectedSeats.join(", ")}
                </p>
              </div>

              <div>

                <p className="text-[12px] uppercase tracking-[3px] text-[#888]">
                  Total Amount
                </p>

                <p className="mt-3 text-[36px] font-light text-[#00A878]">
                  ₦{total.toLocaleString()}
                </p>
              </div>
            </div>

            <button
              onClick={proceedBooking}
              className="mt-14 h-[58px] w-full bg-[#00A878] text-[12px] uppercase tracking-[3px] text-white transition hover:bg-[#008F67]"
            >
              Proceed To Passenger Details
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}