import React from "react";
import { useState, useEffect } from 'react';
import { TileList } from '../../components/tileList/TileList';
import { ContactForm } from '../../components/contactForm/ContactForm';
import App from "../../App";


export const ContactsPage = (props) => {


  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isDuplicate, setIsDuplicate] = useState(false);

  const contacts = props.contacts;
  const addContact = props.addContact;


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isDuplicate);
    if (!isDuplicate) {
      addContact(name, phone, email);
      setName('');
      setPhone('');
      setEmail('');
    }

  };



  useEffect(() => {
    const found = contacts.some(el => el.name === name);
    if (found) {
      setIsDuplicate(true);
    }
    return;
  }, [contacts, name]);

  return (
    <div>
      <section >
        <h2>Add Contact</h2>
        <ContactForm handleSubmit={handleSubmit} name={name}
          email={email} phone={phone}
          setName={setName} setPhone={setPhone} setEmail={setEmail} />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList contacts={contacts} />
      </section>
    </div>
  );
};
