import React from 'react';
import {Route} from 'react-router';
import Registration from "./components/registration/registration";


export default (
    <Route path="/">
        <Registration path="/registration" component={Registration} />
    </Route>
)