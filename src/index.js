import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const feedback = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_FEELING_LEVEL':
            return { ...state, feeling: action.payload };
        case 'ADD_UNDERSTANDING_LEVEL':
            return { ...state, understanding: action.payload };
        case 'ADD_SUPPORT_LEVEL':
            return { ...state, support: action.payload };
        case 'RESET_FEEDBACK':
            return {};
        default:
            return state;
    }
}

const dialogOpen = (state = false, action) => {
    switch (action.type) {
        case 'OPEN_DIALOG':
            return action.payload;
        default:
            return state;
    }
}

const allReducers = combineReducers({
    feedback,
    dialogOpen,
});

const store = createStore(
    allReducers,
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
