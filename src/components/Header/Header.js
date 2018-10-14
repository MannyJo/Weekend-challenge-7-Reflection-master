import React, { Component } from 'react';
import FeedbacStepper from '../FeedbackStepper/FeedbackStepper';

class Header extends Component {
    render() {
        return (
            <div>
                {
                    window.location.hash.includes('admin') || window.location.hash.includes('Admin') ?
                        <header className="App-header">
                            <h1>Feedback Results!</h1> 
                        </header>:
                        <div>
                            <header className="App-header">
                                <h1>Feedback!</h1>
                                <h4><i>Don't forget it!</i></h4>
                            </header>
                            <FeedbacStepper />
                        </div>
                }
            </div>
        );
    }
}

export default Header;