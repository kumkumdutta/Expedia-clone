import { Admin } from "./Admin/AdminFlight";
import { AdminHotel, AdminStay } from "./Admin/AdminStay";
import React from 'react'
import { Route, Routes } from "react-router-dom";
// import { HomePage } from "./HomePage";
import { AdminDashboard } from "./Admin/AdminDashboard";

export const AllRoutes = () => {
    return (
        <>
          <Routes>
            {/* <Route path="/" element={<HomePage />} /> */}
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/adminstay" element={<AdminStay />} />
            <Route path="/admin/adminflight" element={<Admin />} />
          </Routes>
        </>
      );
}

// add