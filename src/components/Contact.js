import React from 'react';
import './Contact.css';

const Contact = ({p6,p8,text}) => {
    return (
        <div className="contact-container">
            <h1>Contact Us</h1>
            
                <h3>66 Nedbank Plaza Stive Biko Road,Pretoria, South Africa</h3>
                <h3>Phone: 123-456-7890 / 068 042 6550</h3>
                <h3>Email: info@salon.com | paulenoh2@gmail.com</h3>
            
            <div className="images">
                <img src={p6} alt="Salon Image 1" />
                <img src={p8} alt="Salon Image 2" />
                <div className="text-overlay">{text}</div>
            </div>
            <div className="contact-form">
                <h2>Get in Touch</h2>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    // Handle form submission
                    alert('Form submitted');
                }}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" required></textarea>

                    <button type="submit">Submit</button>
                </form>
            </div>
            <p>Book your appointment today and indulge in a luxurious experience at Zapiro Salon 
          Ltd. We look forward to welcoming you!</p>
_________________________________________________________________________________________
 <p>Feel free to customize any of these sections to better fit the specific detail and
   personality of your salon.</p>
<p></p>
        </div>
    );
};

export default Contact;
