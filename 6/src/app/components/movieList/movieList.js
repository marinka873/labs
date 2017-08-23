import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import {applyMiddleware} from 'redux';

import {FILM_LIST} from "../../actions/movieAction";




class movieList extends React.Component{

    render(){
        return(
            <div>
                <h1>Films list</h1>
                <div className="container-film">

                </div>
            </div>
        )

    }
}

export default movieList;