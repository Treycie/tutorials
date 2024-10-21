import React from 'react';
import { TfiDownload } from "react-icons/tfi";
import { FaCalendarDays } from "react-icons/fa6";
import { BsPlus } from "react-icons/bs";

const Customer = () => {
  return (
    <div className="flex justify-between items-center p-10">
      <p className="text-lg font-semibold">CUSTOMER</p>
      <div className="flex items-center space-x-10"> 
        <TfiDownload className="text-2xl cursor-pointer" />
        <FaCalendarDays className="text-2xl cursor-pointer" />
        <div>
          <button className='bg-red-500 text-white py-2 px-4 rounded-md flex items-center'> 
            Add Customer
            <BsPlus className="ml-2" /> 
          </button>
        </div>
      </div>
    </div>
  );
}

export default Customer;