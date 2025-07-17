"use client";
import ThemeToggler from "@/components/Helper/ThemeToggler";

import { Navlinks } from "@/constants/constant";
import Link from "next/link";
import { useEffect, useState } from "react";
import { GrTechnology } from "react-icons/gr";
import { HiBars3BottomRight } from "react-icons/hi2";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) {
        setNavBg(true);
      }
      if (window.scrollY < 90) {
        setNavBg(false);
      }
    };

    window.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  return (
    <div
      className={`transition-all ${
        navBg ? "bg-blue-900 shadow-md" : "fixed"
      } duration-200 h-[8vh] z-[1000] fixed w-full`}
    >
      <div className="flex justify-between items-center h-full w-[90%] xl:w-[80%] mx-auto">
        {/* logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center flex-col">
            <GrTechnology className="text-white w-6 h-6" />
          </div>
          <h1 className="text-xl hidden sm:block md:text-2xl text-white font-bold">
            DevTech
          </h1>
        </div>
        {/* NavLink */}
        <div className="hidden lg:flex items-center space-x-10">
          {Navlinks.map((link) => {
            return (
              <Link
                href={link.url}
                key={link.id}
                className="text-white text-lg hover:text-pink-300 font-semibold transition-all duration-200"
              >
                <p>{link.title}</p>
              </Link>
            );
          })}
        </div>
        {/* buttons */}
        <div className="flex items-center space-x-4">
          {/* 1st button create account button */}
          <a
            href="#"
            className="px-5 py-2.5 relative rounded group font-medium text-white inline-block"
          >
            <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
            <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500 "></span>
            <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
            <span className="absolute inset-0 w-full   h-full  transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
            <span className="relative">Create Account</span>
          </a>
          {/* ThemeToggler */}
          <ThemeToggler />
          {/* Humberger Menu */}
          <HiBars3BottomRight
            onClick={openNav}
            className="w-8 h-8 cursor-pointer text-white lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
