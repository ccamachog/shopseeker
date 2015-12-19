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

/*import './main.css';
 import store from './stores/AppStore.js';
 import { create, update, remove, attachToLane, detachFromLane } from './actions/LaneActions';

 main();

 function main() {
 let mystore = store;
 console.log(mystore.getState());
 // Every time the state changes, log it
 let unsubscribe = mystore.subscribe(() =>{
 debugger;
 let id=mystore.getState().lanes.get(0).id;
 mystore.dispatch(attachToLane(id,4));
 //mystore.dispatch(remove(id));

 })
 mystore.dispatch(create());

 }*/