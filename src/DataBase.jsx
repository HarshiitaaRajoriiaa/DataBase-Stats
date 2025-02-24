import React from "react";
import { FaCity, FaClipboardList, FaMapMarkedAlt } from "react-icons/fa";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const COLORS = ["#9764f0", "#33A1FD", "#b311c1"];
const cityData = [
  { name: "City 1", value: 300 },
  { name: "City 2", value: 200 },
  { name: "City 3", value: 150 },
];
const barData = [
  { name: "Jan", count: 40 },
  { name: "Feb", count: 55 },
  { name: "Mar", count: 75 },
  { name: "Apr", count: 60 },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#121212] text-gray-300 p-6">
      <h1 className="text-4xl font-bold text-center bg-[#1E1E2E] text-white p-5 rounded-lg shadow-lg">
        Master Dashboard
      </h1>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {[
          { title: "No. of Records", icon: <FaClipboardList size={40} className="text-[#9764f0]" /> },
          { title: "No. of Cities", icon: <FaCity size={40} className="text-[#33A1FD]" /> },
          { title: "No. of Locations", icon: <FaMapMarkedAlt size={40} className="text-[#b311c1]" /> },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-[#1E1E2E] shadow-xl rounded-xl p-6 text-center border border-[#25293D] hover:scale-105 transition-transform duration-300"
          >
            <div className="flex justify-center mb-2">{item.icon}</div>
            <h2 className="text-lg font-semibold text-gray-300">{item.title}</h2>
            <p className="text-3xl font-bold text-[#33A1FD] mt-2">Count</p>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {/* Pie Chart */}
        <div className="bg-[#1E1E2E] shadow-lg rounded-lg p-6 border border-[#25293D] flex flex-col items-center">
          <h2 className="text-xl font-semibold text-center text-[#33A1FD] mb-4">City Wise Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={cityData} cx="50%" cy="50%" outerRadius={100} fill="#8884d8" dataKey="value" label>
                {cityData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Table Section */}
        <div className="bg-[#1E1E2E] shadow-lg rounded-lg p-6 border border-[#25293D] flex flex-col items-center">
          <h2 className="text-xl font-semibold text-center text-[#33A1FD] mb-4">City Wise Split</h2>
          <table className="w-full border-collapse border border-[#25293D] text-sm sm:text-base">
            <thead className="bg-[#25293D] text-white">
              <tr>
                <th className="border p-3">City</th>
                <th className="border p-3">Count</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center hover:bg-[#25293D] transition">
                <td className="border p-3">City 1</td>
                <td className="border p-3">count</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Open Projects */}
        <div className="bg-[#1E1E2E] shadow-lg rounded-lg p-6 border border-[#25293D] flex flex-col items-center">
          <h2 className="text-xl font-semibold text-center text-[#33A1FD] mb-4">Open Projects</h2>
          <table className="w-full border-collapse border border-[#25293D] text-sm sm:text-base">
            <thead className="bg-[#25293D] text-white">
              <tr>
                <th className="border p-3">Name</th>
                <th className="border p-3">Date</th>
                <th className="border p-3">Count</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center hover:bg-[#25293D] transition">
                <td className="border p-3">name1</td>
                <td className="border p-3">date</td>
                <td className="border p-3">count</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
