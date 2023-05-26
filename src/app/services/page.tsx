import { BsArrowRight, BsBricks } from "react-icons/bs";
import { GrUserWorker } from "react-icons/gr";
import { GiMiningHelmet } from "react-icons/gi";
import Link from "next/link";
import Image from "next/image";

const Services = () => {
  return (
    <div>
      <div className="relative mt-10">
        <div className="md:h-[20rem]">
          <Image
            src="/services.png"
            alt="service hero"
            width={300}
            height={300}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute top-0 bg-black bg-opacity-70 h-full w-full items-center justify-center text-center">
          <h1 className="text-[var(--color-bg)] text-6xl font-bold mt-[10rem] md:mt-[5rem]">
            Services
          </h1>
        </div>
      </div>
      <div className="bg-[var(--color-bg)] pt-6">
        <div className="px-6 text-center  mb-4">
          <p className="text-[var(--color-primary)] font-bold text-sm">
            The Best A Grade Commercial & Residential Services
          </p>
          <h1 className="text-black font-bold text-xl">
            {" "}
            High Quality rain gutter Solution and metal roofing <br /> For
            Residentials & Industries
          </h1>
        </div>
        {/* container for the options  */}
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 justify-between px-4">
          {/* items start  */}

          <div className=" py-6 pl-6 flex flex-col gap-8 bg-white text-[var(--color-text)] hover:text-white focus:text-white hover:bg-red-500 focus:bg-red-500 ">
            <BsBricks size={36} />
            <p className="text-3xl font-bold ">
              Metal <br /> Roof
            </p>
            <hr />
            <p className="w-[90%]">
              Metal roofs offer numerous benefits, including their longevity,
              energy efficiency, and resistance to fire and extreme weather
              conditions. They are known for their durability, with a lifespan
              that exceeds many other roofing materials. Metal roofs also have
              excellent energy-saving properties, as they reflect heat and
              reduce cooling costs. Furthermore, their resistance to fire, wind,
              and hail make them an ideal choice for areas prone to severe
              weather conditions.
            </p>
            <Link href="/contact">
              <button className=" flex items-center gap-2   px-5 py-2 rounded-2xl">
                Free Quote
                <div className="h-10 w-10 rounded-full flex justify-center items-center bg-[var(--color-bg)] ">
                  <BsArrowRight className="inline-flex text-[var(--color-primary)]" />
                </div>
              </button>
            </Link>
          </div>

          {/* item 2 */}

          <div className=" py-6 pl-6 flex flex-col gap-8 bg-white text-[var(--color-text)] hover:text-white focus:text-white hover:bg-red-500 focus:bg-red-500  ">
            <GrUserWorker size={36} />
            <p className="text-3xl font-bold ">
              Construction <br /> Consultants
            </p>
            <hr />
            <p className="w-[90%]">
              we serve as your dedicated construction consultants, providing
              expert guidance and solutions for your construction projects. With
              our extensive knowledge and experience, we offer valuable
              insights, innovative strategies, and meticulous attention to
              detail to ensure successful project outcomes.
            </p>
            <Link href="/contact">
              <button className=" flex items-center gap-2   px-5 py-2 rounded-2xl">
                Free Quote
                <div className="h-10 w-10 rounded-full flex justify-center items-center bg-[var(--color-bg)] ">
                  <BsArrowRight className="inline-flex text-[var(--color-primary)]" />
                </div>
              </button>
            </Link>
          </div>

          {/* item 3 */}

          <div className=" py-6 pl-6 flex flex-col gap-8 bg-white text-[var(--color-text)] hover:text-white focus:text-white hover:bg-red-500 focus:bg-red-500 ">
            <GrUserWorker size={36} />
            <p className="text-3xl font-bold ">
              Rain <br /> Gutter
            </p>
            <hr />
            <p className="w-[90%]">
              In addition to installation, we provide comprehensive rain gutter
              maintenance services. Regular gutter cleaning is essential to
              remove debris and prevent clogs that can impede proper water
              drainage. Our team conducts thorough cleanings, ensuring that your
              gutters remain free from obstructions and function optimally. We
              also inspect the gutter system for any signs of damage or wear,
              offering timely repairs to maintain its efficiency.
            </p>
            <Link href="/contact">
              <button className=" flex items-center gap-2   px-5 py-2 rounded-2xl">
                Free Quote
                <div className="h-10 w-10 rounded-full flex justify-center items-center bg-[var(--color-bg)] ">
                  <BsArrowRight className="inline-flex text-[var(--color-primary)]" />
                </div>
              </button>
            </Link>
          </div>

          {/* item 4 */}

          <div className=" py-6 pl-6 flex flex-col gap-8 bg-white text-[var(--color-text)] hover:text-white focus:text-white hover:bg-red-500 focus:bg-red-500 ">
            <GrUserWorker size={36} />
            <p className="text-3xl font-bold ">
              Roof <br /> Ventilation
            </p>
            <hr />
            <p className="w-[90%]">
              One of the key advantages of roof ventilation is temperature
              regulation. During hot seasons, the ventilation system allows hot
              air to escape, preventing the attic from becoming an oven. This
              helps to lower the overall temperature of the building, reducing
              the strain on your cooling systems and ultimately improving energy
              efficiency. In colder seasons, proper ventilation helps prevent
              condensation and the formation of ice dams, which can cause damage
              to the roof and lead to leaks.
            </p>
            <Link href="/contact">
              <button className=" flex items-center gap-2   px-5 py-2 rounded-2xl">
                Free Quote
                <div className="h-10 w-10 rounded-full flex justify-center items-center bg-[var(--color-bg)] ">
                  <BsArrowRight className="inline-flex text-[var(--color-primary)]" />
                </div>
              </button>
            </Link>
          </div>

          {/* item 5 */}

          <div className=" py-6 pl-6 flex flex-col gap-8 bg-white text-[var(--color-text)] hover:text-white focus:text-white hover:bg-red-500 focus:bg-red-500 ">
            <GrUserWorker size={36} />
            <p className="text-3xl font-bold "> Roof Maintenance</p>
            <hr />
            <p className="w-[90%]">
              Regular roof inspections are a crucial part of our maintenance
              program. Our knowledgeable professionals conduct thorough
              assessments, examining the roof for any signs of damage, wear, or
              potential issues. By identifying and addressing small problems
              early on, we can prevent them from escalating into more
              significant and costly issues. Our meticulous inspections cover
              all aspects of the roof, including its structure, materials,
              seals, flashing, and drainage systems.
            </p>
            <Link href="/contact">
              <button className=" flex items-center gap-2   px-5 py-2 rounded-2xl">
                Free Quote
                <div className="h-10 w-10 rounded-full flex justify-center items-center bg-[var(--color-bg)] ">
                  <BsArrowRight className="inline-flex text-[var(--color-primary)]" />
                </div>
              </button>
            </Link>
          </div>

          {/* item 6 */}

          <div className=" py-6 pl-6 flex flex-col gap-8 bg-white text-[var(--color-text)] hover:text-white focus:text-white hover:bg-red-500 focus:bg-red-500 ">
            <GrUserWorker size={36} />
            <p className="text-3xl font-bold ">Roof Repair</p>
            <hr />
            <p className="w-[90%]">
              When it comes to leaks, we employ thorough diagnostic techniques
              to pinpoint the source accurately. Once identified, we efficiently
              repair the area to prevent further water damage and maintain a
              watertight seal. Our team is well-versed in working with various
              roofing materials, ensuring seamless replacements of tiles or
              shingles to restore the visual appeal and structural integrity of
              your roof.
            </p>
            <Link href="/contact">
              <button className=" flex items-center gap-2   px-5 py-2 rounded-2xl">
                Free Quote
                <div className="h-10 w-10 rounded-full flex justify-center items-center bg-[var(--color-bg)] ">
                  <BsArrowRight className="inline-flex text-[var(--color-primary)]" />
                </div>
              </button>
            </Link>
          </div>

          {/* items 7 */}
          <div className=" py-6 pl-6 flex flex-col gap-8 bg-white text-[var(--color-text)] hover:text-white focus:text-white hover:bg-red-500 focus:bg-red-500 ">
            <GiMiningHelmet size={36} />
            <p className="text-3xl font-bold ">
              New Roof <br /> Installation
            </p>
            <hr />
            <p className="w-[90%]">
              Whether you are constructing a new home or office space, our
              professionals have the expertise to deliver high-quality results
              that meet your specific requirements. With a focus on precision
              and attention to detail, we utilize top-notch materials and
              industry best practices to ensure the longevity and durability of
              your new roof. Trust us to handle the complete installation of
              your residential or commercial roof with professionalism and
              excellence.
            </p>
            <Link href="/contact">
              <button className=" flex items-center gap-2   px-5 py-2 rounded-2xl">
                Free Quote
                <div className="h-10 w-10 rounded-full flex justify-center items-center bg-[var(--color-bg)] ">
                  <BsArrowRight className="inline-flex text-[var(--color-primary)]" />
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
