import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import './menu.scss';

class Menu extends Component {
    /** =======================================================================
     * Lifecycle
     ======================================================================= */
    constructor(props) {
        super(props);
    }

    /** =======================================================================
     * Render
     ======================================================================= */
    render() {
        return (
            <div id="menu">
                <div>
                    <NavLink exact to="/" className="menu-nav-link" activeClassName="active-menu-nav-link">
                        <p>About</p>
                    </NavLink>
                    <NavLink to="/portfolio" className="menu-nav-link" activeClassName="active-menu-nav-link">
                        <p>Portfolio</p>
                    </NavLink>
                    <NavLink to="/contact" className="menu-nav-link" activeClassName="active-menu-nav-link">
                        <p>Contact</p>
                    </NavLink>
                </div>
                <div>
                    <div className="icon-wrapper">
                        <GitHubIcon />
                    </div>
                    <div className="icon-wrapper">
                        <LinkedInIcon />
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;
