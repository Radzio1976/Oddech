import React from 'react';
import { withRouter } from 'react-router-dom';

class Navigation extends React.Component {
    render() {
        return(
            <div id="Navigation">
                <ul>
                    <li onClick={() => this.props.history.push("/")}>Strona główna</li>
                    <li>Sesje</li>
                    <li>Warsztaty</li>
                    <li>Cennik</li>
                    <li onClick={() => this.props.history.push("/contact")}>Kontakt</li>
                </ul>
            </div>
        )
    }
}

export default withRouter(Navigation);