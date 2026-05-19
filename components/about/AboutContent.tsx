export default function AboutContent() {
  return (
    <section className="bg-[#efefef] px-20 py-28">

      <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-28">

        {/* LEFT */}
        <div>

          <h2 className="text-[38px] font-light uppercase tracking-[1px] text-[#222]">
            ABOUT US
          </h2>

          <div className="mt-10 space-y-10 text-[15px] leading-[34px] text-[#555]">

            <p>
              Valgee Transport Services (VTS) commenced
              car hire service on the 4th of June 2017.
              We are strategically located in the urban
              area of Plateau State called Jos to meet
              the increasing demand for charter services
              within the city and for trips to and from Jos.
            </p>

            <p>
              We offer a unique service of transportation
              for those visiting Jos where safety,
              comfort, affordability and excellent
              customer service are our core values.
              We understand the need to travel in style,
              comfort and safety at all times.
            </p>

            <p>
              We are committed to maintaining the
              highest standards when it comes to
              car hire service with our professionally
              trained drivers. Whatever your plans are,
              our reliable vehicles are ready to give
              you a smooth road experience.
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="space-y-16">

          {/* Vision */}
          <div>
            <h3 className="text-[28px] font-light uppercase tracking-[1px] text-[#222]">
              Vision
            </h3>

            <p className="mt-6 text-[15px] leading-[34px] text-[#555]">
              To be the most innovative and preferred
              transport service organisation in Nigeria
              and beyond.
            </p>
          </div>

          {/* Mission */}
          <div>
            <h3 className="text-[28px] font-light uppercase tracking-[1px] text-[#222]">
              Mission
            </h3>

            <p className="mt-6 text-[15px] leading-[34px] text-[#555]">
              To deliver matchless transport service in
              Nigeria and beyond through sustained
              innovation and continuous improvement
              of internal operations, leveraging on
              state-of-the-art equipment and globally
              available technology.
            </p>
          </div>

          {/* Values */}
          <div>
            <h3 className="text-[28px] font-light uppercase tracking-[1px] text-[#222]">
              Our Values
            </h3>

            <p className="mt-6 text-[15px] leading-[34px] text-[#555]">
              Innovation, Mutuality,
              Excellence, Integrity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}