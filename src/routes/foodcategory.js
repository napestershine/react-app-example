import React from 'react';
import { Route } from 'react-router-dom';
import { List, Create, Update, Show } from '../components/foodcategory/';

export default [
  <Route path="/food_categories/create" component={Create} exact key="create" />,
  <Route path="/food_categories/edit/:id" component={Update} exact key="update" />,
  <Route path="/food_categories/show/:id" component={Show} exact key="show" />,
  <Route path="/food_categories/" component={List} exact strict key="list" />,
  <Route path="/food_categories/:page" component={List} exact strict key="page" />
];
