import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" name="name" value={name} onChange={setName} required />
        {/* <input type="text" placeholder="Phone (German: (0 12 34) 56 78 90) " name="phone" value={phone} onChange={setPhone} required /> */}
        <input type="text" placeholder="Phone (German: (0 12 34) 56 78 90) " name="phone" value={phone} onChange={setPhone} pattern="^\(\d{1,2}(\s\d{1,2}){1,2}\)\s(\d{1,2}(\s\d{1,2}){1,2})((-(\d{1,4})){0,1})$" required />
        <input type="text" placeholder="E-Mail" name="email" value={email} onChange={setEmail} required />
        <input type="submit" />
      </form>
  );
};
