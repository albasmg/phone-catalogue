import React from 'react';
import Phone from '../Phone/Phone';

const PhoneList = ({ phones }) => {
  return (
    <ul>
      {phones.map((phone) => (
        <li>
          <Phone
            name={phone.name}
            manufacturer={phone.manufacturer}
            price={phone.price}
          />
        </li>
      ))}
    </ul>
  );
};

export default PhoneList;
