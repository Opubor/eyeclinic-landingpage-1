"use client";
import { hospitalName, navlinks } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

function Navbar() {
  const [openNavbar, setOpenNavbar] = useState(false);
  return (
    <div className="bg-white py-4 w-full flex justify-between items-center px-2 lg:px-12 xl:px-32 fixed left-0 right-0 top-0 z-50 border-b-4 border-blue">
      <Link href={"/"} className="flex justify-start items-center gap-2">
        <Image
          src={"/logo1.png"}
          height={3000}
          width={3000}
          alt="logo"
          className="w-8 h-8"
        />
        <span className="text-lg lg:text-xl font-bold tracking-tighter">
          {hospitalName}
        </span>
      </Link>

      <div
        className={`${openNavbar ? "hidden" : "flex lg:hidden"} cursor-pointer`}
        onClick={() =>
          openNavbar ? setOpenNavbar(false) : setOpenNavbar(true)
        }
      >
        <GiHamburgerMenu className="text-darkblue" />
      </div>

      <div
        onClick={() =>
          openNavbar ? setOpenNavbar(false) : setOpenNavbar(true)
        }
        className={`${
          !openNavbar ? "hidden" : "flex lg:hidden"
        } cursor-pointer`}
      >
        <IoMdClose className="text-darkblue text-2xl" />
      </div>
      <div
        className={`${
          openNavbar ? "flex flex-col lg:flex-row" : "hidden lg:flex"
        } flex items-center gap-6 bg-darkblue lg:bg-white w-full lg:w-auto fixed lg:static top-16 left-0 py-8 lg:py-0 text-white lg:text-black`}
      >
        {navlinks?.map((data) => (
          <Link
            key={data?.id}
            className="text-sm hover:underline"
            href={data?.link}
          >
            {data?.name}
          </Link>
        ))}
        <div className="flex lg:hidden">
          <Link
            className="bg-white px-6 py-3 text-darkblue rounded-md text-sm hover:bg-blue flex justify-center items-center gap-2"
            href={"/#book_appointment"}
          >
            <FaRegCalendarAlt className="text-lg" />
            Book Appointment
          </Link>
        </div>
      </div>

      <div className="hidden lg:flex">
        <Link
          className="bg-darkblue px-6 py-3 text-white rounded-md text-sm hover:bg-blue flex justify-center items-center gap-2"
          href={"/#book_appointment"}
        >
          <FaRegCalendarAlt className="text-lg" />
          Book Appointment
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
