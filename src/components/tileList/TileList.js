import React from "react";

export const TileList = (props) => {
  return (
    <div>
      <ul>
        {props.contacts.map(contact => {
          return <li>{contact.name}, {contact.phone}, {contact.email}</li>;
        })}
      </ul>
    </div>
  );
};
