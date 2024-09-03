import { assets, blog_data } from "@/assets/assets";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogItem = ({ title, description, category, image, id }) => {
  return (
    <div className="max-w-[330px] sm:max-w-[300px] bg-white border border-black transition-all duration-300 hover:shadow-[-7px_7px_0px_#000000]">
      <Link href={`/blogs/${id}`}>
        <Image
          src={image}
          alt=""
          width={400}
          height={400}
          className="border-b border-black w-[400px] h-[200px] bg-cover"
        />
      </Link>

      <p className="ml-5 mt-5 px-1 inline-block bg-black text-white text-sm ">
        {category}
      </p>
      <div className="p-5">
        <h5 className="mb-2 text-lg font-medium tracking-tight text-gray-900">
          {title}
        </h5>
        <p className="mb-3 text-sm tracking-tight text-gray-700">
          {description}
        </p>
        <Link
          href={`/blogs/${id}`}
          className="inline-flex items-center py-2 font-semibold text-center justify-center"
        >
          Read more <ArrowRight className="ml-1" color="black" size={18} />
        </Link>
      </div>
    </div>
  );
};

export default BlogItem;
