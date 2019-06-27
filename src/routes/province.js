import React from 'react';
import { Route } from 'react-router-dom';
import { List, Create, Update, Show } from '../components/province/';

export default [
  <Route path="/provinces/create" component={Create} exact key="create" />,
  <Route path="/provinces/edit/:id" component={Update} exact key="update" />,
  <Route path="/provinces/show/:id" component={Show} exact key="show" />,
  <Route path="/provinces/" component={List} exact strict key="list" />,
  <Route path="/provinces/:page" component={List} exact strict key="page" />
];
