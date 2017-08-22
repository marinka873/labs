import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import Registration from "../registration/registration";

class mainComponent extends React.Component{
    render(){
        return (
            <div>
                <Registration/>
            </div>

        )
    }
}


export default mainComponent;