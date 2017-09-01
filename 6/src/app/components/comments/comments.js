import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';

import {addComment} from "../../actions/commentsAction";

class UserComments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: ''
        };
    }

    handleChangeComment = (event) => {
        this.setState({
            comment: event.target.value
        })
    };

    addComment = (event) => {
        event.preventDefault();

        let commentsUser = this.state.comment;
        let userName = this.props.login;
        let userDate = moment(new Date()).format("YYYY-MM-DD hh:mm:ss");
        let currentMovieById = this.props.movieId;

        this.props.addComment(commentsUser, userName, currentMovieById, userDate);
    };

    renderUserComment = () => {
        let currentMovieByUrlId = this.props.movieId;
        let commentsByMovieId = this.props.comment.filter((comment) => {
            return comment.commentsMovie === currentMovieByUrlId
        });

        return commentsByMovieId.map((commentMovies, i) => {
                return <div key={i}>
                    <p>{commentMovies.comment}
                        {commentMovies.commentUser}
                        {commentMovies.commentsDate}
                    </p>
                </div>
            }
        );
    };

    render() {
        return (
            <div className="component__user-comments">
                <form className="form-horizontal">
                    <input type="text" placeholder="Your comment" onChange={this.handleChangeComment}
                           value={this.state.comment}/>
                    <button className="btn btn-primary" onClick={this.addComment}>Add comment</button>
                    <hr/>
                    <div className="comments">
                        {this.renderUserComment()}
                    </div>
                </form>
            </div>
        )
    }
}

UserComments.PropTypes = {
    addComment: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return {
        login: state.user.login,
        comment: state.comment
    }
};

const mapDispatchToProps = () => {
    return dispatch => ({
        addComment: (comment, commentsUser, currentMovieById, commentsDate) => {
            dispatch(addComment(comment, commentsUser, currentMovieById, commentsDate))
        }
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(UserComments);