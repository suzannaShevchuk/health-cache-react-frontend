import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore , applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {reducers} from "./redux/reducers";
import {compose} from "redux";
import {Provider} from "react-redux"

const store = createStore(reducers,compose(applyMiddleware(thunk)))

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
      <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
