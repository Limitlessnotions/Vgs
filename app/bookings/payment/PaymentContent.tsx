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

export default function PaymentPage() {

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
     PAYMENT METHOD
  ========================== */

  const [
    paymentMethod,
    setPaymentMethod,
  ] = useState("card");

  /* =========================
     HANDLE PAYMENT
  ========================== */

  const handlePayment = () => {

    router.push(
      `/bookings/confirmation?from=${encodeURIComponent(
        from
      )}&to=${encodeURIComponent(
        to
      )}&vehicle=${encodeURIComponent(
        vehicle
      )}&time=${encodeURIComponent(
        time
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

              <div>

                <p className="text-[12px] uppercase tracking-[4px] text-[#777]">

                  Secure Payment
                </p>

                <h1 className="page-title mt-5 leading-[1.1] text-[#222]">

                  Complete
                  <br />
                  Payment
                </h1>

                <p className="mt-6 max-w-[650px] text-[15px] leading-[30px] text-[#666]">

                  Choose your preferred payment
                  method and complete your trip
                  reservation securely.
                </p>
              </div>

              {/* PAYMENT METHODS */}

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

                    {/* HOLDER */}

                    <div>

                      <label className="mb-3 block text-[12px] uppercase tracking-[4px] text-[#555]">

                        Card Holder Name
                      </label>

                      <input
                        type="text"
                        placeholder="John Doe"
                        className="form-input bg-[#f8f8f8] focus:border-[#00A878]"
                      />
                    </div>

                    {/* NUMBER */}

                    <div>

                      <label className="mb-3 block text-[12px] uppercase tracking-[4px] text-[#555]">

                        Card Number
                      </label>

                      <input
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        className="form-input bg-[#f8f8f8] focus:border-[#00A878]"
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
                          className="form-input bg-[#f8f8f8] focus:border-[#00A878]"
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
                          className="form-input bg-[#f8f8f8] focus:border-[#00A878]"
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

                <div className="mt-14 rounded-[12px] border border-[#d8d8d8] bg-[#f8f8f8] p-6 lg:mt-16 lg:p-8">

                  <h3 className="text-[24px] font-light text-[#222] lg:text-[28px]">

                    Bank Transfer
                  </h3>

                  <div className="mt-8 space-y-5">

                    <div>

                      <p className="text-[12px] uppercase tracking-[4px] text-[#777]">

                        Bank Name
                      </p>

                      <p className="mt-2 text-[18px] text-[#222]">

                        GTBank
                      </p>
                    </div>

                    <div>

                      <p className="text-[12px] uppercase tracking-[4px] text-[#777]">

                        Account Number
                      </p>

                      <p className="mt-2 break-words text-[22px] text-[#00A878]">

                        0123456789
                      </p>
                    </div>

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
                onClick={handlePayment}
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

                      Seats
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

                  <div className="border-t border-[#e5e5e5] pt-8">

                    <p className="text-[12px] uppercase tracking-[4px] text-[#888]">

                      Total
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