import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { MdSpaceDashboard } from "react-icons/md";
import { RiShoppingBasket2Fill } from "react-icons/ri";
import { RiShoppingBag2Fill } from "react-icons/ri";
import { BsImage } from "react-icons/bs";
import { MdContactMail } from "react-icons/md";
import { AiFillSetting } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";
import { MdCategory } from "react-icons/md";
import { BiWorld } from "react-icons/bi";

function Sidebar() {
  const title = useLocation();



  return (
    <div className="flex flex-col">
      {/* <img
        src="/AshoplogoBlackhandle.png"
        alt="logo"
        className="w-28 h-28 bg-contain  mx-auto "
      /> */}

      <div className="flex flex-1 flex-col space-y-2 px-2 mt-20">
         <Link
          to={"/admin"}
          className={`flex items-center pl-3 lg:pl-8 space-x-3 w-full  py-2 ${title.pathname === "/admin"
            ? "bg-slate-500 text-white"
            : "bg-slate-200 text-gray-800"
            }`}
        >
          <MdSpaceDashboard className=" text-xl" />
          <span className="text-lg font-semibold ">Dashboard</span>
        </Link>
       <Link
          to={"/progress"}
          className={`flex items-center pl-3 lg:pl-8 space-x-3 w-full  py-2 ${title.pathname === "/progress"
            ? "bg-slate-500 text-white"
            : "bg-slate-200 text-gray-800"
            }`}
        >
          <RiShoppingBag2Fill className=" text-xl" />
          <span className="text-lg font-semibold ">Projects in Progress</span>
        </Link>
         <Link
          to={"/completed"}
          className={`flex items-center pl-3 lg:pl-8 space-x-3 w-full  py-2 ${title.pathname === "/completed"
            ? "bg-slate-500 text-white"
            : "bg-slate-200 text-gray-800"
            }`}
        >
          <RiShoppingBasket2Fill className=" text-xl" />{" "}
          <span className="text-lg font-semibold ">Completed Projects</span>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
