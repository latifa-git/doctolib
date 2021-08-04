import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import NavigationBar from "../components/Navbar/Navbar";
import {
  addDoctor,
  getAppointList,
  getPatientList,
} from "../redux/actions/action";

function Adminprofile() {
  // const {token} = useSelector(state => state)
  const appoint = useSelector((state) => state.Appoint_reducer)  || [];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAppointList());
  }, []);

  const patient = useSelector((state) => state.Patient_reducer.patient) || [];
  const doctor = useSelector((state) => state.Patient_reducer.doctor) || [];
  useEffect(() => {
    dispatch(getPatientList());
  }, [dispatch]);

  

  useEffect(() => {
    dispatch(addDoctor());
  }, []);

  return (
    <div>
     {/* <NavigationBar/> */}
<div>
      {!patient ? <h2>plz wait</h2> : ""}

      <h1> hi </h1>
      <h1> LIST OF PATIENT </h1>
      <div class="container">
        {patient
          .filter((el) => el.role === "patient")
          .map((el) => (
            <div class="row">
              <div class="col"> {el._id} </div>
              <div class="col">{el.name}</div>
              <div class="col">{el.email}</div>
            </div>
          ))}
      </div>
      </div>

      <h1>LIST OF APPOINTMENTS</h1>

      <h1> LIST DOCTORS </h1>
      <div>
        <div class="container">
          {patient
            .filter((el) => el.role === "doctor")
            .map((el) => (
              <div class="row">
                <div class="col"> {el._id} </div>
                <div class="col">{el.name}</div>
                <div class="col">{el.email}</div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Adminprofile;
