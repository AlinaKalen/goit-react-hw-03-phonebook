import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import css from './ContactForm/ContactForm.module.css';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  componentDidMount() {
    const localStorageContacts = JSON.parse(localStorage.getItem('contacts'));

    if (localStorageContacts) {
      this.setState({ contacts: localStorageContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    const prevContacts = prevState.contacts;

    if (contacts !== prevContacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  handleNameChange = (e) => {
    this.setState({ name: e.target.value });
  };

  handleNumberChange = (e) => {
    this.setState({ number: e.target.value });
  };

  handleAddContact = () => {
    const { name, number, contacts } = this.state;

    if (!name.trim() || !number.trim()) {
      alert('Please fill in both name and number fields.');
      return;
    }

    const isExist = contacts.some((contact) => contact.name.toLowerCase() === name.toLowerCase());
    if (isExist) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const newContact = { id: nanoid(), name, number };
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
      name: '',
      number: '',
    }));
  };

  handleFilterChange = (filterValue) => {
    this.setState({ filter: filterValue });
  };

  handleDeleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts, filter, name, number } = this.state;

    return (
      <div className={css.Container}>
        <h1>Phonebook</h1>
        <ContactForm
          name={name}
          number={number}
          onNameChange={this.handleNameChange}
          onNumberChange={this.handleNumberChange}
          onAddContact={this.handleAddContact}
        />

        <h2>Contacts</h2>
        <Filter filter={filter} onFilterChange={this.handleFilterChange} />
        <ContactList contacts={contacts} onDeleteContact={this.handleDeleteContact} />
      </div>
    );
  }
}

export default App;
