const global_reducer = (state, action) => {
  if (action.type === "SET_ALL_IMAGES") {
    return {
      ...state,
      allImages: action.payload,
      filteredImages: action.payload,
    };
  }

  if (action.type === "UPDATE_FILTERED_IMAGES") {
    return {
      ...state,
      filteredImages: action.payload,
    };
  }

  if (action.type === "UPDATE_SEARCH_VALUE") {
    return { ...state, searchValue: action.payload };
  }

  if (action.type === "SET_IS_LOADING") {
    return { ...state, isLoading: action.payload };
  }
  throw new Error(`${action.type} action not found in global reducer`);
};

export default global_reducer;
