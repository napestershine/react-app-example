import React from 'react';
import { Route } from 'react-router-dom';
import { List, Create, Update, Show } from '../components/contactus/';

export default [
  <Route path="/contact_uses/create" component={Create} exact key="create" />,
  <Route path="/contact_uses/edit/:id" component={Update} exact key="update" />,
  <Route path="/contact_uses/show/:id" component={Show} exact key="show" />,
  <Route path="/contact_uses/" component={List} exact strict key="list" />,
  <Route path="/contact_uses/:page" component={List} exact strict key="page" />
];
