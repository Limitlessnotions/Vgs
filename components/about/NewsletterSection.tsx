export default function NewsletterSection() {
  return (
    <section className="bg-[#efefef] px-20 pb-32">

      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-20 border-t border-[#d8d8d8] pt-24">

        {/* LEFT */}
        <div>

          <h2 className="text-[42px] font-light uppercase tracking-[1px] text-[#222]">
            JOIN THE NEWSLETTER
          </h2>

          <p className="mt-4 text-[16px] leading-[34px] text-[#666]">
            Subscribe to our newsletter and get notified
            about news and benefits.
          </p>
        </div>

        {/* RIGHT */}
        <div className="flex w-full max-w-[650px]">

          <input
            type="email"
            placeholder="Enter your email"
            className="h-[60px] flex-1 border border-[#d8d8d8] bg-white px-6 text-[15px] outline-none"
          />

          <button className="h-[60px] bg-[#00A878] px-5 lg:px-10 text-[13px] uppercase tracking-[2px] text-white transition hover:bg-[#008F67]">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}