import { combineReducers } from "redux";
import Reducer from "./Reducer";
import Appoint_reducer from "./Appoint_reducer";
import Patient_reducer from "./Get_patient";
import Doctor_Reducer from './Doctor_Reducer'


const rootReducer = combineReducers({
 Appoint_reducer,
 Reducer, 
 Patient_reducer,
 Doctor_Reducer
});

export default rootReducer;