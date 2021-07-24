import React, { useContext, useReducer } from "react";
import reducer from "./globalReducer";

const GlobalContext = React.createContext();

const initialState = {
  allImages: [],
  filteredImages: [],
  searchValue: "",
  isLoading: false,
};
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setAllImages = (countries) => {
    dispatch({ type: "SET_ALL_IMAGES", payload: countries });
  };

  const updateFilteredImages = (result) => {
    dispatch({ type: "UPDATE_FILTERED_IMAGES", payload: result });
  };

  const updateSearchValue = (value) => {
    dispatch({ type: "UPDATE_SEARCH_VALUE", payload: value });
  };

  const setIsLoading = (value) => {
    dispatch({ type: "SET_IS_LOADING", payload: value });
  };
  return (
    <GlobalContext.Provider
      value={{
        ...state,
        setAllImages,
        updateFilteredImages,
        updateSearchValue,
        setIsLoading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
