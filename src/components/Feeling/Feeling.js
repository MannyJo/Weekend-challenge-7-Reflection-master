import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormGroup from '@material-ui/core/FormGroup';
import Grid from '@material-ui/core/Grid';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { NavigateNext } from '@material-ui/icons'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class Feeling extends Component {
    state = {
        feeling_level: '',
        open: false,
    }

    // this function changes feeling_level in this local state
    handleChange = event => {
        this.setState({
            feeling_level: event.target.value,
            open: false,
        });
    }

    // this function stores what a user typed and sends to the next page
    handleNextClick = event => {
        event.preventDefault();
        if(this.state.feeling_level){
            this.props.dispatch({ type: 'ADD_FEELING_LEVEL', payload: Number(this.state.feeling_level) });
            this.props.history.push('/2');
        } else {
            this.handleClickOpen();
        }
    }

    handleClickOpen = () => {
      this.setState({ open: true });
    };
  
    handleClose = () => {
      this.setState({ open: false });
    };

    render() {
        return (
            <div>
                <h3>1 of 4 pages</h3>
                <br />
                <Grid container>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={8}>
                        <form onSubmit={this.handleNextClick} className="form">
                            <Card>
                                <CardContent>
                                    <Typography className="question" variant="h5" component="h2">
                                        How are you feeling today?
                                    </Typography>
                                    <FormGroup row>
                                        <Grid container alignItems="center">
                                            <Grid item xs={2}>
                                                <span className="caption">Really Bad</span>
                                            </Grid>
                                            <Grid item xs={8}>
                                                <RadioGroup
                                                    aria-label="feeling"
                                                    name="feeling"
                                                    value={this.state.feeling_level}
                                                    onChange={this.handleChange}
                                                    style={{ display: 'flex' }}
                                                    row
                                                >
                                                    <Radio
                                                    value="1"
                                                    name="radio-button"
                                                    aria-label="1"
                                                    style={{ width: '20%', padding: '0' }}
                                                    />
                                                    <Radio
                                                    value="2"
                                                    name="radio-button"
                                                    aria-label="2"
                                                    style={{ width: '20%', padding: '0' }}
                                                    />
                                                    <Radio
                                                    value="3"
                                                    name="radio-button"
                                                    aria-label="3"
                                                    style={{ width: '20%', padding: '0' }}
                                                    />
                                                    <Radio
                                                    value="4"
                                                    name="radio-button"
                                                    aria-label="4"
                                                    style={{ width: '20%', padding: '0' }}
                                                    />
                                                    <Radio
                                                    value="5"
                                                    name="radio-button"
                                                    aria-label="5"
                                                    style={{ width: '20%', padding: '0' }}
                                                    />
                                                </RadioGroup>
                                            </Grid>
                                            <Grid item xs={2}>
                                                <span className="caption">Awesome!!</span>
                                            </Grid>
                                        </Grid>
                                    </FormGroup>
                                </CardContent>
                                <CardActions className="nextButton">
                                    <Button color="primary" type="submit">Next <NavigateNext /></Button>
                                </CardActions>
                            </Card>
                        </form>
                    </Grid>
                </Grid>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                        Let Google help apps determine location. This means sending anonymous location data to
                        Google, even when no apps are running.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary" autoFocus>
                            Okay
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default withRouter(connect()(Feeling));