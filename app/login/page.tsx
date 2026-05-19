import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function LoginPage() {
  return (
    <main className="bg-[#efefef]">
      <Navbar />

      <section className="px-20 py-24">

        <div className="mx-auto grid max-w-[1400px] grid-cols-2 items-center gap-24">

          {/* LEFT SIDE */}
          <div className="max-w-[420px]">

            {/* TITLE */}
            <h1 className="text-[34px] lg:text-[52px] font-light uppercase tracking-[1px] text-[#222]">
              LOGIN
            </h1>

            {/* FORM */}
            <form className="mt-16">

              {/* EMAIL */}
              <div className="mb-10">

                <label className="mb-4 block text-[15px] text-[#333]">
                  Email:
                </label>

                <input
                  type="email"
                  className="h-[58px] w-full border border-[#d6d6d6] bg-white px-5 text-[15px] outline-none transition focus:border-[#00A878]"
                />
              </div>

              {/* PASSWORD */}
              <div className="mb-10">

                <label className="mb-4 block text-[15px] text-[#333]">
                  Password:
                </label>

                <input
                  type="password"
                  className="h-[58px] w-full border border-[#d6d6d6] bg-white px-5 text-[15px] outline-none transition focus:border-[#00A878]"
                />
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="h-[58px] w-[170px] bg-[#222] text-[13px] uppercase tracking-[3px] text-white transition hover:bg-[#00A878]"
              >
                Login
              </button>

              {/* LINKS */}
              <div className="mt-8 flex items-center gap-3 text-[13px]">

                <a
                  href="#"
                  className="text-[#00A878] transition hover:text-[#008F67]"
                >
                  Forgot Your Password?
                </a>

                <span className="text-[#999]">|</span>

                <a
                  href="#"
                  className="text-[#00A878] transition hover:text-[#008F67]"
                >
                  Create New Account
                </a>
              </div>

              {/* GOOGLE BUTTON */}
              <button
                type="button"
                className="mt-10 flex h-[58px] items-center gap-4 border border-[#d6d6d6] bg-white px-6 text-[15px] text-[#222] transition hover:border-[#00A878]"
              >
                <span className="text-[22px]">G</span>

                <span>Or Sign in with Google</span>
              </button>
            </form>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="flex justify-center">

            <div className="overflow-hidden bg-white p-5 shadow-[0_10px_40px_rgba(0,0,0,0.08)]">

              <img
                src="/images/slide1.jpg"
                alt="Travel App"
                className="h-auto w-[520px] object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}