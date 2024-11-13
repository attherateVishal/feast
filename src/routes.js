import React from 'react';
import { Redirect, Route, Router, Switch } from 'react-router-dom';
import App from './App';
import Search from './Search/Search.js';
import Callback from './Callback/Callback';
import Policy from './Policy/Policy.js';
import Restaurant from  './Restaurant/Restaurant';
import MenuItem from  './MenuItem/MenuItem';
import OrderList from  './OrderList/OrderList';
import Settings from  './Settings/Settings';
import Auth from './Auth/Auth';
import history from './history';

const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

export const makeMainRoutes = () => {
  return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" render={(props) => <App auth={auth} {...props} />} />
          <Route exact path="/policy" render={(props) => (
          !auth.isAuthenticated() ? (
            <Redirect to="/"/>
          ) : (
            <Policy auth={auth} {...props} />          )
        )} />
          <Route exact path="/search" render={(props) => (
            !auth.isAuthenticated() ? (
              <Redirect to="/"/>
            ) : (
              <Search auth={auth} {...props} />
            )
          )} />
          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} />
          }}/>
          <Route exact={true} path='/restaurant' component={Restaurant} />
          <Route exact={true} path='/menuitem' component={MenuItem} />
          <Route exact={true} path='/settings' component={Settings} />
          <Route exact={true} path='/orderlist' component={OrderList} />
          </Switch>
      </Router>
  );
}
