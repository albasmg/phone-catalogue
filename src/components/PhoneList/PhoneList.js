import React from 'react';
import PropTypes from 'prop-types';
import Phone from '../Phone/Phone';

const PhoneList = ({ phones, searcherValue }) => {
  return (
    <ul className="phoneList">
      {!phones.length ? (
        <span className="errorMessage">
          There is not any character name that match the word {''}
          <span className="errorMessage_error">{searcherValue}</span>
        </span>
      ) : (
        phones.map(({ name, manufacturer, price, imageFileName, id }) => (
          <li key={id}>
            <Phone
              name={name}
              imageFileName={imageFileName}
              manufacturer={manufacturer}
              price={price}
              id={id}
            />
          </li>
        ))
      )}
    </ul>
  );
};

PhoneList.propTypes = {
  phones: PropTypes.array.isRequired,
};

export default PhoneList;
