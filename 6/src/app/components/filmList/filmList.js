import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import {applyMiddleware} from 'redux';

import {FILM_LIST} from "../../actions/filmsAction";




class movieList extends React.Component{

    componentWillMount(){
    fetch(FILM_LIST)
        .then(response => response.json())
        .then(data => {console.log(data)})
    }

    render(){
        return(
            <div>
                <h1>Films list</h1>
            </div>
        )

    }
}

export default movieList;