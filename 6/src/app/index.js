import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Route, Switch, BrowserRouter} from 'react-router-dom';


import Registration from "./components/registration/registration";
import movieList from './components/movieList/movieList';
import currentMovie from './components/currentMovie/currentMovie';
import applicationReducer from './reducers/applicationReducer';

import filmListJSON from './movie.json';

const store = createStore(
    applicationReducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);

function getMoviesListJSON() {
    console.log('file json', filmListJSON);

}

getMoviesListJSON();

class App extends React.Component {
    render() {
        return (<BrowserRouter>
                        <div>
                            <Switch>
                                <Route exact path="/" component={Registration}/>
                                <Route path="/moviesList" component={movieList}/>
                                <Route path="/currentMovie" component={currentMovie}/>
                            </Switch>
                        </div>
            </BrowserRouter>
        )
    }
}

ReactDOM.render((
    <Provider store={store}>
         <App/>
    </Provider>
 ), document.getElementById('root'));