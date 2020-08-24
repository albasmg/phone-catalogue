import React from 'react';
import PropTypes from 'prop-types';

const Searcher = ({ onSearchChange, searcherValue }) => {
  const handleInputChange = (ev) => onSearchChange(ev.target.value);

  const handleInputSubmit = (ev) => ev.preventDefault();

  return (
    <div className="searcher">
      <form onSubmit={handleInputSubmit}>
        <input
          type="text"
          value={searcherValue}
          onChange={handleInputChange}
          className="searcher__input"
          placeholder="Search your favorite phone!"
        />
      </form>
    </div>
  );
};

Searcher.propTypes = {
  onSearchChange: PropTypes.func.isRequired,
};

export default Searcher;
