import { GET_APPOINT, GET_APPOINT_FAIL, GET_APPOINT_SUCCESS } from "../Types";



const initialState = {
    loading: false,
    errors: null,
    appoint: null,
}
const Appoint_reducer= (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_APPOINT:

            return {
                ...state,
                loading: true,
            };
        case GET_APPOINT_SUCCESS:
            return {
                ...state,
                loading: false,
                appoint: payload,
            };
        case GET_APPOINT_FAIL:
            return {
                ...state,
                loading: false,
                errors: payload,
            }
            default:
                return state;
        }
    }
    export default Appoint_reducer;