const initialState = {
  loading: true,
  currentUser: null
};

// if state is UNDEFINED it'll fallback to initialState
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        currentUser: action.payload,
        loading: false
      };
    default:
      return state;
  }
};

export default userReducer;
