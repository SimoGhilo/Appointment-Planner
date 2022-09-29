import React from "react";
import { ContactsPage } from "../../containers/contactsPage/ContactsPage";



export const ContactForm = (props) => {


  const handleName = (event) => {
    event.target.value = props.name;
  }

  const handlePhone = (event) => {
    event.target.value = props.phone;
  }

  const handleEmail = (event) => {
    event.target.value = props.email;
  }

  return (
    <form onSubmit={props.handleSubmit}>
      <input type='text' pattern=" 
^[2-9]\d{2}-\d{3}-\d{4}$" value={props.name} onChange={handleName} />
      <input type='tel' value={props.phone} onChange={handlePhone} />
      <input type='email' value={props.email} onChange={handleEmail} />
      <button type='submit' onClick>Submit</button>
    </form>
  );
};
