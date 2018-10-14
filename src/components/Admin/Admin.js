import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import { Delete } from '@material-ui/icons'

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

    // When user checks further review, update its data(flagged) in database
    handleChange = id => event => {
        axios({
            method: 'PUT',
            url: '/feedback/update',
            data: {
                id: id,
                flagged: event.target.checked
            }
        }).then(() => {
            this.getFeedback();
        }).catch(error => {
            alert('Error with updating feedback');
            console.log('Error with updating feedback :', error);
        });
    }

    componentDidMount = () => {
        this.getFeedback();
    }

    render() {
        return (
            <div>
                <br/>
                <Grid container>
                    <Grid item md={2}></Grid>
                    <Grid item xs={12} md={8}>
                        <Table style={{overflowX: "auto", backgroundColor: "white"}}>
                            <TableHead>
                                <TableRow className="adminTableHeader">
                                    <TableCell>Further Review</TableCell>
                                    <TableCell numeric>Feeling</TableCell>
                                    <TableCell numeric>Comprehension</TableCell>
                                    <TableCell numeric>Support</TableCell>
                                    <TableCell>Comments</TableCell>
                                    <TableCell>Delete</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody className="adminTableBody">
                                {this.state.feedbackList.map(feedback => (
                                    <TableRow key={feedback.id}>
                                        <TableCell>
                                            <Checkbox checked={feedback.flagged} onChange={this.handleChange(feedback.id)} value="flagged" />
                                        </TableCell>
                                        <TableCell numeric component="th" scope="row">{feedback.feeling}</TableCell>
                                        <TableCell numeric>{feedback.understanding}</TableCell>
                                        <TableCell numeric>{feedback.support}</TableCell>
                                        <TableCell>{feedback.comments}</TableCell>
                                        <TableCell><Button color="secondary" onClick={this.handleDeleteClick(feedback.id)}><Delete /></Button></TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Grid>
                    <Grid item md={2}></Grid>
                </Grid>
            </div>
        );
    }
}

export default withRouter(Admin);