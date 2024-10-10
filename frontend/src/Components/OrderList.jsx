// import React, { useEffect, useState } from "react";
// import { VscListSelection } from "react-icons/vsc";
// import axios from "axios";
// import { FaRegEdit } from "react-icons/fa";
// import { BsTrash3 } from "react-icons/bs";
// import { IoCloseCircleOutline } from "react-icons/io5";

// function OrderList() {
//   const [food, setFood] = useState([]);
//   const [modalOpen, setModalOpen] = useState(false);
//   const [editModalOpen, setEditModalOpen] = useState(false);
//   const [deleteModalOpen, setDeleteModalOpen] = useState(false);
//   const [currentOrder, setCurrentOrder] = useState(null);
//   const [orderData, setOrderData] = useState({
//     date: '',
//     customerName: '',
//     productName: '',
//     price: '',
//     quantity: '',
//     location: '',
//     status: ''
//   });

//   // Filter states
//   const [filterDate, setFilterDate] = useState('');
//   const [filterOrderId, setFilterOrderId] = useState('');
//   const [filterLocation, setFilterLocation] = useState('');

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   const fetchOrders = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/order/");
//       setFood(res.data.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setOrderData({ ...orderData, [name]: value });
//   };

//   const handleAddOrder = async () => {
//     try {
//       await axios.post("http://localhost:5000/order/", orderData);
//       setModalOpen(false);
//       fetchOrders();
//       resetOrderData();
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const handleEditOrder = async () => {
//     try {
//       await axios.put(`http://localhost:5000/order/${currentOrder._id}`, orderData);
//       setEditModalOpen(false);
//       fetchOrders();
//       setCurrentOrder(null);
//       resetOrderData();
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const handleDeleteOrder = async () => {
//     try {
//       await axios.delete(`http://localhost:5000/order/${currentOrder._id}`);
//       setDeleteModalOpen(false);
//       fetchOrders();
//       setCurrentOrder(null);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const DeleteAllOrder = async () => {
//     try {
//       await axios.delete(`http://localhost:5000/order/`);
//       setDeleteModalOpen(false);
//       fetchOrders();
//       setCurrentOrder(null);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   // Reset order data
//   const resetOrderData = () => {
//     setOrderData({
//       date: '',
//       customerName: '',
//       productName: '',
//       price: '',
//       quantity: '',
//       location: '',
//       status: ''
//     });
//   };

//   // Filter logic
//   const filteredOrders = food.filter((item, index) => {
//     const orderId = `#${index + 1}`; // Create the formatted Order ID
//     const matchesDate = filterDate ? new Date(item.date).toLocaleDateString() === new Date(filterDate).toLocaleDateString() : true;
//     const matchesOrderId = filterOrderId ? orderId === filterOrderId : true; // Compare with formatted order ID
//     const matchesLocation = filterLocation ? item.location === filterLocation : true;

//     return matchesDate && matchesOrderId && matchesLocation;
//   });

//   return (
//     <div>
//       <div className="bg-white rounded shadow mt-6 p-10">
//         <div className="flex justify-between items-center">
//           <h2 className="text-[20px] font-semibold">Order List</h2>
//           <button onClick={() => setModalOpen(true)} className="flex items-center bg-green-100 text-green-700 font-semibold px-3 py-1 rounded-md">
//             <VscListSelection />
//             Add Order
//           </button>
//         </div>

//         <div className="flex justify-between items-center mt-6">
//           <ul className="flex justify-between items-center">
//             <li>
//               <input 
//                 type="date" 
//                 value={filterDate} 
//                 onChange={(e) => setFilterDate(e.target.value)} 
//                 className="border p-2" 
//               />
//             </li>
//             <li>
//               <input 
//                 type="text" 
//                 value={filterOrderId} 
//                 onChange={(e) => setFilterOrderId(e.target.value)} 
//                 placeholder="Select an Order Id (e.g. #1)" 
//                 className="border p-2" 
//               />
//             </li>
//             <li>
//               <select 
//                 value={filterLocation} 
//                 onChange={(e) => setFilterLocation(e.target.value)} 
//                 className="border p-2"
//               >
//                 <option value="">Select a Location</option>
//                 <option value="Bangalore">Bangalore</option>
//                 <option value="Mumbai">Mumbai</option>
//                 <option value="Hyderabad">Hyderabad</option>
//                 <option value="New Delhi">New Delhi</option>
//               </select>
//             </li>
//           </ul>

//           <button 
//             onClick={() => {
//               setFilterDate('');
//               setFilterOrderId('');
//               setFilterLocation('');
//             }} 
//             className="flex items-center border-2 py-1 px-3 rounded-md text-gray-600"
//           >
//             Clear All <IoCloseCircleOutline />
//           </button>
//         </div>

//         <table className="min-w-full mt-10">
//           <thead className="bg-slate-100">
//             <tr>
//               <th>Date</th>
//               <th>Order ID</th>
//               <th>Customer Name</th>
//               <th>Product Name</th>
//               <th>Price</th>
//               <th>Quantity</th>
//               <th>Location</th>
//               <th>Status</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredOrders.map((item, index) => (
//               <tr key={item._id} className="text-center border-b-2 mt-4">
//                 <td className="p-3">{new Date(item.date).toLocaleDateString()}</td>
//                 <td className="p-3 font-semibold">#{index + 1}</td> {/* Display formatted Order ID */}
//                 <td className="p-3 font-semibold">{item.customerName}</td>
//                 <td className="p-3 font-semibold">{item.productName}</td>
//                 <td className="p-3 font-semibold">{item.price}</td>
//                 <td className="p-3 font-semibold">{item.quantity}</td>
//                 <td className="p-3 font-semibold">{item.location}</td>
//                 <td className="p-3 font-semibold">{item.status}</td>
//                 <td>
//                   <div className="flex justify-between items-center">
//                     <button onClick={() => { setCurrentOrder(item); setOrderData(item); setEditModalOpen(true); }}>
//                       <FaRegEdit className="text-red-400 text-3xl" />
//                     </button>
//                     <button onClick={() => { setCurrentOrder(item); setDeleteModalOpen(true); }}>
//                       <BsTrash3 className="text-red-400 text-3xl" />
//                     </button>
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Add Order Modal */}
//       {modalOpen && (
//         <div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50">
//           <div className="bg-white p-5 rounded shadow-md">
//             <h3 className="text-lg font-bold">Add Order</h3>
//             <input type="date" name="date" value={orderData.date} onChange={handleInputChange} className="w-full p-2 my-2 border" />
//             <input type="text" name="customerName" value={orderData.customerName} onChange={handleInputChange} placeholder="Customer Name" className="w-full p-2 my-2 border" />
//             <input type="text" name="productName" value={orderData.productName} onChange={handleInputChange} placeholder="Product Name" className="w-full p-2 my-2 border" />
//             <input type="text" name="price" value={orderData.price} onChange={handleInputChange} placeholder="Price" className="w-full p-2 my-2 border" />
//             <input type="text" name="quantity" value={orderData.quantity} onChange={handleInputChange} placeholder="Quantity" className="w-full p-2 my-2 border" />
//             <input type="text" name="location" value={orderData.location} onChange={handleInputChange} placeholder="Location" className="w-full p-2 my-2 border" />
//             <select name="status" value={orderData.status} onChange={handleInputChange} className="w-full p-2 my-2 border">
//               <option value="delivered">Delivered</option>
//               <option value="cancelled">Canceled</option>
//               <option value="pending">Pending</option>
//             </select>
//             <div className="flex justify-between mt-4">
//               <button onClick={() => setModalOpen(false)} className="bg-red-500 text-white p-2 rounded">Cancel</button>
//               <button onClick={handleAddOrder} className="bg-green-500 text-white p-2 rounded">Add</button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Edit Order Modal */}
//       {editModalOpen && (
//         <div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50">
//           <div className="bg-white p-5 rounded shadow-md">
//             <h3 className="text-lg font-bold">Edit Order</h3>
//             <input type="date" name="date" value={orderData.date} onChange={handleInputChange} className="w-full p-2 my-2 border" />
//             <input type="text" name="customerName" value={orderData.customerName} onChange={handleInputChange} placeholder="Customer Name" className="w-full p-2 my-2 border" />
//             <input type="text" name="productName" value={orderData.productName} onChange={handleInputChange} placeholder="Product Name" className="w-full p-2 my-2 border" />
//             <input type="text" name="price" value={orderData.price} onChange={handleInputChange} placeholder="Price" className="w-full p-2 my-2 border" />
//             <input type="text" name="quantity" value={orderData.quantity} onChange={handleInputChange} placeholder="Quantity" className="w-full p-2 my-2 border" />
//             <input type="text" name="location" value={orderData.location} onChange={handleInputChange} placeholder="Location" className="w-full p-2 my-2 border" />
//             <select name="status" value={orderData.status} onChange={handleInputChange} className="w-full p-2 my-2 border">
//               <option value="delivered">Delivered</option>
//               <option value="cancelled">Canceled</option>
//               <option value="pending">Pending</option>
//             </select>
//             <div className="flex justify-between mt-4">
//               <button onClick={() => setEditModalOpen(false)} className="bg-red-500 text-white p-2 rounded">Cancel</button>
//               <button onClick={handleEditOrder} className="bg-blue-500 text-white p-2 rounded">Save</button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Delete Order Modal */}
//       {deleteModalOpen && (
//         <div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50">
//           <div className="bg-white p-5 rounded shadow-md">
//             <h3 className="text-lg font-bold">Confirm Delete</h3>
//             <p>Are you sure you want to delete the order for {currentOrder?.customerName}?</p>
//             <div className="flex justify-center mt-4 gap-5">
//               <button onClick={() => setDeleteModalOpen(false)} className="bg-red-500 text-white p-2 rounded">Cancel</button>
//               <button onClick={handleDeleteOrder} className="bg-blue-500 text-white p-2 rounded">Delete</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default OrderList;

import React, { useEffect, useState } from "react";
import { VscListSelection } from "react-icons/vsc";
import axios from "axios";
import OrderTable from "./OrderTable";
import OrderModal from "./OrderModal";
import DeleteConfirmationModal from "./DeleteConfirmationModal";
import Filters from "./Filters";

function OrderList() {
  const [food, setFood] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [currentOrder, setCurrentOrder] = useState(null);
  const [orderData, setOrderData] = useState({
    date: '',
    customerName: '',
    productName: '',
    price: '',
    quantity: '',
    location: '',
    status: ''
  });

  const [filterDate, setFilterDate] = useState('');
  const [filterOrderId, setFilterOrderId] = useState('');
  const [filterLocation, setFilterLocation] = useState('');

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const res = await axios.get("http://localhost:5000/order/");
      setFood(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrderData({ ...orderData, [name]: value });
  };

  const handleAddOrder = async () => {
    try {
      await axios.post("http://localhost:5000/order/", orderData);
      setModalOpen(false);
      fetchOrders();
      resetOrderData();
    } catch (err) {
      console.log(err);
    }
  };

  const handleEditOrder = async () => {
    try {
      await axios.put(`http://localhost:5000/order/${currentOrder._id}`, orderData);
      setEditModalOpen(false);
      fetchOrders();
      setCurrentOrder(null);
      resetOrderData();
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteOrder = async () => {
    try {
      await axios.delete(`http://localhost:5000/order/${currentOrder._id}`);
      setDeleteModalOpen(false);
      fetchOrders();
      setCurrentOrder(null);
    } catch (err) {
      console.log(err);
    }
  };

  const resetOrderData = () => {
    setOrderData({
      date: '',
      customerName: '',
      productName: '',
      price: '',
      quantity: '',
      location: '',
      status: ''
    });
  };

  const filteredOrders = food.filter((item, index) => {
    const orderId = `#${index + 1}`;
    const matchesDate = filterDate ? new Date(item.date).toLocaleDateString() === new Date(filterDate).toLocaleDateString() : true;
    const matchesOrderId = filterOrderId ? orderId === filterOrderId : true;
    const matchesLocation = filterLocation ? item.location === filterLocation : true;

    return matchesDate && matchesOrderId && matchesLocation;
  });

  return (
    <div>
      <div className="bg-white rounded shadow mt-6 p-10">
        <div className="flex justify-between items-center">
          <h2 className="text-[20px] font-semibold">Order List</h2>
          <button onClick={() => setModalOpen(true)} className="flex items-center bg-green-100 text-green-700 font-semibold px-3 py-1 rounded-md">
            <VscListSelection />
            Add Order
          </button>
        </div>

        <Filters
          filterDate={filterDate}
          setFilterDate={setFilterDate}
          filterOrderId={filterOrderId}
          setFilterOrderId={setFilterOrderId}
          filterLocation={filterLocation}
          setFilterLocation={setFilterLocation}
        />

        <OrderTable
          orders={filteredOrders}
          setCurrentOrder={setCurrentOrder}
          setOrderData={setOrderData}
          setEditModalOpen={setEditModalOpen}
          setDeleteModalOpen={setDeleteModalOpen}
        />
      </div>

      <OrderModal
        isOpen={modalOpen}
        orderData={orderData}
        handleInputChange={handleInputChange}
        handleOrderAction={handleAddOrder}
        setModalOpen={setModalOpen}
        title="Add Order"
      />

      <OrderModal
        isOpen={editModalOpen}
        orderData={orderData}
        handleInputChange={handleInputChange}
        handleOrderAction={handleEditOrder}
        setModalOpen={setEditModalOpen}
        title="Edit Order"
      />

      <DeleteConfirmationModal
        isOpen={deleteModalOpen}
        currentOrder={currentOrder}
        handleDeleteOrder={handleDeleteOrder}
        setDeleteModalOpen={setDeleteModalOpen}
      />
    </div>
  );
}

export default OrderList;
