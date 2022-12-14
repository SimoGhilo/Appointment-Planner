import React, { useState } from "react";
import App from "../../App";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";
export const AppointmentsPage = (props) => {

  const appointments = props.appointments;
  const contacts = props.contacts;
  const addAppointments = props.addAppointment;

  const [currentTitle, setCurrentTitle] = useState("");
  const [contact, setContact] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addAppointments((currentTitle, contact, date, time));
    setCurrentTitle("");
    setContact("");
    setDate("");
    setTime("");
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm currentTitle={currentTitle} contacts={contacts} contact={contact} date={date} time={time}
          setCurrentTitle={setCurrentTitle} setContact={setContact} setDate={setDate} setTime={setTime}
          handleSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList appointments={appointments} />
      </section>
    </div>
  );
};
