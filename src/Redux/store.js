import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";

import { FlightReducer } from "./AdminFlights/reducer";
import { HotelReducer } from "./AdminHotel/reducer";
const rootReducer = combineReducers({
  FlightReducer,
  HotelReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
