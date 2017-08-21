import {createStore} from 'redux';
import applicationReducer from '../reducers/applicationReducer';


const initialState = {

};

export default function applicationStore (initialState) {
    const store = createStore(applicationReducer, initialState);


}