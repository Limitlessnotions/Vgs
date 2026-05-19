export default function Testimonials() {
  const testimonials = [
  {
    name: "Chinedu Okafor",
    text: `"The booking process was very smooth and the ride was comfortable from start to finish. I appreciate the professionalism of the drivers and customer support team."`,
  },

  {
    name: "Aisha Bello",
    text: `"I honestly did not expect the journey to be this organized. Departure was on time and the vehicle was very neat. I will definitely recommend VGS to friends and family."`,
  },

  {
    name: "Tunde Adeyemi",
    text: `"This was my first experience using the service and I was impressed by the comfort and safety. The online booking system also made everything easier for me."`,
  },
];
  return (
    <section className="bg-[#efefef] px-20 py-28">

      <div className="mx-auto max-w-[1400px]">

        {/* Heading */}
        <h2 className="text-[28px] uppercase tracking-wide text-[#222]">
          WHAT CLIENTS ARE SAYING...
        </h2>

        {/* Testimonials */}
        <div className="mt-20 grid grid-cols-3 gap-20">

          {testimonials.map((item, index) => (
            <div key={index} className="text-center">

              {/* Avatar */}
              <div className="mx-auto flex h-[70px] w-[70px] items-center justify-center rounded-full bg-[#d9d9d9] text-[30px] text-white">
                👤
              </div>

              {/* Text */}
              <p className="mx-auto mt-8 max-w-[320px] text-[13px] leading-[28px] text-[#444]">
                {item.text}
              </p>

              {/* Name */}
              <h3 className="mt-8 text-[16px] text-black">
                {item.name}
              </h3>

              {/* Role */}
              <p className="mt-1 text-[13px] text-red-500">
                Customer
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}