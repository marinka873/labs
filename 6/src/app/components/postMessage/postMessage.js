import React from 'react';
import ReactDOM from 'react-dom';

class postMessage extends React.Component{
    render(){
        return <div className="container-message">
            <form className="container-message__form">
                <input type="text" placeholder="Message text" className="container-message__form__input-message"/>
                <br/>
                <button className="container-message__form__button">Send message</button>
            </form>
        </div>
    }
}


export default postMessage;