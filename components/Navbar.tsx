"use client";

import Link from "next/link";

import { useState } from "react";

import {
  Menu,
  X,
} from "lucide-react";

export default function Navbar() {

  const [
    showDropdown,
    setShowDropdown,
  ] = useState(false);

  const [
    mobileMenuOpen,
    setMobileMenuOpen,
  ] = useState(false);

  return (
    <>
      {/* TOP BAR */}

      <div className="hidden bg-[#11252d] px-6 py-2 text-sm text-white lg:block">

        <div className="page-container">

          <p>✉ Send a Message</p>
        </div>
      </div>

      {/* MAIN NAVBAR */}

      <header className="sticky top-0 z-50 w-full bg-black text-white shadow-md">

        <div className="page-container">

          <div className="flex h-[82px] items-center justify-between">

            {/* LOGO */}

            <Link
              href="/"
              className="flex items-center"
            >

              <img
                src="/images/vgs.png"
                alt="VGS Logo"
                className="h-[52px] w-auto object-contain lg:h-[60px]"
              />
            </Link>

            {/* DESKTOP NAV */}

            <nav className="hidden items-center gap-12 lg:flex">

              <Link
                href="/"
                className="text-[17px] font-light tracking-wide text-white transition hover:text-[#00A878]"
              >
                Book A Trip
              </Link>

              <Link
                href="/manage-booking"
                className="text-[17px] font-light tracking-wide text-white transition hover:text-[#00A878]"
              >
                Manage Booking
              </Link>

              <Link
                href="/contact"
                className="text-[17px] font-light tracking-wide text-white transition hover:text-[#00A878]"
              >
                Contact Us
              </Link>

              {/* DROPDOWN */}

              <div className="relative">

                <button
                  onClick={() =>
                    setShowDropdown(
                      !showDropdown
                    )
                  }
                  className="flex items-center gap-2 text-[17px] font-light tracking-wide text-white transition hover:text-[#00A878]"
                >
                  More Info

                  <span
                    className={`text-[11px] transition ${
                      showDropdown
                        ? "rotate-180"
                        : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>

                {showDropdown && (

                  <div className="absolute left-0 top-[52px] w-[240px] overflow-hidden rounded-sm bg-white shadow-xl">

                    <div className="flex flex-col">

                      {[
                        {
                          href: "/about",
                          label: "About Us",
                        },
                        {
                          href:
                            "/trip-feedback",
                          label:
                            "Trip Feedback",
                        },
                        {
                          href:
                            "/courier-feedback",
                          label:
                            "Courier Feedback",
                        },
                        {
                          href:
                            "/about#services",
                          label: "Services",
                        },
                        {
                          href: "/terms",
                          label:
                            "Terms & Condition",
                        },
                      ].map((item) => (

                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() =>
                            setShowDropdown(
                              false
                            )
                          }
                          className="border-b border-[#efefef] px-6 py-4 text-[15px] text-[#222] transition hover:bg-[#f7f7f7] hover:text-[#00A878]"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/login"
                className="text-[17px] font-light tracking-wide text-white transition hover:text-[#00A878]"
              >
                Login
              </Link>
            </nav>

            {/* MOBILE MENU BUTTON */}

            <button
              onClick={() =>
                setMobileMenuOpen(
                  !mobileMenuOpen
                )
              }
              className="flex h-[42px] w-[42px] items-center justify-center rounded-sm border border-[#333] text-white lg:hidden"
            >

              {mobileMenuOpen ? (
                <X size={22} />
              ) : (
                <Menu size={22} />
              )}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}

        {mobileMenuOpen && (

          <div className="border-t border-[#222] bg-black lg:hidden">

            <div className="page-container flex flex-col py-5">

              {[
                {
                  href: "/",
                  label: "Book A Trip",
                },
                {
                  href:
                    "/manage-booking",
                  label:
                    "Manage Booking",
                },
                {
                  href: "/contact",
                  label: "Contact Us",
                },
                {
                  href: "/about",
                  label: "About Us",
                },
                {
                  href:
                    "/trip-feedback",
                  label:
                    "Trip Feedback",
                },
                {
                  href:
                    "/courier-feedback",
                  label:
                    "Courier Feedback",
                },
                {
                  href:
                    "/about#services",
                  label: "Services",
                },
                {
                  href: "/terms",
                  label:
                    "Terms & Conditions",
                },
                {
                  href: "/login",
                  label: "Login",
                },
              ].map((item) => (

                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() =>
                    setMobileMenuOpen(
                      false
                    )
                  }
                  className="border-b border-[#222] py-4 text-[15px] text-white transition hover:text-[#00A878]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  );
}