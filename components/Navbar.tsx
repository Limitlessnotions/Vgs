"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <>
      {/* TOP BAR */}
      <div className="hidden bg-[#11252d] px-24 py-2 text-sm text-white lg:block">
        <p>✉ Send a Message</p>
      </div>

      {/* MAIN NAVBAR */}
      <header className="relative z-50 w-full bg-black text-white">

        <div className="mx-auto flex h-[92px] max-w-[1400px] items-center justify-between px-5 lg:px-10">

          {/* LOGO */}
          <Link href="/" className="flex items-center">
            <img
              src="/images/vgs.png"
              alt="VGS Logo"
              className="h-[60px] w-auto object-contain"
            />
          </Link>

          {/* NAVIGATION */}
          <nav className="hidden items-center gap-20 lg:flex">

            {/* BOOK A TRIP */}
            <Link
              href="/"
              className="text-[18px] font-light tracking-wide text-white transition hover:text-[#00A878]"
            >
              Book A Trip
            </Link>

            {/* MANAGE BOOKING */}
            <Link
              href="/manage-booking"
              className="text-[18px] font-light tracking-wide text-white transition hover:text-[#00A878]"
            >
              Manage Your Booking
            </Link>

            {/* CONTACT */}
            <Link
              href="/contact"
              className="text-[18px] font-light tracking-wide text-white transition hover:text-[#00A878]"
            >
              Contact Us
            </Link>

            {/* MORE INFO */}
            <div className="relative">

              {/* BUTTON */}
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center gap-2 text-[18px] font-light tracking-wide text-white transition hover:text-[#00A878]"
              >
                More Info

                <span
                  className={`text-[11px] transition ${
                    showDropdown ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              {/* DROPDOWN */}
              {showDropdown && (
                <div className="absolute left-0 top-[52px] w-[240px] bg-white">

                  <div className="flex flex-col">

                    <Link
                      href="/about"
                      onClick={() => setShowDropdown(false)}
                      className="border-b border-[#efefef] px-6 py-5 text-[15px] text-[#222] transition hover:bg-[#f7f7f7] hover:text-[#00A878]"
                    >
                      About Us
                    </Link>

                    <Link
                      href="/trip-feedback"
                      onClick={() => setShowDropdown(false)}
                      className="border-b border-[#efefef] px-6 py-5 text-[15px] text-[#222] transition hover:bg-[#f7f7f7] hover:text-[#00A878]"
                    >
                      Trip Feedback
                    </Link>

                    <Link
                      href="/courier-feedback"
                      onClick={() => setShowDropdown(false)}
                      className="border-b border-[#efefef] px-6 py-5 text-[15px] text-[#222] transition hover:bg-[#f7f7f7] hover:text-[#00A878]"
                    >
                      Courier Feedback
                    </Link>

                    <Link
                      href="/about#services"
                      onClick={() => setShowDropdown(false)}
                      className="border-b border-[#efefef] px-6 py-5 text-[15px] text-[#222] transition hover:bg-[#f7f7f7] hover:text-[#00A878]"
                    >
                      Services
                    </Link>

                    <Link
                      href="/terms"
                      onClick={() => setShowDropdown(false)}
                      className="px-6 py-5 text-[15px] text-[#222] transition hover:bg-[#f7f7f7] hover:text-[#00A878]"
                    >
                      Terms & Condition
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* LOGIN */}
            <Link
              href="/login"
              className="text-[18px] font-light tracking-wide text-white transition hover:text-[#00A878]"
            >
              Login
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}