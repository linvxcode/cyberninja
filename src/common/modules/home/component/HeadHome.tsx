import Link from "next/link";
import React from "react";

const HeadHome = () => {
  return (
    <div className="flex xl:pl-14 lg:pl-10 px-5 mt-[120px] flex-col justify-start">
      <h1 className="lg:text-[75px] font-bold text-4xl text-white leading-[1] xl:leading-relaxed">
        CYBER <span className="italic"> NINJA</span>
      </h1>
      <h2 className="text-white md:pr-[150px] leading-loose">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry&rsquo;s standard dummy text
        ever since the 1500s,
      </h2>
      <div className="flex gap-5">
        <Link href='/allcharacter' className="md:w-[20%] w-[100%] relative group justify-center rounded-full mt-6 py-[5px] px-2 text-white outline outline-[1px] outline-[#fff]  flex overflow-hidden">
          <h1 className="group-hover:z-[9] max-md:group-hover:text-black relative">
            Watch
          </h1>
          <div className="absolute  inset-0 translate-y-[100%] bg-[#fff] transition-transform duration-300 group-hover:translate-y-[0%]"></div>
          <div className="md:block hidden absolute inset-0 translate-y-[100%] bg-[#971146] transition-transform duration-300 group-hover:translate-y-[0%]"></div>
        </Link>
        <button className="md:w-[20%] w-[100%] relative group justify-center rounded-full mt-6 py-[5px] px-2 text-white bg-[#971146] outline outline-[1px] outline-[#971146]  flex overflow-hidden">
          <h1 className="group-hover:z-[9] relative lg:group-hover:text-[#971146] transition-all duration-300">
            Sign Up
          </h1>
          <div className="absolute inset-0 lg:translate-y-[100%] lg:bg-[#fff] lg:transition-transform lg:duration-300 lg:group-hover:translate-y-[0%]"></div>
        </button>
      </div>
    </div>
  );
};

export default HeadHome;
