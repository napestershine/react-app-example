import React from 'react';
import { Route } from 'react-router-dom';
import { List, Create, Update, Show } from '../components/food/';

export default [
  <Route path="/foods/create" component={Create} exact key="create" />,
  <Route path="/foods/edit/:id" component={Update} exact key="update" />,
  <Route path="/foods/show/:id" component={Show} exact key="show" />,
  <Route path="/foods/" component={List} exact strict key="list" />,
  <Route path="/foods/:page" component={List} exact strict key="page" />
];
