import React, { Component } from 'react';

// import './error.css';

class Error extends Component {
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
            <div id="error">
                <p>This is the error page</p>
            </div>
        );
    }
}

export default Error;
