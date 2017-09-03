import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import ReactStars from 'react-stars';

import {addRaiting} from "../../actions/ratingAction";

class Raiting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            raiting: 0
        };
    }

    handleChangeRaiting = (raitingValue) => {
        this.setState({
            raiting: raitingValue
        });

        let userName = this.props.login;
        let currentMovieById = this.props.movieId;

        this.props.addRaiting(raitingValue, userName, currentMovieById);
    };


    renderUserRaiting = () => {

        let currentMovieByUrlId = this.props.movieId;

        let raitingByMovieId = this.props.raiting.filter((raiting) => {

            return raiting.movieId === currentMovieByUrlId

        });

        return raitingByMovieId.map((raiting, i) => {
            return (<div key={i}>

                </div>
            )
        });
    };

    render() {
        return (
            <div className="component__raiting">
                <ReactStars count={5}
                            onChange={this.handleChangeRaiting}
                            size={24}
                            color2={'#ffd700'}
                            value={this.state.raiting}
                />

                {this.renderUserRaiting()}
            </div>
        )
    }
}

Raiting.PropTypes = {
    addRaiting: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return {
        login: state.user.login,
        raiting: state.raiting
    }
};

const mapDispatchToProps = () => {
    return dispatch => ({
        addRaiting: (raitingValue, userName, currentMovieById) => {
            dispatch(addRaiting(raitingValue, userName, currentMovieById))
        }
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(Raiting);