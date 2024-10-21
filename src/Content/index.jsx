import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineFilter } from "react-icons/ai";

const Content = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All time');

  const data = [
    {
      fullName: "Caden Morse",
      email: "raines@live.com",
      billingDate: "JUNE, 12 2023",
      plan: "TEAM",
      totalUsers: 10,
      amount: "$5,000/year" 
    },
    {
      fullName: "Santino Marsh",
      email: "whimsy@comcast",
      billingDate: "JUNE, 12 2023",
      plan: "TEAM",
      totalUsers: 44,
      amount: "$19,000/year" 
    },
    {
      fullName: "Kristin Zavala",
      email: "garyjb@sbcglobal.net",
      billingDate: "JUNE, 12 2023",
      plan: "TEAM",
      totalUsers: 32,
      amount: "$14,000/year" 
    },
    {
      fullName: "Kristin Williams",
      email: "evans@me.com",
      billingDate: "JUNE, 12 2023",
      plan: "TEAM",
      totalUsers: 12,
      amount: "$5,700/year" 
    },
    {
      fullName: "Cannon Paul",
      email: "grothoff@icloud.com",
      billingDate: "JUNE, 12 2023",
      plan: "TEAM",
      totalUsers: 18,
      amount: "$7,200/year" 
    },
    {
      fullName: "Marlee Merritt",
      email: "tkrotchko@yahoo.ca",
      billingDate: "JUNE, 12 2023",
      plan: "TEAM",
      totalUsers: 30,
      amount: "$13,800/year" 
    },
  ];

  // Filter the data based on the search term and selected filter
  const filteredData = data.filter(item => {
    const matchesSearch = item.fullName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'All time' || item.plan === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="overflow-x-auto mt-6">
      <div className="mb-4 border border-gray-300 p-4 rounded-md flex justify-between items-center">
        <h2 className="text-2xl font-bold">Customer List</h2>
        <div className="inline-flex space-x-4">
          {["All time", "Team plan", "Active"].map((label, index) => (
            <button 
              key={index} 
              onClick={() => setFilter(label)}
              className={`bg-white text-black font-bold border border-gray-300 rounded-md px-4 py-2 flex items-center hover:bg-gray-100 ${filter === label ? 'bg-gray-200' : ''}`}
            >
              {label}
              <AiOutlineClose className="ml-2 text-gray-500" />
            </button>
          ))}
          <div className="flex items-center">
            <button 
              className="bg-white text-black font-bold border border-gray-300 rounded-md px-4 py-2 flex items-center hover:bg-gray-100"
            >
              <AiOutlineFilter className="mr-2 text-gray-500" />
              More filters
            </button>
          </div>
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search by name" 
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="border border-gray-300 rounded-md px-4 py-2"
            />
          </div>
          <button 
            className="bg-white text-black border border-gray-300 rounded-md px-4 py-2 hover:bg-gray-100"
          >
            Search
          </button>
        </div>
      </div>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-6 px-8 border-b text-left text-base text-slate-500">Full Name</th>
            <th className="py-6 px-8 border-b text-left text-base text-slate-500">Billing Date</th>
            <th className="py-6 px-8 border-b text-left text-base text-slate-500">Plan</th>
            <th className="py-6 px-8 border-b text-left text-base text-slate-500">Total Users</th>
            <th className="py-6 px-8 border-b text-left text-base text-slate-500">Amount</th>
            <th className="py-6 px-8 border-b text-left text-base text-slate-500">Details</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index} className="">
              <td className="py-6 px-8 border-b text-base font-bold">
                {item.fullName}
                <p className="text-sm text-slate-300 font-thin">{item.email}</p>
              </td>
              <td className="py-6 px-8 border-b text-base">{item.billingDate}</td>
              <td className="py-6 px-8 border-b text-base">
                <span className="bg-white text-fuchsia-500 border border-fuchsia-500 rounded-lg px-2 py-1">
                  {item.plan}
                </span>
              </td>
              <td className="py-6 px-8 border-b text-base">{item.totalUsers} Users</td>
              <td className="py-6 px-8 border-b text-base">{item.amount}</td>
              <td className="py-6 px-8 border-b text-blue-500 cursor-pointer text-base underline">View Details</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Content;