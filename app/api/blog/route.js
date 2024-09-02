import { ConnectDB } from "@/lib/config/db";
import { writeFile } from "fs/promises";
import axios from "axios";
import { title } from "process";
import BlogModel from "@/lib/models/blog.model";
import { log } from "console";

const { NextResponse } = require("next/server");

const LoadDB = async () => {
  await ConnectDB();
};

LoadDB();

// Loading All Blogs
export async function GET(request, response) {
  const blogId = request.nextUrl.searchParams.get("id");
  if (blogId) {
    const blog = await BlogModel.findById(blogId);
    return NextResponse.json({
      blog,
    });
  } else {
    const blogs = await BlogModel.find({});

    return NextResponse.json({
      blogs,
      message: "All Blogs Loaded",
    });
  }
}

// Posting Blogs
export async function POST(request) {
  const formData = await request.formData();
  const timestamp = Date.now();

  // Image Conversion Logic
  const image = formData.get("image");
  const imageByteData = await image.arrayBuffer();
  const buffer = Buffer.from(imageByteData);
  const base64Image = buffer.toString("base64");

  // Generate Image Name with Timestamp
  const imageName = `${timestamp}_${image.name}`;

  // ImgBB API Key
  const apiKey = process.env.IMGBB_API;

  // Create FormData to send
  const uploadFormData = new FormData();
  uploadFormData.append("image", base64Image);
  uploadFormData.append("name", imageName); // Optional if you want to track the name

  let imageURL;

  // Upload Image to ImgBB
  try {
    const response = await axios.post(
      `https://api.imgbb.com/1/upload?key=${apiKey}`,
      uploadFormData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    imageURL = response.data.data.url;
    console.log(`Image uploaded: ${imageURL}`);
  } catch (error) {
    console.error("Error uploading image to ImgBB:", error);
    return NextResponse.json({ error: "Image upload failed" }, { status: 500 });
  }

  // Prepare blog data
  const blogData = {
    title: formData.get("title"),
    description: formData.get("description"),
    category: formData.get("category"),
    author: formData.get("author"),
    image: imageURL,
    author_img: formData.get("author_img"),
  };

  // Save blog data to MongoDB
  try {
    await BlogModel.create(blogData);
    console.log("Blog Saved");

    return NextResponse.json({ success: true, message: "Blog Added" });
  } catch (error) {
    console.error("Error saving blog data:", error);
    return NextResponse.json({ error: "Blog save failed" }, { status: 500 });
  }
}
