import React from "react";
import { IoCloseCircleOutline } from "react-icons/io5";

function Filters({ filterDate, setFilterDate, filterOrderId, setFilterOrderId, filterLocation, setFilterLocation }) {
  return (
    <div className="flex justify-between items-center mt-6">
      <ul className="flex justify-between items-center">
        <li>
          <input
            type="date"
            value={filterDate}
            onChange={(e) => setFilterDate(e.target.value)}
            className="border p-2"
          />
        </li>
        <li>
          <input
            type="text"
            value={filterOrderId}
            onChange={(e) => setFilterOrderId(e.target.value)}
            placeholder="Select an Order Id (e.g. #1)"
            className="border p-2"
          />
        </li>
        <li>
          <select
            value={filterLocation}
            onChange={(e) => setFilterLocation(e.target.value)}
            className="border p-2"
          >
            <option value="">Select a Location</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="New Delhi">New Delhi</option>
          </select>
        </li>
      </ul>

      <button
        onClick={() => {
          setFilterDate('');
          setFilterOrderId('');
          setFilterLocation('');
        }}
        className="flex items-center border-2 py-1 px-3 rounded-md text-gray-600"
      >
        Clear All <IoCloseCircleOutline />
      </button>
    </div>
  );
}

export default Filters;
