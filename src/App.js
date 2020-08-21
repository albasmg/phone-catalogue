import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPhones } from './redux/phones/actions';
import { getPhones } from './redux/phones/selectors';
import phonesData from './data/phones.json';
import Header from './components/Header/Header';
import PhoneList from './components/PhoneList/PhoneList';

const App = () => {
  const dispatch = useDispatch();
  const phones = useSelector(getPhones);

  useEffect(() => {
    dispatch(setPhones(phonesData));
  });

  return (
    <div>
      <Header />
      <PhoneList phones={phones} />
    </div>
  );
};

export default App;
