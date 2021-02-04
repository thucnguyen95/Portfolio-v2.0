import React, { Component } from 'react';

import Icon from '@mdi/react'
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { mdiDiscord } from '@mdi/js';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Snackbar from '@material-ui/core/Snackbar';

import AssetManager from 'util/asset-manager';
import ContentManager from 'util/content-manager';
import { NETWORKING } from 'vars/vars'
import './contact.scss';

class Contact extends Component {
    /** =======================================================================
     * Lifecycle
     ======================================================================= */
    constructor(props) {
        super(props);

        this.state = {
            clipboardValue: '',
            copied: false,
            [NETWORKING.EMAIL]: false,
            [NETWORKING.LINKEDIN]: false,
            [NETWORKING.GITHUB]: false,
            [NETWORKING.DISCORD]: false,
        };

        this.CONTACT_IMAGE = AssetManager.getContactImagePath();
        this.CONTACT = ContentManager.getContactDetails();
        this.LINKS = ContentManager.getLinksAsList();

        // Bind methods
        this.onCopyToClipboard = this.onCopyToClipboard.bind(this);
        this.onSnackbarClosed = this.onSnackbarClosed.bind(this);
    }

    /** =======================================================================
     * Methods
     ======================================================================= */
    getIconJsx(key) {
        switch(key) {
        case NETWORKING.EMAIL:
            return (
                <div className="email-icon-wrapper">
                    <EmailIcon />
                </div>
            );
        case NETWORKING.LINKEDIN:
            return (
                <div className="linkedin-icon-wrapper">
                    <LinkedInIcon />
                </div>
            );
        case NETWORKING.GITHUB:
            return (
                <div className="github-icon-wrapper">
                    <GitHubIcon />
                </div>
            );
        case NETWORKING.DISCORD:
            return (
                <div>
                    <Icon path={mdiDiscord} title="Discord" color="#7289DA" size='24px' />
                </div>
            );
        }
    }

    onCopyToClipboard(networkingTitle) {
        this.setState((state) => ({
            copied: true,
            [networkingTitle]: true
        }));
    }

    onSnackbarClosed(networkingTitle) {
        this.setState((state) => ({
            [networkingTitle]: false
        }));
    }

    /** =======================================================================
     * Render
     ======================================================================= */
    render() {
        return (
            <div id="contact">
                <div className="contact-cover-image">
                    <img src={this.CONTACT_IMAGE} alt="Contact cover image" />
                    <div className="dim-image"></div>
                </div>
                <div className="contact-block">
                    <h2>Contact</h2>
                    <p>{this.CONTACT.description}</p>

                    <h2>Networking and Social Media</h2>
                    <div className="networking">
                        {this.LINKS.map((n) => (
                            <div className="networking-item">
                                {this.getIconJsx(n.title)}
                                <p>{n.title}</p>
                                <CopyToClipboard text={n.link} onCopy={(e) => this.onCopyToClipboard(n.title, e)}>
                                    <p>{n.link}</p>
                                </CopyToClipboard>
                                <Snackbar
                                    className="custom-snackbar"
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'right',
                                    }}
                                    open={this.state[n.title]}
                                    autoHideDuration={2000}
                                    onClose={(e) => this.onSnackbarClosed(n.title, e)}
                                    message="Copied to clipboard!"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;
