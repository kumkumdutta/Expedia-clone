import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteHotel, fetchingHotels } from "../../Redux/AdminHotel/action";
import "./StayData.css";

const StayData = () => {
  const dispatch = useDispatch();
  const { flight } = useSelector((store) => {
    console.log(store);
    return store.HotelReducer;
  });
  console.log(flight);
  const handleDelete = (id) => {
    dispatch(DeleteHotel(id));
  };

  useEffect(() => {
    dispatch(fetchingHotels());
  }, [dispatch]);

  return (
    <div className="stay-data">
      {flight?.map((hotel) => (
        <div className="stay-card" key={hotel.id}>
         
            <img src={hotel.image} alt="hotel" />
          
          <div className="stay-info">
            <div className="stay-header">
              <h3 className="stay-name">{hotel.name}</h3>
              <button
                className="stay-left-btn"
                onClick={() => handleDelete(hotel.id)}
              >
                We have 5 left
              </button>
            </div>
            <p className="stay-location">{hotel.location}</p>
            <p className="stay-description">{hotel.description}</p>
            <div className="stay-details">
              <div className="stay-price">
                <span>Price:</span>
                <p>₹{hotel.price.toLocaleString()}</p>
              </div>
              <div className="stay-rating">
                <span>Rating:</span>
                <p>{hotel.rating}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StayData;
