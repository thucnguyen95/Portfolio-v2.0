import React, { Component } from 'react';

import './footer.scss';

class Footer extends Component {
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
            <div id="footer">
                <p>Copyright &copy; {new Date().getFullYear()} tuhctypes.com. All Rights Reserved.</p>
            </div>
        );
    }
}

export default Footer;
