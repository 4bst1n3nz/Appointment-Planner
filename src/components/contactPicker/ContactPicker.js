import React from "react";

export const ContactPicker = ({contacts, contact, setContact}) => {
  return (
    <select onChange={setContact} value={contact} required>
      <option key="0" value="" selected="selected">Choose Contact...</option>
      {contacts.map((contact, index) => {
        return <option key={index+1} value={contact.name}>{contact.name}</option>
      })}
    </select>
  );
};
