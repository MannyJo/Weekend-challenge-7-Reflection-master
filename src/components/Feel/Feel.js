import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Feel extends Component {
    state = {
        feel: '',
    }

    handleChange = event => {
        this.setState({
            feel: event.target.value,
        });
    }

    handleNextClick = () => {
        console.log(this.state.feel);
        this.props.dispatch({ type: 'ADD_FEELING_LEVEL', payload: this.state.feel });
    }

    render() {
        return (
            <div>
                <h3>1 of 4 pages</h3>
                <br/>
                <div>
                    <label htmlFor="feelInput">How are you feeling today?</label><br/>
                    <input id="feelInput" type="number" placeholder="1 to 5" onChange={this.handleChange} value={this.state.feel} />
                </div>
                <div>
                    <button onClick={this.handleNextClick}>Next</button>
                </div>
            </div>
        );
    }
}

export default withRouter(connect()(Feel));