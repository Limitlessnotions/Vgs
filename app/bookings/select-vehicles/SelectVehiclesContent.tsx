"use client";

export const dynamic =
  "force-dynamic";

import {
  useSearchParams,
  useRouter,
} from "next/navigation";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SelectVehiclesPage() {

  const router =
    useRouter();

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

  const seats =
    searchParams.get("seats") || "";

  const date =
    searchParams.get("date") || "";

  /* =========================
     MOCK TRIPS
  ========================== */

  const trips = [
    {
      id: 1,
      vehicleName:
        vehicle,
      time: "07:30 AM",
      available: 2,
      amount: "₦13,500",
    },

    {
      id: 2,
      vehicleName:
        vehicle,
      time: "01:30 PM",
      available: 5,
      amount: "₦13,500",
    },

    {
      id: 3,
      vehicleName:
        vehicle,
      time: "05:00 PM",
      available: 8,
      amount: "₦15,000",
    },
  ];

  /* =========================
     HANDLE SELECT SEATS
  ========================== */

  const handleSelectSeats = (
    trip: any
  ) => {

    router.push(
      `/bookings/select-seats?from=${encodeURIComponent(
        from
      )}&to=${encodeURIComponent(
        to
      )}&vehicle=${encodeURIComponent(
        trip.vehicleName
      )}&time=${encodeURIComponent(
        trip.time
      )}&amount=${encodeURIComponent(
        trip.amount
      )}&seats=${encodeURIComponent(
        seats
      )}&date=${encodeURIComponent(
        date
      )}`
    );
  };

  return (
    <main className="min-h-screen bg-[#efefef]">

      <Navbar />

      {/* =========================
          HERO
      ========================== */}

      <section className="relative flex min-h-[240px] items-center justify-center overflow-hidden lg:min-h-[320px]">

        {/* BACKGROUND */}

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1883&auto=format&fit=crop')",
          }}
        />

        {/* OVERLAY */}

        <div className="absolute inset-0 bg-black/70" />

        {/* CONTENT */}

        <div className="relative z-10 px-5 text-center text-white">

          <p className="text-[11px] uppercase tracking-[6px] text-[#00A878] lg:text-[12px]">

            Available Trips
          </p>

          <h1 className="page-title mt-5 leading-[1.1] text-white">

            Select
            <br />
            Vehicle
          </h1>
        </div>
      </section>

      {/* =========================
          CONTENT
      ========================== */}

      <section className="section-spacing">

        <div className="page-container">

          {/* HEADER */}

          <div className="mb-14 lg:mb-16">

            <p className="text-[12px] uppercase tracking-[5px] text-[#777]">

              Trip Information
            </p>

            <h2 className="mt-5 text-[34px] font-light uppercase leading-[1.1] text-[#222] lg:text-[56px]">

              {from}
              <br />
              To
              <br />
              {to}
            </h2>

            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:flex lg:flex-wrap lg:gap-12">

              {/* VEHICLE */}

              <div>

                <p className="text-[12px] uppercase tracking-[4px] text-[#888]">

                  Vehicle Type
                </p>

                <p className="mt-2 text-[17px] text-[#222] lg:text-[18px]">

                  {vehicle}
                </p>
              </div>

              {/* SEATS */}

              <div>

                <p className="text-[12px] uppercase tracking-[4px] text-[#888]">

                  Seats Requested
                </p>

                <p className="mt-2 text-[17px] text-[#222] lg:text-[18px]">

                  {seats}
                </p>
              </div>

              {/* DATE */}

              <div>

                <p className="text-[12px] uppercase tracking-[4px] text-[#888]">

                  Departure Date
                </p>

                <p className="mt-2 text-[17px] text-[#222] lg:text-[18px]">

                  {date}
                </p>
              </div>
            </div>
          </div>

          {/* TRIPS */}

          <div className="space-y-8 lg:space-y-10">

            {trips.map(
              (trip) => (

                <div
                  key={trip.id}
                  className="bg-white p-6 shadow-sm lg:p-10"
                >

                  {/* TIME */}

                  <div className="border-b border-[#e5e5e5] pb-5 lg:pb-6">

                    <h3 className="text-[30px] font-light text-[#00A878] lg:text-[40px]">

                      {trip.time}
                    </h3>
                  </div>

                  {/* CONTENT */}

                  <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1fr_1fr_auto] lg:items-center lg:gap-10">

                    {/* VEHICLE */}

                    <div>

                      <p className="text-[12px] uppercase tracking-[4px] text-[#888]">

                        Vehicle
                      </p>

                      <p className="mt-3 text-[24px] font-light text-[#222] lg:text-[30px]">

                        {
                          trip.vehicleName
                        }
                      </p>
                    </div>

                    {/* AVAILABILITY */}

                    <div>

                      <p className="text-[12px] uppercase tracking-[4px] text-[#888]">

                        Availability
                      </p>

                      <p className="mt-3 text-[20px] text-[#ff4d4d] lg:text-[24px]">

                        {
                          trip.available
                        }{" "}
                        seats left
                      </p>
                    </div>

                    {/* AMOUNT */}

                    <div>

                      <p className="text-[12px] uppercase tracking-[4px] text-[#888]">

                        Amount
                      </p>

                      <p className="mt-3 text-[28px] font-light text-[#222] lg:text-[38px]">

                        {trip.amount}
                      </p>

                      <p className="mt-1 text-[14px] text-[#666]">

                        per seat
                      </p>
                    </div>

                    {/* BUTTON */}

                    <button
                      onClick={() =>
                        handleSelectSeats(
                          trip
                        )
                      }
                      className="primary-button w-full lg:w-auto"
                    >

                      Select Seats
                    </button>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}