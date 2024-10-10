import React from "react";

function OrderModal({ isOpen, orderData, handleInputChange, handleOrderAction, setModalOpen, title }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-5 rounded shadow-md">
        <h3 className="text-lg font-bold">{title}</h3>
        <input type="date" name="date" value={orderData.date} onChange={handleInputChange} className="w-full p-2 my-2 border" />
        <input type="text" name="customerName" value={orderData.customerName} onChange={handleInputChange} placeholder="Customer Name" className="w-full p-2 my-2 border" />
        <input type="text" name="productName" value={orderData.productName} onChange={handleInputChange} placeholder="Product Name" className="w-full p-2 my-2 border" />
        <input type="text" name="price" value={orderData.price} onChange={handleInputChange} placeholder="Price" className="w-full p-2 my-2 border" />
        <input type="text" name="quantity" value={orderData.quantity} onChange={handleInputChange} placeholder="Quantity" className="w-full p-2 my-2 border" />
        <input type="text" name="location" value={orderData.location} onChange={handleInputChange} placeholder="Location" className="w-full p-2 my-2 border" />
        <select name="status" value={orderData.status} onChange={handleInputChange} className="w-full p-2 my-2 border">
          <option value="delivered">Delivered</option>
          <option value="cancelled">Canceled</option>
          <option value="pending">Pending</option>
        </select>
        <div className="flex justify-between mt-4">
          <button onClick={() => setModalOpen(false)} className="bg-red-500 text-white p-2 rounded">Cancel</button>
          <button onClick={handleOrderAction} className="bg-green-500 text-white p-2 rounded">Save</button>
        </div>
      </div>
    </div>
  );
}

export default OrderModal;
