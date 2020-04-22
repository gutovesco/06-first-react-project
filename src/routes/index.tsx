/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-indent */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Repository from '../pages/Repository/index';
import Dashboard from '../pages/Dashboard/index';

const Routes: React.FC = () => (
    <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/repository" component={Repository} />
    </Switch>
);

export default Routes;
