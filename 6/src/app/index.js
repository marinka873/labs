import React from 'react';
import ReactDom from 'react-dom';
import {Router, Route, IndexRoute, browserHistory, hashHistory} from 'react-router';


import Registration from "./components/registration/registration";




ReactDom.render(
    <mainApp />,
    document.getElementById('registration')
);

console.log('react', React);