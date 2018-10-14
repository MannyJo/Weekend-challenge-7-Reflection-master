import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';

class Success extends Component {

    // send to the first page
    goToFirstPage = () => {
        this.props.history.push('/');
    }

    componentDidMount = () => {
        this.props.dispatch({ type: 'STEPPER_FINISh' });
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

export default withRouter(connect()(Success));