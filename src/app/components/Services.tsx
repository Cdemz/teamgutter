import {
  MdRoofing,
  MdMiscellaneousServices,
  MdHomeRepairService,
  MdWaterDamage,
  MdOutlineAir,
} from "react-icons/md";

import { FaTools } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";

const Services = () => {
  return (
    <main>
      <div className="p-6 bg-[var(--color-primary)]">
        <h3 className="text-gray-400 text-2xl font-bold">OUR SERVICES</h3>
        <h1 className="text-4xl font-bold">What We Do</h1>
        <p className="md:w-[80%]">
          Experience Superior Roofing Services Tailored to Your Needs. At Team
          Gutter, we take pride in being your trusted roofing experts, offering
          a comprehensive range of top-notch services. Whether you require a new
          roof installation, efficient repairs, or reliable maintenance, our
          skilled team is here to deliver exceptional results.
        </p>
        <div className="">
          <div className="container mx-auto grid grid-cols-2 md:grid-cols-5 gap-4 mt-6">
            {/* item 1 */}
            <div className="bg-white text-[var(--color-text)] h-[10rem] rounded-xl w-[9rem] flex flex-col justify-between p-6">
              <MdRoofing size={30} className="ml-auto" />
              <p className="font-bold">Roof Installation</p>
            </div>
            {/* item 2 */}
            <div className="bg-white text-[var(--color-text)] h-[10rem] rounded-xl w-[9rem] flex flex-col justify-between p-6">
              <MdMiscellaneousServices size={30} className="ml-auto" />
              <p className="font-bold">Roof Repair</p>
            </div>
            {/* item 3 */}
            <div className="bg-white text-[var(--color-text)] h-[10rem] rounded-xl w-[9rem] flex flex-col justify-between p-6">
              <MdHomeRepairService size={30} className="ml-auto" />
              <p className="font-bold"> Roof Maintenance</p>
            </div>
            {/* item 4 */}
            <div className="bg-white text-[var(--color-text)] h-[10rem] rounded-xl w-[9rem] flex flex-col justify-between p-6">
              <FaTools size={30} className="ml-auto" />
              <p className="font-bold"> Metal Roofing</p>
            </div>
            {/* item 5 */}
            <div className="bg-white text-[var(--color-text)] h-[10rem] rounded-xl w-[9rem] flex flex-col justify-between p-6">
              <MdOutlineAir size={30} className="ml-auto" />
              <p className="font-bold">Roof Ventilation</p>
            </div>
            {/* item 6 */}
            <div className="bg-white text-[var(--color-text)] h-[10rem] rounded-xl w-[9rem] flex flex-col justify-between p-6">
              <MdWaterDamage size={30} className="ml-auto" />
              <p className="font-bold">Roof Waterproofing</p>
            </div>
          </div>
          {/* end of the item  */}
        </div>
        {/* services details  */}
        <div className=" flex gap-10 overflow-hidden overflow-x-scroll">
          {/* item 1 */}
          <div className="bg-[var(--color-bg)] text-[var(--color-text)] p-10 mt-10 flex flex-col md:flex-row w-[180rem] ">
            {/* image */}
            <div className=" md:h-[16rem]">
              <Image
                src="/roofinstallation.png"
                alt="roof installing"
                width={300}
                height={300}
                className="h-full w-full object-cover"
              />
            </div>
            {/* details gan */}

            <div className="md:mt-0 mt-6 md:w-[40rem] md:ml-10 w-[18rem]">
              <h1 className="font-extrabold text-2xl">Roof Installation</h1>
              <p>
                With a focus on precision and attention to detail, we utilize
                top-notch materials and industry best practices to ensure the
                longevity and durability of your new roof. Trust us to handle
                the complete installation of your residential or commercial roof
                with professionalism and excellence.
              </p>
              <button
                type="button"
                className="flex  items-center gap-4 font-bold"
              >
                READ MORE <BsArrowRight className="" size={20} />
              </button>
            </div>
          </div>
          {/* item 2 */}
          <div className="bg-[var(--color-bg)] text-[var(--color-text)] p-10 mt-10 flex flex-col md:flex-row w-[180rem] ">
            {/* image */}
            <div className=" md:h-[16rem]">
              <Image
                src="/repair.png"
                alt="roof installing"
                width={300}
                height={300}
                className="h-full w-full object-cover"
              />
            </div>
            {/* details gan */}

            <div className="md:mt-0 mt-6 md:w-[40rem] md:ml-10 w-[18rem]">
              <h1 className="font-extrabold text-2xl">Roof Repair</h1>
              <p>
                We understand the importance of a well-maintained roof, which is
                why our team excels in roof repair services. From minor repairs
                to more extensive damage, we have the expertise to restore the
                integrity and functionality of your roof. Our skilled
                professionals are equipped to handle a wide range of repair
                needs, including fixing leaks, replacing broken tiles or
                shingles, addressing structural issues, and much more.
              </p>
              <button
                type="button"
                className="flex  items-center gap-4 font-bold"
              >
                READ MORE <BsArrowRight className="" size={20} />
              </button>
            </div>
          </div>

          {/* item 3 */}
          <div className="bg-[var(--color-bg)] text-[var(--color-text)] p-10 mt-10 flex flex-col md:flex-row w-[180rem] ">
            {/* image */}
            <div className=" md:h-[16rem]">
              <Image
                src="/maintain.png"
                alt="roof installing"
                width={300}
                height={300}
                className="h-full w-full object-cover"
              />
            </div>
            {/* details gan */}

            <div className="md:mt-0 mt-6 md:w-[40rem] md:ml-10 w-[17rem]">
              <h1 className="font-extrabold text-2xl">Roof Maintainence</h1>
              <p>
                By investing in regular roof maintenance, you not only extend
                the lifespan of your roof but also enhance its performance and
                protect your property from potential water damage and other
                issues. Our team is dedicated to delivering top-notch
                maintenance services that are tailored to the specific needs of
                your roof. Trust us to keep your roof in the best possible shape
                and enjoy peace of mind knowing that your investment is
                well-maintained.
              </p>
              <button
                type="button"
                className="flex  items-center gap-4 font-bold"
              >
                READ MORE <BsArrowRight className="" size={20} />
              </button>
            </div>
          </div>
          {/* item 4 */}
          <div className="bg-[var(--color-bg)] text-[var(--color-text)] p-10 mt-10 flex flex-col md:flex-row w-[180rem] ">
            {/* image */}
            <div className=" md:h-[16rem]">
              <Image
                src="/metal.png"
                alt="roof installing"
                width={300}
                height={300}
                className="h-full w-full object-cover"
              />
            </div>
            {/* details gan */}

            <div className="md:mt-0 mt-6 md:w-[40rem] md:ml-10 w-[18rem]">
              <h1 className="font-extrabold text-2xl">Metal Roofing</h1>
              <p>
                we take pride in delivering exceptional metal roofing services
                that meet the highest standards of quality and craftsmanship.
                Whether you need a new metal roof installation or require
                repairs for your existing metal roof, our team is dedicated to
                providing you with reliable solutions that ensure the longevity
                and performance of your roof. Trust us to deliver outstanding
                results and safeguard your property with a top-of-the-line metal
                roof.
              </p>
              <button
                type="button"
                className="flex  items-center gap-4 font-bold"
              >
                READ MORE <BsArrowRight className="" size={20} />
              </button>
            </div>
          </div>

          {/* item 5 */}
          <div className="bg-[var(--color-bg)] text-[var(--color-text)] p-10 mt-10 flex flex-col md:flex-row w-[180rem] ">
            {/* image */}
            <div className=" md:h-[16rem]">
              <Image
                src="/roofinstallation.png"
                alt="roof installing"
                width={300}
                height={300}
                className="h-full w-full object-cover"
              />
            </div>
            {/* details gan */}

            <div className="md:mt-0 mt-6 md:w-[40rem] md:ml-10 w-[18rem]">
              <h1 className="font-extrabold text-2xl">Roof Ventilation</h1>
              <p>
                By installing a quality roof ventilation system, we ensure that
                your attic space remains well-ventilated, preventing damage
                caused by excess heat and moisture, and promoting energy
                efficiency. Trust us to provide expert installation services
                that enhance the overall performance and longevity of your
                roofing system.
              </p>
              <button
                type="button"
                className="flex  items-center gap-4 font-bold"
              >
                READ MORE <BsArrowRight className="" size={20} />
              </button>
            </div>
          </div>
          {/* item 69 */}
          <div className="bg-[var(--color-bg)] text-[var(--color-text)] p-10 mt-10 flex flex-col md:flex-row w-[180rem] ">
            {/* image */}
            <div className=" md:h-[16rem]">
              <Image
                src="/water.png"
                alt="roof installing"
                width={300}
                height={300}
                className="h-full w-full object-cover"
              />
            </div>
            {/* details gan */}

            <div className="md:mt-0 mt-6 md:w-[40rem] md:ml-10 w-[18rem]">
              <h1 className="font-extrabold text-2xl">Roof Installation</h1>
              <p>
                With a focus on precision and attention to detail, we utilize
                top-notch materials and industry best practices to ensure the
                longevity and durability of your new roof. Trust us to handle
                the complete installation of your residential or commercial roof
                with professionalism and excellence.
              </p>
              <button
                type="button"
                className="flex  items-center gap-4 font-bold"
              >
                READ MORE <BsArrowRight className="" size={20} />
              </button>
            </div>
          </div>
          {/* end of detail /  */}
        </div>
      </div>
    </main>
  );
};

export default Services;
