import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import mapPhoneImages from './mapPhoneImages';

const Phone = ({ name, imageFileName, manufacturer, price, id }) => {
  return (
    <Link to={`/phones/${id}`}>
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
    </Link>
  );
};

Phone.propTypes = {
  name: PropTypes.string.isRequired,
  imageFileName: PropTypes.string.isRequired,
  manufacturer: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};

export default Phone;
