import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';

import {addComment} from "../../actions/commentsAction";

class Comments extends React.Component {
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

        let comment = this.state.comment;
        let user = this.props.login;
        let date = moment(new Date()).format("YYYY-MM-DD hh:mm:ss");
        let movieId = this.props.movieId;

        this.props.addComment(comment, user, movieId, date);
    };

    renderUserComment = () => {
        let movieByUrlId = this.props.movieId;
        let movieById = this.props.comment.filter((comment) => {
            return comment.movieId === movieByUrlId
        });

        return movieById.map((comment, i) => {
                return <div key={i}>
                        <hr/>
                        <h5>{comment.user} {comment.date}</h5>
                        <p>{comment.value} </p>
                        <hr/>
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

Comments.PropTypes = {
    addComment: PropTypes.func.isRequired,
    comment: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
    return {
        login: state.user.login,
        comment: state.comment
    }
};

const mapDispatchToProps = () => {
    return dispatch => ({
        addComment: (comment, user, movieId, date) => {
            dispatch(addComment(comment, user, movieId, date))
        }
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(Comments);