import React, { Component } from 'react';
import Home from './Home';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

class Main extends Component {

    render() {
        return (
            <Switch>
                <Route exact path="/home" component={() => <Home />} />
                <Redirect to="/home" />
            </Switch>
        );
    }
}

export default Main;