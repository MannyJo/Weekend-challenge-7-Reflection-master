import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { SendRounded } from '@material-ui/icons'
import TextField from '@material-ui/core/TextField';

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
    handleNextClick = event => {
        event.preventDefault();
        axios({
            method: 'POST',
            url: '/feedback',
            data: {
                ...this.props.feedback,
                comment: this.state.comment,
            }
        }).then(() => {
            this.props.dispatch({ type: 'RESET_FEEDBACK' });
            this.props.history.push('/5');
        }).catch(error => {
            this.props.dispatch({ 
                type: 'OPEN_DIALOG', 
                payload: {
                    open: true,
                    title: "Error with storing feedback",
                    content: ""
                }
            });
        });
    }

    componentDidMount = () => {
        this.props.dispatch({ type: 'STEPPER_3' });
    }

    render() {
        return (
            <div>
                <br/>
                <Grid container>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={8}>
                        <form onSubmit={this.handleNextClick} className="form">
                            <Card>
                                <CardContent>
                                    <Typography className="question" variant="h5" component="h2">
                                        <b>Any Comments you want to leave?</b>
                                    </Typography>
                                    <TextField
                                        id="standard-full-width"
                                        label="Comment"
                                        style={{ margin: 8 }}
                                        placeholder="Write here"
                                        helperText="Write anything what you want"
                                        value={this.state.comment}
                                        onChange={this.handleChange}
                                        fullWidth
                                        margin="normal"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </CardContent>
                                <CardActions className="nextButton">
                                    <Button color="primary" type="submit">Send&nbsp;&nbsp;<SendRounded /></Button>
                                </CardActions>
                            </Card>
                        </form>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = ({ feedback }) => ({ feedback });

export default withRouter(connect(mapStateToProps)(Comment));