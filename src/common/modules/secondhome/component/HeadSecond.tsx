'use client'
import React from "react";
import { CardItem } from "@/common/constant/CardItem";
import Layersvg from "@/common/svg/Layersvg";
import { motion } from "framer-motion";

const HeadSecond = () => {
  return (
    <div className="relative">
      <div className="w-full  justify-center z-[9] md:px-16 px-10 gap-8 flex flex-wrap flex-row absolute pb-5 max-lg:top-[140px] lg:top-[-110px]  bg-fade h-auto ">
        {CardItem?.map((item, index) => (
          <motion.div
            className="mt-5 py-10 bg-card h-auto px-10 flex items-center w-[280px] xl:mb-32"
            key={index}
            initial={{opacity: 0, scale: 0.90}}
            whileInView={{opacity:1, scale:1, transition:{type: "spring", delay: 0.1 * index}}}
            viewport={{once: true}}
          >
            <div className="flex flex-col">
              <h1 className="flex gap-1 items-center text-neutral-200 text-lg">
                <span>{item.svg}</span>
                {item.title}
              </h1>
              <h2 className="text-[12px] text-neutral-400 max-md:line-clamp-3">
                {item.content}
              </h2>
            </div>
          </motion.div>
        ))}
        <div className="md:hidden block w-auto max-w-full h-auto absolute overflow-hidden">
          <Layersvg />
        </div>
      </div>
    </div>
  );
};

export default HeadSecond;
