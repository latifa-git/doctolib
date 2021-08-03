import { GET_PATIENT, GET_PATIENT_FAIL, GET_PATIENT_SUCCESS } from "../Types";



const initialState = {
    loading: false,
    errors: null,
    patient: null,
}
const Patient_reducer= (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_PATIENT:

            return {
                ...state,
                loading: true,
            };
        case GET_PATIENT_SUCCESS:
            return {
                ...state,
                loading: false,
                patient: payload,
            };
        case GET_PATIENT_FAIL:
            return {
                ...state,
                loading: false,
                errors: payload,
            }
            default:
                return state;
        }
    }
    export default Patient_reducer;