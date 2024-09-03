import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { FacebookLogo, InstagramLogo, XLogo } from "@phosphor-icons/react/dist/ssr";

const Footer = () => {
  return (
    <div className="flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black py-5 items-center">
      <Image src={assets.logo_light} alt="" width={120} />
      <p className="text-white text-sm ">
        All right reserved. Copyright zBlogs
      </p>
      <div className="flex gap-2">
        <div className="bg-white p-1  rounded-full">
          <XLogo size={24} color="#000000" weight="duotone" />
        </div>
        <div className="bg-white p-1  rounded-full">
          <InstagramLogo size={24} color="#000000" weight="duotone" />
        </div>
        <div className="bg-white p-1 rounded-full">
          <FacebookLogo size={24} color="#000000" weight="duotone" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
