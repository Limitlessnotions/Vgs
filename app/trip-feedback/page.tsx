import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TripFeedbackPage() {
  return (
    <main>
      <Navbar />

      <section className="bg-[#efefef] px-20 py-24">

        <div className="mx-auto max-w-[1400px]">

          {/* HEADING */}
          <div className="text-center">

            <h1 className="text-[48px] font-light uppercase tracking-[1px] text-[#222]">
              TELL US ABOUT YOUR
              <br />
              VGS EXPERIENCE
            </h1>
          </div>

          {/* FORM */}
          <div className="mt-20 grid grid-cols-2 gap-24">

            {/* LEFT COLUMN */}
            <div className="space-y-8">

              {/* NAME */}
              <div>
                <label className="mb-3 block text-[15px] text-[#333]">
                  Name:
                </label>

                <input
                  type="text"
                  placeholder="e.g Sandra Paul"
                  className="h-[56px] w-full border border-[#d6d6d6] bg-white px-5 text-[15px] outline-none"
                />
              </div>

              {/* PHONE */}
              <div>
                <label className="mb-3 block text-[15px] text-[#333]">
                  Phone:
                </label>

                <input
                  type="text"
                  placeholder="e.g 07012345678"
                  className="h-[56px] w-full border border-[#d6d6d6] bg-white px-5 text-[15px] outline-none"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="mb-3 block text-[15px] text-[#333]">
                  Email (Optional):
                </label>

                <input
                  type="email"
                  placeholder="e.g name@gmail.com"
                  className="h-[56px] w-full border border-[#d6d6d6] bg-white px-5 text-[15px] outline-none"
                />
              </div>

              {/* ROUTE */}
              <div>

                <label className="mb-5 block text-[15px] text-[#333]">
                  What was your route?
                </label>

                <div className="grid grid-cols-2 gap-5">

                  {/* FROM */}
                  <div>
                    <label className="mb-3 block text-[14px] text-[#555]">
                      From where?
                    </label>

                    <select className="h-[56px] w-full border border-[#d6d6d6] bg-white px-4 text-[15px] outline-none">

                      <option>Select Departure Terminal</option>

                      <option>Abuja</option>

                      <option>Jos</option>

                      <option>Kaduna</option>

                      <option>Makurdi</option>
                    </select>
                  </div>

                  {/* TO */}
                  <div>
                    <label className="mb-3 block text-[14px] text-[#555]">
                      To where?
                    </label>

                    <select className="h-[56px] w-full border border-[#d6d6d6] bg-white px-4 text-[15px] outline-none">

                      <option>Select Arrival Terminal</option>

                      <option>Abuja</option>

                      <option>Jos</option>

                      <option>Kaduna</option>

                      <option>Makurdi</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* DATE */}
              <div>
                <label className="mb-3 block text-[15px] text-[#333]">
                  When did you travel?
                </label>

                <input
                  type="date"
                  className="h-[56px] w-full border border-[#d6d6d6] bg-white px-5 text-[15px] outline-none"
                />
              </div>

              {/* BOOKING EXPERIENCE */}
              <div>
                <label className="mb-3 block text-[15px] text-[#333]">
                  How was your booking experience on the website?
                </label>

                <select className="h-[56px] w-full border border-[#d6d6d6] bg-white px-4 text-[15px] outline-none">

                  <option>Select one</option>

                  <option>Excellent</option>

                  <option>Good</option>

                  <option>Average</option>

                  <option>Poor</option>
                </select>
              </div>

              {/* TERMINAL STAFF */}
              <div>
                <label className="mb-3 block text-[15px] text-[#333]">
                  How were you treated at the terminal by staff?
                </label>

                <select className="h-[56px] w-full border border-[#d6d6d6] bg-white px-4 text-[15px] outline-none">

                  <option>Select one</option>

                  <option>Excellent</option>

                  <option>Good</option>

                  <option>Average</option>

                  <option>Poor</option>
                </select>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="space-y-8">

              {/* VEHICLES */}
              <div>
                <label className="mb-3 block text-[15px] text-[#333]">
                  How would you rate the vehicles?
                </label>

                <select className="h-[56px] w-full border border-[#d6d6d6] bg-white px-4 text-[15px] outline-none">

                  <option>Select one</option>

                  <option>Excellent</option>

                  <option>Good</option>

                  <option>Average</option>

                  <option>Poor</option>
                </select>
              </div>

              {/* AC */}
              <div>
                <label className="mb-3 block text-[15px] text-[#333]">
                  How was the airconditioning system?
                </label>

                <select className="h-[56px] w-full border border-[#d6d6d6] bg-white px-4 text-[15px] outline-none">

                  <option>Select one</option>

                  <option>Excellent</option>

                  <option>Good</option>

                  <option>Average</option>

                  <option>Poor</option>
                </select>
              </div>

              {/* DRIVER BEHAVIOUR */}
              <div>
                <label className="mb-3 block text-[15px] text-[#333]">
                  How was the drivers behaviour?
                </label>

                <select className="h-[56px] w-full border border-[#d6d6d6] bg-white px-4 text-[15px] outline-none">

                  <option>Select one</option>

                  <option>Excellent</option>

                  <option>Good</option>

                  <option>Average</option>

                  <option>Poor</option>
                </select>
              </div>

              {/* DRIVING SKILL */}
              <div>
                <label className="mb-3 block text-[15px] text-[#333]">
                  How was their driving skill?
                </label>

                <select className="h-[56px] w-full border border-[#d6d6d6] bg-white px-4 text-[15px] outline-none">

                  <option>Select one</option>

                  <option>Excellent</option>

                  <option>Good</option>

                  <option>Average</option>

                  <option>Poor</option>
                </select>
              </div>

              {/* ROAD KNOWLEDGE */}
              <div>
                <label className="mb-3 block text-[15px] text-[#333]">
                  How was his knowledge of the road and route?
                </label>

                <select className="h-[56px] w-full border border-[#d6d6d6] bg-white px-4 text-[15px] outline-none">

                  <option>Select one</option>

                  <option>Excellent</option>

                  <option>Good</option>

                  <option>Average</option>

                  <option>Poor</option>
                </select>
              </div>

              {/* OVERALL EXPERIENCE */}
              <div>
                <label className="mb-3 block text-[15px] text-[#333]">
                  Please rate your overall experience
                </label>

                <select className="h-[56px] w-full border border-[#d6d6d6] bg-white px-4 text-[15px] outline-none">

                  <option>Select one</option>

                  <option>Excellent</option>

                  <option>Good</option>

                  <option>Average</option>

                  <option>Poor</option>
                </select>
              </div>

              {/* MESSAGE */}
              <div>
                <label className="mb-3 block text-[15px] text-[#333]">
                  Is there something else you would want to tell us in detail?
                </label>

                <textarea
                  rows={5}
                  className="w-full border border-[#d6d6d6] bg-white p-5 text-[15px] outline-none"
                />
              </div>

              {/* BUTTON */}
              <button className="h-[56px] bg-[#00A878] px-5 lg:px-10 text-[13px] uppercase tracking-[2px] text-white transition hover:bg-[#008F67]">
                Send Feedback
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}