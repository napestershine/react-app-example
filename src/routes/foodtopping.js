import React from 'react';
import { Route } from 'react-router-dom';
import { List, Create, Update, Show } from '../components/foodtopping/';

export default [
  <Route path="/food_toppings/create" component={Create} exact key="create" />,
  <Route path="/food_toppings/edit/:id" component={Update} exact key="update" />,
  <Route path="/food_toppings/show/:id" component={Show} exact key="show" />,
  <Route path="/food_toppings/" component={List} exact strict key="list" />,
  <Route path="/food_toppings/:page" component={List} exact strict key="page" />
];
