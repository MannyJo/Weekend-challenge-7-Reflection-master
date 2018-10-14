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
    handleNextClick = event => {
        event.preventDefault();
        if(this.state.support_level){
            this.props.dispatch({ type: 'ADD_SUPPORT_LEVEL', payload: Number(this.state.support_level) });
            this.props.history.push('/4');
        } else {
            this.props.dispatch({ 
                type: 'OPEN_DIALOG', 
                payload: {
                    open: true,
                    title: "You didn't choose anything.",
                    content: "Please choose one of the buttons."
                }
            });
        }
    }

    componentDidMount = () => {
        this.props.dispatch({ type: 'STEPPER_2' });
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
                                        <b>How well are you being supported?</b>
                                    </Typography>
                                    <hr/>
                                    <br/>
                                    <FormGroup row>
                                        <Grid container alignItems="center">
                                            <Grid item xs={2}>
                                                <span className="caption">Really Bad</span>
                                            </Grid>
                                            <Grid item xs={8}>
                                                <RadioGroup
                                                    aria-label="support"
                                                    name="support"
                                                    value={this.state.support_level}
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
            </div>
        );
    }
}

export default withRouter(connect()(Support));