import React from 'react';
import PropTypes from 'prop-types';
import style from './ContactList.module.css';

const ContactList = ({ contacts, onDaleteContact }) => (
  <ul className={style.list}>
    {contacts.map(({ id, name, number }) => (
      <li className={style.item} key={id}>
        {name}: {number}
        <button
          className={style.button}
          type="button"
          onClick={() => onDaleteContact(id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  onDaleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};

export default ContactList;
