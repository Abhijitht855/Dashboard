import React from "react";

function DeleteConfirmationModal({ isOpen, currentOrder, handleDeleteOrder, setDeleteModalOpen }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-5 rounded shadow-md">
        <h3 className="text-lg font-bold">Confirm Delete</h3>
        <p>Are you sure you want to delete the order for {currentOrder?.customerName}?</p>
        <div className="flex justify-center mt-4 gap-5">
          <button onClick={() => setDeleteModalOpen(false)} className="bg-red-500 text-white p-2 rounded">Cancel</button>
          <button onClick={handleDeleteOrder} className="bg-blue-500 text-white p-2 rounded">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default DeleteConfirmationModal;
