import React from 'react';
import { Route } from 'react-router-dom';
import { List, Create, Update, Show } from '../components/orderstatus/';

export default [
  <Route path="/order_statuses/create" component={Create} exact key="create" />,
  <Route path="/order_statuses/edit/:id" component={Update} exact key="update" />,
  <Route path="/order_statuses/show/:id" component={Show} exact key="show" />,
  <Route path="/order_statuses/" component={List} exact strict key="list" />,
  <Route path="/order_statuses/:page" component={List} exact strict key="page" />
];
