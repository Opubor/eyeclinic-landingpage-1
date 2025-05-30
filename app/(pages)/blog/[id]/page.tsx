import { blog } from "@/data/data";
import Link from "next/link";
import React from "react";

type PageProps = {
  params: Promise<{ id: number }>;
};

function Page({ params }: PageProps) {
  const x = React.use(params);
  const blogId = Number(x?.id);
  const currentPost = blog.find((data) => data?.id === blogId);

  return (
    <div>
      <div className="px-2 lg:px-12 xl:px-32 mb-16">
        <h1 className="uppercase border-l-2 border-l-black text-sm px-2">
          Blog
        </h1>
        <p className="text-lg lg:text-2xl pt-4 font-bold tracking-tighter">
          Health tips, medical insights, and wellness advice — all in one place.
        </p>
      </div>
      <div className="px-2 lg:px-16 xl:px-32 mt-8 flex flex-col lg:flex-row justify-between items-start gap-12">
        <div className="w-full lg:w-8/12">
          <h1 className="italic text-xl lg:text-2xl font-bold tracking-tighter uppercase">
            {currentPost?.title}
          </h1>

          <p className="text-sm text-gray-600">
            {currentPost?.day} {currentPost?.month} {currentPost?.year}
          </p>
          <div
            style={{
              backgroundImage: `url(${currentPost?.picture})`,
            }}
            className={`w-full h-44 lg:h-56 bg-cover bg-center mt-6`}
          ></div>

          <p className="text-sm mt-8">{currentPost?.paragraph1}</p>
          <p className="text-sm mt-8">{currentPost?.paragraph2}</p>
          <p className="text-sm mt-8">{currentPost?.paragraph3}</p>
          <p className="text-sm mt-8">{currentPost?.paragraph4}</p>
          <p className="text-sm mt-8">{currentPost?.paragraph5}</p>
        </div>

        <div className="w-full lg:w-4/12 mt-16">
          <h1 className="text-center text-xl font-bold tracking-tighter pb-4 underline">
            OTHER POSTS
          </h1>
          <div className="grid grid-cols-1 gap-12 lg:gap-4">
            {blog?.map((data) => (
              <div key={data?.id}>
                {Number(data?.id) !== blogId && (
                  <div key={data?.id}>
                    <div
                      style={{
                        backgroundImage: `url(${data?.picture})`,
                      }}
                      className={`h-72 w-full bg-cover bg-center`}
                    ></div>
                    <div className="flex justify-start items-start gap-3 mt-4">
                      <div>
                        <h1 className="w-16 h-20 bg-darkblue text-white text-md flex justify-center items-center font-medium text-center">
                          {data?.day} <br></br> {data?.month}
                        </h1>
                        <h1 className="w-16 h-12 bg-blue text-white text-md flex justify-center items-center">
                          {data?.year}
                        </h1>
                      </div>
                      <div>
                        <h1 className="font-bold text-sm lg:text-md uppercase">
                          {data?.title}
                        </h1>
                        <p className="text-sm text-gray-700 pt-2 pb-4 w-72 truncate">
                          {data?.paragraph1}
                        </p>
                        <Link
                          href={`/blog/${data?.id}`}
                          className="bg-white px-5 py-3 text-wine text-xs rounded-full shadow-lg shadow-gray-300 border"
                        >
                          Read More...
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
