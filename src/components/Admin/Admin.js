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
            this.setState({ feedbackList: response.data });
        }).catch(error => {
            alert('Error with getting feedback');
            console.log('Error with getting feedback :', error);
        });
    }

    // delete clicked feedback when user confirms
    handleDeleteClick = id => () => {
        if(window.confirm('Are you sure?')){
            axios({
                method: 'DELETE',
                url: `/feedback/delete/${id}`
            }).then(() => {
                this.getFeedback();
            }).catch(error => {
                alert('Error with deleting feedback');
                console.log('Error with deleting feedback :', error);
            });
        }
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
                                <td>{feedback.comments}</td>
                                <td><button onClick={this.handleDeleteClick(feedback.id)}>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default withRouter(Admin);