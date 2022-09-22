import React, { useState } from "react";

import Profile from "./Profile";

import { MdSpaceDashboard } from "react-icons/md";


function Header({ title }) {
  const [showProfile, setShowProfile] = useState(false);
  return (
    <div className="w-full py-4 bg-white shadow-md flex justify-between items-center px-2 mb-8">
      <div className="flex items-center space-x-1 flex-1">
        { (
          <MdSpaceDashboard className="text-2xl text-gray-800" />
        )}
        <p>/</p>
        <p>Admin</p>
        <p>/</p>
        <p className="text-capitalize">{title}</p>
      </div>
      <div>
        <div className="flex items-center space-x-1 pr-3">
          <div
            className=" w-10 h-10 rounded-full border border-red-600 cursor-pointer"
            onClick={() => setShowProfile(!showProfile)}
          >
            <img
              src="https://thumbs.dreamstime.com/z/flat-male-avatar-image-beard-hairstyle-businessman-profile-icon-vector-179285629.jpg"
              alt=""
              className="w-full h-full rounded-full"
            />
          </div>
        </div>
        {showProfile && (
          <div className="absolute right-0 rounded-md top-16 shadow-xl shadow-gray-400 z-2000">
            <Profile setShowProfile={setShowProfile} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
