import {Route, Switch, BrowserRouter} from 'react-router-dom';


import Registration from './components/registration/registration';
import movieList from './components/movieList/movieList';

export default (
   <BrowserRouter history = {history}>
    <Switch>
        <div>
            <Route exact path="/" component={Registration} />
            <Route path="/movieList" component={movieList}/>
        </div>
    </Switch>
    </BrowserRouter>
)