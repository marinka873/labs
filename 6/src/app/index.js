import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Router, Route, browserHistory, BrowserRouter, Link} from 'react-router-dom';


import Registration from "./components/registration/registration";
import filmList from './components/filmList/filmList'
import applicationReducer from './reducers/applicationReducer';
import './mainStyle.scss';


const store = createStore(
    applicationReducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);


class App extends React.Component{
    render(){

        return (<BrowserRouter>
            <Provider store = {store}>
            <div>
               <Registration/>
            </div>

            </Provider>
            </BrowserRouter>
        )

    }
}

ReactDOM.render(
    <App />,
    document.getElementById('registration')
);

console.log('React application main page');