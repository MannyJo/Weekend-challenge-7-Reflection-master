import React, { Component } from 'react';
import { connect } from 'react-redux';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

const steps = [
    "Feeling",
    "Comprehension",
    "Support",
    "Comment"
];

class FeedbackStepper extends Component {
    render() {
        return (
            <div>
                <Stepper style={{backgroundColor: "rgba(0, 0, 0, 0.0)"}} activeStep={this.props.stepper} alternativeLabel>
                    {steps.map((label, index) => {
                        return (
                            <Step key={label}>
                                <StepLabel>
                                    {
                                        this.props.stepper >= index ?
                                        <span style={{color: "#3d4fbb"}}>{label}</span> :
                                        <span>{label}</span>
                                    }
                                </StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
            </div>
        );
    }
}

const mapStateToProps = ({stepper}) => ({stepper})

export default connect(mapStateToProps)(FeedbackStepper);