import React from "react";
import { IoPlay } from "react-icons/io5";
import { CgMoreVerticalO } from "react-icons/cg";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video  pt-[20%] px-16 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-5xl w-1/2 font-bold ">{title}</h1>
      <p className="py-6 text w-1/4">{overview}</p>
      <div className="flex">
        <button className="flex items-center bg-white text-black text-xl p-3 px-10 rounded-lg mr-2 hover:bg-opacity-80">
          {" "}
          <IoPlay />
          Play
        </button>
        <div>
          <button className=" flex items-center bg-gray-500 text-white text-xl p-3 px-4 bg-opacity-40 rounded-lg gap-2">
            <CgMoreVerticalO /> More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
