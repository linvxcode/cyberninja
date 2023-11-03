import React from "react";
import { motion } from "framer-motion";
import { NavigationItem } from "@/common/constant/NavigationItem";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";


const Anim = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at calc(100% - 40px) 40px)`,
    zIndex: 99,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(0px at calc(100% - 1px) 1px)",
    zIndex: 0,
    transition: {
      delay: 0.1,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

interface MenuProps {
  open: boolean;
  close: () => void
}

const NavigationMenuMobile = ({ open, close }: MenuProps) => {
    const pathname = usePathname();
  return (
    <div>
      <motion.div
        className="content left-0 w-full lg:px-10 px-5 top-0 fixed flex h-screen bg-neutral-800"
        initial={false}
        variants={Anim}
        animate={open ? "open" : "closed"}
      >
        <div className="mt-20">
        <div className=" gap-14 justify-end ">
          {NavigationItem.map((item, index) => (
            <Link
              href={item.src}
              className="group hover:scale-105 overflow-hidden relative"
              key={index}
              onClick={close}
            >
              <h1 className={clsx( 
                pathname === item.src 
                ? 'text-[24px] mb-4 tracking-widest font-bold text-white'
                : "text-[24px] mb-4 group-hover:sm:hover:tracking-widest group-hover:sm:hover:transition-all group-hover:sm:hover:duration-300 group-hover:sm:hover:font-bold text-white")}
              >
                {item.title}</h1>
              <div
                className={clsx(
                  pathname === item.src
                    ? "absolute top-[28px] h-[1px] w-full translate-x-[0%] bg-[#fff] transition-transform duration-300 "
                    : "absolute top-[28px] h-[1px] w-full translate-x-[-300px] bg-[#fff] transition-transform duration-300 group-hover:translate-x-[0%]"
                )}
              ></div>
            </Link>
          ))}
        </div>
        </div>
      </motion.div>
    </div>
  );
};

export default NavigationMenuMobile;
