import React from 'react';
import { Route } from 'react-router-dom';
import { List, Create, Update, Show } from '../components/restaurantphoto/';

export default [
  <Route path="/restaurant_photos/create" component={Create} exact key="create" />,
  <Route path="/restaurant_photos/edit/:id" component={Update} exact key="update" />,
  <Route path="/restaurant_photos/show/:id" component={Show} exact key="show" />,
  <Route path="/restaurant_photos/" component={List} exact strict key="list" />,
  <Route path="/restaurant_photos/:page" component={List} exact strict key="page" />
];
