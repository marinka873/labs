import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import Registration from "./components/registration/registration";
import applicationStore from "./store/applicationStore";
import './mainStyle.scss';

const store = applicationStore();

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