"use client";

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

  /* =====================================
     QUERY PARAMS
  ===================================== */

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

  /* =====================================
     SEAT ARRAY
  ===================================== */

  const seatArray =
    selectedSeats
      .split(",")
      .map((seat) => seat.trim())
      .filter(Boolean);

  /* =====================================
     TOTAL
  ===================================== */

  const numericAmount =
    Number(
      amount.replace(/[₦,]/g, "")
    );

  const total =
    numericAmount *
    seatArray.length;

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

      <section className="px-5 lg:px-10 py-24">

        <div className="mx-auto grid max-w-[1300px] grid-cols-1 gap-14 lg:grid-cols-[1fr_360px]">

          {/* =====================================
              LEFT SIDE
          ===================================== */}

          <div className="bg-white p-8 lg:p-14 shadow-sm">

            {/* TOP */}

            <div>

              <p className="text-[12px] uppercase tracking-[4px] text-[#777]">
                Secure Payment
              </p>

              <h1 className="mt-5 text-[36px] lg:text-[58px] font-light uppercase leading-[1.1] text-[#222]">

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

            <div className="mt-14 flex flex-wrap gap-4">

              <button
                onClick={() =>
                  setPaymentMethod(
                    "card"
                  )
                }
                className={`h-[56px] px-8 text-[12px] uppercase tracking-[3px] transition ${
                  paymentMethod ===
                  "card"
                    ? "bg-[#00A878] text-white"
                    : "border border-[#d8d8d8] bg-white text-[#222]"
                }`}
              >
                Debit Card
              </button>

              <button
                onClick={() =>
                  setPaymentMethod(
                    "transfer"
                  )
                }
                className={`h-[56px] px-8 text-[12px] uppercase tracking-[3px] transition ${
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
                TRANSFER SECTION
            ===================================== */}

            {paymentMethod ===
              "transfer" && (
              <div className="mt-16 rounded-[12px] border border-[#d8d8d8] bg-[#f8f8f8] p-8">

                <h3 className="text-[28px] font-light text-[#222]">
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

                    <p className="mt-2 text-[22px] text-[#00A878]">
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

            {/* PAY BUTTON */}

            <button
              onClick={handlePayment}
              className="mt-16 h-[60px] bg-[#00A878] px-12 text-[12px] uppercase tracking-[4px] text-white transition hover:bg-[#008F67]"
            >
              Complete Payment
            </button>
          </div>

          {/* =====================================
              BOOKING SUMMARY
          ===================================== */}

          <div className="sticky top-[120px] h-fit bg-white px-8 py-10 shadow-sm">

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

                <p className="mt-3 text-[42px] font-light text-[#00A878]">
                  ₦
                  {total.toLocaleString()}
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