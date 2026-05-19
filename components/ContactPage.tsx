export default function ContactPage() {
  return (
    <section className="min-h-screen bg-[#efefef] px-15 py-20">

      <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-18">

        {/* LEFT SIDE */}
        <div className="max-w-[500px]">

          {/* Heading */}
          <h1 className="text-[35px] font-light uppercase tracking-[1px] leading-[50px] text-[#222]">
            GET IN TOUCH
          </h1>

          {/* Intro */}
          <p className="mt-6 text-[18px] text-[#555]">
            Dear Customer,
          </p>

          {/* Body */}
          <div className="mt-14 space-y-5 text-[18px] leading-[42px] text-[#555]">

            <p>
              We would love to hear your enquiries,
              complaints and feedback.
            </p>

            <p>
              You can jump on a quick real time chat by clicking
              the "BLUE" message icon at the bottom right of your
              screen.
            </p>

            <p>
              or if you want a more detailed support or enquiry,
              click the GREEN button under this text to contact
              us via ticket, and we will get back to you shortly.
            </p>
          </div>

          {/* CTA */}
          <button className="mt-14 h-[58px] bg-[#00A878] px-8 text-[14px] uppercase tracking-[2px] text-white transition hover:bg-[#008F67]">
            Contact Customer Support
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="overflow-hidden shadow-sm">

          <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.365354283384!2d7.494689774655134!3d9.030397088967801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b91f759168f%3A0x8fd42f909e3cc705!2sSilver%20Line%20Plaza!5e0!3m2!1sen!2sng!4v1778522283577!5m2!1sen!2sng"
  width="620"
  height="520"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>
        </div>
      </div>
    </section>
  );
}