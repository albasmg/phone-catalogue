import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
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
  price,
}) => {
  return (
    <div className="wrapper">
      <section className="phoneDetails">
        <Link to={'/'}>
          <span className="phoneDetails__backLink">Back</span>
        </Link>
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
        <div className="phoneDetails__priceContainer">
          <span className="phoneDetails__price">{price}</span>
        </div>
      </section>
    </div>
  );
};

PhoneDetails.propTypes = {
  name: PropTypes.string.isRequired,
  imageFileName: PropTypes.string.isRequired,
  manufacturer: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  screen: PropTypes.string.isRequired,
  processor: PropTypes.string.isRequired,
  ram: PropTypes.string.isRequired,
};

export default PhoneDetails;
