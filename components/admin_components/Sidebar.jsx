import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className="flex flex-col bg-slate-100 w-full sm:w-80 sm:h-screen border-r border-black">
      <div className="px-4 sm:px-14 py-3 border-b border-black sm:max-h-[60px]">
        <Image src={assets.logo} width={120} alt="" />
      </div>
      <div className="w-full h-full flex flex-col items-start py-4 sm:py-12 px-4 sm:px-8">
        <Link
          href={"/admin/addblog"}
          className="flex items-center gap-3 font-medium py-2 px-2 w-full bg-white transition-all duration-300 hover:shadow-[-3px_3px_0px_#000000] border border-black"
        >
          <Image src={assets.add_icon} width={24} alt="" />{" "}
          <p className="text-sm sm:text-base">Add Blogs</p>
        </Link>
        <Link href={"/admin/bloglist"} className="mt-4 flex items-center gap-3 font-medium py-2 px-2 w-full bg-white transition-all duration-300 hover:shadow-[-3px_3px_0px_#000000] border border-black">

          <Image src={assets.blog_icon} width={24} alt="" /> 
          <p className="text-sm sm:text-base">Blog List</p>
        </Link>
        <Link href={"/admin/subscriptions"} className="mt-4 flex items-center gap-3 font-medium py-2 px-2 w-full bg-white transition-all duration-300 hover:shadow-[-3px_3px_0px_#000000] border border-black">
          <Image src={assets.email_icon} width={24} alt="" />
          <p className="text-sm sm:text-base">Subscriptions</p>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
