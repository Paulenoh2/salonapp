import React from "react";
import { Link } from "react-router-dom";
//import "./SkinCare.css";

const SkinCare = ({ p4, p5, p6}) => {
  return (
    <div className="skin-container">
      <div className="skin-heading"> ZAPIRO BEAUTY AND COSMETICS SALON </div>
      <div>
        <img src={p4} className="skin-image" alt="home" />
      </div>
     
      <div className="skin-container">
      <div className="content1-section">
        <div className="skin-text">
          
          <h2>Our Services</h2>
          <p></p>
          <p>At Zapiro Salon Ltd, we offer a wide range of beauty services designed to 
            help you look and feel your best. 
            Explore our services below and find the perfect treatment for you.</p>
          
          <p></p>
        </div>
        <img src={p5} alt="Example" className="skin-image" />
        
      </div>


      <div className="skin-container">
        <div className="content1-section">
          <div className="skin-text">
            <h2>Skin Care</h2>
            <p>•	Facials: Rejuvenating facials tailored to your skin type.</p>
<p>•	Waxing: Gentle and effective hair removal for face and body.</p>
<p>•	Microdermabrasion: Smoothing treatments for a radiant complexion.</p>

    
            
          
          </div>
          <img src={p6} alt="Example" className="nails-image" />
        
        </div>
      </div>
      <p>Book your appointment today and indulge in a luxurious,</p> 
       <p> experience at Zapiro Salon Ltd.  We look forward to welcoming you!</p>
________________________________________

    </div>

    </div>
  );
};

export default SkinCare;
