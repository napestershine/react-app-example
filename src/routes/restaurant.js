import React from 'react';
import { Route } from 'react-router-dom';
import { List, Create, Update, Show } from '../components/restaurant/';

export default [
  <Route path="/restaurants/create" component={Create} exact key="create" />,
  <Route path="/restaurants/edit/:id" component={Update} exact key="update" />,
  <Route path="/restaurants/show/:id" component={Show} exact key="show" />,
  <Route path="/restaurants/" component={List} exact strict key="list" />,
  <Route path="/restaurants/:page" component={List} exact strict key="page" />
];
