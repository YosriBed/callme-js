import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import loadable from '@loadable/component';
import Home from '../containers/Home';
import Layout from './Layout';
import Loading from '../containers/Loading';

const About = loadable(() => import('../containers/About'), { fallback: <Loading /> });
const Call = loadable(() => import('../containers/Call'), { fallback: <Loading /> });

const history = createBrowserHistory();

const Routes = () => (
  <BrowserRouter history={history}>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/call" component={Call} />
        <Route exact path="/about" component={About} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default Routes;
