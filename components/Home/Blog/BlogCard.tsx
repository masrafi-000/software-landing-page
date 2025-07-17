import Image from "next/image";
import { BiCalendarEvent, BiUser } from "react-icons/bi";
import { MdOutlineArrowOutward } from "react-icons/md";

type Props = {
  image: string;
  title: string;
};

const BlogCard = ({ image, title }: Props) => {
  return (
   
      <div className="relative w-fit">
        <Image
          src={image}
          alt={title}
          width={400}
          height={400}
          className="rounded-lg "
        />

        {/* Box */}
        <div className=" w-[90%] mx-auto bg-gray-200 dark:bg-gray-900  rounded-lg mt-[-3rem] relative z-10 p-6">
          <div className="flex items-center space-x-2 ">
            <BiUser className="w-5 h-5 " />
            <span className="md:text-lg text-base font-semibold">By Admin</span>
          </div>
          <h1 className="text-lg md:text-xl font-bold mt-4 ">{title}</h1>
          <span className="w-full h-[2px] mt-6 mb-6 bg-gray-300 block "></span>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <BiCalendarEvent className="w-5 h-5" />
              <span className="md:text-lg text-base font-semibold">
                11 May 2023
              </span>
            </div>
            <div className="w-9 h-9 rounded-full flex justify-center items-center flex-col bg-blue-800 cursor-pointer hover:bg-blue-900 transition-all duration-200">
              <MdOutlineArrowOutward className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
      </div>
  );
};

export default BlogCard;
