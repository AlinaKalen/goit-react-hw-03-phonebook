import React from 'react';
import css from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map((contact) => (
        <li  className={css.LiContact} key={contact.id}>
          {contact.name} : {contact.number}
          <button className={css.DelContact} type="button" onClick={() => onDeleteContact(contact.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;