import React from 'react'
import {useSelector } from "react-redux";
import AppointmentForm from "../components/calendier/AppointmentForm"





const Patientprofile = () => {
    const {token } = useSelector(state => state)
    return (
        <div>
            <h1>hi {token.name}</h1>
            <AppointmentForm/>
        </div>
    )
}

export default Patientprofile
