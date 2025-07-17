import { SoftwareCardData } from "@/constants/constant";
import SoftwareCard from "./SoftwareCard";

const Software = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="text-center">
        <h1 className="uppercase text-sm sm:text-base md:text-xl font-bold text-blue-700 dark:text-pink-500">
          Software
        </h1>
        <h2 className="text-xl sm:text-3xl md:text-4xl mt-1 font-bold">
          Driving Change with <br /> Innovative Succesful Softwares
        </h2>
      </div>

      {/* Cards */}
      <div className="w-[80%] mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 ">
            {SoftwareCardData.map((items) =>{
                return <SoftwareCard key={items.id} icon={items.image} title={items.title} desc={items.desc} />
            })}
      </div>
    </div>
  );
};

export default Software;
