import React from 'react';
import ReactDom from 'react-dom';
import {Router, Route, IndexRoute, browserHistory, hashHistory} from 'react-router';


import Registration from "../registration/registration";


console.log('react', React);

class mainApp extends React.Component{
    render(){
        return (
            <Registration/>)

    }
}

ReactDom.render(

    <mainApp/>,
    document.getElementById('registration')
);

export default mainApp;