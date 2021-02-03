import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { withCookies, Cookies } from 'react-cookie';

import ScrollToTop from "components/scroll-to-top";
import Menu from "components/menu/menu";
import Footer from "components/footer/footer";
import About from "components/about/about";
import Portfolio from "components/portfolio/portfolio";
import Contact from "components/contact/contact";
import Error from "components/error/error";
import './App.scss';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="app">
                <BrowserRouter>
                    <ScrollToTop />
                    <div className="app-menu">
                            <Menu cookies={this.props.cookies} />
                        </div>
                    <div className="app-components-wrapper">
                        <div className="app-body">
                            <Switch> 
                                <Route path="/" exact component={ About } />
                                <Route path="/portfolio" component={ Portfolio } />
                                <Route path="/contact" component={ Contact } />
                                <Route component={ Error } />
                            </Switch>
                        </div>
                        <div className="app-footer">
                            <Footer />
                        </div>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default withCookies(App);