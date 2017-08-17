import React from 'react';
import ReactDom from 'react-dom';
import {Router, Route, IndexRoute, browserHistory, hashHistory} from 'react-router';

import Registration from "./components/registration/registration";
// import mainApp from './components/mainApp/mainApp';

class App extends React.Component{
    render(){
        return ( <div>
            <Registration />
        </div>)

    }
}

ReactDom.render(
    <App />,
    document.getElementById('registration')
);

console.log('React application main page');