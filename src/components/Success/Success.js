import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Success extends Component {

    // send to the first page
    goToFirstPage = () => {
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                Success<br/>
                <button onClick={this.goToFirstPage}>Leave New Feedback</button>
            </div>
        );
    }
}

export default withRouter(Success);