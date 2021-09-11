const initialState = {
  loading: true,
  currentUser: null,
  error: null,
};

// if state is UNDEFINED it'll fallback to initialState
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGN_UP_SUCCESS":
    case "SIGN_IN_SUCCESS":
      return {
        ...state,
        currentUser: action.payload,
        loading: false,
        error: null,
      };
    case "SIGN_IN_FAILURE":
    case "SIGN_OUT_FAILURE":
    case "SIGN_UP_FAILURE":
      return {
        ...state,
        error: action.payload,
      };
    case "SIGN_OUT_SUCCESS":
      return {
        ...state,
        currentUser: null,
        error: null,
      };
    default:
      return state;
  }
};

export default userReducer;
