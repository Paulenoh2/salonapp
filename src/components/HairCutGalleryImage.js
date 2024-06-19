import React from 'react';

const HairCutGalleryImage = ({ gallar }) => {
  return (
    <div>
      <img src={gallar} alt="Cut design" className="cuts-gallery-img" />
    </div>
  );
};

export default HairCutGalleryImage;
