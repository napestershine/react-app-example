import React from 'react';
import { Route } from 'react-router-dom';
import { List, Create, Update, Show } from '../components/foodsymbol/';

export default [
  <Route path="/food_symbols/create" component={Create} exact key="create" />,
  <Route path="/food_symbols/edit/:id" component={Update} exact key="update" />,
  <Route path="/food_symbols/show/:id" component={Show} exact key="show" />,
  <Route path="/food_symbols/" component={List} exact strict key="list" />,
  <Route path="/food_symbols/:page" component={List} exact strict key="page" />
];
