import React from 'react';
import { Route } from 'react-router-dom';
import { List, Create, Update, Show } from '../components/verificationcode/';

export default [
  <Route path="/verification_codes/create" component={Create} exact key="create" />,
  <Route path="/verification_codes/edit/:id" component={Update} exact key="update" />,
  <Route path="/verification_codes/show/:id" component={Show} exact key="show" />,
  <Route path="/verification_codes/" component={List} exact strict key="list" />,
  <Route path="/verification_codes/:page" component={List} exact strict key="page" />
];
