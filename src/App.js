import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Page/Home/Home';
import Leagues from './Page/Leagues/Leagues';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Highlights from './Page/Highlights/Highlights';
import MatchHighlight from './Page/MatchHighlight/MatchHighlight'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <Router>
                <Header />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/home" component={Home} />
                    <Route path="/highlights" component={Highlights} />
                    <Route path="/leagues" component={Leagues} />
                </Switch>
            </Router>
        );
    }
}
