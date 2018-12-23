import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Route, Switch } from 'react-router';
import './index.css';
import Home from './routes/Home';
import Page from './routes/Detail';
import registerServiceWorker from './registerServiceWorker';
import configureStore, { history } from './redux/store';

const store = configureStore();

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/film/:id/" component={Page}/>
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
