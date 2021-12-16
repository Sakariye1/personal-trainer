import React, { useState } from "react";
import {Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle}from '@mui/material';
import dayjs from 'dayjs';


export default function Addtraining(props) {

    const [open, setOpen] = useState(false);
    const [training, setTraining] = useState(
        {date: '', 
        duration: '', 
        activity: '',
        customer: props.customer
    });
        
        console.log(training);
    
        const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleInputChange = (e) => {
        setTraining({ ...training, [e.target.name]: e.target.value })
    }
    const handleSave = () => {
        props.addtraining(training);
        handleClose();
    }

    return (
        <div>
            <Button style={{ margin: 10 }}  color="primary" onClick={handleClickOpen}>
                Add training
      </Button>
            <Dialog open={open}
             onClose={handleClose} 
             aria-labelledby="form-dialog-title">
                 
                <DialogTitle >New training</DialogTitle>
                <DialogContent>

                    <TextField
                        autoFocus
                        margin="dense"
                        name="date"
                        value={training.date}
                        onChange={handleInputChange}
                        label="Date (YYYY-MM-DD)"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        name="duration"
                        value={training.duration}
                        onChange={handleInputChange}
                        label="Duration (MIN)"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        name="activity"
                        value={training.activity}
                        onChange={handleInputChange}
                        label="Activity"
                        fullWidth
                    />
    
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
          </Button>
                    <Button onClick={handleSave} color="primary">
                        Save
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}