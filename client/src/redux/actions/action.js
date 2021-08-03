import {
  LOGIN_FAIL,
  REGISTER,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  LOGIN,
  LOGIN_SUCCESS,
  LOGOUT,
  GET_APPOINT,
  GET_APPOINT_SUCCESS,
  GET_APPOINT_FAIL,
  GET_PATIENT,
  GET_PATIENT_SUCCESS,
  GET_PATIENT_FAIL,
  ADD_DOCTOR,
  ADD_DOCTOR_SUCCESS,
  ADD_DOCTOR_FAIL,
} from "../Types";
import axios from "axios";

export const register = (newUser) => async (dispatch) => {
  dispatch({
    type: REGISTER,
  });
  try {
    let res = await axios.post("/register/addpatient", newUser);
    console.log(res);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: REGISTER_FAIL,
      payload: error.response.data,
    });
  }
};

export const login = (user,router) => async (dispatch) => {
  dispatch({
    type: LOGIN,
  });
  try {
    let res = await axios.post("/login/login", user);
    localStorage.setItem("token", res.data.token);
    console.log(res.data)
    await dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    if (res.data.role==="Admin"){
    router.push("/Adminprofile");}
    else if (res.data.role==="doctor"){
        router.push("/Doctorprofile");}
      else 
      {router.push("/Patientprofile")}
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response.data,
    });
  }
};


export const logoutAction = (history) => dispatch => {
  dispatch({ type: LOGOUT });
  history.push('/SignUp')
};


export const getAppointList = () => async (dispatch) => {
  await dispatch({ type: GET_APPOINT });
  try {
    const appoint = await axios.get('/appointments/');
    dispatch({ type: GET_APPOINT_SUCCESS, payload: appoint.data });

  } catch (error) {
    dispatch({ type: GET_APPOINT_FAIL, payload: error.response.data })
  }
};



export const getPatientList = () => async (dispatch) => {
  await dispatch({ type: GET_PATIENT });
  try {
    const patient = await axios.get('/getusers/alluser');
    dispatch({ type: GET_PATIENT_SUCCESS, payload: patient.data });

  } catch (error) {
    dispatch({ type: GET_PATIENT_FAIL, payload: error.response.data })
  }
};


export const addDoctor = (product) => async (dispatch) => {
  dispatch({ type: ADD_DOCTOR });
  try {
    const doctor = await axios.post('/add/adddoctor');
    await dispatch({ type: ADD_DOCTOR_SUCCESS, payload: doctor.response })
  } catch (error) {
    await dispatch({ type: ADD_DOCTOR_FAIL, payload: error.response.data });
  }
}