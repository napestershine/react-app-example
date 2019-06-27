import React from 'react';
import { Route } from 'react-router-dom';
import { List, Create, Update, Show } from '../components/country/';

export default [
  <Route path="/countries/create" component={Create} exact key="create" />,
  <Route path="/countries/edit/:id" component={Update} exact key="update" />,
  <Route path="/countries/show/:id" component={Show} exact key="show" />,
  <Route path="/countries/" component={List} exact strict key="list" />,
  <Route path="/countries/:page" component={List} exact strict key="page" />
];
