import { assets } from "@/assets/assets";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="py-5 px-5 md:px-12 lg:px-28">
      <div className="flex justify-between items-center">
        {/* <Image
          src={assets.logo}
          width={180}
          alt=""
          className="w-[130px] sm:w-auto"
        /> */}
        <h1 className="text-3xl sm:text-4xl font-medium">zBlogs.</h1>
        <button className="flex items-center gap-2 font-medium py-1 px-1 sm:py-3 sm:px-6 border border-solid border-black transition-all duration-300 rounded-3xl hover:rounded-none">
          Subscribe <ArrowRight color="black" size={24} />
        </button>
      </div>
      <div className="text-center mt-16 mb-8">
        <h1 className="text-3xl sm:text-5xl font-medium">Latest Tech Blogs</h1>
        <p className="mt-10 max-w-[740px] m-auto text-xs sm:text-base">
          Stay ahead with the latest in technology, software development, and
          innovation. Discover expert articles, tutorials, and insights to fuel
          your passion for tech.
        </p>

        {/* <form
          action=""
          className="flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000000]" 
        >
            <input type="email" placeholder="Enter your email" className="pl-4 outline-none" />
            <button type="submit" className="border-l border-black px-4 py-4 sm:px-8 active:bg-gray-600 active:text-white">Subscribe</button>
        </form> */}
      </div>
    </div>
  );
};

export default Header;
