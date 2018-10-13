import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Understanding extends Component {
    state = {
        understanding_level: '',
    }

    // this function changes understanding_level in this local state
    handleChange = event => {
        this.setState({
            understanding_level: event.target.value,
        });
    }

    // this function stores what a user typed and sends to the next page
    handleNextClick = () => {
        this.props.dispatch({ type: 'ADD_UNDERSTANDING_LEVEL', payload: this.state.understanding_level });
        this.props.history.push('/3');
    }

    render() {
        return (
            <div>
                <h3>2 of 4 pages</h3>
                <br/>
                <form onSubmit={this.handleNextClick}>
                    <div>
                        <label htmlFor="understandingInput">How well are you understanding the content?</label><br/>
                        <input 
                            id="understandingInput" 
                            type="number" 
                            placeholder="1 to 5" 
                            onChange={this.handleChange} 
                            value={this.state.understanding_level} 
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

export default withRouter(connect()(Understanding));