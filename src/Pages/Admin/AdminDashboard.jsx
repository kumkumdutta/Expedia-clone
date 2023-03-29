import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchFlightProducts } from "../../Redux/AdminFlights/action";
import "./AdminDashboard.Module.css";


export const AdminDashboard = () => {
  const dispatch = useDispatch();
  const [flight, setFlight] = useState(0);
  const [hotel, setHotel] = useState(0);
  const [users, setUsers] = useState(0);
 const [loading, setLoading] = useState(false);

  const getHotel = () => {
    setLoading(true);
    axios
      .get("") //https://makemytrip-api-data.onrender.com/flight
      .then((res) => {
        setFlight(res.data.length);
      })
      .catch((err) => {
        console.log(err);
      });
    //
    axios
      .get("") //https://makemytrip-api-data.onrender.com/hotel
      .then((res) => {
        setHotel(res.data.length);
      })
      .catch((err) => {
        console.log(err);
      });
    //
    axios
      .get("") //https://makemytrip-api-data.onrender.com/users
      .then((res) => {
        setUsers(res.data.length);
      })
      .catch((err) => {
        console.log(err);
      });
    
  };

  useEffect(() => {
    getHotel();
  }, []);

  return (
    <>
      <div className="mainAdminLandingpage">
        <div className="adminSideBr">
          <h1><Link to={"/admin"}>Home</Link></h1>
          <h1><Link to={"/admin/adminflight"}>Add Flight</Link></h1>
          <h1><Link to={"/admin/adminstay"}>Add Stays</Link></h1>
          <h1><Link to={"/"}>Log out</Link></h1>
        </div>
        <div className="mainBox">
          <div className="mainBoxHead">
            <h1>Admin Dashboard</h1>
            <hr />
            <hr />
            <hr />
          </div>
          <div className="DataBoxes">
            {/*  */}
            <div className="dataBx">
              <h1>Total Hotel</h1>
              {loading ? <h1>Loading...</h1> : <h1>{hotel}</h1>}
              <Link to="/admin/hotels">View</Link>
            </div>
            <div className="dataBx">
              <h1>Total Flights</h1>
              {loading ? <h1>Loading...</h1> : <h1>{flight}</h1>}
              <Link to="/admin/flights">View</Link>
            </div>
            <div className="dataBx">
              <h1>Total Users</h1>
              {loading ? <h1>Loading...</h1> : <h1>{users}</h1>}
              <Link to="/admin">View</Link>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
    </>
  );
};
