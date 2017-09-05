import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Route, Switch, BrowserRouter} from 'react-router-dom';

import Registration from "./components/registration/registration";
import MoviesList from './components/moviesList/moviesList';
import CurrentMovie from './components/currentMovie/currentMovie';
import applicationReducer from './reducers/applicationReducer';

const store = createStore(
    applicationReducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);

class App extends React.Component {
    render() {
        return (<Provider store={store}>
                <BrowserRouter history={this.props.history}>
                    <div>
                        <Switch>
                            <Route exact path="/" component={Registration}/>
                            <Route path="/moviesList" component={MoviesList}/>
                            <Route path="/currentMovie/:id" component={CurrentMovie}/>
                        </Switch>
                    </div>
                </BrowserRouter>
            </Provider>
        )
    }
}

ReactDOM.render((
         <App/>
 ), document.getElementById('root'));