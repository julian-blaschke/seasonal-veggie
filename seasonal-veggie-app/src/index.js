import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'

import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Home from './home/home'
import MyGarden from './my-garden/my-garden'
import NotFound from './notfound/not-found'
import AppBar from './nav/app-bar'
import Footer from './nav/footer'


/** setting up the root for the app
 *      the top bar and the bottom footer are put in here
 *      `exact` stands for `default route`
 *  **/
const root = (
    <Router>
        <div>
        <AppBar></AppBar>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/home" component={Home} />
                <Route path="/my-garden" component={MyGarden} />
                <Route component={NotFound} />
            </Switch>
        </div>
        <Footer></Footer>
    </Router>
    )

ReactDOM.render(root, document.getElementById('root'))

