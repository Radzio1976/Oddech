import React from 'react';
import { withRouter } from 'react-router-dom';

import './navigation.css';

class Navigation extends React.Component {
    render() {
        return(
            <div id="Navigation">
                <div id="Logo">
                    <h1 onClick={() => this.props.history.push("/")}>Marzena Rosiak</h1>
                </div>
                <nav id="Nav">
                    <ul>
                        <li onClick={() => this.props.history.push("/")}>Strona główna</li>
                        <li onClick={() => this.props.history.push("/sesje")}>Sesje</li>
                        <li onClick={() => this.props.history.push("/warsztaty")}>Warsztaty</li>
                        <li onClick={() => this.props.history.push("/cennik")}>Cennik</li>
                        <li onClick={() => this.props.history.push("/kontakt")}>Kontakt</li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default withRouter(Navigation);