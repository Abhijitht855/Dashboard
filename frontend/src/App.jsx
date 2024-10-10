import React from "react";
import SideBar from "./Components/SideBar";
import DashBoard from "./Pages/DashBoard";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="flex justify-between ">
      <BrowserRouter>
        <SideBar />
        <Routes>
          <Route path="/dashboard" element={<DashBoard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
