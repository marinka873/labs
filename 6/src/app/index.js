import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, HashRouter} from 'react-router-dom';

import Registration from "./components/registration/registration";
import FilmList from "./components/filmList/filmList";




class App extends React.Component{
    render(){

        return (
            <div>
                <Registration />

        </div>

        )

    }
}

ReactDOM.render(
    <App />,
    document.getElementById('registration')
);

console.log('React application main page');