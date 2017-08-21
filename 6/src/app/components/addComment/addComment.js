import React from 'react';
import ReactDOM from 'react-dom';

import './addComment.scss';

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
        return <div className="container-comment">
            <form className="container-comment__form" onSubmit={this.addComment.bind(this)}>
                <input type="text" placeholder="Message text" className="container-comment__form__input-comment" ref="comment"/>
                <br/>
                <button className="container-comment__form__button">Send message</button>
            </form>
        </div>
    }
}

export default addComment;