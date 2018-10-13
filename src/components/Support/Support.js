import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Support extends Component {
    state = {
        support_level: '',
    }

    // this function changes understanding_level in this local state
    handleChange = event => {
        this.setState({
            support_level: event.target.value,
        });
    }

    // this function stores what a user typed and sends to the next page
    handleNextClick = () => {
        this.props.dispatch({ type: 'ADD_SUPPORT_LEVEL', payload: this.state.support_level });
        this.props.history.push('/4');
    }

    render() {
        return (
            <div>
                <h3>3 of 4 pages</h3>
                <br/>
                <form onSubmit={this.handleNextClick}>
                    <div>
                        <label htmlFor="supportInput">How well are you being supported?</label><br/>
                        <input 
                            id="supportInput" 
                            type="number" 
                            placeholder="1 to 5" 
                            onChange={this.handleChange} 
                            value={this.state.support_level} 
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

export default withRouter(connect()(Support));