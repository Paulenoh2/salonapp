import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";

const Home = ({h12,im11, gallery, texts, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === gallery.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(intervalId);
  }, [gallery.length, interval]);

  return (
    <div className="homes-container">
      <div className='homes-heading'>  ZAPIRO BEAUTY AND COSMETICS SALON </div>
      {gallery.map((image, index) => (
        <div
          key={index}
          className={index === currentIndex ? 'slide active' : 'slide'}
        >
          <div className="homes-image">
            <img src={image} alt={`Slide ${index}`} />
          </div>
      
        </div>
      ))}
      <p></p>

          <h1>CHOOSING US IS THE BEST CHOICE</h1>
<div className="content-section">
  
        <div className="home2-text">
          <h2>Welcome to Zapiro Salon Ltd</h2>
          <p>At Zapiro Salon Ltd, we believe that beauty is not just about looking good, but also about feeling your best. Our team of professional stylists and beauticians are dedicated to providing you with the highest quality
             of service, ensuring that every visit leaves you feeling refreshed, revitalized, and radiant.</p>
          <p>Discover our range of services tailored to meet all your beauty needs. From haircuts and coloring to spa treatments and nail care, we offer a comprehensive menu designed to make you look and feel fabulous.</p>
          
        </div>
        <img src={h12} alt="Example" className="home2-image" />
        
      </div>
      <div className='homes-heading'> CHECK OUR OFFER </div>
      <div className="content2-section">
      
        <div className="home2-text">
          <h2>About Us</h2>
          <p>Expert Stylists: Our talented team stays up-to-date with the latest trends and techniques.
Premium Products: We use only the best products to ensure the health and beauty of your hair and skin.
Relaxing Environment: Enjoy a luxurious experience in our modern, comfortable salon.
Personalized Service: Every service is tailored to your unique style and preferences.</p>
          <p>Visit us today and experience the Zapiro Salon difference!</p>
          
        </div>
        <img src={im11} alt="Example" className="home2-image" />
        
        
      </div>
      <div className='homes-heading'> YOU WILL NOT REGRET VISITING US</div>
      <p>Book your appointment today and indulge in a luxurious experience at Zapiro Salon 
          Ltd. We look forward to welcoming you!</p>
________________________________________
 <p>Feel free to customize any of these sections to better fit the specific detail and
   personality of your salon.</p>
<p></p>
    </div>
  );
};

export default Home;
