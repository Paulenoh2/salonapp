import React from "react";
import "./Nails.css";

const Nails = ({ im11, im2, h10}) => {
  return (
    <div className="nails-container">
      <div className="nails-heading"> ZAPIRO BEAUTY AND COSMETICS SALON </div>
      <div>
        <img src={im11} className="nails-image" alt="home" />
      </div>
     
      <div className="nails-container">
      <div className="content1-section">
        <div className="nails-text">
          
          <h2>Nail Services</h2>
          <p>.At Zapiro Salon Ltd, we offer a wide range of beauty services designed to
             help you look and feel your bestExplore our services below and find the perfect 
             treatment for you.</p>
          
          <p></p>


          <p>•	Manicures: Classic, gel, and spa manicures.</p>
<p>•	Pedicures: Relaxing pedicures with exfoliation and massage.</p>
<p>•	Nail Art: Customized designs to express your unique style</p>

        </div>
        <img src={im2} alt="Example" className="nails-image" />
        
      </div>


      <div className="nails-container">
        <div className="content1-section">
          <div className="nails-text">

        <p>Book your appointment today and indulge in a luxurious experience at Zapiro Salon 
          Ltd. We look forward to welcoming you!</p>
________________________________________
 <p>Feel free to customize any of these sections to better fit the specific detail and
   personality of your salon.</p>
<p></p>
          </div>
          <img src={h10} alt="Example" className="nails-image" />
        
        </div>
      </div>
      
    </div>

    </div>
  );
};

export default Nails;
