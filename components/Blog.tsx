"use client";
import { blog } from "@/data/data";
import Link from "next/link";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Blog() {
  useEffect(() => {
    AOS.init({ duration: 600 });
  }, []);
  return (
    <div
      id="blog"
      className="px-2 lg:px-12 xl:px-32 py-16 scroll-mt-20 bg-white"
    >
      <h1 className="uppercase border-l-2 border-l-black text-sm px-2">Blog</h1>
      <p className="text-lg lg:text-2xl pt-4 font-bold tracking-tighter">
        Health tips, medical insights, and wellness advice — all in one place.
      </p>

      <div
        className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12 lg:gap-4 mt-8"
        data-aos="fade-up"
      >
        {blog?.map((data) => (
          <div key={data?.id}>
            <div
              style={{
                backgroundImage: `url(${data?.picture})`,
              }}
              className={`h-72 w-full bg-cover bg-center`}
            ></div>
            <div className="flex justify-start items-start gap-2 mt-4">
              <div className="w-2/12">
                <h1 className="w-16 h-20 bg-darkblue text-white text-md flex justify-center items-center font-medium text-center">
                  {data?.day} <br></br> {data?.month}
                </h1>
                <h1 className="w-16 h-12 bg-blue text-white text-md flex justify-center items-center">
                  {data?.year}
                </h1>
              </div>

              <div className="w-10/12 pr-3">
                <h1 className="font-bold text-sm lg:text-md uppercase">
                  {data?.title}
                </h1>
                <p className="text-sm text-gray-700 pt-2 pb-4 truncate">
                  {data?.paragraph1}
                </p>
                <Link
                  href={`/blog/${data?.id}`}
                  className="bg-white hover:bg-darkblue hover:text-white px-5 py-3 text-wine text-xs rounded-full shadow-lg shadow-gray-300 border"
                >
                  Read More...
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
