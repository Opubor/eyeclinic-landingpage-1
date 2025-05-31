import { contactInformation } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function WhatsappButton() {
  return (
    <Link
      href={`https://wa.me/${contactInformation?.at(0)?.whatsapp}`}
      target="_blank"
    >
      <Image
        src={"/pic45.png"}
        alt="Whatsapp"
        height={3000}
        width={3000}
        className="w-8 lg:w-12 h-8 lg:h-12 fixed bottom-3 right-3 z-50"
      />
    </Link>
  );
}

export default WhatsappButton;
