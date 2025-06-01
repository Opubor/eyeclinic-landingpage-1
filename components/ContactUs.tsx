import { contactInformation } from "@/data/data";
import Link from "next/link";
import React from "react";
import { CiClock2 } from "react-icons/ci";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";

function ContactUs() {
  return (
    <div id="contact_us" className="py-8 px-2 lg:px-12 xl:px-36 scroll-mt-20">
      <h1 className="uppercase border-l-2 border-l-black text-sm px-2 text-black">
        Contact Us
      </h1>
      <p className="text-2xl pt-4 font-bold tracking-tighter text-black">
        Have a question or need support? Get in touch with our team today.
      </p>
      <div className="flex flex-col lg:flex-row justify-between items-start gap-4 pt-4 lg:pt-16">
        <div className="w-full lg:w-6/12">
          <Link
            href={`mailto:${contactInformation?.at(0)?.email!}`}
            target="blank"
            className="flex justify-start items-center gap-1 text-xs lg:text-base pt-4 text-black"
          >
            <MdOutlineMailOutline />
            {contactInformation?.at(0)?.email}
          </Link>
          <Link
            href={`tel:${contactInformation?.at(0)?.phone1!}`}
            target="blank"
            className="flex justify-start items-center gap-1 text-xs lg:text-base pt-4 text-black"
          >
            <IoCallOutline />
            {contactInformation?.at(0)?.phone1}
          </Link>
          <Link
            href={`tel:${contactInformation?.at(0)?.phone2!}`}
            target="blank"
            className="flex justify-start items-center gap-1 text-xs lg:text-base pt-4 text-black"
          >
            <IoCallOutline />
            {contactInformation?.at(0)?.phone2}
          </Link>
          <p className="flex justify-start items-center gap-1 text-xs lg:text-base pt-4 text-black">
            <IoLocationOutline />
            {contactInformation?.at(0)?.address}
          </p>
          <p className="flex justify-start items-center gap-1 text-xs lg:text-base pt-4 text-black">
            <CiClock2 />
            {contactInformation?.at(0)?.openingHours}
          </p>
          <div className="mt-8 flex justify-start items-center gap-4">
            <Link href={contactInformation?.at(0)?.facebook!} target="blank">
              <FaFacebook className="text-xl text-black" />
            </Link>
            <Link href={contactInformation?.at(0)?.twitter!} target="blank">
              <FaSquareXTwitter className="text-xl text-black" />
            </Link>
            <Link href={contactInformation?.at(0)?.instagram!} target="blank">
              <FaInstagramSquare className="text-xl text-black" />
            </Link>
          </div>
        </div>
        <div className="w-96 lg:w-6/12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15885.492488903948!2d5.729785885100776!3d5.511504783282778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1041b2c043a48dc7%3A0x3e55b661dbfd2353!2sAgbasa%2C%20Warri%20332104%2C%20Delta!5e0!3m2!1sen!2sng!4v1746604621784!5m2!1sen!2sng"
            width="600"
            height="450"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
