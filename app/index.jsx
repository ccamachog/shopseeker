import './main.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import { createStore } from 'redux';
import appReducer from './reducers/AppReducer';
import { Provider } from 'react-redux'


main();

function main() {
    let store = createStore(appReducer);
    const app = document.createElement('div');

    document.body.appendChild(app);

    ReactDOM.render(
        <Provider store={store}><App /></Provider>
        , app);
}
