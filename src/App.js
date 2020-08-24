import React, { useEffect, useState } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setPhones } from './services/phones/actions';
import { getPhones } from './services/phones/selectors';
import Header from './components/Header/Header';
import PhoneList from './components/PhoneList/PhoneList';
import PhoneDetails from './components/PhoneDetail/PhoneDetail';
import Loader from './components/Loader/Loader';
import { getDataFromApi } from './services/phones/api';

const App = () => {
  const dispatch = useDispatch();
  const phones = useSelector(getPhones);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getDataFromApi().then((res) => {
      dispatch(setPhones(res.data));
      setIsLoading(false);
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
          price={phone.price}
        />
      );
    } else {
      return (
        <div className="errorMessage">
          <p className="errorMessage__error">Oops!</p>
          <p className="errorMessage__msg">
            This phone has not been found. You can go back to{' '}
            <Link to={'/'}>
              <span>all phones list</span>
            </Link>
            !
          </p>
        </div>
      );
    }
  };

  if (isLoading) return <Loader />;

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
