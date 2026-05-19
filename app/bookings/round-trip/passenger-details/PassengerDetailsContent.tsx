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

export default function RoundTripPassengerDetailsPage() {

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

  const departureDate =
    searchParams.get(
      "departureDate"
    ) || "";

  const returnDate =
    searchParams.get(
      "returnDate"
    ) || "";

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

  const selectedDepartureSeats =
    searchParams.get(
      "selectedDepartureSeats"
    ) || "";

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

  const selectedReturnSeats =
    searchParams.get(
      "selectedReturnSeats"
    ) || "";

  const grandTotal =
    searchParams.get(
      "grandTotal"
    ) || "0";

  /* =========================
     SEAT ARRAYS
  ========================== */

  const departureSeatArray =
    selectedDepartureSeats
      .split(",")
      .map((seat) =>
        seat.trim()
      )
      .filter(Boolean);

  const returnSeatArray =
    selectedReturnSeats
      .split(",")
      .map((seat) =>
        seat.trim()
      )
      .filter(Boolean);

  /* =========================
     PASSENGERS
  ========================== */

  const [passengers, setPassengers] =
    useState(
      departureSeatArray.map(
        (
          departureSeat,
          index
        ) => ({
          departureSeat,
          returnSeat:
            returnSeatArray[
              index
            ] || "",
          fullName: "",
          email: "",
          phone: "",
        })
      )
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
     CONTINUE
  ========================== */

  const handleContinue = () => {

    router.push(
      `/bookings/round-trip/payment?from=${encodeURIComponent(
        from
      )}&to=${encodeURIComponent(
        to
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
      )}&selectedDepartureSeats=${encodeURIComponent(
        selectedDepartureSeats
      )}&returnVehicle=${encodeURIComponent(
        returnVehicle
      )}&returnTime=${encodeURIComponent(
        returnTime
      )}&returnAmount=${encodeURIComponent(
        returnAmount
      )}&selectedReturnSeats=${encodeURIComponent(
        selectedReturnSeats
      )}&grandTotal=${encodeURIComponent(
        grandTotal
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

                  Passenger Information
                </p>

                <h1 className="page-title mt-5 leading-[1.1] text-[#222]">

                  Passenger
                  <br />
                  Details
                </h1>

                <p className="mt-6 max-w-[700px] text-[15px] leading-[30px] text-[#666]">

                  Kindly provide accurate
                  passenger information for
                  all travelers included in
                  this round-trip booking.
                </p>
              </div>

              {/* PASSENGERS */}

              <div className="mt-14 space-y-14 lg:mt-16 lg:space-y-16">

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

                        <h2 className="text-[24px] font-light uppercase text-[#222] lg:text-[28px]">

                          Passenger{" "}
                          {index + 1}
                        </h2>

                        <div className="mt-4 flex flex-col gap-2 lg:flex-row lg:flex-wrap lg:gap-8">

                          <p className="text-[15px] text-[#00A878]">

                            Departure Seat:
                            {" "}
                            {
                              passenger.departureSeat
                            }
                          </p>

                          <p className="text-[15px] text-[#00A878]">

                            Return Seat:
                            {" "}
                            {
                              passenger.returnSeat
                            }
                          </p>
                        </div>
                      </div>

                      {/* FORM */}

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
                            className="form-input bg-[#f8f8f8] placeholder:text-[#999] focus:border-[#00A878]"
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
                            className="form-input bg-[#f8f8f8] placeholder:text-[#999] focus:border-[#00A878]"
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
                            className="form-input bg-[#f8f8f8] placeholder:text-[#999] focus:border-[#00A878]"
                          />
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>

              {/* BUTTON */}

              <button
                onClick={
                  handleContinue
                }
                className="primary-button mt-14 lg:mt-16"
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

                  Trip Summary
                </h2>

                <div className="mt-10 space-y-10">

                  {/* DEPARTURE */}

                  <div>

                    <p className="text-[12px] uppercase tracking-[4px] text-[#888]">

                      Departure Journey
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

                      <p className="break-words text-[15px] text-[#00A878]">

                        Seats:{" "}
                        {
                          selectedDepartureSeats
                        }
                      </p>
                    </div>
                  </div>

                  {/* RETURN */}

                  <div>

                    <p className="text-[12px] uppercase tracking-[4px] text-[#888]">

                      Return Journey
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

                      <p className="break-words text-[15px] text-[#00A878]">

                        Seats:{" "}
                        {
                          selectedReturnSeats
                        }
                      </p>
                    </div>
                  </div>

                  {/* PASSENGERS */}

                  <div>

                    <p className="text-[12px] uppercase tracking-[4px] text-[#888]">

                      Passenger Count
                    </p>

                    <p className="mt-4 text-[18px] text-[#222]">

                      {
                        passengers.length
                      }{" "}
                      Passenger(s)
                    </p>
                  </div>

                  {/* TOTAL */}

                  <div className="border-t border-[#e5e5e5] pt-8">

                    <p className="text-[12px] uppercase tracking-[4px] text-[#888]">

                      Grand Total
                    </p>

                    <p className="mt-3 break-words text-[34px] font-light text-[#00A878] lg:text-[42px]">

                      ₦
                      {Number(
                        grandTotal
                      ).toLocaleString()}
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