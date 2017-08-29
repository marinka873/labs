import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Moment from 'react-moment';


import {addComment} from "../../actions/comments";


class UserComments extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            comment: ''
        };
        this.addComment = this.addComment.bind(this);
    }

    handleChangeComment =(event) => {
        this.setState({
            comment: event.target.value
        })
    };

    addComment(event){
        event.preventDefault();

        let moviesComment = this.state.comment;
        let userName = this.props.login;
        console.log('current user:',userName);

        this.props.userComment(moviesComment);

        let currentTime = 'DD/MM/YY';

    }

    render(){
        return(
            <div className="component__user--comments">
               <form className="form-horizontal">
                   <input type="text" placeholder="Your comment" onChange={this.handleChangeComment}
                   value={this.state.comment}/>
                   <button className="btn btn-primary" onClick={this.addComment}>Add comment</button>



                   <hr/>
                   <p>User: {this.props.login}</p>
                   <label>{this.state.comment}</label>
               </form>
            </div>
        )
    }
}

UserComments.PropTypes ={
  userComment: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return{
        login: state.user.login,
        filmsList: state.movie
    }
};
const mapDispatchToProps = () => {
    return dispatch => ({
        userComment: (moviesComment) => {
            dispatch (addComment(moviesComment))
        }

    })
};

export default connect(mapStateToProps, mapDispatchToProps)(UserComments);