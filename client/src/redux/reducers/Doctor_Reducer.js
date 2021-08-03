import { ADD_DOCTOR, ADD_DOCTOR_SUCCESS,ADD_DOCTOR_FAIL } from "../Types";



const initialState = {
    loading: false,
    errors: null,
    doctor: null,
}
const Doctor_Reducer= (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_DOCTOR:

            return {
                ...state,
                loading: true,
            };
        case ADD_DOCTOR_SUCCESS:
            return {
                ...state,
                loading: false,
                doctor: payload,
            };
        case ADD_DOCTOR_FAIL:
            return {
                ...state,
                loading: false,
                errors: payload,
            }
            default:
                return state;
        }
    }
    export default Doctor_Reducer;