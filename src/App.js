import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPhones } from './redux/phones/actions';
import { getPhones } from './redux/phones/selectors';
import phonesData from './data/phones.json';

const App = () => {
  const dispatch = useDispatch();
  const phones = useSelector(getPhones);

  const handleButton = () => {
    dispatch(setPhones(phonesData));
  };

  return (
    <div>
      <button onClick={handleButton}>Get phones</button>
    </div>
  );
};

export default App;
