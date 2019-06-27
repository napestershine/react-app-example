import React from 'react';
import { Route } from 'react-router-dom';
import { List, Create, Update, Show } from '../components/faq/';

export default [
  <Route path="/faqs/create" component={Create} exact key="create" />,
  <Route path="/faqs/edit/:id" component={Update} exact key="update" />,
  <Route path="/faqs/show/:id" component={Show} exact key="show" />,
  <Route path="/faqs/" component={List} exact strict key="list" />,
  <Route path="/faqs/:page" component={List} exact strict key="page" />
];
