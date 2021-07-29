const {
  REGISTER,
  LOGIN,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
} = require("../Types");

const init = {
  users: null,
  loading: false,
  errors: null,
  token: null,
};

const Reducer = (state = init, { type, payload }) => {
  switch (type) {
    case REGISTER:
    case LOGIN:
      return { ...state, loading: true };
    case REGISTER_FAIL:
    case LOGIN_FAIL:
      return { ...state, loading: false, errors: payload };
    case REGISTER_SUCCESS:
      return { ...state, loading: false, users: payload };
    case LOGIN_SUCCESS:
      return { ...state, loading: false, token: payload };
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        loading: false,
      };
    default:
      return state;
  }
};
export default Reducer;
