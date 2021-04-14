import React, { Component } from 'react'
import './App.css';
import Nav from './components/Nav';
import SettingTextPage from './pages/SettingTextPage'
import Home from './pages/Home'
import routes from './routes'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default class App extends Component {

    showContentByRoute = (routes) => {
        var result = null
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return <Route key={index} path={route.path} exact={route.exact} component={route.main} />
            })
        }
        return <Switch>{result}</Switch>
    }

    render() {
        return (
            <div>
                <Router>
                    <Nav />
                    {this.showContentByRoute(routes)}
                    {/* <Route path="/" exact component={Home} /> */}
                    {/* <Route path="/setting_text" component={SettingTextPage} /> */}
                </Router>
            </div>
        )
    }
}