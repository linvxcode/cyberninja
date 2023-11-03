"use client";
import clsx from "clsx";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { NavigationItem } from "@/common/constant/NavigationItem";
import { usePathname } from "next/navigation";
import Login from "../element/Login";
import NavMobile from "./NavMobile";

const Navbar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrolled(window.scrollY > 20);
    });
  }, []);

  return (
    <div
      className={clsx(
        scrolled ? `navbg` : ``,
        `w-full transition-all duration-300 mx-auto max-w-[1500px] py-5 px-5 lg:px-10 fixed top-0 z-[99]`
      )}
    >
      <div className="flex flex-row justify-between items-center ">
        <div className="flex lg:basis-[35%] basis-[70%] justify-start">
          <Link href="/">
            <h1 className="text-2xl text-white font-bold">CYBER</h1>
          </Link>
        </div>
        <div className="hidden gap-14 justify-end lg:flex">
          {NavigationItem.map((item, index) => (
            <Link
              href={item.src}
              className="group overflow-hidden relative"
              key={index}
            >
              <h1 className="text-base text-white">{item.title}</h1>
              <div
                className={clsx(
                  pathname === item.src
                    ? "absolute top-[23px] h-[1px] w-full translate-x-[0%] bg-[#fff] transition-transform duration-300 "
                    : "absolute top-[23px] h-[1px] w-full translate-x-[-100%] bg-[#fff] transition-transform duration-300 group-hover:translate-x-[0%]"
                )}
              ></div>
            </Link>
          ))}
        </div>
        <div>
          <Login />
        </div>
        <div className="lg:hidden flex ml-2">
          <NavMobile />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
