import React from 'react';
import mapPhoneImages from '../Phone/mapPhoneImages';

const PhoneDetails = ({
  imageFileName,
  name,
  manufacturer,
  description,
  color,
  screen,
  processor,
  ram,
}) => {
  return (
    <section className="phoneDetails">
      <div className="phoneDetails__imgContainer">
        <img
          src={mapPhoneImages[imageFileName]}
          alt={name}
          className="phoneDetails__img"
        ></img>
      </div>
      <div className="phoneDetails__info">
        <h2 className="phoneDetails__name">{name}</h2>
        <h3 className="phoneDetails__manufacturer"> {manufacturer}</h3>
        <p className="phoneDetails__description">{description}</p>
        <p className="phoneDetails__extraDetails">
          {' '}
          <span>Color: </span>
          {color}
        </p>
        <p className="phoneDetails__extraDetails">
          <span>Screen: </span>
          {screen}
        </p>
        <p className="phoneDetails__extraDetails">
          <span>Processor: </span>
          {processor}
        </p>
        <p className="phoneDetails__extraDetails">
          <span>Ram: </span>
          {ram}
        </p>
      </div>
    </section>
  );
};

export default PhoneDetails;
