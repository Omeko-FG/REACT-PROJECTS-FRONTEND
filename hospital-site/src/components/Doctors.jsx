import { Container, Grid, Typography } from "@material-ui/core";
import  AddModal  from "./AddModal";
import { useState } from "react";

const Doctors = ({ doctors, appointments, setAppointments }) => {
  const [show, setShow] = useState(false);
  const [selectedDrName, setSelectedDrName] = useState("");

  const handleClick = (drName) => {
    setShow(true);
    setSelectedDrName(drName);
  };

  console.log(selectedDrName);
  return (
    <Container className="p-2">
      <br />
      <Grid container justify="center">
        {doctors.map((dr) => (
          <Grid key={dr.id} item xs={6} sm={4} md={3}>
            <img
              src={dr.img}
              alt={dr.name}
              className="img-thumbnail doctor-img"
              onClick={() => handleClick(dr.name)}
            />
            <Typography variant="h6">{dr.name}</Typography>
            <Typography variant="subtitle1">{dr.dep}</Typography>
          </Grid>
        ))}
      </Grid>
      
      <AddModal
        show={show}
        handleClose={() => setShow(false)}
        drName={selectedDrName}
        appointments={appointments}
        setAppointments={setAppointments}
      />
    </Container>
  );
};

export default Doctors;
