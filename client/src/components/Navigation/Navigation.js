import React from 'react';
import { withRouter } from 'react-router-dom';

class Navigation extends React.Component {
    render() {
        return(
            <div id="Navigation">
                <ul>
                    <li onClick={() => this.props.history.push("/")}>Strona główna</li>
                    <li onClick={() => this.props.history.push("/sessions")}>Sesje</li>
                    <li onClick={() => this.props.history.push("/workshops")}>Warsztaty</li>
                    <li>Cennik</li>
                    <li onClick={() => this.props.history.push("/contact")}>Kontakt</li>
                </ul>
            </div>
        )
    }
}

export default withRouter(Navigation);