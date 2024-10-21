import React from 'react';
import { FcCopyright } from "react-icons/fc";
import { FcBusinessman } from "react-icons/fc";
import { AiFillBell } from "react-icons/ai";
import { BiCaretDown } from "react-icons/bi";

const Header = () => {
  return (
    <header className="bg-gray-800 p-4 flex items-center">
      <div className="flex flex-col">
        <div className="flex items-center">
          <FcCopyright className="text-white mr-2 text-4xl" /> 
          <p className='text-white'>ORGANIZED</p>
        </div>
        <div className="flex items-center ml-2">
          <p className='text-slate-300 text-xs'>ManageAnything</p>
        </div>
      </div>
      <div className="flex-grow flex justify-center mx-15"> 
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-700 text-white rounded-md pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span className="absolute left-2 top-2 text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx={11} cy={11} r={8} />
              <line x1={21} y1={21} x2={16.65} y2={16.65} />
            </svg>
          </span>
        </div>
      </div>
      <div className="flex items-center space-x-4 ml-auto"> {/* Move icons to the far right */}
        <FcBusinessman className="text-white text-2xl" />
        <AiFillBell className="text-white text-2xl" />
        <BiCaretDown className="text-white text-2xl" />
      </div>
    </header>
  );
};

export default Header;