import React from "react";



const ContactCard = (props) => {
  const { id, username, email } =props.contact;



  return (
    <div className="contact-list">
        <div>{username} </div>
        <div>{email}</div>

    
      
    </div>
  );
};

export default ContactCard;
