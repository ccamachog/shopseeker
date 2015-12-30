import './css/main.css';
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './components/app-router/AppRouter';
import { createStore } from 'redux';
import appReducer from './reducers/AppReducer';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';

//need this for slider work
injectTapEventPlugin();
main();

function main() {
    let store = createStore(appReducer);

    const app = document.createElement('div');

    document.body.appendChild(app);

    ReactDOM.render(
        <Provider store={store}><AppRouter /></Provider>
        , app);
}

