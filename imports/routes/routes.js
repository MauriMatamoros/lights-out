import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import NavBar from '../components/NavBar'
import Login from '../components/Login'
import Signup from '../components/Signup'
import BlackoutMap from '../components/BlackoutMap'
import AlertBlackout from '../components/AlertBlackout'
import Data from '../components/Data'

export const history = createBrowserHistory()

export const routes = (
    <Router history={history}>
        <div>
            <NavBar />
            <Switch >
                <Route exact path="/" component={AlertBlackout} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/map" component={BlackoutMap} />
                <Route exact path="/alert" component={AlertBlackout} />
                <Route exact path="/data" component={Data} />
            </Switch>
        </div>
    </Router>
)