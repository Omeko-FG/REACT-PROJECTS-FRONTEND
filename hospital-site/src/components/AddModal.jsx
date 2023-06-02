import React, { useState } from "react";
import { Modal, Button, TextField } from "@material-ui/core";
import "./AddModal.css";
import {appointmentData} from "../helpers/data"

const AddModal = ({
  show,
  handleClose,
  drName,
  appointments,
  setAppointments,
}) => {
  const [patientName, setPatientName] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setAppointments([
      ...appointments,
      {
        id: appointments.length + 1,
        patient: patientName,
        day: date,
        consulted: false,
        doctor: drName,
      },
    ]);
    handleClose();
  };

  console.log(appointments);
  return (
    <>
      <Modal open={show} onClose={handleClose} className="modal-container">
        <div className="modal">
          <h2>Appointment for {drName}</h2>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Patient Name"
              type="text"
              placeholder="Enter your name"
              onChange={(e) => setPatientName(e.target.value)}
              fullWidth
              margin="normal"
              color="warning"
            />
            <TextField
              label=""
              type="datetime-local"
              onChange={(e) => setDate(e.target.value)}
              fullWidth
              margin="normal"
            />
            <div className="text-center">
              <Button className="b1" variant="contained" color="primary" type="submit">
                Save
              </Button>
              <Button variant="contained" color="secondary" onClick={handleClose}>
                Close
              </Button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default AddModal;
