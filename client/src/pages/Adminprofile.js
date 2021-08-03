
import React , {useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux"
import { getAppointList, getPatientList } from '../redux/actions/action';

function Adminprofile() {
 // const {token} = useSelector(state => state)
  const appoint = useSelector((state) => state.Appoint_reducer)
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(getAppointList())
  }, [dispatch])
 

  const {patient} = useSelector((state) => state.Patient_reducer)
  
  useEffect(() => {
      dispatch(getPatientList())
  }, [dispatch])
  

  
  return (
    <div>
      
      <h1> hi </h1>

 {patient.map((el)=> <div><li>{el.name}</li></div>)}
 {appoint.map((el)=><div>{el.firstName} </div>)}
  
   
    </div>
  )
}

export default Adminprofile
