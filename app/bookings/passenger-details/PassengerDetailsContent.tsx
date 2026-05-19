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

export default function PassengerDetailsPage() {

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

  const vehicle =
    searchParams.get("vehicle") || "";

  const time =
    searchParams.get("time") || "";

  const amount =
    searchParams.get("amount") || "₦13,500";

  const selectedSeats =
    searchParams.get(
      "selectedSeats"
    ) || "";

  /* =========================
     SEAT ARRAY
  ========================== */

  const seatArray =
    selectedSeats
      .split(",")
      .map((seat) => seat.trim())
      .filter(Boolean);

  /* =========================
     TOTAL
  ========================== */

  const numericAmount =
    Number(
      amount.replace(/[₦,]/g, "")
    );

  const total =
    numericAmount *
    seatArray.length;

  /* =========================
     PASSENGERS STATE
  ========================== */

  const [passengers, setPassengers] =
    useState(
      seatArray.map((seat) => ({
        seat,
        fullName: "",
        email: "",
        phone: "",
      }))
    );

  /* =========================
     HANDLE CHANGE
  ========================== */

  const handleChange = (
    index: number,
    field: string,
    value: string
  ) => {

    const updatedPassengers = [
      ...passengers,
    ];

    updatedPassengers[index] = {
      ...updatedPassengers[index],
      [field]: value,
    };

    setPassengers(
      updatedPassengers
    );
  };

  /* =========================
     PROCEED
  ========================== */

  const handleProceed = () => {

    router.push(
      `/bookings/payment?from=${encodeURIComponent(
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
        selectedSeats
      )}&total=${encodeURIComponent(
        total
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

              <h1 className="page-title leading-[1.1] text-[#222]">

                Passenger Details
              </h1>

              <p className="mt-5 max-w-[700px] text-[15px] leading-[30px] text-[#666]">

                Kindly provide accurate passenger
                information for your booking and
                emergency contact purposes.
              </p>

              {/* FORMS */}

              <div className="mt-12 space-y-14 lg:mt-16 lg:space-y-16">

                {passengers.map(
                  (
                    passenger,
                    index
                  ) => (

                    <div
                      key={index}
                      className="border-b border-[#e5e5e5] pb-12 lg:pb-14"
                    >

                      {/* TITLE */}

                      <div className="mb-8 lg:mb-10">

                        <h2 className="text-[24px] font-light uppercase text-[#222] lg:text-[26px]">

                          Passenger{" "}
                          {index + 1}
                        </h2>

                        <p className="mt-2 text-[15px] text-[#00A878]">

                          Seat{" "}
                          {
                            passenger.seat
                          }
                        </p>
                      </div>

                      {/* FORM GRID */}

                      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">

                        {/* FULL NAME */}

                        <div>

                          <label className="mb-3 block text-[12px] uppercase tracking-[4px] text-[#555]">

                            Full Name
                          </label>

                          <input
                            type="text"
                            placeholder="Enter full name"
                            value={
                              passenger.fullName
                            }
                            onChange={(
                              e
                            ) =>
                              handleChange(
                                index,
                                "fullName",
                                e.target.value
                              )
                            }
                            className="form-input bg-[#f8f8f8] focus:border-[#00A878]"
                          />
                        </div>

                        {/* EMAIL */}

                        <div>

                          <label className="mb-3 block text-[12px] uppercase tracking-[4px] text-[#555]">

                            Email Address
                          </label>

                          <input
                            type="email"
                            placeholder="Enter email address"
                            value={
                              passenger.email
                            }
                            onChange={(
                              e
                            ) =>
                              handleChange(
                                index,
                                "email",
                                e.target.value
                              )
                            }
                            className="form-input bg-[#f8f8f8] focus:border-[#00A878]"
                          />
                        </div>

                        {/* PHONE */}

                        <div>

                          <label className="mb-3 block text-[12px] uppercase tracking-[4px] text-[#555]">

                            Phone Number
                          </label>

                          <input
                            type="tel"
                            placeholder="Enter phone number"
                            value={
                              passenger.phone
                            }
                            onChange={(
                              e
                            ) =>
                              handleChange(
                                index,
                                "phone",
                                e.target.value
                              )
                            }
                            className="form-input bg-[#f8f8f8] focus:border-[#00A878]"
                          />
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>

              {/* BUTTON */}

              <button
                onClick={handleProceed}
                className="primary-button mt-14"
              >

                Proceed To Payment
              </button>
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

                    <p className="mt-3 text-[18px] text-[#222]">

                      {selectedSeats}
                    </p>
                  </div>

                  {/* PASSENGERS */}

                  <div>

                    <p className="text-[12px] uppercase tracking-[4px] text-[#888]">

                      Passengers
                    </p>

                    <p className="mt-3 text-[18px] text-[#222]">

                      {
                        seatArray.length
                      }{" "}
                      Passenger(s)
                    </p>
                  </div>

                  {/* TOTAL */}

                  <div>

                    <p className="text-[12px] uppercase tracking-[4px] text-[#888]">

                      Total Amount
                    </p>

                    <p className="mt-3 break-words text-[32px] font-light text-[#00A878] lg:text-[42px]">

                      ₦
                      {total.toLocaleString()}
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