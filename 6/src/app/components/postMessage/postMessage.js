import React from 'react';
import ReactDOM from 'react-dom';

class addComment extends React.Component{

    addComment(event){
        event.preventDefault();

        let comment = this.refs.comment.value;

    }

    currentDate(){
        let date = new Date();
        let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        let day = date.getDate();
        let year = date.getFullYear();
        let userDate = day + '' + month + '' + year;

        return userDate
    }

    render(){
        return <div className="container-message">
            <form className="container-message__form" onSubmit={this.addComment.bind(this)}>
                <input type="text" placeholder="Message text" className="container-message__form__input-message" ref="comment"/>
                <br/>
                <button className="container-message__form__button">Send message</button>
            </form>
        </div>
    }
}

ReactDOM.render(
  <addComment />,
    document.querySelector('comments')
);
export default postMessage;