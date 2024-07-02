import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

const About = ({ p11, p7, p3}) => {
  return (
    <div className="about-container">
      <div className="about-heading"> ABOUT ZAPIRO BEAUTY AND COSMETICS SALON </div>
      <div>
        <img src={p7} className="about-image" alt="home" />
      </div>
     
      <div className="about-container">
      <div className="content1-section">
        <div className="about-text">
          
          <h2>About Zapiro Salon Ltd</h2>
          <p>At Zapiro Salon Ltd, our mission is to enhance your natural beauty and provide you with an exceptional 
            salon experience. Established in 2013,
             we have built a reputation for excellence in both service and style.</p>
          <p></p>
          <p></p>
        </div>
        <img src={p11} alt="Example" className="about-image" />
        
      </div>


      <div className="about-container">
        <div className="content1-section">
          <div className="about-text">
            <h2>Our Story</h2>
            <p>Founded by Modestine, Zapiro Salon Ltd was born out of a passion
               for beauty and a commitment to customer satisfaction. With years of industry experience,
                Modestine envisioned a salon that not only 
              offered top-notch beauty services but also created a welcoming and relaxing environment for clients.</p>
            <h2>Our Team</h2>
            <p>Our team of skilled professionals is the heart of Zapiro Salon. Each member is highly trained and 
              brings a unique set of skills to the salon, ensuring that we can meet all your beauty needs. From expert
               hair stylists to meticulous nail
               technicians and experienced estheticians, we are here to provide you with the best possible service.</p>
               <h2>Our Values</h2>
            <p>1,Quality: We strive for excellence in every service we offer.</p>
            <p>2,Innovation: We embrace the latest trends and techniques to keep you looking stylish and modern.</p>
            <p>Customer Focus: Your satisfaction is our top priority. We listen to your needs and tailor our services to meet them.</p>
            <p>Community: We believe in giving back to our community and supporting local initiatives</p>
            <p></p>
            <h2>Join us at Zapiro Salon Ltd and let us help you discover your most beautiful self.</h2>
          </div>
          <img src={p3} alt="Example" className="about-image" />
        
        </div>
        <p>Book your appointment today and indulge in a luxurious experience at Zapiro Salon 
          Ltd. We look forward to welcoming you!</p>
________________________________________
 <p>Feel free to customize any of these sections to better fit the specific detail and
   personality of your salon.</p>
<p></p>
      </div>
      
    </div>

    </div>
  );
};

export default About;
