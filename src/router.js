import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Store from './components/Store/Store.js';
import Details from './components/Details/Details.js';
import Checkout from './components/Checkout/Checkout.js';

export default (
  <Switch>
    <Route exact path='/' component={ Store }/>
    <Route path='/details/:id' component={ Details }/>
    <Route path='/checkout' component={ Checkout }/>
  </Switch>
)