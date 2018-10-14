import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';

class Success extends Component {

    // send to the first page
    goToFirstPage = () => {
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <div className="successDiv">THANK YOU !!</div>
                <Button variant="extendedFab" color="primary" onClick={this.goToFirstPage}>Leave New Feedback</Button>
            </div>
        );
    }
}

export default withRouter(Success);