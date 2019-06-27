import React from 'react';
import { Route } from 'react-router-dom';
import { List, Create, Update, Show } from '../components/temprestaurant/';

export default [
  <Route path="/temp_restaurants/create" component={Create} exact key="create" />,
  <Route path="/temp_restaurants/edit/:id" component={Update} exact key="update" />,
  <Route path="/temp_restaurants/show/:id" component={Show} exact key="show" />,
  <Route path="/temp_restaurants/" component={List} exact strict key="list" />,
  <Route path="/temp_restaurants/:page" component={List} exact strict key="page" />
];
