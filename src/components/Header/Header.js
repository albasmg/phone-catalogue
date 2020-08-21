import React from 'react';

const Header = ({ name, imageFileName, manufacturer, price }) => {
  return (
    <header className="header">
      <h1 className="header__title">Phone catalogue</h1>
    </header>
  );
};

export default Header;
