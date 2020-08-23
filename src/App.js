import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setPhones } from './redux/phones/actions';
import { getPhones } from './redux/phones/selectors';
import Header from './components/Header/Header';
import PhoneList from './components/PhoneList/PhoneList';
import PhoneDetails from './components/PhoneDetail/PhoneDetail';
import { getDataFromApi } from './redux/phones/api';

const App = () => {
  const dispatch = useDispatch();
  const phones = useSelector(getPhones);

  useEffect(() => {
    getDataFromApi().then((data) => {
      dispatch(setPhones(data));
    });
  }, [dispatch]);

  const renderPhoneDetail = (props) => {
    const routePhoneId = parseInt(props.match.params.phoneId);
    const phone = phones.find(({ id }) => id === routePhoneId);

    if (phone) {
      return (
        <PhoneDetails
          name={phone.name}
          manufacturer={phone.manufacturer}
          description={phone.description}
          color={phone.color}
          screen={phone.screen}
          processor={phone.processor}
          ram={phone.ram}
          imageFileName={phone.imageFileName}
        />
      );
    } else {
      return <p>This phone has not been found</p>;
    }
  };

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <PhoneList phones={phones} />
        </Route>
        <Route path="/phones/:phoneId" render={renderPhoneDetail} />
      </Switch>
    </div>
  );
};

export default App;
