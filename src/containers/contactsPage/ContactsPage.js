import React from "react";
import { useState, useEffect } from 'react';
import TileList from '../../components/tileList/TileList';
import ContactForm from '../../components/contactForm/ContactForm';
import App from "../../App";


export const ContactsPage = (props) => {


  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isDuplicate, setIsDuplicate] = useState(false);

  const contacts = props.contacts;
  const addContact = props.onAdd;


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isDuplicate) {
      addContact({
        name: name,
        phone: phone,
        email: email
      });
    }
  };



  useEffect(() => {
    if (name in contacts) {
      setIsDuplicate(true)
    }
  })

  return (
    <div>
      <section handleSubmit={handleSubmit} name={name}
        email={email} phone={phone}
        setName={setName} setPhone={setPhone} setEmail={setEmail} >
        <h2>Add Contact</h2>
      </section>
      <hr />
      <section tileList={contacts}>
        <h2>Contacts</h2>
      </section>
    </div>
  );
};
