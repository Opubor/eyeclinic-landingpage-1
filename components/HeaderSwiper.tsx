"use client";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
  MdLocalHospital,
  MdOutlinePrecisionManufacturing,
} from "react-icons/md";
import Link from "next/link";
import {
  FaBullseye,
  FaCheckDouble,
  FaClock,
  FaHandHoldingHeart,
  FaMedal,
  FaRegCalendarAlt,
  FaShieldAlt,
  FaUserMd,
} from "react-icons/fa";
import { HiBadgeCheck } from "react-icons/hi";

import AOS from "aos";
import "aos/dist/aos.css";
import { FaLocationDot } from "react-icons/fa6";
import { contactInformation } from "@/data/data";
import { IoCall, IoLogoWhatsapp } from "react-icons/io5";
import { CiClock2 } from "react-icons/ci";
import { RiEyeFill } from "react-icons/ri";

function HeaderSwiper() {
  useEffect(() => {
    AOS.init({ duration: 600 });
  }, []);
  return (
    <div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="bg-[linear-gradient(to_right_top,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('/pic42.jpg')] bg-center bg-cover lg:min-h-screen w-full flex flex-col justify-start items-start pt-36 lg:pt-56 pb-8 lg:pb-0">
            <div
              className="px-2 lg:px-12 xl:px-36 flex flex-col justify-start items-start w-full"
              data-aos="fade-left"
            >
              <h1 className="text-darkblue flex justify-start items-start gap-2 bg-white/85 p-2 lg:p-4 text-2xl lg:text-5xl font-bold w-full tracking-tighter">
                See Clearly, Live Fully <FaCheckDouble />
              </h1>
              <p className="text-sm lg:text-lg my-8 bg-darkblue text-white p-2 lg:p-4 w-full">
                Comprehensive eye care that prioritizes your vision — from
                routine checks to advanced treatments, all in one place.
              </p>

              <div className="flex flex-col lg:flex-row justify-start items-start gap-4 lg:gap-8">
                <Link
                  href={"/#our_services"}
                  className="border-2 border-white bg-darkblue text-white py-3 px-6 text-sm hover:bg-blue rounded-md flex justify-center items-center gap-2"
                >
                  <MdLocalHospital className="text-lg" />
                  Our Services
                </Link>
                <Link
                  href={"/#book_appointment"}
                  className="border-2 border-white bg-white text-darkblue py-3 px-6 text-sm hover:bg-blue rounded-md flex justify-center items-center gap-2"
                >
                  <FaRegCalendarAlt className="text-lg" />
                  Book an Appointment
                </Link>
              </div>

              <div className="text-darkblue mt-8 bg-white/85 p-2 lg:p-4">
                <h1 className="underline underline-offset-2 uppercase mb-2 font-extrabold text-lg lg:text-2xl tracking-tighter">
                  Contact us
                </h1>
                <p className="flex justify-start items-center gap-2 text-sm">
                  <FaLocationDot /> {contactInformation?.at(0)?.address}
                </p>
                <Link
                  href={`https://wa.me/${contactInformation?.at(0)?.whatsapp}`}
                  target="_blank"
                  className="flex justify-start items-center gap-2 text-sm mt-2"
                >
                  <IoLogoWhatsapp /> {contactInformation?.at(0)?.whatsapp}
                </Link>
                <Link
                  href={`tel:${contactInformation?.at(0)?.phone1!}`}
                  target="blank"
                  className="flex justify-start items-center gap-2 text-sm mt-2"
                >
                  <IoCall /> {contactInformation?.at(0)?.phone1}
                </Link>
                <p className="flex justify-start items-center gap-2 text-sm mt-2">
                  <FaClock /> {contactInformation?.at(0)?.openingHours}
                </p>
              </div>
            </div>

            <div className="flex justify-between w-full">
              <div className="hidden lg:flex w-5/12"></div>
              <div className="w-full lg:w-7/12 backdrop-blur-md flex justify-between items-center mt-16 lg:border-l lg:border-l-white border-t border-t-white lg:rounded-tl-3xl">
                <div className="text-white flex flex-col justify-center items-center gap-1 p-8 w-3/12">
                  <FaShieldAlt className="text-2xl lg:text-6xl" />
                  <h1 className="text-xs lg:text-sm">Trusted</h1>
                </div>
                <div className="text-white flex flex-col justify-center items-center gap-1 p-8 w-3/12">
                  <HiBadgeCheck className="text-2xl lg:text-6xl" />
                  <h1 className="text-xs lg:text-sm">Certified</h1>
                </div>
                <div className="text-white flex flex-col justify-center items-center gap-1 p-8 w-3/12">
                  <FaMedal className="text-2xl lg:text-6xl" />
                  <h1 className="text-xs lg:text-sm">Accredited</h1>
                </div>
                <div className="text-white flex flex-col justify-center items-center gap-1 p-8 w-3/12">
                  <FaUserMd className="text-2xl lg:text-6xl" />
                  <h1 className="text-xs lg:text-sm">Experienced</h1>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('/pic43.jpg')] bg-center bg-cover lg:min-h-screen w-full flex flex-col justify-start items-start pt-36 lg:pt-56 pb-8 lg:pb-0">
            <div
              className="px-2 lg:px-12 xl:px-36 flex flex-col justify-start items-start w-full"
              data-aos="fade-left"
            >
              <h1 className="text-darkblue flex justify-start items-start gap-2 bg-white/85 p-2 lg:p-4 text-2xl lg:text-5xl font-bold w-full tracking-tighter">
                See Clearly, Live Fully <FaCheckDouble />
              </h1>
              <p className="text-sm lg:text-lg my-8 bg-darkblue text-white p-2 lg:p-4 w-full">
                Comprehensive eye care that prioritizes your vision — from
                routine checks to advanced treatments, all in one place.
              </p>

              <div className="flex flex-col lg:flex-row justify-start items-start gap-4 lg:gap-8">
                <Link
                  href={"/#our_services"}
                  className="border-2 border-white bg-darkblue text-white py-3 px-6 text-sm hover:bg-blue rounded-md flex justify-center items-center gap-2"
                >
                  <MdLocalHospital className="text-lg" />
                  Our Services
                </Link>
                <Link
                  href={"/#book_appointment"}
                  className="border-2 border-white bg-white text-darkblue py-3 px-6 text-sm hover:bg-blue rounded-md flex justify-center items-center gap-2"
                >
                  <FaRegCalendarAlt className="text-lg" />
                  Book an Appointment
                </Link>
              </div>

              <div className="text-darkblue mt-8 bg-white/85 p-2 lg:p-4">
                <h1 className="underline underline-offset-2 uppercase mb-2 font-extrabold text-lg lg:text-2xl tracking-tighter">
                  Contact us
                </h1>
                <p className="flex justify-start items-center gap-2 text-sm">
                  <FaLocationDot /> {contactInformation?.at(0)?.address}
                </p>
                <Link
                  href={`https://wa.me/${contactInformation?.at(0)?.whatsapp}`}
                  target="_blank"
                  className="flex justify-start items-center gap-2 text-sm mt-2"
                >
                  <IoLogoWhatsapp /> {contactInformation?.at(0)?.whatsapp}
                </Link>
                <Link
                  href={`tel:${contactInformation?.at(0)?.phone1!}`}
                  target="blank"
                  className="flex justify-start items-center gap-2 text-sm mt-2"
                >
                  <IoCall /> {contactInformation?.at(0)?.phone1}
                </Link>
                <p className="flex justify-start items-center gap-2 text-sm mt-2">
                  <FaClock /> {contactInformation?.at(0)?.openingHours}
                </p>
              </div>
            </div>

            <div className="flex justify-between w-full">
              <div className="hidden lg:flex w-5/12"></div>
              <div className="w-full lg:w-7/12 backdrop-blur-md flex justify-between items-center mt-16 lg:border-l lg:border-l-white border-t border-t-white lg:rounded-tl-3xl">
                <div className="text-white flex flex-col justify-center items-center gap-1 p-8 w-3/12">
                  <FaShieldAlt className="text-2xl lg:text-6xl" />
                  <h1 className="text-xs lg:text-sm">Trusted</h1>
                </div>
                <div className="text-white flex flex-col justify-center items-center gap-1 p-8 w-3/12">
                  <HiBadgeCheck className="text-2xl lg:text-6xl" />
                  <h1 className="text-xs lg:text-sm">Certified</h1>
                </div>
                <div className="text-white flex flex-col justify-center items-center gap-1 p-8 w-3/12">
                  <FaMedal className="text-2xl lg:text-6xl" />
                  <h1 className="text-xs lg:text-sm">Accredited</h1>
                </div>
                <div className="text-white flex flex-col justify-center items-center gap-1 p-8 w-3/12">
                  <FaUserMd className="text-2xl lg:text-6xl" />
                  <h1 className="text-xs lg:text-sm">Experienced</h1>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('/pic44.jpg')] bg-center bg-cover lg:min-h-screen w-full flex flex-col justify-start items-start pt-36 lg:pt-56 pb-8 lg:pb-0">
            <div
              className="px-2 lg:px-12 xl:px-36 flex flex-col justify-start items-start w-full"
              data-aos="fade-left"
            >
              <h1 className="text-darkblue flex justify-start items-start gap-2 bg-white/85 p-2 lg:p-4 text-2xl lg:text-5xl font-bold w-full tracking-tighter">
                See Clearly, Live Fully <FaCheckDouble />
              </h1>
              <p className="text-sm lg:text-lg my-8 bg-darkblue text-white p-2 lg:p-4 w-full">
                Comprehensive eye care that prioritizes your vision — from
                routine checks to advanced treatments, all in one place.
              </p>

              <div className="flex flex-col lg:flex-row justify-start items-start gap-4 lg:gap-8">
                <Link
                  href={"/#our_services"}
                  className="border-2 border-white bg-darkblue text-white py-3 px-6 text-sm hover:bg-blue rounded-md flex justify-center items-center gap-2"
                >
                  <MdLocalHospital className="text-lg" />
                  Our Services
                </Link>
                <Link
                  href={"/#book_appointment"}
                  className="border-2 border-white bg-white text-darkblue py-3 px-6 text-sm hover:bg-blue rounded-md flex justify-center items-center gap-2"
                >
                  <FaRegCalendarAlt className="text-lg" />
                  Book an Appointment
                </Link>
              </div>

              <div className="text-darkblue mt-8 bg-white/85 p-2 lg:p-4">
                <h1 className="underline underline-offset-2 uppercase mb-2 font-extrabold text-lg lg:text-2xl tracking-tighter">
                  Contact us
                </h1>
                <p className="flex justify-start items-center gap-2 text-sm">
                  <FaLocationDot /> {contactInformation?.at(0)?.address}
                </p>
                <Link
                  href={`https://wa.me/${contactInformation?.at(0)?.whatsapp}`}
                  target="_blank"
                  className="flex justify-start items-center gap-2 text-sm mt-2"
                >
                  <IoLogoWhatsapp /> {contactInformation?.at(0)?.whatsapp}
                </Link>
                <Link
                  href={`tel:${contactInformation?.at(0)?.phone1!}`}
                  target="blank"
                  className="flex justify-start items-center gap-2 text-sm mt-2"
                >
                  <IoCall /> {contactInformation?.at(0)?.phone1}
                </Link>
                <p className="flex justify-start items-center gap-2 text-sm mt-2">
                  <FaClock /> {contactInformation?.at(0)?.openingHours}
                </p>
              </div>
            </div>

            <div className="flex justify-between w-full">
              <div className="hidden lg:flex w-5/12"></div>
              <div className="w-full lg:w-7/12 backdrop-blur-md flex justify-between items-center mt-16 lg:border-l lg:border-l-white border-t border-t-white lg:rounded-tl-3xl">
                <div className="text-white flex flex-col justify-center items-center gap-1 p-8 w-3/12">
                  <FaShieldAlt className="text-2xl lg:text-6xl" />
                  <h1 className="text-xs lg:text-sm">Trusted</h1>
                </div>
                <div className="text-white flex flex-col justify-center items-center gap-1 p-8 w-3/12">
                  <HiBadgeCheck className="text-2xl lg:text-6xl" />
                  <h1 className="text-xs lg:text-sm">Certified</h1>
                </div>
                <div className="text-white flex flex-col justify-center items-center gap-1 p-8 w-3/12">
                  <FaMedal className="text-2xl lg:text-6xl" />
                  <h1 className="text-xs lg:text-sm">Accredited</h1>
                </div>
                <div className="text-white flex flex-col justify-center items-center gap-1 p-8 w-3/12">
                  <FaUserMd className="text-2xl lg:text-6xl" />
                  <h1 className="text-xs lg:text-sm">Experienced</h1>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default HeaderSwiper;

{
  /* <SwiperSlide>
          <div className="bg-[linear-gradient(to_right_top,rgba(0,0,0,0.7),rgba(0,0,0,0.4)),url('/pic1.jpg')] bg-center bg-cover lg:min-h-screen w-full flex flex-col justify-start items-start pt-36 lg:pt-64 pb-8 lg:pb-0">
            <div className="px-2 lg:px-12 xl:px-36" data-aos="fade-left">
              <h1 className="text-white text-2xl lg:text-5xl font-bold w-full tracking-tighter">
                See Clearly, Live Fully
              </h1>
              <p className="text-sm lg:text-lg py-8 text-white">
              Comprehensive eye care that prioritizes your vision — from routine checks to advanced treatments, all in one place.
              </p>

              <div className="flex flex-col lg:flex-row justify-start items-start gap-4 lg:gap-8">
                <Link
                  href={"/#our_services"}
                  className="border-2 border-white bg-darkblue text-white py-3 px-6 text-sm hover:bg-blue rounded-md flex justify-center items-center gap-2"
                >
                  <MdLocalHospital className="text-lg" />
                  Our Services
                </Link>
                <Link
                  href={"/#book_appointment"}
                  className="border-2 border-white text-white py-3 px-6 text-sm hover:bg-blue rounded-md flex justify-center items-center gap-2"
                >
                  <FaRegCalendarAlt className="text-lg" />
                  Book an Appointment
                </Link>
              </div>

              <div className=" mt-2 py-3 backdrop-blur-md px-2">
                <p className="text-white flex justify-start items-center gap-2 italic text-sm">
                  <FaLocationDot /> {contactInformation?.at(0)?.address}
                </p>
                <Link
                  href={`https://wa.me/${contactInformation?.at(0)?.whatsapp}`}
                  target="_blank"
                  className="text-white flex justify-start items-center gap-2 italic text-sm mt-2"
                >
                  <IoLogoWhatsapp /> {contactInformation?.at(0)?.whatsapp}
                </Link>
                <Link
                  href={`tel:${contactInformation?.at(0)?.phone1!}`}
                  target="blank"
                  className="text-white flex justify-start items-center gap-2 italic text-sm mt-2"
                >
                  <IoCall /> {contactInformation?.at(0)?.phone1}
                </Link>
                <p className="text-white flex justify-start items-center gap-2 italic text-sm mt-2">
                  <FaClock /> {contactInformation?.at(0)?.openingHours}
                </p>
              </div>
            </div>

            <div className="flex justify-between w-full">
              <div className="hidden lg:flex w-5/12"></div>
              <div className="w-full lg:w-7/12 backdrop-blur-md flex justify-between items-center mt-16 border-l border-l-white border-t border-t-white lg:rounded-tl-3xl">
                <div className="text-white flex flex-col justify-center items-center gap-1 p-8 w-3/12">
                  <FaShieldAlt className="text-2xl lg:text-6xl" />
                  <h1 className="text-xs lg:text-sm">Trusted</h1>
                </div>
                <div className="text-white flex flex-col justify-center items-center gap-1 p-8 w-3/12">
                  <HiBadgeCheck className="text-2xl lg:text-6xl" />
                  <h1 className="text-xs lg:text-sm">Certified</h1>
                </div>
                <div className="text-white flex flex-col justify-center items-center gap-1 p-8 w-3/12">
                  <FaMedal className="text-2xl lg:text-6xl" />
                  <h1 className="text-xs lg:text-sm">Accredited</h1>
                </div>
                <div className="text-white flex flex-col justify-center items-center gap-1 p-8 w-3/12">
                  <FaUserMd className="text-2xl lg:text-6xl" />
                  <h1 className="text-xs lg:text-sm">Experienced</h1>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide> */
}
