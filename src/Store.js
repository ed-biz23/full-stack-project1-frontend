import React, { createContext, useReducer } from "react";

export const Store = createContext();

const initialState = {
  campusesData: [],
  studentsData: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_CAMPUSES_DATA":
      return { ...state, campusesData: action.payload };
    case "FETCH_STUDENTS_DATA":
      return { ...state, studentsData: action.payload };
    case "ADD_CAMPUS_DATA":
      return {
        ...state,
        campusesData: [...state.campusesData, action.payload]
      };
    // case "DELETE_CAMPUS_DATA":
    //   return {
    //     ...state,
    //     campusesData: [
    //       ...state.campusesData.slice(0, action.payload),
    //       ...state.campusesData.slice(action.payload + 1)
    //     ]
    //   };
    // case "UPDATE_CAMPUS_DATA":
    //   return {
    //     ...state,
    //     campusesData: [
    //       ...state.campusesData.slice(0, action.payload.index),
    //       action.payload.updatedCampusData,
    //       ...state.campusesData.slice(action.payload.index + 1)
    //     ]
    //   };
    default:
      return state;
  }
};

export const StoreProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
};
