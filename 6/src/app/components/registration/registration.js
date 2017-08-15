import React from 'react';
import ReactDOM from 'react-dom';

class Registration extends React.Component{
    render(){
        return <div className="container-registration">
            <h1>Login</h1>
            <input type="text" placeholder="Login"/>
            <br/>
            <input type="password" placeholder="Password"/>
            <br/>
            <input type="submit" placeholder="Submit"/>
        </div>
    }
}

export default Registration;

ReactDOM.render(<Registration/>,
    document.getElementById('registration'));