"use client";
import { assets, blog_data } from "@/assets/assets";
import Footer from "@/components/Footer";
import { FacebookLogo, InstagramLogo, XLogo } from "@phosphor-icons/react/dist/ssr";
import axios from "axios";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const BlogPage = ({ params }) => {
  const [data, setData] = useState(null);
  const fetchBlogData = async () => {
    const response = await axios.get("/api/blog", {
      params: {
        id: params.id,
      },
    });
    setData(response.data.blog);
  };

  useEffect(() => {
    fetchBlogData();
  }, []);

  return data ? (
    <>
      {console.log(data)}
      <div className="bg-gray-200 py-5 px-5 md:px-12 lg:px-28">
        <div className="flex justify-between items-center">
          <Link href={"/"}>
            <Image
              src={assets.logo}
              alt=""
              width={180}
              className="w-[130px] sm:w-auto"
            />
          </Link>

          <button className="flex items-center gap-2, font-medium py-1 px-1 sm:py-3 sm:px-6 border border-solid border-black transition-all hover:shadow-[-7px_7px_0px_#000000]">
            Get Started <ArrowRight color="black" size={24} />
          </button>
        </div>
        <div className="text-center my-24">
          <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto">
            {data.title}
          </h1>
          <Image
            src={data.author_img}
            width={60}
            height={60}
            alt=""
            className="mx-auto mt-6 border-2 border-white rounded-full"
          />
          <p className="mt-1 pb-2 text-lg max-w-[740px] mx-auto">
            {data.author}
          </p>
        </div>
      </div>
      <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
        <Image
          src={data.image}
          width={1280}
          height={720}
          alt=""
          className="border-4 border-white"
        />
        <h1 className="my-8 text-[28px] font-semibold">Introduction:</h1>
        <p>{data.description}</p>
        <h3 className="my-5 text-[18px] font-semibold">
          Step 1: Self-Reflection and Goal Setting
        </h3>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          voluptatem, neque quaerat et sit commodi veritatis odio recusandae,
          harum quos eveniet mollitia in odit animi at explicabo ipsa vitae
          inventore?
        </p>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          voluptatem, neque quaerat et sit commodi veritatis odio recusandae,
          harum quos eveniet mollitia in odit animi at explicabo ipsa vitae
          inventore?
        </p>
        <h3 className="my-5 text-[18px] font-semibold">
          Step 2: Self-Reflection and Goal Setting
        </h3>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          voluptatem, neque quaerat et sit commodi veritatis odio recusandae,
          harum quos eveniet mollitia in odit animi at explicabo ipsa vitae
          inventore?
        </p>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          voluptatem, neque quaerat et sit commodi veritatis odio recusandae,
          harum quos eveniet mollitia in odit animi at explicabo ipsa vitae
          inventore?
        </p>
        <h3 className="my-5 text-[18px] font-semibold">
          Step 3: Self-Reflection and Goal Setting
        </h3>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          voluptatem, neque quaerat et sit commodi veritatis odio recusandae,
          harum quos eveniet mollitia in odit animi at explicabo ipsa vitae
          inventore?
        </p>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          voluptatem, neque quaerat et sit commodi veritatis odio recusandae,
          harum quos eveniet mollitia in odit animi at explicabo ipsa vitae
          inventore?
        </p>
        <h3 className="my-5 text-[18px] font-semibold">Conclusion:</h3>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          voluptatem, neque quaerat et sit commodi veritatis odio recusandae,
          harum quos eveniet mollitia in odit animi at explicabo ipsa vitae
          inventore?
        </p>

        <div className="my-24">
          <p className="text-black font-semibold my-4">
            Share this article on social media
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
      </div>
      <Footer />
    </>
  ) : (
    <></>
  );
};

export default BlogPage;
