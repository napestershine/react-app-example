import React from 'react';
import { Route } from 'react-router-dom';
import { List, Create, Update, Show } from '../components/menu/';

export default [
  <Route path="/menus/create" component={Create} exact key="create" />,
  <Route path="/menus/edit/:id" component={Update} exact key="update" />,
  <Route path="/menus/show/:id" component={Show} exact key="show" />,
  <Route path="/menus/" component={List} exact strict key="list" />,
  <Route path="/menus/:page" component={List} exact strict key="page" />
];
