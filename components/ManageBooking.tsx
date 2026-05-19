export default function ManageBooking() {
  return (
    <section className="min-h-screen bg-[#efefef] px-20 py-32">

      <div className="mx-auto flex max-w-[1400px] items-center justify-center gap-40">

        {/* LEFT SIDE */}
        <div>

          {/* Heading */}
          <h1 className="text-[58px] font-light uppercase tracking-[1px] leading-[72px] text-[#222]">
            MANAGE YOUR BOOKING
          </h1>

          <p className="mt-3 text-[18px] text-[#555]">
            Verify Rescheduling | Cancellations
          </p>

          {/* Card */}
          <div className="mt-14 w-[560px] bg-[#f3f3f3] p-8 shadow-sm">

            {/* Top Input Section */}
            <div className="border border-[#d8d8d8] bg-[#f7f7f7] p-6">

              <label className="block text-[14px] text-[#444]">
                Enter Reference No
              </label>

              {/* Input Row */}
              <div className="mt-5 flex items-center gap-4">

                <input
                  type="text"
                  placeholder="e.g VTSCID14857079869"
                  className="h-[52px] w-full border border-[#d8d8d8] bg-white px-4 text-[14px] outline-none"
                />

                <button className="h-[52px] min-w-[160px] bg-[#00A878] px-6 text-[13px] uppercase tracking-[2px] text-white transition hover:bg-[#008F67]">
                  SEARCH
                  <br />
                  BOOKING
                </button>
              </div>
            </div>

            {/* Divider */}
            <div className="mt-8 border-t border-[#d8d8d8] pt-8">

              <p className="text-[18px] text-[#333]">
                Results for:
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center justify-center">

          {/* Green Circle */}
         <div className="relative h-[500px] w-[500px] rounded-full bg-[#00A878]">

  <img
    src="/images/manage-booking.png"
    alt="Manage Booking"
    className="absolute bottom-[40px] left-1/2 z-10 h-[620px] w-auto -translate-x-1/2 object-contain"
  />
</div>
        </div>
      </div>
    </section>
  );
}