import { useState } from "react"
import Doctors from "../components/Doctors"
import { doctorData } from "../helpers/data"
import { appointmentData } from "../helpers/data"

const Home = () => {
  const [doctors, setDoctors] = useState(doctorData)
  const [appointments, setAppointments] = useState(appointmentData)

  //! Mock Data yerine API'Den veri cekilseydi
  // const getAppointments = async () => {
  //   try {
  //     const { data } = await axios.get("url")
  //     setAppointments(data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // useEffect(() => {
  //   getAppointments()
  // }, [])

  console.log(appointments)
  console.log(doctors)
  return (
    <main className="text-center mt-2">
      <Doctors
        doctors={doctors}
        appointments={appointments}
        setAppointments={setAppointments}
      />
      {/* <AppointmentList
        appointments={appointments}
        setAppointments={setAppointments}
      /> */}
    </main>
  )
}

export default Home
