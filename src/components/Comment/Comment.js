import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

class Comment extends Component {
    state = {
        comment: '',
    }

    // this function changes comment in this local state
    handleChange = event => {
        this.setState({
            comment: event.target.value,
        });
    }

    // this function stores what a user typed and sends all the data to the server
    // and if it is successful, send to the success page
    handleNextClick = () => {
        this.props.dispatch({ type: 'ADD_COMMENT', payload: this.state.comment });

        // axios({
        //     method: 'POST',
        //     url: '/feedback',
        //     data: {}
        // }).then(() => {
            this.props.dispatch({ type: 'RESET_FEEDBACK' });
            this.props.history.push('/5');
        // }).catch(error => {
        //     alert('Error with storing feedback');
        // });
    }

    render() {
        return (
            <div>
                <h3>4 of 4 pages</h3>
                <br/>
                <form onSubmit={this.handleNextClick}>
                    <div>
                        <label htmlFor="commentInput">How are you comment today?</label><br/>
                        <input 
                            id="commentInput" 
                            type="text" 
                            placeholder="Write here" 
                            onChange={this.handleChange} 
                            value={this.state.comment} 
                            required />
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(connect()(Comment));