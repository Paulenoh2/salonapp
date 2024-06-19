import React, { useState } from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";
import "./ContactList.css";

const ContactList = ({ contacts, deleteContactHandler, updateContactHandler }) => {
  const [updatedContactData, setUpdatedContactData] = useState({});

  const handleUpdateInputChange = (event, key) => {
    setUpdatedContactData({ ...updatedContactData, [key]: event.target.value });
  };

  const renderList = contacts.map((contact) => {
    return (
      <div key={contact.id} className="contact-item">
        <ContactCard contact={contact} className="contact-card" />
        <input
          type="text"
          placeholder="Update Username"
          onChange={(event) => handleUpdateInputChange(event, "username")}
          className="contact-input"
        />
        <input
          type="text"
          placeholder="Update Email"
          onChange={(event) => handleUpdateInputChange(event, "email")}
          className="contact-input"
        />
        <div className="contact-buttons">
          <button onClick={() => deleteContactHandler(contact.id)} className="contact-button delete-button">
            Delete
          </button>
          <button onClick={() => updateContactHandler(contact.id, updatedContactData)} className="contact-button update-button">
            Update
          </button>
        </div>
      </div>
    );
  });

  return <div className="contact-list">{renderList}</div>;
};

export default ContactList;
