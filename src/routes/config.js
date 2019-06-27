import React from 'react';
import { Route } from 'react-router-dom';
import { List, Create, Update, Show } from '../components/config/';

export default [
  <Route path="/configs/create" component={Create} exact key="create" />,
  <Route path="/configs/edit/:id" component={Update} exact key="update" />,
  <Route path="/configs/show/:id" component={Show} exact key="show" />,
  <Route path="/configs/" component={List} exact strict key="list" />,
  <Route path="/configs/:page" component={List} exact strict key="page" />
];
