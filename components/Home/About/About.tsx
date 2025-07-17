import Image from "next/image";

const About = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Image content */}
        <div>
          <Image src="/images/about.png" alt="about" width={700} height={700} />
        </div>
        {/* Text content */}
        <div>
          <p className="text-sm sm:text-base md:text-xl font-bold text-blue-700 uppercase dark:text-pink-500">
            About Us
          </p>
          <h1 className="text-2xl md:text-3xl lg:text-5xl mt-3 font-bold leading-[1.8rem] md:leading-[3rem] ">
            Inovations Exellence Building Digital Future Together
          </h1>
          <p className="mt-3 text-gray-700 dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            sapiente voluptate reprehenderit suscipit quisquam asperiores ad
            eius, aliquam molestias. Dolorem, sed. Alias iste corporis vitae.
          </p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
            <div className="flex items-center gap-4">
              <Image src="/images/a1.png" alt="icon" width={50} height={50} />
              <h1 className="text-lg font-bold">
                IT Infrastucture <br /> Management
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <Image src="/images/a2.png" alt="icon" width={50} height={50} />
              <h1 className="text-lg font-bold">
                {" "}
                Cloud Ingregation <br /> Service Provide
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <Image src="/images/a3.png" alt="icon" width={50} height={50} />
              <h1 className="text-lg font-bold">
                Custom Software <br /> Development
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <Image src="/images/a4.png" alt="icon" width={50} height={50} />
              <h1 className="text-lg font-bold">
                Instant Supports <br /> any Queries
              </h1>
            </div>
          </div>
          <div className="mt-12">
            <a href="#_" className="w-full py-4 text-base text-center text-white transition-colors font-semibold duration-300 bg-blue-800 rounded-full uppercase hover:bg-blue-900 ease px-9 md:w-auto ">About More</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
