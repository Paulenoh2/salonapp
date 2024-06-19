import React from "react";
import { Link } from "react-router-dom";
import "./Spa.css";

const Spa = ({ p7, p6, p9}) => {
  return (
    <div className="spas-container">
      <div className="spas-heading"> ZAPIRO BEAUTY AND CUSMETICS SALON </div>
      <div>
        <img src={p6} className="spas-image" alt="home" />
      </div>
     
      <div className="spas-container">
      <div className="content1-section">
        <div className="spas-text">
        <h2>Spa Services</h2>
          <p></p>
          <p>At Zapiro Salon Ltd, we offer a wide range of beauty services designed to 
            help you look and feel your best. 
            Explore our services below and find the perfect treatment for you.</p>
          <p></p>
        </div>
        <img src={p7} alt="Example" className="spas-image" />
        
      </div>


      <div className="spas-container">
        <div className="content1-section">
          <div className="spas-text">
            <h2>Spa Services</h2>
            <p></p>
            
           <p>•	Massage: Relaxing and therapeutic massages to relieve stress and tension.</p>
          <p>•	Body Treatments: Scrubs, wraps, and other treatments to nourish your skin</p>

              <p></p>
               <h2>Makeup Services </h2>
               <p>•	Application: Professional makeup for any occasion.</p>
                <p>•	Lessons: Personalized makeup tutorials to enhance your skills.</p>

<p></p>
<p>
</p>
        <p>Book your appointment today and indulge in a luxurious experience at Zapiro 
          Salon Ltd. We look forward to welcoming you!
________________________________________
</p>
          </div>
          <img src={p9} alt="Example" className="spas-image" />
        
        </div>
      </div>
      
    </div>

    </div>
  );
};

export default Spa;
