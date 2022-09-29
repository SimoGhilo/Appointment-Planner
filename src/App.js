import { React, useState } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {

  const contact = {
    name: "Joe",
    phone: "123456",
    email: "joe@gmail.com",
  }

  const appointment = {
    title: 'Mr',
    contact: 'Andrew',
    date: '2015-12',
    time: '12 PM'
  }


  const [contacts, setContacts] = useState([contact]);
  const [appointments, setAppointments] = useState([appointment])

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  const addContact = (prev) => {

    setContacts([...contacts, prev]);

  }

  const addAppointments = (prev) => {

    setAppointments([...appointments, prev]);

  }

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
            {/* Add props to ContactsPage */}
            <ContactsPage onAdd={addContact} contacts={contacts} />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage onAdd={addAppointments} appointments={appointments} contacts={contacts} />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
