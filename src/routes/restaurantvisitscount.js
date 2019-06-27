import React from 'react';
import { Route } from 'react-router-dom';
import { List, Create, Update, Show } from '../components/restaurantvisitscount/';

export default [
  <Route path="/restaurant_visits_counts/create" component={Create} exact key="create" />,
  <Route path="/restaurant_visits_counts/edit/:id" component={Update} exact key="update" />,
  <Route path="/restaurant_visits_counts/show/:id" component={Show} exact key="show" />,
  <Route path="/restaurant_visits_counts/" component={List} exact strict key="list" />,
  <Route path="/restaurant_visits_counts/:page" component={List} exact strict key="page" />
];
