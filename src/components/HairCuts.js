import React from "react";
import { Link } from "react-router-dom";
import "./HairCuts.css";

const HairCuts = ({ p11, images1,images3}) => {
  return (
    <div className="cuts-container">
      <div className="about-heading"> ZAPIRO  BEAUTY AND CUSMETICS SALON </div>
      <div>
        <img src={images3} className="cuts-image" alt="home" />
      </div>
     
      <div className="cuts-container">
      <div className="content1-section">

        
        <div className="cuts-text">
          
          <h2>Our Services</h2>
          <p>At Zapiro Salon Ltd, we offer a wide range of beauty 
            services designed to help you look and feel your best. Explore our services 
            below and find the perfect treatment for you.</p>
          
          <p></p>
        </div>
        <img src={p11} alt="Example" className="cuts-image" />
        
      </div>


      <div className="cuts-container">
        <div className="content1-section">
          <div className="cuts-text">
            <h2>Hair Services</h2>
            <p>•	Haircuts & Styling: Personalized cuts and styles for women, men, and children.</p>
            <p>•	Coloring: Full color, highlights, balayage, and more.</p>
            <p>•	Treatments: Deep conditioning, keratin treatments, and scalp treatments.</p>
            <p>•	Extensions: High-quality extensions for added length and volume.</p>
            
          
          </div>
          <img src={images1} alt="Example" className="cuts-image" />
        
        </div>
      </div>
      
    </div>

    </div>
  );
};

export default HairCuts;
