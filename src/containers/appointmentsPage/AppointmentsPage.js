import React, { useState } from "react";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = (props) => {
  const appointments = props.appointments;
  const contacts = props.contacts;
  const [ title, setTitle ] = useState('');
  const [ contact, setContact ] = useState('');
  const [ date, setDate ] = useState('');
  const [ time, setTime ] = useState('');
  
  const handleSetTitle    = (e) => { setTitle(e.target.value); }
  const handleSetContact  = (e) => { setContact(e.target.value); }
  const handleSetDate     = (e) => { setDate(e.target.value); }
  const handleSetTime     = (e) => { setTime(e.target.value); }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addAppointment({title: title, contact: contact, date: date, time: time});
    setTitle('');
    setContact('');
    setDate('');
    setTime(''); 
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          handleSubmit={handleSubmit}
          title={title}
          setTitle={handleSetTitle}
          contact={contact}
          setContact={handleSetContact}
          date={date}
          setDate={handleSetDate}
          time={time}
          setTime={handleSetTime}
          contacts={contacts}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList tileData={appointments} />
      </section>
    </div>
  );
};
