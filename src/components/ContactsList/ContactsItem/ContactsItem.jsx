import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactsItem.module.css';
import { useDispatch } from 'react-redux';
import { deleteContactsAction } from 'redux/contacts/actions.contacts';

function ContactsItem({ id, name, number }) {
  const dispatch = useDispatch();

  return (
    <li className={s.item}>
      <span className={s.spanName}>{name}:</span>
      <span className={s.spanTel}>{number}</span>
      <button
        className={s.button}
        type="button"
        name="delete"
        onClick={() => dispatch(deleteContactsAction(id))}
      >
        Delete
      </button>
    </li>
  );
}

ContactsItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  // onDeleteContact: PropTypes.func.isRequired,
};

export default ContactsItem;
