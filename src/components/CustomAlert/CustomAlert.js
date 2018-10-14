import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';

class CustomAlert extends Component {
    // close dialog
    handleClose = () => {
      this.props.dispatch({ type: 'OPEN_DIALOG', payload: { open: false } });
    };

    render() {
        return (
            <Dialog
                open={this.props.dialogOpen.open}
                onClose={this.handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <Typography className="dialogTitle" variant="h5" component="h2">
                    {this.props.dialogOpen.title}
                </Typography>
                <Typography className="dialogTitle" variant="inherit" color="textSecondary">
                    {this.props.dialogOpen.content}
                </Typography>
                <DialogActions>
                    <Button onClick={this.handleClose} color="primary" autoFocus>
                        Okay
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}

const mapStateToProps = ({ dialogOpen }) => ({ dialogOpen });

export default connect(mapStateToProps)(CustomAlert);