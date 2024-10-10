import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { BsTrash3 } from "react-icons/bs";

function OrderTable({ orders, setCurrentOrder, setOrderData, setEditModalOpen, setDeleteModalOpen }) {
  return (
    <table className="min-w-full mt-10">
      <thead className="bg-slate-100">
        <tr>
          <th>Date</th>
          <th>Order ID</th>
          <th>Customer Name</th>
          <th>Product Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Location</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((item, index) => (
          <tr key={item._id} className="text-center border-b-2 mt-4">
            <td className="p-3">{new Date(item.date).toLocaleDateString()}</td>
            <td className="p-3 font-semibold">#{index + 1}</td>
            <td className="p-3 font-semibold">{item.customerName}</td>
            <td className="p-3 font-semibold">{item.productName}</td>
            <td className="p-3 font-semibold">{item.price}</td>
            <td className="p-3 font-semibold">{item.quantity}</td>
            <td className="p-3 font-semibold">{item.location}</td>
            <td className="p-3 font-semibold">{item.status}</td>
            <td>
              <div className="flex justify-between items-center">
                <button onClick={() => { setCurrentOrder(item); setOrderData(item); setEditModalOpen(true); }}>
                  <FaRegEdit className="text-red-400 text-3xl" />
                </button>
                <button onClick={() => { setCurrentOrder(item); setDeleteModalOpen(true); }}>
                  <BsTrash3 className="text-red-400 text-3xl" />
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default OrderTable;
