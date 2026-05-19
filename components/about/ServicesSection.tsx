import Link from "next/link";

export default function ServicesSection() {
  return (
    <section
  id="services"
  className="bg-[#efefef] px-20 py-32"
>

      <div className="mx-auto max-w-[1400px]">

        {/* HEADING */}
        <div className="text-center">

          <h2 className="text-[42px] font-light uppercase tracking-[1px] text-[#222]">
            OUR SERVICES
          </h2>

          <p className="mt-4 text-[16px] text-[#666]">
            We provide the perfect service for you.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="mt-24 grid grid-cols-2 gap-28">

          {/* HIRED SERVICE */}
          <div className="flex gap-8">

            {/* ICON */}
            <div className="mt-2 flex h-[70px] w-[70px] items-center justify-center rounded-full bg-[#00A878] text-[28px] text-white">
              🚘
            </div>

            {/* CONTENT */}
            <div>

              <h3 className="text-[30px] font-light text-[#222]">
                Hired Service
              </h3>

              <p className="mt-8 text-[15px] leading-[36px] text-[#555]">
                With VALGEE TRANSPORT SERVICES, hiring a car
                is not just about taking you from one place
                to another; it’s a travel experience.
                We aim to help you create the most comfortable
                journey and unforgettable memories.
              </p>

              <p className="mt-8 text-[15px] leading-[36px] text-[#555]">
                Car hire service should never be a challenge,
                and with our affordable price and quality
                service, we aim to make you a satisfied
                customer. Our reliable vehicles are ready
                to give you a smooth road experience.
              </p>

              {/* CTA */}
              <Link
                href="/services"
                className="mt-8 inline-block text-[14px] uppercase tracking-[2px] text-[#00A878] transition hover:text-[#008F67]"
              >
                Learn More →
              </Link>
            </div>
          </div>

          {/* SHARED SERVICE */}
          <div className="flex gap-8">

            {/* ICON */}
            <div className="mt-2 flex h-[70px] w-[70px] items-center justify-center rounded-full bg-[#00A878] text-[28px] text-white">
              🚌
            </div>

            {/* CONTENT */}
            <div>

              <h3 className="text-[30px] font-light text-[#222]">
                Shared Service
              </h3>

              <p className="mt-8 text-[15px] leading-[36px] text-[#555]">
                With regular, reliable, scheduled and
                comfortable travel experience, there’s
                never been a better time to travel with VTS.
              </p>

              <p className="mt-8 text-[15px] leading-[36px] text-[#555]">
                Our chauffeurs have the experience to get
                you where you need to be while you enjoy
                your ride. We are happy to work with you
                to find the perfect vehicle for your group.
              </p>

              {/* CTA */}
              <Link
                href="/services"
                className="mt-8 inline-block text-[14px] uppercase tracking-[2px] text-[#00A878] transition hover:text-[#008F67]"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}