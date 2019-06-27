import React from 'react';
import { Route } from 'react-router-dom';
import { List, Create, Update, Show } from '../components/language/';

export default [
  <Route path="/languages/create" component={Create} exact key="create" />,
  <Route path="/languages/edit/:id" component={Update} exact key="update" />,
  <Route path="/languages/show/:id" component={Show} exact key="show" />,
  <Route path="/languages/" component={List} exact strict key="list" />,
  <Route path="/languages/:page" component={List} exact strict key="page" />
];
