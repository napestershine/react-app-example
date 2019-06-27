import React from 'react';
import { Route } from 'react-router-dom';
import { List, Create, Update, Show } from '../components/invoice/';

export default [
  <Route path="/invoices/create" component={Create} exact key="create" />,
  <Route path="/invoices/edit/:id" component={Update} exact key="update" />,
  <Route path="/invoices/show/:id" component={Show} exact key="show" />,
  <Route path="/invoices/" component={List} exact strict key="list" />,
  <Route path="/invoices/:page" component={List} exact strict key="page" />
];
