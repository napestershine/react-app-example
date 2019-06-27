import React from 'react';
import { Route } from 'react-router-dom';
import { List, Create, Update, Show } from '../components/issue/';

export default [
  <Route path="/issues/create" component={Create} exact key="create" />,
  <Route path="/issues/edit/:id" component={Update} exact key="update" />,
  <Route path="/issues/show/:id" component={Show} exact key="show" />,
  <Route path="/issues/" component={List} exact strict key="list" />,
  <Route path="/issues/:page" component={List} exact strict key="page" />
];
