import React from "react";
import OrderList from "../Components/OrderList";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { RiNotification2Line } from "react-icons/ri";
import { RiMessage2Line } from "react-icons/ri";
import { GoGift } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";

function DashBoard() {
  return (
    <div className="bg-gray-100 ml-[18%] w-full p-10">
      
      <div className="flex justify-between items-center">
      <div className="flex w-[750px] h-[45px] rounded-md bg-white">
        <input
          type="text"
          placeholder="Search For Products"
          className="bg-white w-full rounded-md p-4 outline-none"
        />
        <CiSearch className="text-[40px] m-auto mr-4 p-1 text-slate-500" />

      </div>

      <div >
        <ul className="flex justify-between items-center text-[25px] gap-5">
          <li className="bg-blue-200 px-2 py-2 rounded-xl text-blue-500"><Link ><RiNotification2Line /></Link></li>
          <li className="bg-blue-200 px-2 py-2 rounded-xl text-blue-500"><Link><RiMessage2Line /></Link></li>
          <li className="bg-gray-200 px-2 py-2 rounded-xl text-gray-500"><Link><GoGift /></Link></li>
          <li className="bg-red-200 px-2 py-2 rounded-xl text-red-500"><Link><IoSettingsOutline /></Link></li>
        </ul>
      </div>

      <div className="border-l-2 border-gray-500 flex justify-between items-center gap-5">
        <div className="border-r-2 border-black"></div>
        <p><span className="text-gray-500">Hello,</span>User</p>
        <FaUserCircle className="text-[40px] text-gray-600"/>
      </div>

      </div>

      <OrderList />
    </div>
  );
}

export default DashBoard;

// <div className="p-6 flex-1">
//       <h1 className="text-2xl font-semibold">Dashboard</h1>
//       <div className="grid grid-cols-4 gap-6 mt-4">
//         {/* Small cards */}
//         <div className="bg-white p-4 rounded shadow">
//           <h2>Total Orders</h2>
//           <p className="text-xl font-bold">75</p>
//         </div>
//         <div className="bg-white p-4 rounded shadow">
//           <h2>Customers</h2>
//           <p className="text-xl font-bold">357</p>
//         </div>
//         <div className="bg-white p-4 rounded shadow">
//           <h2>Revenue</h2>
//           <p className="text-xl font-bold">$128</p>
//         </div>
//         {/* Additional Cards */}
//       </div>

//       {/* Pie Charts and Graph */}
//       <div className="grid grid-cols-2 gap-6 mt-4">
//         <div className="bg-white p-4 rounded shadow">
//           <h2>Pie Chart</h2>
//           {/* Placeholder for Pie Chart */}
//         </div>
//         <div className="bg-white p-4 rounded shadow">
//           <h2>Order Chart</h2>
//           {/* Placeholder for Line Chart */}
//         </div>
//       </div>

//       {/* Order List Table */}
//       <div className="bg-white p-4 rounded shadow mt-6">
//         <h2>Order List</h2>
//         <table className="min-w-full">
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Date</th>
//               <th>Customer</th>
//               <th>Amount</th>
//               <th>Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>1001</td>
//               <td>2024-10-09</td>
//               <td>John Doe</td>
//               <td>$128</td>
//               <td className="text-green-500">Completed</td>
//             </tr>
//             {/* Additional Rows */}
//           </tbody>
//         </table>
//       </div>
//     </div>

//     <div className="p-6 flex-1">
//       <h1 className="text-2xl font-semibold">Dashboard</h1>
//       <div className="grid grid-cols-4 gap-6 mt-4">
//         {/* Small cards */}
//         <div className="bg-white p-4 rounded shadow">
//           <h2>Total Orders</h2>
//           <p className="text-xl font-bold">75</p>
//         </div>
//         <div className="bg-white p-4 rounded shadow">
//           <h2>Customers</h2>
//           <p className="text-xl font-bold">357</p>
//         </div>
//         <div className="bg-white p-4 rounded shadow">
//           <h2>Revenue</h2>
//           <p className="text-xl font-bold">$128</p>
//         </div>
//         {/* Additional Cards */}
//       </div>

//       {/* Pie Charts and Graph */}
//       <div className="grid grid-cols-2 gap-6 mt-4">
//         <div className="bg-white p-4 rounded shadow">
//           <h2>Pie Chart</h2>
//           {/* Placeholder for Pie Chart */}
//         </div>
//         <div className="bg-white p-4 rounded shadow">
//           <h2>Order Chart</h2>
//           {/* Placeholder for Line Chart */}
//         </div>
//       </div>

//       {/* Order List Table */}
//       <div className="bg-white p-4 rounded shadow mt-6">
//         <h2>Order List</h2>
//         <table className="min-w-full">
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Date</th>
//               <th>Customer</th>
//               <th>Amount</th>
//               <th>Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>1001</td>
//               <td>2024-10-09</td>
//               <td>John Doe</td>
//               <td>$128</td>
//               <td className="text-green-500">Completed</td>
//             </tr>
//             {/* Additional Rows */}
//           </tbody>
//         </table>
//       </div>
//     </div>
