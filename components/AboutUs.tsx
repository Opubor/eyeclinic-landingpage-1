import { hospitalName } from "@/data/data";
import React from "react";
import { FaCheckSquare } from "react-icons/fa";

function AboutUs() {
  return (
    <div
      id="about_us"
      className="px-2 lg:px-12 xl:px-32 py-16 bg-gray-50 flex flex-col lg:flex-row justify-between items-center gap-6 scroll-mt-20 text-black"
    >
      <div className="relative bg-[url('/pic12.jpg')] bg-center bg-cover w-full lg:w-5/12 h-96 rounded-xl flex justify-center">
        {/* <div className="absolute backdrop-blur-lg w-full bg-white/40 flex justify-center items-center py-4 mt-4 px-2">
        <h1 className="text-center text-sm lg:text-3xl w-full italic font-serif font-bold">
          OAKVIEW
        </h1>
      </div> */}
      </div>
      <div className="w-full lg:w-7/12">
        <h1 className="uppercase border-l-2 border-l-black text-sm px-2">
          About Us
        </h1>
        <p className="text-lg lg:text-2xl pt-4 font-bold tracking-tighter">
          Built on trust, driven by care
        </p>

        <p className="pt-4 text-sm text-justify">
          At {hospitalName}, we are committed to delivering exceptional
          healthcare with compassion, professionalism, and integrity. Our
          hospital is built on a foundation of trust and guided by a mission to
          provide personalized, high-quality care to every patient who walks
          through our doors. With a team of experienced doctors, certified
          nurses, and dedicated medical professionals, we combine modern medical
          technology with a human touch to ensure every patient feels safe,
          respected, and well cared for. Whether you're visiting us for a
          routine check-up or specialized treatment, we are here to support your
          health journey every step of the way. Because at
          {hospitalName}, your well-being is our greatest priority.
        </p>

        <div className="pt-4 text-sm">
          <h1 className="flex justify-start items-center gap-2 pt-2">
            <FaCheckSquare className="text-blue" /> Certified and Experienced
            Medical Team
          </h1>
          <h1 className="flex justify-start items-center gap-2 pt-2">
            <FaCheckSquare className="text-blue" /> 24/7 Emergency Care
            Availability
          </h1>
          <h1 className="flex justify-start items-center gap-2 pt-2">
            <FaCheckSquare className="text-blue" /> Patient-Centered and
            Compassionate Approach
          </h1>
          <h1 className="flex justify-start items-center gap-2 pt-2">
            <FaCheckSquare className="text-blue" /> Modern Equipment and
            Advanced Technology
          </h1>
          <h1 className="flex justify-start items-center gap-2 pt-2">
            <FaCheckSquare className="text-blue" /> Clean, Safe, and Comfortable
            Environment
          </h1>
        </div>

        {/* <div className="pt-8">
        <Link
          href={"/"}
          className="bg-blue hover:bg-darkblue px-8 py-3 text-sm text-white rounded-lg"
        >
          More About Us
        </Link>
      </div> */}
      </div>
    </div>
  );
}

export default AboutUs;
