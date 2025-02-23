import React from "react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-4xl font-bold text-center bg-gray-900 text-white p-4 mb-8 rounded-lg">
        Master Dashboard
      </h1>

      {/* Database Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-800 shadow-lg rounded-lg p-6 text-center border border-gray-700">
          <h2 className="text-lg font-semibold text-gray-300">No. of Records</h2>
          <p className="text-2xl font-bold text-indigo-400">Count</p>
        </div>
        <div className="bg-gray-800 shadow-lg rounded-lg p-6 text-center border border-gray-700">
          <h2 className="text-lg font-semibold text-gray-300">No. of Cities</h2>
          <p className="text-2xl font-bold text-indigo-400">Count</p>
        </div>
        <div className="bg-gray-800 shadow-lg rounded-lg p-6 text-center border border-gray-700">
          <h2 className="text-lg font-semibold text-gray-300">No. of Locations</h2>
          <p className="text-2xl font-bold text-indigo-400">Count</p>
        </div>
      </div>

      {/* Tables Section */}
      <div className="flex flex-col justify-center items-center gap-6 mt-8">
        {/* City Wise Split */}
        <div className="bg-gray-800 shadow-lg rounded-lg p-6 border border-gray-700 overflow-x-auto w-full md:w-2/6">
          <h2 className="text-xl font-semibold text-center text-gray-300 mb-4">
            City Wise Split
          </h2>
          <table className="w-full border-collapse border border-gray-600 text-sm sm:text-base">
            <thead className="bg-indigo-800 text-white">
              <tr>
                <th className="border p-3">City</th>
                <th className="border p-3">Count</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center hover:bg-indigo-900 transition">
                <td className="border p-3">City 1</td>
                <td className="border p-3">count</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Open Projects */}
        <div className="bg-gray-800 shadow-lg rounded-lg p-6 border border-gray-700 overflow-x-auto w-full md:w-2/6">
          <h2 className="text-xl font-semibold text-center text-gray-300 mb-4">
            Open Projects
          </h2>
          <table className="w-full border-collapse border border-gray-600 text-sm sm:text-base">
            <thead className="bg-cyan-700 text-white">
              <tr>
                <th className="border p-3">Name</th>
                <th className="border p-3">Date</th>
                <th className="border p-3">Count</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center hover:bg-cyan-900 transition">
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
