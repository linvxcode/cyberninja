"use client";
import React, { useEffect} from "react";
import Image from "@/common/components/element/Image";
import Breakline from "@/common/components/element/Breakline";
import Link from "next/link";
import ArrowR from "@/common/svg/ArrowR";
import { useApexData } from "@/common/stores/ApexData";
import Layersvg from "@/common/svg/Layersvg";


const HeadAllChar = () => {
  const {data, fetchData} = useApexData();
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="h-[1px] relative flex justify-center px-10  mb-10">
      <div className="mt-[100px] justify-center  flex flex-row flex-wrap gap-5">
        {data?.map((item: any, index: any) => (
          <Link
            href={`/allcharacter/${item.nickname}`}
            key={index}
            className="bg-card group relative"
            style={{ backdropFilter: "blur(0px)" }}
          >
            <div>
              <Image
                priority
                src={`${item.thumbnail.default}`}
                alt={item.nickname}
                className=""
                width={400}
                height={400}
              />
              <Breakline />
              <div className=" gap-1 absolute top-0 left-0 w-full h-full rounded-t-3xl rounded-3xl bg-black justify-center items-center opacity-0 transition-opacity duration-300 flex  text-white group-hover:opacity-80  text-sm font-medium">
                <span>Watch</span>
                <ArrowR />
              </div>
              <div className="px-5 py-5  group-hover:relative group-hover:z-[999]">
                <h1 className="text-white text-start group-hover:text-[#e686ac]">
                  {item.name}
                </h1>
                <h2 className="text-sm text-neutral-400 line-clamp-3 w-[250px]">
                  {item.quote}
                </h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className=" z-[-1] w-auto max-w-full h-auto absolute overflow-hidden">
          <Layersvg />
        </div>
    </div>
  );
};

export default HeadAllChar;
