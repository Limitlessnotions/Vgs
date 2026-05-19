import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <main className="bg-[#efefef]">
      <Navbar />

      {/* HERO */}
      <section className="border-b border-[#ddd] bg-white px-20 py-24">

        <div className="mx-auto max-w-[1400px]">

          <h1 className="text-[58px] font-light uppercase tracking-[1px] text-[#222]">
            Terms & Conditions
          </h1>

          <p className="mt-6 max-w-[900px] text-[17px] leading-[36px] text-[#666]">
            Please read these terms carefully before using
            Vinakul Global Services transport and logistics services.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="px-20 py-24">

        <div className="mx-auto max-w-[1200px]">

          {/* BLOCK */}
          <div className="mb-24">

            <h2 className="text-[38px] font-light text-[#222]">
              Purpose & Scope
            </h2>

            <p className="mt-10 text-[16px] leading-[38px] text-[#555]">
              The purpose of these terms and conditions is to govern
              the contractual relationship between Clients and
              Vinakul Global Services (VGS) regarding transportation,
              logistics and courier services.
            </p>

            <p className="mt-8 text-[16px] leading-[38px] text-[#555]">
              By making a reservation or using our services,
              clients acknowledge that they have read,
              understood and accepted these conditions.
            </p>
          </div>

          {/* BLOCK */}
          <div className="mb-24">

            <h2 className="text-[38px] font-light text-[#222]">
              Bookings, Payments & Reservations
            </h2>

            <p className="mt-10 text-[16px] leading-[38px] text-[#555]">
              Reservations can be made online or at our office locations.
              Tickets are non-transferable unless approved by VGS management.
            </p>

            <p className="mt-8 text-[16px] leading-[38px] text-[#555]">
              Pricing and estimated travel times are approximations
              and may change due to road conditions, weather,
              traffic or operational challenges.
            </p>
          </div>

          {/* BLOCK */}
          <div className="mb-24">

            <h2 className="text-[38px] font-light text-[#222]">
              Check-in & Boarding
            </h2>

            <p className="mt-10 text-[16px] leading-[38px] text-[#555]">
              Clients are required to arrive at least
              30 minutes before departure time.
              Vehicles will depart as scheduled and delays
              caused by late arrivals may result in forfeited bookings.
            </p>
          </div>

          {/* BLOCK */}
          <div className="mb-24">

            <h2 className="text-[38px] font-light text-[#222]">
              Luggage Regulations
            </h2>

            <p className="mt-10 text-[16px] leading-[38px] text-[#555]">
              Clients are advised to travel light.
              Excess luggage may attract additional fees
              or require additional seating arrangements.
            </p>

            <p className="mt-8 text-[16px] leading-[38px] text-[#555]">
              Dangerous goods, prohibited substances,
              explosives and hazardous materials are not allowed.
            </p>
          </div>

          {/* BLOCK */}
          <div className="mb-24">

            <h2 className="text-[38px] font-light text-[#222]">
              Reservation Rescheduling
            </h2>

            <p className="mt-10 text-[16px] leading-[38px] text-[#555]">
              Rescheduling requests must be made
              at least 24 hours before departure time.
            </p>

            <p className="mt-8 text-[16px] leading-[38px] text-[#555]">
              Rescheduling remains subject to seat availability
              and current transportation rates.
            </p>
          </div>

          {/* BLOCK */}
          <div className="mb-24">

            <h2 className="text-[38px] font-light text-[#222]">
              Company Liability
            </h2>

            <p className="mt-10 text-[16px] leading-[38px] text-[#555]">
              VGS shall not be held liable for delays,
              losses or damages caused by circumstances
              beyond operational control including accidents,
              weather conditions, traffic or government restrictions.
            </p>
          </div>

          {/* BLOCK */}
          <div>

            <h2 className="text-[38px] font-light text-[#222]">
              General Terms
            </h2>

            <p className="mt-10 text-[16px] leading-[38px] text-[#555]">
              These terms constitute the complete agreement
              between the Client and VGS.
            </p>

            <p className="mt-8 text-[16px] leading-[38px] text-[#555]">
              For further enquiries, please contact our support team.
            </p>

            <p className="mt-12 text-[14px] uppercase tracking-[3px] text-[#00A878]">
              Last Updated — May 2026
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}