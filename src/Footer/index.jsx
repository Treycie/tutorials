import React from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="flex justify-between items-center mt-4 p-4 border-t border-gray-300">
      <div className="flex items-center">
        <p className="text-gray-700 mr-2">Results per page: 10</p>
      </div>

      <div className="flex items-center space-x-2 ml-auto">
        <button className="bg-white text-black border border-gray-300 rounded-md px-4 py-2 mr-2 hover:bg-gray-100">
          <AiOutlineArrowLeft className="mr-1" /> Previous
        </button>

        <div className="flex space-x-2">
          {[1, 2, 3].map((page) => (
            <button
              key={page}
              className="bg-white text-black border border-gray-300 rounded-md px-4 py-2 hover:bg-pink-500 hover:text-white"
            >
              {page}
            </button>
          ))}
        </div>

        <div className="flex space-x-2">
          {[8, 9].map((page) => (
            <button
              key={page}
              className="bg-white text-black border border-gray-300 rounded-md px-4 py-2 hover:bg-gray-100"
            >
              {page}
            </button>
          ))}
        </div>

        <button className="bg-white text-black border border-gray-300 rounded-md px-4 py-2 ml-2 hover:bg-gray-100">
          Next <AiOutlineArrowRight className="ml-1" />
        </button>
      </div>
    </div>
  );
};

export default Footer;