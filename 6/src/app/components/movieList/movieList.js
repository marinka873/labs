import React from 'react';
import {connect} from 'react-redux';

import Movie from "../movie/movie";

class moviesList extends React.Component{
    constructor(props) {
        super(props);

    }

    componentDidMount() {

    }

    render(){
        return(
            <div className="container-film">
                <h1>Movie list:</h1>

            </div>
        )
    }
}

moviesList.PropTypes ={
};

const mapStateToProps = (state) => {
};

const mapDispatchToProps = () => {
};

export default connect(mapStateToProps, mapDispatchToProps)(moviesList);