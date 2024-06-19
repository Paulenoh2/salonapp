import React from 'react';

const HairStyleGalleryImage = ({ gallar }) => {
  return (
    <div>
      <img src={gallar} alt="Style design" className="style-gallery-img" />
    </div>
  );
};

export default HairStyleGalleryImage;
