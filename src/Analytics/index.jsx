import React from 'react';
import { BsThreeDots } from "react-icons/bs";
import { LiaUserFriendsSolid } from "react-icons/lia";

const Analytics = () => {
  const data = [
    { label: "Total Customer", value: "470", change: "3.901", percentage: true },
    { label: "Team Plan", value: "17", change: "3.901", percentage: true },
    { label: "Basic Plan", value: "63", change: "3.901", percentage: true },
    { label: "Pelanggan berhenti", value: "4", change: "2.90", percentage: false },
  ];

  return (
    <div className="flex flex-wrap justify-center items-start gap-10"> 
      {data.map((item, index) => (
        <div key={index} className="flex flex-col w-64"> 
          <div className="flex justify-between items-center bg-gray-200 border border-gray-400 rounded p-3 shadow-md h-24"> 
            <div className="flex items-center">
              <LiaUserFriendsSolid className="text-2xl mr-2" /> 
              <p className="text-lg font-semibold">{item.label}</p>
            </div>
            <BsThreeDots className="text-xl" /> 
          </div>
         
          <div className="flex justify-between items-center bg-gray-200 border border-gray-400 rounded-lg p-3 shadow-md h-24"> 
            <p className="text-2xl font-semibold">{item.value} 
              <span className={`font-semibold ${item.percentage ? 'text-green-500' : 'text-orange-500'} text-xs ml-1`}>
                {item.change}%
              </span> 
              <span className='text-slate-400 text-xs font-thin'> from last week</span>
            </p> 
          </div>
        </div>
      ))}
    </div>
  );
}

export default Analytics;