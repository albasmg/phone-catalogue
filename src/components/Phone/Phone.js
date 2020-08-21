import React from 'react';
import mapPhoneImages from './mapPhoneImages';

const Phone = ({ name, imageFileName, manufacturer, price }) => {
  return (
    <div className="phone">
      <div className="phone__imgContainer">
        <img
          src={mapPhoneImages[imageFileName]}
          alt={name}
          className="phone__img"
        ></img>
      </div>
      <h2 className="phone__name">{name}</h2>
      <span className="phone__manufacturer">{manufacturer}</span>
      <div className="phone__priceContainer">
        <span className="phone__price">{price}</span>
      </div>
    </div>
  );
};

export default Phone;
