import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import history from 'history/createBrowserHistory';

import Registration from "./components/registration/registration";
import movieList from './components/filmList/filmList';
import applicationReducer from './reducers/applicationReducer';
import './mainStyle.scss';


const createHistory = require('history').createBrowserHistory;

const store = createStore(
    applicationReducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);


class App extends React.Component {
    render() {

        return (<BrowserRouter history={history}>
                <Provider store={store}>

                        <div>
                            <Switch>
                            <Route exact path="/" component={Registration}/>
                            <Route path="/moviesList" component={movieList}/>
                        </Switch>
                        </div>

                </Provider> </BrowserRouter>
        )
    }
}


// ReactDOM.render((
//     <Provider store = {store}>
//         <App/>
//     </Provider>
// ), document.getElementById('root'));


console.log('React application main page');