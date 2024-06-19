import React from 'react';

const NailsGalleryImage = ({ gallar }) => {
  return (
    <div>
      <img src={gallar} alt="Nail design" className="nails-gallery-img" />
    </div>
  );
};

export default NailsGalleryImage;
