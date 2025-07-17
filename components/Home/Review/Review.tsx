"use client";
import { ReviewData } from '@/constants/constant';
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import ReviewCard from './ReviewCard';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1224 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1
  },
  tablet: {
    breakpoint: { max: 1224, min: 764 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1
  },
}

const Review = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="w-[90%] md:w-[80%] mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-700 dark:text-pink-500 uppercase">
              Testimonials
            </h1>
            <h2 className="text-xl sm:text-3xl md:text-4xl mt-1 font-bold">
              Trusted By Industry Leaders Clients Testimonial
            </h2>
          </div>
          <div className="lg:ml-auto">
            <a
              href="#_"
              className="w-full py-4 text-base sm:text-lg md:text-xl text-center text-white transition-colors font-semibold duration-300 bg-blue-800 rounded-full uppercase hover:bg-blue-900 ease px-9 md:w-auto "
            >
              All Reviews
            </a>
          </div>
        </div>
        {/*  Slider */}
        <div className="mt-16">
            <Carousel 
              showDots={false}
              responsive={responsive}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={4000}
            >
                {ReviewData.map((items) => {
                  return <ReviewCard  key={items.id} userImage={items.userImage} userName={items.userName} desc={items.desc} role={items.role} reviewTitle={items.reviewTitle} />
                })}
            </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Review;
