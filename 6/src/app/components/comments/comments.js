import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';

import {addComment} from "../../actions/commentsAction";

class UserComments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: '',
            userName: '',
            currentMovieId: '',
            userDate: ''
        };
    }

    handleChangeComment = (event) => {
        this.setState({
            comments: event.target.value
        })
    };

    addComment = (event) => {
        event.preventDefault();

        let commentsUser = this.state.comments;
        let userName = this.props.login;
        let userDate = moment(new Date()).format("YYYY-MM-DD hh:mm:ss");
        let currentMovieById = this.props.movieId;

        this.props.userComment(commentsUser, userName, currentMovieById, userDate);
    };

    renderUserComment =() => {
        let currentMovieByUrlId = this.props.movieId;
        let commentsByMovieId = this.props.comments.filter((comment) => {
            return comment.commentsMovie === currentMovieByUrlId
        } );

        return commentsByMovieId.map((commentMovies, i) => {
                return <div key={i}>
                    <p>{commentMovies.comments}
                        {commentMovies.commentsUser}
                        {commentMovies.commentsDate}
                    </p>
                </div>
            }
        );
    };

    render() {
        return (
            <div className="component__user--comments">
                <div>
                    <form className="form-horizontal">
                        <input type="text" placeholder="Your comment" onChange={this.handleChangeComment}
                               value={this.state.comments}/>
                        <button className="btn btn-primary" onClick={this.addComment}>Add comment</button>
                        <hr/>
                        <div className="comments">

                            {this.renderUserComment()}

                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

UserComments.PropTypes = {
    userComment: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return {
        login: state.user.login,
        filmsList: state.movies,
        comments: state.comments
    }
};
const mapDispatchToProps = () => {
    return dispatch => ({
        userComment: (comments, commentsUser, currentMovieById,commentsDate) => {
            dispatch(addComment(comments, commentsUser, currentMovieById, commentsDate))
        }

    })
};

export default connect(mapStateToProps, mapDispatchToProps)(UserComments);