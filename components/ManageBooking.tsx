export default function ManageBooking() {

  return (
    <section className="min-h-screen bg-[#efefef]">

      <div className="page-container section-spacing">

        <div className="responsive-flex gap-16 lg:gap-24">

          {/* =========================
              LEFT SIDE
          ========================== */}

          <div className="w-full flex-1">

            {/* HEADING */}

            <p className="text-[12px] uppercase tracking-[6px] text-[#777]">

              Booking Management
            </p>

            <h1 className="page-title mt-5 leading-[1.1] text-[#222]">

              Manage
              <br />
              Your Booking
            </h1>

            <p className="mt-6 max-w-[600px] text-[15px] leading-[30px] text-[#666]">

              Verify your booking,
              reschedule trips or manage
              cancellations using your
              booking reference number.
            </p>

            {/* =========================
                CARD
            ========================== */}

            <div className="mt-12 bg-white p-6 shadow-sm lg:mt-14 lg:p-10">

              {/* INPUT SECTION */}

              <div className="border border-[#d8d8d8] bg-[#f8f8f8] p-5 lg:p-8">

                <label className="block text-[12px] uppercase tracking-[4px] text-[#555]">

                  Enter Reference Number
                </label>

                {/* INPUT ROW */}

                <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-center">

                  <input
                    type="text"
                    placeholder="e.g VTSCID14857079869"
                    className="form-input bg-white placeholder:text-[#999] focus:border-[#00A878]"
                  />

                  <button className="primary-button w-full whitespace-nowrap lg:w-auto">

                    Search Booking
                  </button>
                </div>
              </div>

              {/* RESULTS */}

              <div className="mt-8 border-t border-[#e5e5e5] pt-8">

                <p className="text-[18px] font-light text-[#333]">

                  Results for:
                </p>

                <div className="mt-6 rounded-[12px] border border-dashed border-[#d8d8d8] bg-[#fafafa] px-5 py-8 text-center">

                  <p className="text-[15px] leading-[28px] text-[#777]">

                    Enter a booking reference
                    number above to retrieve
                    your booking details.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* =========================
              RIGHT SIDE
          ========================== */}

          <div className="flex w-full justify-center lg:w-auto">

            <div className="relative flex h-[280px] w-[280px] items-center justify-center rounded-full bg-[#00A878] sm:h-[360px] sm:w-[360px] lg:h-[500px] lg:w-[500px]">

              <img
                src="/images/manage-booking.png"
                alt="Manage Booking"
                className="absolute bottom-[-10px] h-[340px] w-auto object-contain sm:h-[430px] lg:bottom-[40px] lg:h-[620px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}