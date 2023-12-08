import React from 'react';
import css from './ContactForm.module.css';


const ContactForm = ({ name, number, onNameChange, onNumberChange, onAddContact }) => {
  return (
    <form className={css.ContForm}>
      <label className={css.LblForm}>
        Name:
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
          required
          value={name}
          onChange={onNameChange}
        />
      </label>
      <br />
      <label className={css.LblForm}>
        Number:
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={onNumberChange}
        />
      </label>
      <br />
      <button className={css.BtnForm} type="button" onClick={onAddContact}>
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm;