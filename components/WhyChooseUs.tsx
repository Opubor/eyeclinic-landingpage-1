import { hospitalName } from "@/data/data";
import Link from "next/link";
import React from "react";
import { CiSquareCheck } from "react-icons/ci";
import { FaRegClock, FaRegHeart } from "react-icons/fa";
import { MdMemory } from "react-icons/md";

function WhyChooseUs() {
  return (
    <div className="px-2 lg:px-12 xl:px-32 bg-[linear-gradient(to_right_top,rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url('/pic39.jpg')] bg-center bg-cover flex flex-col xl:flex-row justify-between items-center gap-6 py-8">
      <div className="w-full lg:w-6/12 flex flex-col justify-center items-start gap-4 text-white">
        {/* <h1 className="font-bold">Oakview Center</h1> */}
        <h2 className="tracking-tighter text-2xl lg:text-4xl font-bold">
          Why Choose Us
        </h2>
        <p className="text-sm">
          At {hospitalName}, we offer more than just treatment — we provide care
          you can trust. With certified experts, modern facilities, and a heart
          for every patient, your health is in the best hands. Because here,
          your well-being is our mission.
        </p>
        <Link
          href={"/#book_appointment"}
          className="bg-white hover:bg-darkblue hover:text-white mt-4 py-3 px-8 text-sm text-darkblue rounded-md"
        >
          Book Appointment
        </Link>
      </div>
      <div className="w-full lg:w-6/12 grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-4 text-black">
        <div className="bg-white rounded-md p-4 flex flex-col justify-center items-center">
          <div className="flex justify-center p-6 rounded-full bg-white border-2 border-blue">
            <CiSquareCheck className="text-blue text-4xl" />
          </div>
          <h1 className="font-bold pt-2">Expertise</h1>
          <p className="text-sm text-center pt-2">
            Our team of licensed doctors, nurses, and specialists bring years of
            experience and are committed to delivering high-quality,
            evidence-based care you can trust.
          </p>
        </div>
        <div className="bg-white rounded-md p-4 flex flex-col justify-center items-center">
          <div className="flex justify-center p-6 rounded-full bg-white border-2 border-blue">
            <FaRegClock className="text-blue text-4xl" />
          </div>
          <h1 className="font-bold pt-2">Availability</h1>
          <p className="text-sm text-center pt-2">
            With 24/7 emergency services, you can count on us anytime for quick,
            reliable, and life-saving care.
          </p>
        </div>
        <div className="bg-white rounded-md p-4 flex flex-col justify-center items-center">
          <div className="flex justify-center p-6 rounded-full bg-white border-2 border-blue">
            <FaRegHeart className="text-blue text-4xl" />
          </div>
          <h1 className="font-bold pt-2">Compassion</h1>
          <p className="text-sm text-center pt-2">
            Every patient is treated with empathy, respect, and kindness —
            because healing starts with how you're cared for.
          </p>
        </div>
        <div className="bg-white rounded-md p-4 flex flex-col justify-center items-center">
          <div className="flex justify-center p-6 rounded-full bg-white border-2 border-blue">
            <MdMemory className="text-blue text-4xl" />
          </div>
          <h1 className="font-bold pt-2">Technology</h1>
          <p className="text-sm text-center pt-2">
            We use cutting-edge medical equipment and modern tools to deliver
            accurate results and effective treatments.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
