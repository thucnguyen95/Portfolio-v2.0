import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import ContentManager from 'util/content-manager';
import './menu.scss';

class Menu extends Component {
    /** =======================================================================
     * Lifecycle
     ======================================================================= */
    constructor(props) {
        super(props);

        // Variables
        this.NETWORKING = ContentManager.getLinks();

        // Bind methods
        this.toGithub = this.toGithub.bind(this);
        this.toLinkedIn = this.toLinkedIn.bind(this);
    }

    toGithub() {
        window.location.href = this.NETWORKING.github.link;
    }

    toLinkedIn() {
        window.location.href = this.NETWORKING.linkedin.link;
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
                    <Tooltip title={this.NETWORKING.github.title} className="menu-icon-wrapper">
                        <IconButton aria-label={this.NETWORKING.github.title} onClick={this.toGithub}>
                            <GitHubIcon />
                        </IconButton>
                    </Tooltip>

                    <Tooltip title={this.NETWORKING.linkedin.title} className="menu-icon-wrapper">
                        <IconButton aria-label={this.NETWORKING.linkedin.title} onClick={this.toLinkedIn}>
                            <LinkedInIcon />
                        </IconButton>
                    </Tooltip>
                </div>
            </div>
        );
    }
}

export default Menu;
