import React from 'react';
import { Route } from 'react-router-dom';
import { List, Create, Update, Show } from '../components/tablereservation/';

export default [
  <Route path="/table_reservations/create" component={Create} exact key="create" />,
  <Route path="/table_reservations/edit/:id" component={Update} exact key="update" />,
  <Route path="/table_reservations/show/:id" component={Show} exact key="show" />,
  <Route path="/table_reservations/" component={List} exact strict key="list" />,
  <Route path="/table_reservations/:page" component={List} exact strict key="page" />
];
