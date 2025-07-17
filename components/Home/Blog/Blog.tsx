import { BlogData } from "@/constants/constant";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="text-center">
        <h1 className="uppercase text-sm sm:text-base md:text-xl font-bold text-blue-700 dark:text-pink-500">
          Blog
        </h1>
        <h2 className="text-xl sm:text-3xl md:text-4xl mt-1 font-bold">
          Ready Our Latest Insights from <br /> Our Blog Posts
        </h2>
      </div>

      {/* Blog Card Section */}
      <div className="w-[80%] mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 ">
        {BlogData.map((items) => {
          return (
            <div
              key={items.id}
              data-aos="fade-right"
              data-aos-anchor-placement="top-center"
              data-aos-delay={items.delay}
            >
              <BlogCard image={items.image} title={items.title} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
