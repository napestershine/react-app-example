import React from 'react';
import { Route } from 'react-router-dom';
import { List, Create, Update, Show } from '../components/paymentstatus/';

export default [
  <Route path="/payment_statuses/create" component={Create} exact key="create" />,
  <Route path="/payment_statuses/edit/:id" component={Update} exact key="update" />,
  <Route path="/payment_statuses/show/:id" component={Show} exact key="show" />,
  <Route path="/payment_statuses/" component={List} exact strict key="list" />,
  <Route path="/payment_statuses/:page" component={List} exact strict key="page" />
];
