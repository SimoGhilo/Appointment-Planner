import React from "react";
import { ContactsPage } from "../../containers/contactsPage/ContactsPage";



export const ContactForm = (props) => {




  return (
    <form onSubmit={props.handleSubmit}>
      <label>Name</label>
      <input type='text' value={props.name} onChange={(e) => props.setName(e.target.value)} />
      <label>Phone</label>
      <input type='tel' value={props.phone} onChange={(e) => props.setPhone(e.target.value)} />
      <label>Email</label>
      <input type='email' value={props.email} onChange={(e) => props.setEmail(e.target.value)} />
      <button type='submit'>Submit</button>
    </form>
  );
};
