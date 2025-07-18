"use client";
import { Navlinks } from "@/constants/constant";
import Link from "next/link";
import { CgClose } from "react-icons/cg";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ showNav, closeNav }: Props) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%] ";

  return (
    <div>
      {/* Overlay */}
      <div
        className={` fixed ${navOpen} inset-0 transform transition-all duration-500 z-[1002] bg-black opacity-70 w-full h-screen `}
      ></div>
      {/* navlinks */}
      <div
        className={`text-white fixed ${navOpen} justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-blue-900 space-y-6 z-[1050]`}
      >
        {Navlinks.map((link) => {
          return (
            <Link key={link.id} href={link.url}>
              <p className="text-white w-fit text-xl ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px] ">
                {" "}
                {link.title}
              </p>
            </Link>
          );
        })}
        {/* close btn */}
        <CgClose
          onClick={closeNav}
          className=" absolute top-[0.7rem] right-[1.4rem]  sm:w-8 sm:h-8 w-6 h-6 cursor-pointer "
        />
      </div>
    </div>
  );
};

export default MobileNav;
