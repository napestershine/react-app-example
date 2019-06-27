import React from 'react';
import { Route } from 'react-router-dom';
import { List, Create, Update, Show } from '../components/foodorder/';

export default [
  <Route path="/food_orders/create" component={Create} exact key="create" />,
  <Route path="/food_orders/edit/:id" component={Update} exact key="update" />,
  <Route path="/food_orders/show/:id" component={Show} exact key="show" />,
  <Route path="/food_orders/" component={List} exact strict key="list" />,
  <Route path="/food_orders/:page" component={List} exact strict key="page" />
];
