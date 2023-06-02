import React, { useState } from 'react'
import AppointmentList from '../components/AppointmentList'
import { appointmentData } from "../helpers/data"
const Appointments = () => {
 const [appointments, setAppointments] = useState(appointmentData)
  return (
    <AppointmentList
        appointments={appointments}
        setAppointments={setAppointments}
      />
  )
}

export default Appointments