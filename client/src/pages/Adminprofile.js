
import React , {useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux"
import { addDoctor, getAppointList, getPatientList } from '../redux/actions/action';

function Adminprofile() {
 // const {token} = useSelector(state => state)
  const appoint = useSelector((state) => state.Appoint_reducer)
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(getAppointList())
  }, [])
 

  const {patient} = useSelector((state) => state.Patient_reducer)
  console.log(patient)
  useEffect(() => {
      dispatch(getPatientList())
  }, [])
  
  const {doctor} = useSelector((state) => state.Doctor_Reducer)
  
  useEffect(() => {
      dispatch(addDoctor())
  }, [])
  
  return (
    <div>
      
      <h1> hi </h1>
      <h1> LIST OF PATIENT </h1>
 {patient.filter(el => (el.role ==="patient")).map((el)=> <div><li>{el.name}</li></div>)}
 <h1> LIST OF APPOINTMENTS</h1>
 {/* {appoint.map((el)=><div>{el.firstName} </div>)} */}
 <h1> ADD DOCTORS </h1>


  
   
    </div>
  )
}

export default Adminprofile
