import React from 'react';
import mapPhoneImages from './mapPhoneImages';

const Phone = ({ name, imageFileName, manufacturer, price }) => {
  return (
    <div>
      <img src={mapPhoneImages[imageFileName]} alt={name}></img>
      <h2>{name}</h2>
      <span>{manufacturer}</span>
      <div>
        <span>{price}</span>
      </div>
    </div>
  );
};

export default Phone;
