import React from 'react';
import HairCutGalleryImage from './HairCutGalleryImage';
import './HairsCutGallery.css';

const HairsCutGallery = ({hairsCuts}) => {
  return (
    <div className="cuts-gallery">
      {hairsCuts.map((gallar, index) => (
        <HairCutGalleryImage key={index} gallar={gallar} />
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

export default HairsCutGallery;
