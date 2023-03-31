import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";

import { FlightReducer } from "./AdminFlights/reducer";
import { HotelReducer } from "./AdminHotel/reducer";
import { LoginReducer } from "./Authantication/auth.reducer";

const rootReducer = combineReducers({
  FlightReducer,
  HotelReducer,
  LoginReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
