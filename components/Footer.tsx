export default function Footer() {
  return (
    <footer className="bg-[#2f5738] px-20 py-16 text-white">

      <div className="mx-auto grid max-w-[1800px] grid-cols-5 gap-10">

        {/* Brand */}
        <div>

          <img
  src="/images/vgs.png"
  alt="VGS Logo"
  className="h-[80px] w-auto object-contain"
/>

          <p className="mt-6 text-[10px] leading-[28px] text-[#d7d7d7]">
            We offer a unique service of transportation for those willing
            to travel safely, comfortably and excellent customer service
            are our core values.
          </p>

          {/* Socials */}
          <div className="mt-8 flex gap-4">

            {["f", "x", "g", "i", "in"].map((social) => (
              <div
                key={social}
                className="flex h-[36px] w-[36px] items-center justify-center rounded-full border border-white text-[13px]"
              >
                {social}
              </div>
            ))}
          </div>
        </div>

        {/* Jos Office */}
        <div>
          <h3 className="text-[18px] uppercase">
            JOS OFFICE
          </h3>

          <div className="mt-8 space-y-4 text-[12px] leading-[28px] text-[#d7d7d7]">
            <p>Customer Care :</p>
            <p>08130026291 (Transport)</p>
            <p>08120103826 (Logistics)</p>
            <p>Whatsapp Only :</p>
            <p>+234 707 030 6869</p>
          </div>
        </div>

        {/* Jos Office 2 */}
        <div>
          <h3 className="text-[18px] uppercase">
            JOS OFFICE
          </h3>

          <div className="mt-8 text-[12px] leading-[28px] text-[#d7d7d7]">
            <p>
              Terminus / Old Juth.
              <br />
              Beside Hospital, Old Hill Building.
            </p>
          </div>
        </div>

        {/* Kaduna */}
        <div>
          <h3 className="text-[18px] uppercase">
            KADUNA OFFICE
          </h3>

          <div className="mt-8 text-[12px] leading-[28px] text-[#d7d7d7]">
            <p>
              Plot 3, Opposite NNPC Barracks,
              <br />
              Kaduna.
            </p>
          </div>
        </div>

        {/* Makurdi */}
        <div>
          <h3 className="text-[18px] uppercase">
            MAKURDI OFFICE
          </h3>

          <div className="mt-8 text-[12px] leading-[28px] text-[#d7d7d7]">
            <p>
              Opposite Benue State Road,
              <br />
              Makurdi, Benue State.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mx-auto mt-20 flex max-w-[1500px] items-center justify-between border-t border-[#ffffff33] pt-8">

        <p className="text-[8px] text-[#d7d7d7]">
          All rights reserved | Powered by VGS
        </p>

        <div className="flex gap-8 text-[13px] text-[#d7d7d7]">
          <button>Book Trip</button>
          <button>About</button>
          <button>Services</button>
          <button>T&amp;C</button>
          <button>Send An Enquiry</button>
        </div>
      </div>
    </footer>
  );
}