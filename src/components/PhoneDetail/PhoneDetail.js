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
    <section>
      <div>
        <img src={mapPhoneImages[imageFileName]} alt={name}></img>
      </div>
      <h2>{name}</h2>
      <h3>{manufacturer}</h3>
      <p>{description}</p>
      <p>{color}</p>
      <p>{screen}</p>
      <p>{processor}</p>
      <p>{ram}</p>
    </section>
  );
};

export default PhoneDetails;
