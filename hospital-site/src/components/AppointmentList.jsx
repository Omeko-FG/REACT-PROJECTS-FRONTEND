import { Container, Grid, Typography } from "@material-ui/core";
import { FaTimesCircle } from "react-icons/fa";

const AppointmentList = ({ appointments, setAppointments }) => {
  const handleDelete = (id) => {
    setAppointments(appointments.filter((item) => item.id !== id));
  };

  const handleDoubleClick = (id) => {
    setAppointments(
      appointments.map((item) =>
        item.id === id ? { ...item, consulted: !item.consulted } : item
      )
    );
  };

  return (
    <Container className="p-2">
     <br />
      <div className="d-flex flex-column align-items-center">
        {!appointments.length && (
          <img src="./img/appointment.jpg" width="80%" alt="" />
        )}

        {appointments.map((item) => {
          const { id, patient, consulted, doctor, day } = item;
          return (
            <div
              key={id}
              className={consulted ? "appointments consulted" : "appointments "}
              onDoubleClick={() => handleDoubleClick(id)}
            >
              <Grid container justifyContent="center" alignItems="center" spacing={3}>
                <Grid item xs={12} sm={12} md={6}>
                  <Typography variant="h5" color="error">
                    {patient}
                  </Typography>
                  <Typography variant="h6">{doctor}</Typography>
                </Grid>
                <Grid item xs={10} sm={8} md={5}>
                  <Typography variant="h6">Date: {new Date(day).toLocaleDateString()}</Typography>
                  <Typography variant="subtitle1">Time: {new Date(day).toLocaleTimeString()}</Typography>
                </Grid>
                <Grid item xs={2} sm={4} md={1} className="text-end">
                  <FaTimesCircle
                    className=" FaTimesCircle"
                    onClick={() => handleDelete(id)}
                  />
                </Grid>
              </Grid>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default AppointmentList;
