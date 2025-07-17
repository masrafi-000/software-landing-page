import {
  FaDribbble,
  FaFacebook,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { GrTechnology } from "react-icons/gr";

const Footer = () => {
  return (
    <div className="pt-16 pb-16 bg-blue-950">
      <div className=" w-[80%] mx-auto items-start grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 ">
        {/* 1st Part */}
        <div>
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center flex-col">
              <GrTechnology className="text-white w-6 h-6" />
            </div>
            <h1 className="text-xl hidden sm:block md:text-2xl text-white font-bold">
              DevTech
            </h1>
          </div>
          <p className="mt-4 text-gray-200  font-medium">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex
            adipisci reprehenderit odio itaque.
          </p>
          {/* social Links */}
          <div className="pt-6 flex items-center space-x-2">
            <div className="flex items-center justify-center flex-col w-8 h-8 bg-blue-600 text-white rounded-full">
              <FaFacebookF />
            </div>
            <div className="flex items-center justify-center flex-col w-8 h-8 bg-pink-500 text-white rounded-full">
              <FaInstagram />
            </div>
            <div className="flex items-center justify-center flex-col w-8 h-8 bg-sky-400 text-white rounded-full">
              <FaTwitter />
            </div>
            <div className="flex items-center justify-center flex-col w-8 h-8 bg-red-600 text-white rounded-full">
              <FaYoutube />
            </div>
          </div>
        </div>
        {/* 2nd Part */}
        <div className="space-y-5">
          <h1 className="text-lg font-bold text-white">Company</h1>
          <p className="footer__link">About Us</p>
          <p className="footer__link">New & Press</p>
          <p className="footer__link">Our Customer</p>
          <p className="footer__link">Leadership</p>
          <p className="footer__link">Careers</p>
        </div>
        {/* 3nd Part */}
        <div className="space-y-5">
          <h1 className="text-lg font-bold text-white">Resources</h1>
          <p className="footer__link">Blog</p>
          <p className="footer__link">Webiner & Events</p>
          <p className="footer__link">Podcast</p>
          <p className="footer__link">E-book & Guides</p>
        </div>
        {/* 4th Part */}
        <div>
          <h1 className="text-lg font-bold text-white"> Contact Us</h1>
          <div className="mt-6">
            <h1 className="text-base text-white">Our Mobile Phone</h1>
            <h1 className="text-base font-bold text-yellow-300 mt-1">
              +880 1234567890
            </h1>
          </div>
          <div className="mt-6">
            <h1 className="text-base text-white">Our Email</h1>
            <h1 className="text-base font-bold text-yellow-300 mt-1">
              devtech@gmail.com
            </h1>
          </div>
        </div>
      </div>
      {/* bottom part */}
      <div className="mt-8 w-[80%] mx-auto border-t pt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm ">
        <p className="text-center text-white md:text-left">
          Copyright &copy; 2024 DevTech. All rights reserved.
        </p>

        <div className="flex items-center text-white space-x-4 mt-4 md:mt-0">
          <span>Social :</span>
          <span className="hover:text-gray-500 text-white">
            <FaFacebook />
          </span>
          <span className="hover:text-gray-500 text-white">
            <FaTwitter />
          </span>
          <span className="hover:text-gray-500 text-white">
            <FaDribbble />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
