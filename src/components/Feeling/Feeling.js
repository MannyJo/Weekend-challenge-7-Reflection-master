import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Feeling extends Component {
    state = {
        feeling_level: '',
    }

    // this function changes feeling_level in this local state
    handleChange = event => {
        this.setState({
            feeling_level: event.target.value,
        });
    }

    // this function stores what a user typed and sends to the next page
    handleNextClick = event => {
        event.preventDefault();
        this.props.dispatch({ type: 'ADD_FEELING_LEVEL', payload: this.state.feeling_level });
        this.props.history.push('/2');
    }

    render() {
        return (
            <div>
                <h3>1 of 4 pages</h3>
                <br/>
                <form onSubmit={this.handleNextClick}>
                    <div>
                        <label htmlFor="feelingInput">How are you feeling today?</label><br/>
                        <input 
                            id="feelingInput" 
                            type="number" 
                            placeholder="1 to 5" 
                            onChange={this.handleChange} 
                            value={this.state.feeling_level} 
                            required />
                    </div>
                    <div>
                        <button type="submit">Next</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(connect()(Feeling));