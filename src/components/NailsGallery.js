import React from 'react';
import './NailsGallery.css';
import NailsGalleryImage from './NailsGalleryImage';


const NailsGallery = ({nailsPics }) => {
  return (
    <div className="nails-gallery">
      {nailsPics.map((gallar, index) => (
        <NailsGalleryImage key={index} gallar={gallar} />
      ))}

<p>Book your appointment today and indulge in a luxurious experience at Zapiro Salon 
          Ltd. We look forward to welcoming you!</p>
________________________________________________________________________________
<p></p>
 <p>Feel free to customize any of these sections to better fit the specific detail and
   personality of your salon.</p>
<p></p>
    </div>
  );
};

export default NailsGallery;


