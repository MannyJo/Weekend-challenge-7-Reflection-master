import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class Admin extends Component {
    state = {
        feedbackList: [],
    }
    // get all the feedbacks from the server
    getFeedback = () => {
        axios({
            method: 'GET',
            url: '/feedback'
        }).then(response => {
            console.log(response.data);
            this.setState({ feedbackList: response.data });
        }).catch(error => {
            console.log('Error with getting feedback');
        });
    }

    componentDidMount = () => {
        this.getFeedback();
    }

    render() {
        return (
            <div>
                <h1>Feedback Results!</h1>
                <table>
                    <thead>
                        <tr>
                            <td>Feeling</td>
                            <td>Comprehension</td>
                            <td>Support</td>
                            <td>Comments</td>
                            <td>Delete</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.feedbackList.map(feedback => (
                            <tr key={feedback.id}>
                                <td>{feedback.feeling}</td>
                                <td>{feedback.understanding}</td>
                                <td>{feedback.support}</td>
                                <td>{feedback.comment}</td>
                                <td><button>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default withRouter(Admin);