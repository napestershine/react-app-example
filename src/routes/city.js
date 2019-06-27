import React from 'react';
import { Route } from 'react-router-dom';
import { List, Create, Update, Show } from '../components/city/';

export default [
  <Route path="/cities/create" component={Create} exact key="create" />,
  <Route path="/cities/edit/:id" component={Update} exact key="update" />,
  <Route path="/cities/show/:id" component={Show} exact key="show" />,
  <Route path="/cities/" component={List} exact strict key="list" />,
  <Route path="/cities/:page" component={List} exact strict key="page" />
];
