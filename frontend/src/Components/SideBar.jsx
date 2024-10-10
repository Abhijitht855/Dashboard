import React from "react";
import { NavLink } from "react-router-dom";
import assets from "../assets/assets";
import { IoMdHome } from "react-icons/io";
import { VscListSelection } from "react-icons/vsc";
import { FaRegFile } from "react-icons/fa";
import { GoPeople } from "react-icons/go";
import { TfiBarChart } from "react-icons/tfi";
import { LuPencil } from "react-icons/lu";
import { BsCup } from "react-icons/bs";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";
import { CiCalendar } from "react-icons/ci";
import { PiChatDotsBold } from "react-icons/pi";
import { CiWallet } from "react-icons/ci";


function SideBar() {
  return (
    <div className="w-[18%] fixed h-screen bg-white shadow-md">
      <h2>
        <img src={assets.img1} alt="" className="p-8 w-[250px]" />
      </h2>
      <ul className=" ml-8 font-semibold text-slate-600 p-4">
        <li className="mb-4 ">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-4 bg-green-100 text-green-600 py-2 px-3 rounded-md"
                : "flex items-center gap-4 py-2 px-3"
            }
          >
            <IoMdHome />
            Dashboard
          </NavLink>
        </li>
        <li className="mb-4">
          <NavLink
            to="/order-list"
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-4 bg-green-100 text-green-600 py-2 px-3 rounded-md"
                : "flex items-center gap-4 py-2 px-3"
            }
          >
            <VscListSelection />
            Order List
          </NavLink>
        </li>
        <li className="mb-4">
          <NavLink
            to="/order-detail"
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-4 bg-green-100 text-green-600 py-2 px-3 rounded-md"
                : "flex items-center gap-4 py-2 px-3"
            }
          >
            <FaRegFile />
            Order Detail
          </NavLink>
        </li>
        <li className="mb-4">
          <NavLink
            to="/customer"
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-4 bg-green-100 text-green-600 py-2 px-3 rounded-md"
                : "flex items-center gap-4 py-2 px-3"
            }
          >
            <GoPeople />
            Customer
          </NavLink>
        </li>
        <li className="mb-4">
          <NavLink
            to="/analytics"
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-4 bg-green-100 text-green-600 py-2 px-3 rounded-md"
                : "flex items-center gap-4 py-2 px-3"
            }
          >
            <TfiBarChart />
            Analytics
          </NavLink>
        </li>
        <li className="mb-4">
          <NavLink
            to="/reviews"
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-4 bg-green-100 text-green-600 py-2 px-3 rounded-md"
                : "flex items-center gap-4 py-2 px-3"
            }
          >
            <LuPencil />
            Reviews
          </NavLink>
        </li>
        <li className="mb-4">
          <NavLink
            to="/foods"
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-4 bg-green-100 text-green-600 py-2 px-3 rounded-md"
                : "flex items-center gap-4 py-2 px-3"
            }
          >
            <BsCup />
            Foods
          </NavLink>
        </li>
        <li className="mb-4">
          <NavLink
            to="/food-detail"
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-4 bg-green-100 text-green-600 py-2 px-3 rounded-md"
                : "flex items-center gap-4 py-2 px-3"
            }
          >
            <HiOutlinePencilAlt />
            Food Detail
          </NavLink>
        </li>
        <li className="mb-4">
          <NavLink
            to="/customer-detail"
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-4 bg-green-100 text-green-600 py-2 px-3 rounded-md"
                : "flex items-center gap-4 py-2 px-3"
            }
          >
            <AiOutlineUser />
            Customer Detail
          </NavLink>
        </li>
        <li className="mb-4">
          <NavLink
            to="/calendar"
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-4 bg-green-100 text-green-600 py-2 px-3 rounded-md"
                : "flex items-center gap-4 py-2 px-3"
            }
          >
            <CiCalendar />
            Calendar
          </NavLink>
        </li>
        <li className="mb-4">
          <NavLink
            to="/chat"
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-4 bg-green-100 text-green-600 py-2 px-3 rounded-md"
                : "flex items-center gap-4 py-2 px-3"
            }
          >
            <PiChatDotsBold />
            Chat
          </NavLink>
        </li>
        <li className="mb-4">
          <NavLink
            to="/wallet"
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-4 bg-green-100 text-green-600 py-2 px-3 rounded-md"
                : "flex items-center gap-4 py-2 px-3"
            }
          >
            <CiWallet />
            Wallet
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
