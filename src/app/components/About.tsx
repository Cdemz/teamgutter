import React from "react";

const About = () => {
  return (
    <main>
      <div className="text-[var(--color-text)] bg-[var(--color-bg)] pt-6 flex flex-col md:flex-row">
        <div className="p-6">
          <h1 className="">
            Team Gutter stands out as a top-notch roofing contractor in
            California, catering to the roofing needs of both commercial and
            residential customers. With an unwavering commitment to excellence,
            our company serves clients across the Greater California area,
            including the surrounding boroughs.
          </h1>
          <div className="p-6">
            <p>
              Team Gutter, the leading roofing company, is dedicated to
              providing the finest solutions tailored to your needs, whether you
              seek assistance with a new build or require a roof refurbishment.
              Our team of highly skilled professionals takes pride in delivering
              outstanding design and installation services at competitive
              prices. <span className="block mt-4" /> We specialize in a
              comprehensive range of roofing services, both modern and
              traditional, designed to meet the requirements of our valued
              domestic and commercial clients. Our expertise extends to flat
              roofs, green roofs, traditional tiling, single ply systems, and
              liquid roof coverings. To benefit from a complimentary initial
              consultation and quotation, don't hesitate to reach out to our
              approachable team. We're here to assist you every step of the way.
            </p>
          </div>
        </div>
        <div className="forms">
          {/* form  */}
          <section className="flex">
            <div className="p-4 flex flex-col gap-3 ">
              {/* first name  */}
              <h1 className="text-center">Request A Quote</h1>
              <div className="relative w-full mb-3 flex items-center gap-2">
                <label
                  className="block uppercase t text-xs font-bold mb-2"
                  htmlFor="email"
                ></label>
                <input
                  type="email"
                  className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                  placeholder="First Name"
                />
              </div>
              {/* email  */}
              <div className="relative w-full mb-3 flex items-center gap-2">
                <label
                  className="block uppercase t text-xs font-bold mb-2"
                  htmlFor="email"
                ></label>
                <input
                  type="email"
                  className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                  placeholder="Email"
                />
              </div>
              {/* last name  */}
              {/* phone */}
              <div className="relative w-full mb-3 flex items-center gap-2">
                <label
                  className="uppercase t text-xs font-bold mb-2"
                  htmlFor="email"
                ></label>
                <input
                  type="email"
                  className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                  placeholder="Phone"
                />
              </div>
              {/* event date */}
              <div className="relative w-full mb-3 flex items-center gap-2">
                <label
                  className="uppercase t text-xs font-bold mb-2"
                  htmlFor="email"
                ></label>
                <input
                  type="email"
                  className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                  placeholder="What is your next project?"
                />
              </div>
              {/* about your event  */}
              <div className="relative w-full mb-3 flex items-center gap-2">
                <label
                  className="uppercase t text-xs font-bold mb-2"
                  htmlFor="email"
                ></label>
                <input
                  type="email"
                  className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full h-[8em] placeholder-top"
                  placeholder="Feed us with a little more detail"
                />
              </div>
              <button
                type="button"
                className="bg-[rgb(214,203,171)] mx-auto py-3 px-[8rem] rounded-2xl"
              >
                Submit
              </button>{" "}
            </div>{" "}
          </section>
        </div>
      </div>
    </main>
  );
};

export default About;
