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

  const departureAmount =
    searchParams.get(
      "departureAmount"
    ) || "₦13,500";

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

  const returnAmount =
    searchParams.get(
      "returnAmount"
    ) || "₦13,500";

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
     PAYMENT METHOD
  ========================== */

  const [
    paymentMethod,
    setPaymentMethod,
  ] = useState("card");

  /* =========================
     COMPLETE PAYMENT
  ========================== */

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

                  Secure Payment
                </p>

                <h1 className="page-title mt-5 leading-[1.1] text-[#222]">

                  Complete
                  <br />
                  Payment
                </h1>

                <p className="mt-6 max-w-[700px] text-[15px] leading-[30px] text-[#666]">

                  Finalize your round-trip
                  reservation securely using
                  your preferred payment
                  method.
                </p>
              </div>

              {/* PAYMENT TABS */}

              <div className="mt-12 flex flex-wrap gap-4 lg:mt-14">

                {/* CARD */}

                <button
                  onClick={() =>
                    setPaymentMethod(
                      "card"
                    )
                  }
                  className={`h-[56px] px-6 text-[11px] uppercase tracking-[3px] transition lg:px-8 lg:text-[12px] ${
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
                  className={`h-[56px] px-6 text-[11px] uppercase tracking-[3px] transition lg:px-8 lg:text-[12px] ${
                    paymentMethod ===
                    "transfer"
                      ? "bg-[#00A878] text-white"
                      : "border border-[#d8d8d8] bg-white text-[#222]"
                  }`}
                >

                  Bank Transfer
                </button>
              </div>

              {/* =========================
                  CARD FORM
              ========================== */}

              {paymentMethod ===
                "card" && (

                <div className="mt-14 lg:mt-16">

                  <div className="grid grid-cols-1 gap-8">

                    {/* CARD HOLDER */}

                    <div>

                      <label className="mb-3 block text-[12px] uppercase tracking-[4px] text-[#555]">

                        Card Holder Name
                      </label>

                      <input
                        type="text"
                        placeholder="John Doe"
                        className="form-input bg-[#f8f8f8] placeholder:text-[#999] focus:border-[#00A878]"
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
                        className="form-input bg-[#f8f8f8] placeholder:text-[#999] focus:border-[#00A878]"
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
                          className="form-input bg-[#f8f8f8] placeholder:text-[#999] focus:border-[#00A878]"
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
                          className="form-input bg-[#f8f8f8] placeholder:text-[#999] focus:border-[#00A878]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* =========================
                  TRANSFER
              ========================== */}

              {paymentMethod ===
                "transfer" && (

                <div className="mt-14 rounded-[14px] border border-[#d8d8d8] bg-[#f8f8f8] p-6 lg:mt-16 lg:p-8">

                  <h3 className="text-[24px] font-light text-[#222] lg:text-[28px]">

                    Bank Transfer
                  </h3>

                  <div className="mt-8 space-y-5">

                    {/* BANK */}

                    <div>

                      <p className="text-[12px] uppercase tracking-[4px] text-[#777]">

                        Bank Name
                      </p>

                      <p className="mt-2 text-[18px] text-[#222]">

                        GTBank
                      </p>
                    </div>

                    {/* ACCOUNT */}

                    <div>

                      <p className="text-[12px] uppercase tracking-[4px] text-[#777]">

                        Account Number
                      </p>

                      <p className="mt-2 break-words text-[24px] font-light text-[#00A878] lg:text-[28px]">

                        0123456789
                      </p>
                    </div>

                    {/* ACCOUNT NAME */}

                    <div>

                      <p className="text-[12px] uppercase tracking-[4px] text-[#777]">

                        Account Name
                      </p>

                      <p className="mt-2 text-[18px] text-[#222]">

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
                className="primary-button mt-14 lg:mt-16"
              >

                Complete Payment
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

                        {returnVehicle}
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