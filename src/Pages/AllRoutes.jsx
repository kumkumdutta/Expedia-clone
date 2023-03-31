import { Admin } from "./Admin/AdminFlight";
import { AdminStay } from "./Admin/AdminStay";
import React from 'react'
import { Route, Routes } from "react-router-dom";
// import { HomePage } from "./HomePage";
import { AdminDashboard } from "./Admin/AdminDashboard";
import { AdminProducts } from "./Admin/AdminProducts";
import { AllHotels } from "./Admin/AllHotels";
import { Login } from "./Login";
import { Register } from "./Register";
import HomePage from "./HomePage";

export const AllRoutes = () => {
    return (
        <>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/adminflight" element={<Admin />} />
            <Route path="/admin/adminstay" element={<AdminStay />} />
            <Route path="/admin/products" element={<AdminProducts />} />
            <Route path="/admin/hotels" element={<AllHotels />} />
            <Route path="/login" element={ <Login /> }/>
            <Route path="/register" element={ <Register /> }/>

          </Routes>
            
        </>
      );
}

// add