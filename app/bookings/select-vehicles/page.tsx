"use client";

import { useSearchParams, useRouter } from "next/navigation";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SelectVehiclesPage() {

  const router = useRouter();

  const searchParams = useSearchParams();

  const from = searchParams.get("from") || "";
  const to = searchParams.get("to") || "";
  const vehicle = searchParams.get("vehicle") || "";
  const seats = searchParams.get("seats") || "";
  const date = searchParams.get("date") || "";

  /* =====================================
     MOCK TRIPS
  ===================================== */

  const trips = [
    {
      id: 1,
      vehicleName: vehicle,
      time: "07:30 AM",
      available: 2,
      amount: "₦13,500",
    },
    {
      id: 2,
      vehicleName: vehicle,
      time: "01:30 PM",
      available: 5,
      amount: "₦13,500",
    },
    {
      id: 3,
      vehicleName: vehicle,
      time: "05:00 PM",
      available: 8,
      amount: "₦15,000",
    },
  ];

  /* =====================================
     HANDLE SELECT SEATS
  ===================================== */

  const handleSelectSeats = (trip: any) => {

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

      <section className="px-5 lg:px-10 py-24">

        <div className="mx-auto max-w-[1200px]">

          {/* HEADER */}

          <div>

            <p className="text-[13px] uppercase tracking-[2px] text-[#777]">
              Available Trips
            </p>

            <h1 className="mt-4 text-[46px] font-light uppercase leading-[65px] text-[#222]">

              {from}

              <br />

              TO

              <br />

              {to}
            </h1>

            <p className="mt-5 text-[20px] uppercase tracking-[1px] text-[#00A878]">
              {vehicle}
            </p>

            <p className="mt-3 text-[15px] text-[#666]">
              Seats Requested: {seats}
            </p>

            <p className="mt-2 text-[15px] text-[#666]">
              Departure Date: {date}
            </p>
          </div>

          {/* TRIPS */}

          <div className="mt-16 space-y-8">

            {trips.map((trip) => (
              <div
                key={trip.id}
                className="overflow-hidden border border-[#d9d9d9] bg-white"
              >

                {/* TOP */}

                <div className="border-b border-[#d9d9d9] bg-[#f7f7f7] px-8 py-6">

                  <p className="text-[28px] font-light text-[#00A878]">
                    {trip.time}
                  </p>
                </div>

                {/* CONTENT */}

                <div className="grid grid-cols-5 items-center gap-10 px-8 py-8">

                  {/* VEHICLE */}

                  <div>

                    <p className="text-[14px] text-[#888]">
                      Vehicle
                    </p>

                    <h3 className="mt-2 text-[22px] font-light text-[#222]">
                      {trip.vehicleName}
                    </h3>
                  </div>

                  {/* TIME */}

                  <div>

                    <p className="text-[14px] text-[#888]">
                      Departure
                    </p>

                    <h3 className="mt-2 text-[22px] font-light text-[#222]">
                      {trip.time}
                    </h3>
                  </div>

                  {/* AVAILABILITY */}

                  <div>

                    <p className="text-[14px] text-[#888]">
                      Availability
                    </p>

                    <h3 className="mt-2 text-[20px] font-light text-[#ff4d4d]">
                      {trip.available} seats left
                    </h3>
                  </div>

                  {/* PRICE */}

                  <div>

                    <p className="text-[14px] text-[#888]">
                      Amount
                    </p>

                    <h3 className="mt-2 text-[22px] font-light text-[#222]">
                      {trip.amount}
                    </h3>
                  </div>

                  {/* BUTTON */}

                  <div className="flex justify-end">

                    <button
                      onClick={() =>
                        handleSelectSeats(trip)
                      }
                      className="h-[56px] bg-[#00A878] px-8 text-[12px] uppercase tracking-[3px] text-white transition hover:bg-[#008F67]"
                    >
                      Select Seats
                    </button>
                  </div>
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