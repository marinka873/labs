import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import ReactStars from 'react-stars';

import {addRating} from "../../actions/ratingAction";

class Rating extends React.Component {

    handleChangeRating = (ratingValue) => {
        let userName = this.props.login;
        let MovieId = this.props.movieId;

        this.setState({
            rating: ratingValue
        });
        this.props.addRating(ratingValue, userName, MovieId);
    };

    getRating = () => {
        let sumRating = 0;
        let movieId = this.props.movieId;
        let rating = this.props.rating.filter((value) => {
            return value.movieId === movieId;
        });
        let ratingValue = rating.map(value => value.value);

        if (ratingValue.length !== 0) {
            sumRating = ratingValue.reduce((x, y) => x + y);
        }
        return sumRating / rating.length;
    };

    render() {
        let value = this.getRating();
        return (
            <div className="component__rating">
                <ReactStars count={5}
                            onChange={this.handleChangeRating}
                            size={24}
                            color2={'#ffd700'}
                            value={value}/>
            </div>
        )
    }
}

Rating.defaultProps = {
    rating: []
};

Rating.PropTypes = {
    addRating: PropTypes.func.isRequired,
    rating: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
    return {
        login: state.user.login,
        rating: state.rating
    }
};

const mapDispatchToProps = () => {
    return dispatch => ({
        addRating: (ratingValue, userName, MovieId) => {
            dispatch(addRating(ratingValue, userName, MovieId))
        }
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(Rating);