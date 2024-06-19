import React from 'react';
import HairStyleGalleryImage from './HairStyleGalleryImage';
import './HairStyleGallery.css';

const HairStyleGallery = ({hairStyle}) => {
  return (
    <div className="style-gallery">
      {hairStyle.map((gallar, index) => (
        <HairStyleGalleryImage key={index} gallar={gallar} />
      ))}


<p>Book your appointment today and indulge in a luxurious experience at Zapiro Salon 
          Ltd. We look forward to welcoming you!</p>
_________________________________________________________________________________________
<p></p>
 <p>Feel free to customize any of these sections to better fit the specific detail and
   personality of your salon.</p>
<p></p>
    </div>
  );
};

export default HairStyleGallery;
