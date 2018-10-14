import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header className="App-header">
                {
                    window.location.hash.includes('admin') || window.location.hash.includes('Admin')?
                    <h1>Feedback Results!</h1> :
                    <div>
                        <h1>Feedback!</h1>
                        <h4><i>Don't forget it!</i></h4>
                    </div>
                }
            </header>
        );
    }
}

export default Header;