import React from 'react';
import PropTypes from 'prop-types';
import ContactsItem from './ContactsItem';
import s from './ContactsList.module.css';
import { useSelector } from 'react-redux';

function ContactsList() {
  const contacts = useSelector(state => state.items.contacts);

  const filter = useSelector(state => state.items.filter);
  const identicFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(identicFilter)
  );

  return (
    <ul className={s.list}>
      {filteredContacts.map(({ name, id, number }) => (
        <ContactsItem name={name} key={id} id={id} number={number} />
      ))}
    </ul>
  );
}

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactsList;
