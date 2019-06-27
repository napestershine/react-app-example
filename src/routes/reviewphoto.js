import React from 'react';
import { Route } from 'react-router-dom';
import { List, Create, Update, Show } from '../components/reviewphoto/';

export default [
  <Route path="/review_photos/create" component={Create} exact key="create" />,
  <Route path="/review_photos/edit/:id" component={Update} exact key="update" />,
  <Route path="/review_photos/show/:id" component={Show} exact key="show" />,
  <Route path="/review_photos/" component={List} exact strict key="list" />,
  <Route path="/review_photos/:page" component={List} exact strict key="page" />
];
