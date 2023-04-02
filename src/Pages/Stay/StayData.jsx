import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteHotel, fetchingHotels } from "../../Redux/StayReducer/action";
import "./StayData.css";
import PriceFilter from "./PriceFilter";
import Sidebar from "./Sidebar";

const StayData = () => {
  const dispatch = useDispatch();
  const { StayHotel } = useSelector((store) => store.StayReducer);
  const checkInDate = useSelector((state) => state.StayReducer.checkInDate);
  const checkOutDate = useSelector((state) => state.StayReducer.checkOutDate);
  const selectedCity = useSelector((state) => state.StayReducer.selectedCity);
  console.log("city",selectedCity);
  console.log("In", checkInDate);
  console.log("out", checkOutDate);
  const [selectedPriceRange, setSelectedPriceRange] = useState([0, 10000]);
  const [filteredHotel, setFilteredHotel] = useState([]);
  const [price, setPrice] = useState(""); // Define price state variable

  const handleLeft = (id) => {
    dispatch(DeleteHotel(id));
  };

  useEffect(() => {
    dispatch(fetchingHotels("",""));
  }, [dispatch]);

  useEffect(() => {
    if (StayHotel) {
      setFilteredHotel(
        StayHotel.filter(
          (hotel) =>
            hotel.price >= selectedPriceRange[0] &&
            hotel.price <= selectedPriceRange[1]
        )
      );
    }
  }, [StayHotel, selectedPriceRange]);


  return (
    <div className="stay-data">
      
      <div className="sidebar-container">
        <Sidebar/>
      </div>

      {filteredHotel?.map((hotel) => (
        <div className="stay-card" key={hotel.id}>
          <img src={hotel.image} alt="hotel" />

          <div className="stay-info">
            <div className="stay-header">
              <h3 className="stay-name">{hotel.name}</h3>
              <button
                className="stay-left-btn"
                onClick={() => handleLeft(hotel.id)}
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
                <p>{hotel.rating ? hotel.rating : 1}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StayData;