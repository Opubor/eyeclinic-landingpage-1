"use client";
import { gallery } from "@/data/data";
import React, { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

function Gallery() {
  const [openModal, setOpenModal] = useState(false);
  const [galleryId, setGalleryId] = useState<number>(0);

  const clickedPicture = gallery.find((gallery) => gallery?.id === galleryId);

  useEffect(() => {
    AOS.init({ duration: 600 });
  }, [galleryId]);

  return (
    <div id="gallery" className="py-16">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-center uppercase border-b-2 border-b-black text-sm px-2">
          Gallery
        </h1>
        <p className="text-center text-lg lg:text-2xl pt-4 font-bold tracking-tighter mb-4">
          A glimpse into our care, facilities, and the people who make it all
          possible.
        </p>
      </div>

      <div
        className="grid grid-cols-2 lg:grid-cols-4 gap-1 p-1"
        data-aos="fade-up"
      >
        {gallery.map((data) => (
          <div
            key={data?.id}
            className="w-full h-44 lg:h-72 overflow-hidden transition duration-1000 ease-in-out"
          >
            <div
              onClick={() => {
                setOpenModal(true), setGalleryId(data?.id);
              }}
              key={data?.id}
              style={{
                backgroundImage: `url(${data.picture})`,
              }}
              className={`bg-center bg-cover w-full h-44 lg:h-72 hover:scale-110 overflow-hidden cursor-pointer`}
            ></div>
          </div>
        ))}
      </div>

      {/* ===Picture Modal=== */}
      <div
        className={`${
          openModal ? "flex" : "hidden"
        } fixed top-0 left-0 right-0 z-50 flex justify-center items-center w-full min-h-screen bg-black/75 p-4`}
      >
        <div className="w-full md:w-6/12 lg:w-6/12 xl:w-4/12 flex flex-col justify-center items-center border-2 border-white">
          <div
            key={clickedPicture?.id}
            style={{
              backgroundImage: `url(${clickedPicture?.picture})`,
            }}
            className={`bg-center bg-cover w-full h-44 lg:h-72 flex justify-end items-start`}
            data-aos="fade-up"
          >
            <div
              onClick={() => {
                setOpenModal(false), setGalleryId(0);
              }}
              className="flex justify-center items-center gap-2 p-2 text-xl text-white font-extrabold cursor-pointer bg-gray-900/60"
            >
              <MdClose size={20} className=" hover:animate-spin" />
            </div>
          </div>
          {clickedPicture?.caption && (
            <p className="text-sm text-center text-gray-600 bg-white py-2 w-full">
              {clickedPicture?.caption}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
