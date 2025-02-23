import React from "react";
const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-200 p-6">
      <h1 className="text-4xl font-bold text-center bg-blue-900 text-white p-2 mb-8">
        Master Dashboard
      </h1>


      {/* Database Stats */}
      
      <div className="flex flex-row  justify-evenly">
        <div className="bg-white shadow-lg rounded-lg p-6 w-1/5 h-fit text-center border border-gray-300">
          <h2 className="text-lg font-semibold text-gray-800">
            No. of Records
          </h2>
          <p className="text-2xl font-bold text-indigo-700">Count</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 text-center  w-1/5 h-fit  border border-gray-300">
          <h2 className="text-lg font-semibold text-gray-800">No. of Cities</h2>
          <p className="text-2xl font-bold text-indigo-700">Count</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 text-center w-1/5 h-fit border  border-gray-300">
          <h2 className="text-lg font-semibold text-gray-800">
            No. of Locations
          </h2>
          <p className="text-2xl font-bold text-indigo-700">Count</p>
        </div>
      </div>

      <div className="flex  flex-col justify-center items-center gap-6 mt-6">
        <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-300 overflow-x-auto w-2/6">
          <h2 className="text-xl font-semibold text-center text-gray-800 mb-4">
            City Wise Split
          </h2>
          <table className="w-full border-collapse border border-gray-400 bg-gray-50 text-sm sm:text-base">
            <thead className="bg-indigo-500 text-white">
              <tr>
                <th className="border p-3">City</th>
                <th className="border p-3">Count</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center hover:bg-indigo-100">
                <td className="border p-3">City 1</td>
                <td className="border p-3">count</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-300 overflow-x-auto w-2/6">
          <h2 className="text-xl font-semibold text-center text-gray-800 mb-4">
            Open Projects
          </h2>
          <table className="w-full border-collapse border border-gray-400 bg-gray-50 text-sm sm:text-base">
            <thead className="bg-cyan-500 text-white">
              <tr>
                <th className="border p-3">Name</th>
                <th className="border p-3">Date</th>
                <th className="border p-3">Count</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center hover:bg-cyan-100">
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
