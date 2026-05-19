"use client";

export const dynamic =
  "force-dynamic";

import {
  useRouter,
  useSearchParams,
} from "next/navigation";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SelectDeparturePage() {

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
     AVAILABLE TRIPS
  ========================== */

  const trips = [
    {
      id: 1,
      time: "07:30 AM",
      vehicle:
        "Prestige - 5 Seater",
      amount: "₦13,500",
      availability:
        "2 seats left",
    },

    {
      id: 2,
      time: "01:30 PM",
      vehicle:
        "Regular - 12 Seater",
      amount: "₦9,500",
      availability:
        "8 seats left",
    },

    {
      id: 3,
      time: "05:00 PM",
      vehicle:
        "Executive Bus",
      amount: "₦18,000",
      availability:
        "5 seats left",
    },
  ];

  /* =========================
     SELECT DEPARTURE
  ========================== */

  const handleSelectDeparture = (
    trip: any
  ) => {

    router.push(
      `/bookings/round-trip/select-return?from=${encodeURIComponent(
        from
      )}&to=${encodeURIComponent(
        to
      )}&vehicle=${encodeURIComponent(
        vehicle
      )}&seats=${encodeURIComponent(
        seats
      )}&departureDate=${encodeURIComponent(
        departureDate
      )}&returnDate=${encodeURIComponent(
        returnDate
      )}&departureTime=${encodeURIComponent(
        trip.time
      )}&departureVehicle=${encodeURIComponent(
        trip.vehicle
      )}&departureAmount=${encodeURIComponent(
        trip.amount
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

        {/* BG */}

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

            Round Trip
          </p>

          <h1 className="page-title mt-5 leading-[1.1] text-white">

            Select
            <br />
            Departure Trip
          </h1>
        </div>
      </section>

      {/* =========================
          TRIPS SECTION
      ========================== */}

      <section className="section-spacing">

        <div className="page-container">

          {/* TOP INFO */}

          <div className="mb-14 lg:mb-16">

            <p className="text-[12px] uppercase tracking-[5px] text-[#777]">

              Available Departure Trips
            </p>

            <h2 className="mt-5 text-[34px] font-light uppercase leading-[1.1] text-[#222] lg:text-[56px]">

              {from}
              <br />
              To
              <br />
              {to}
            </h2>

            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:flex lg:flex-wrap lg:gap-12">

              {/* DEPARTURE */}

              <div>

                <p className="text-[12px] uppercase tracking-[4px] text-[#888]">

                  Departure Date
                </p>

                <p className="mt-2 text-[17px] text-[#222] lg:text-[18px]">

                  {departureDate}
                </p>
              </div>

              {/* RETURN */}

              <div>

                <p className="text-[12px] uppercase tracking-[4px] text-[#888]">

                  Return Date
                </p>

                <p className="mt-2 text-[17px] text-[#222] lg:text-[18px]">

                  {returnDate}
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
            </div>
          </div>

          {/* TRIPS */}

          <div className="space-y-8 lg:space-y-10">

            {trips.map((trip) => (

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

                      {trip.vehicle}
                    </p>
                  </div>

                  {/* AVAILABILITY */}

                  <div>

                    <p className="text-[12px] uppercase tracking-[4px] text-[#888]">

                      Availability
                    </p>

                    <p className="mt-3 text-[20px] text-[#ff4d4d] lg:text-[24px]">

                      {trip.availability}
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
                      handleSelectDeparture(
                        trip
                      )
                    }
                    className="primary-button w-full lg:w-auto"
                  >

                    Select Departure
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}