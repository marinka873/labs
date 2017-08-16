import React from 'react';
import ReactDom from 'react-dom';

import Registration from "./components/registration/registration";


console.log('react', React);

class App extends React.Component{
    render(){
        return (
                <Registration/>)

    }
}

ReactDom.render(
    <App/>,
    document.getElementById('registration')
);

