import React from 'react';
import ReactDOM from 'react-dom';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, compose } from 'redux';
import reducers from './reducers';
import App from './App';

const Index = () => {
  const middlewares = [ReduxThunk];
  const composed = [applyMiddleware(...middlewares)];
  const store = createStore(reducers, {}, compose(...composed));

  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

ReactDOM.render(<Index />, document.querySelector('#root'));
