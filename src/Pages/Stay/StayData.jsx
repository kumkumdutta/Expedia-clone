import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteHotel, fetchingHotels } from "../../Redux/StayReducer/action";
import "./StayData.css";
import PriceFilter from "./PriceFilter";
import Sidebar from "./Sidebar";

const StayData = () => {
  const dispatch = useDispatch();
  const { StayHotel } = useSelector((store) => store.StayReducer);
  const [selectedPriceRange, setSelectedPriceRange] = useState([0, 10000]);
  const [filteredHotel, setFilteredHotel] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortCriteria, setSortCriteria] = useState("price");
  const [price, setPrice] = useState(""); // Define price state variable

  const handleLeft = (id) => {
    dispatch(DeleteHotel(id));
  };

  // const handlePriceRangeChange = (newPriceRange) => {
  //   setSelectedPriceRange(newPriceRange);
  // };

  // const handleSortCriteriaChange = (newSortCriteria) => {
  //   setSortCriteria(newSortCriteria);
  // };

  // const handleSortOrderChange = () => {
  //   setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  // };

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

  // useEffect(() => {
  //   // Set price state variable based on selected radio button in the PriceFilter component
  //   if (price === "low") {
  //     setFilteredHotel([...filteredHotel].sort((a, b) => a.price - b.price));
  //   } else if (price === "high") {
  //     setFilteredHotel([...filteredHotel].sort((a, b) => b.price - a.price));
  //   }
  // }, [price, filteredHotel]);


  return (
    <div className="stay-data">
      
      <div className="sidebar-container">
          {/* onSortCriteriaChange={handleSortCriteriaChange}
          onSortOrderChange={handleSortOrderChange} */}
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