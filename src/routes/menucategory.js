import React from 'react';
import { Route } from 'react-router-dom';
import { List, Create, Update, Show } from '../components/menucategory/';

export default [
  <Route path="/menu_categories/create" component={Create} exact key="create" />,
  <Route path="/menu_categories/edit/:id" component={Update} exact key="update" />,
  <Route path="/menu_categories/show/:id" component={Show} exact key="show" />,
  <Route path="/menu_categories/" component={List} exact strict key="list" />,
  <Route path="/menu_categories/:page" component={List} exact strict key="page" />
];
