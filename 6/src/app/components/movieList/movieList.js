import React from 'react';
import {connect} from 'react-redux';

class movieList extends React.Component{

    render(){
        return(
            <div className="container-film">
                <h1>Movie list:</h1>
                <div className="jumbotron">
                    <h2>Movie name</h2>

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {movie : state}
};
const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(movieList);