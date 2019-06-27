import React from 'react';
import { Route } from 'react-router-dom';
import { List, Create, Update, Show } from '../components/reviewreply/';

export default [
  <Route path="/review_replies/create" component={Create} exact key="create" />,
  <Route path="/review_replies/edit/:id" component={Update} exact key="update" />,
  <Route path="/review_replies/show/:id" component={Show} exact key="show" />,
  <Route path="/review_replies/" component={List} exact strict key="list" />,
  <Route path="/review_replies/:page" component={List} exact strict key="page" />
];
