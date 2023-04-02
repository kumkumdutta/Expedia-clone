import {
  HOTEL_FAILURE,
  HOTEL_REQUEST,
  GET_HOTEL_SUCCESS,
  POST_HOTEL_SUCCESS,
  NEW_GET_HOTELS_SUCCESS,
  DELETE_HOTEL,
} from "./actionType";

const initialState = {
  data: [],
  isLoading: false,
  isError: false,
};

export const StayReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case HOTEL_REQUEST:
      return { ...state, isLoading: true };

    case HOTEL_FAILURE:
      return { ...state, isError: true };

    case GET_HOTEL_SUCCESS:
      return { ...state, isLoading: false, StayHotel: payload };

    case POST_HOTEL_SUCCESS:
      return { ...state, isLoading: false, StayHotel: payload };

    case NEW_GET_HOTELS_SUCCESS:
      return {
        ...state,
        isLoading: (state.isLoading = false),
        data: (state.data = payload),
      };

    case DELETE_HOTEL: {
      const filterHotel = state.data.filter((ele) => ele.id !== payload);
      return { ...state, data: filterHotel };
    }

    default:
      return state;
  }
};