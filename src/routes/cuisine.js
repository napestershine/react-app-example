import React from 'react';
import { Route } from 'react-router-dom';
import { List, Create, Update, Show } from '../components/cuisine/';

export default [
  <Route path="/cuisines/create" component={Create} exact key="create" />,
  <Route path="/cuisines/edit/:id" component={Update} exact key="update" />,
  <Route path="/cuisines/show/:id" component={Show} exact key="show" />,
  <Route path="/cuisines/" component={List} exact strict key="list" />,
  <Route path="/cuisines/:page" component={List} exact strict key="page" />
];
