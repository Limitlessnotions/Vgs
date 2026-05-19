import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ServicesPage() {
  return (
    <main>
      <Navbar />

      <section className="bg-[#efefef] px-20 py-28">

        <div className="mx-auto max-w-[1400px]">

          <div className="text-center">

            <h1 className="text-[58px] font-light uppercase tracking-[1px] text-[#222]">
              OUR SERVICES
            </h1>

            <p className="mx-auto mt-8 max-w-[900px] text-[17px] leading-[36px] text-[#666]">
              We provide reliable transportation,
              logistics and courier services with
              safety, comfort and professionalism.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}