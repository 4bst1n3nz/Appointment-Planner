import React, { useState } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
  const contacts = props.contacts;
  const [ name, setName ] = useState('');
  const [ phone, setPhone ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ duplicate, setDuplicate ] = useState(false);

  const handleSetName = (e) => {
    setName(e.target.value);
    contacts.find(contact => contact.name === e.target.value) ? setDuplicate(true) : setDuplicate(false);
  }

  const handleSetPhone = (e) => {
    setPhone(e.target.value);
  }

  const handleSetEmail = (e) => {
    setEmail(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!duplicate) {
      props.addContact({name: name, phone: phone, email: email});
      setName('');
      setPhone('');
      setEmail('');
    }
  };

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm handleSubmit={handleSubmit} name={name} setName={handleSetName} phone={phone} setPhone={handleSetPhone} email={email} setEmail={handleSetEmail} />
        {duplicate && <p>This name already exists in your contacts!</p>}
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tileData={contacts} />
      </section>
    </div>
  );
};
