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

export default function RoundTripPaymentPage() {

  const router = useRouter();

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

  const departureAmount =
    searchParams.get(
      "departureAmount"
    ) || "₦13,500";

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

  const returnAmount =
    searchParams.get(
      "returnAmount"
    ) || "₦13,500";

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
     PAYMENT METHOD
  ===================================== */

  const [
    paymentMethod,
    setPaymentMethod,
  ] = useState("card");

  /* =====================================
     COMPLETE PAYMENT
  ===================================== */

  const handlePayment = () => {

    router.push(
      `/bookings/round-trip/confirmation?from=${encodeURIComponent(
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
      )}&selectedDepartureSeats=${encodeURIComponent(
        selectedDepartureSeats
      )}&returnVehicle=${encodeURIComponent(
        returnVehicle
      )}&returnTime=${encodeURIComponent(
        returnTime
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

      <section className="px-5 py-24 lg:px-10">

        <div className="mx-auto grid max-w-[1300px] grid-cols-1 gap-14 lg:grid-cols-[1fr_360px]">

          {/* =====================================
              LEFT
          ===================================== */}

          <div className="bg-white p-8 shadow-sm lg:p-14">

            {/* HEADER */}

            <div>

              <p className="text-[12px] uppercase tracking-[5px] text-[#777]">
                Secure Payment
              </p>

              <h1 className="mt-5 text-[38px] lg:text-[60px] font-light uppercase leading-[1.1] text-[#222]">

                Complete
                <br />
                Payment
              </h1>

              <p className="mt-6 max-w-[700px] text-[16px] leading-[30px] text-[#666]">
                Finalize your round-trip
                reservation securely using
                your preferred payment
                method.
              </p>
            </div>

            {/* PAYMENT TABS */}

            <div className="mt-14 flex flex-wrap gap-4">

              {/* CARD */}

              <button
                onClick={() =>
                  setPaymentMethod(
                    "card"
                  )
                }
                className={`h-[56px] px-8 text-[12px] uppercase tracking-[4px] transition ${
                  paymentMethod ===
                  "card"
                    ? "bg-[#00A878] text-white"
                    : "border border-[#d8d8d8] bg-white text-[#222]"
                }`}
              >
                Debit Card
              </button>

              {/* TRANSFER */}

              <button
                onClick={() =>
                  setPaymentMethod(
                    "transfer"
                  )
                }
                className={`h-[56px] px-8 text-[12px] uppercase tracking-[4px] transition ${
                  paymentMethod ===
                  "transfer"
                    ? "bg-[#00A878] text-white"
                    : "border border-[#d8d8d8] bg-white text-[#222]"
                }`}
              >
                Bank Transfer
              </button>
            </div>

            {/* =====================================
                CARD FORM
            ===================================== */}

            {paymentMethod ===
              "card" && (

              <div className="mt-16">

                <div className="grid grid-cols-1 gap-8">

                  {/* CARD HOLDER */}

                  <div>

                    <label className="mb-3 block text-[12px] uppercase tracking-[4px] text-[#555]">
                      Card Holder Name
                    </label>

                    <input
                      type="text"
                      placeholder="John Doe"
                      className="h-[60px] w-full border border-[#d8d8d8] bg-[#f8f8f8] px-5 text-black outline-none placeholder:text-[#999] focus:border-[#00A878]"
                    />
                  </div>

                  {/* CARD NUMBER */}

                  <div>

                    <label className="mb-3 block text-[12px] uppercase tracking-[4px] text-[#555]">
                      Card Number
                    </label>

                    <input
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      className="h-[60px] w-full border border-[#d8d8d8] bg-[#f8f8f8] px-5 text-black outline-none placeholder:text-[#999] focus:border-[#00A878]"
                    />
                  </div>

                  {/* EXPIRY + CVV */}

                  <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">

                    {/* EXPIRY */}

                    <div>

                      <label className="mb-3 block text-[12px] uppercase tracking-[4px] text-[#555]">
                        Expiry Date
                      </label>

                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="h-[60px] w-full border border-[#d8d8d8] bg-[#f8f8f8] px-5 text-black outline-none placeholder:text-[#999] focus:border-[#00A878]"
                      />
                    </div>

                    {/* CVV */}

                    <div>

                      <label className="mb-3 block text-[12px] uppercase tracking-[4px] text-[#555]">
                        CVV
                      </label>

                      <input
                        type="text"
                        placeholder="123"
                        className="h-[60px] w-full border border-[#d8d8d8] bg-[#f8f8f8] px-5 text-black outline-none placeholder:text-[#999] focus:border-[#00A878]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* =====================================
                TRANSFER
            ===================================== */}

            {paymentMethod ===
              "transfer" && (

              <div className="mt-16 rounded-[14px] border border-[#d8d8d8] bg-[#f8f8f8] p-8">

                <h3 className="text-[28px] font-light text-[#222]">
                  Bank Transfer
                </h3>

                <div className="mt-8 space-y-6">

                  {/* BANK */}

                  <div>

                    <p className="text-[12px] uppercase tracking-[4px] text-[#777]">
                      Bank Name
                    </p>

                    <p className="mt-2 text-[20px] text-[#222]">
                      GTBank
                    </p>
                  </div>

                  {/* ACCOUNT */}

                  <div>

                    <p className="text-[12px] uppercase tracking-[4px] text-[#777]">
                      Account Number
                    </p>

                    <p className="mt-2 text-[28px] font-light text-[#00A878]">
                      0123456789
                    </p>
                  </div>

                  {/* ACCOUNT NAME */}

                  <div>

                    <p className="text-[12px] uppercase tracking-[4px] text-[#777]">
                      Account Name
                    </p>

                    <p className="mt-2 text-[20px] text-[#222]">
                      Valgee Transport Services
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* BUTTON */}

            <button
              onClick={
                handlePayment
              }
              className="mt-16 h-[60px] bg-[#00A878] px-12 text-[12px] uppercase tracking-[4px] text-white transition hover:bg-[#008F67]"
            >
              Complete Payment
            </button>
          </div>

          {/* =====================================
              SUMMARY
          ===================================== */}

          <div className="sticky top-[120px] h-fit bg-white px-8 py-10 shadow-sm">

            <h2 className="text-[30px] font-light text-[#222]">
              Booking Summary
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
                    {departureTime}
                  </p>

                  <p className="text-[15px] text-[#666]">
                    {
                      departureVehicle
                    }
                  </p>

                  <p className="text-[15px] text-[#00A878]">
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
                    {returnVehicle}
                  </p>

                  <p className="text-[15px] text-[#00A878]">
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
                    departureSeatArray.length
                  }{" "}
                  Passenger(s)
                </p>
              </div>

              {/* TOTAL */}

              <div className="border-t border-[#e5e5e5] pt-8">

                <p className="text-[12px] uppercase tracking-[4px] text-[#888]">
                  Grand Total
                </p>

                <p className="mt-3 text-[42px] font-light text-[#00A878]">

                  ₦
                  {Number(
                    grandTotal
                  ).toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}