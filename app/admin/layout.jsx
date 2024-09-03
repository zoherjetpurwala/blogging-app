import { assets } from "@/assets/assets";
import Sidebar from "@/components/admin_components/Sidebar";
import Image from "next/image";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Layout({ children }) {
  return (
    <>
      <div className="flex flex-col sm:flex-row">
        <ToastContainer />
        <Sidebar />
        <div className="flex flex-col w-full">
          <div className="flex items-center justify-between w-full py-3 sm:max-h-[60px] px-4 sm:px-12 border-b border-black">
            <h3 className="font-medium">Admin Panel</h3>
            <Image src={assets.profile_icon} width={40} alt="" />
          </div>
          <div className="px-4 sm:px-12 py-4 sm:py-8">{children}</div>
        </div>
      </div>
    </>
  );
}
