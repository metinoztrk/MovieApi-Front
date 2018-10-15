import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers/rootReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import setAuthorizationToken from './setAuthorizationToken';
import { setCurrentUser } from './actions/movies';

const store=createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk,logger)
    )
);

if(localStorage.token){
    setAuthorizationToken(localStorage.token);
    store.dispatch(setCurrentUser(localStorage.token));
}


ReactDOM.render(<BrowserRouter><Provider store={store}><App /></Provider></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
