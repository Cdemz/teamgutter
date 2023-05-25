import Image from "next/image";
import About from "./components/About";
import Services from "./components/Services";

export default function Home() {
  return (
    <main>
      <section>
        <div className="relative h-[30rem]  md:h-[20rem]  ">
          <div className="md:h-[20rem] ">
            <Image
              src="/mainhero.png"
              alt="hero img"
              width={300}
              height={300}
              className="object-cover h-full w-full"
            />
          </div>
          <div className="absolute top-0  h-full w-full items-center flex justify-center    ">
            {" "}
            <div className="items-content-hero text-center flex gap-[2.5rem] flex-col  ">
              <h1 className="text-2xl font-bold md:text-[3rem]">
                COMMERCIAL ROOFING CALIFORNIA
              </h1>
              <p className="text-lg">Elevating Roofs, Protecting Homes.</p>
              <button
                type="button"
                className="bg-[--color-primary] px-6 py-6 rounded-2xl font-bold mx-auto hover:bg-opacity-50"
              >
                Get a quote
              </button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <About />
      </section>
      <section>
        <Services />
      </section>
    </main>
  );
}
