import React from 'react';
import Phone from '../Phone/Phone';

const PhoneList = ({ phones }) => {
  return (
    <ul className="phoneList">
      {phones.map(({ name, manufacturer, price, imageFileName, id }) => (
        <li key={id}>
          <Phone
            name={name}
            imageFileName={imageFileName}
            manufacturer={manufacturer}
            price={price}
            id={id}
          />
        </li>
      ))}
    </ul>
  );
};

export default PhoneList;
