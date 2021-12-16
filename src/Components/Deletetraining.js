import React, { useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from '@mui/material';


export default function DeleteTraining(props) {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleConfirm = () => {
        props.deleteTraining(props.training.value);
        handleClose();
    };

    return (
        <div>
            
                <Button
                    color="error"
                    onClick={handleClickOpen}>Delete
                    
                </Button>
            
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>{"Delete this training?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Deleting this training will delete it for good.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button color="success" onClick={handleConfirm} >Confirm</Button>
                    <Button color="error" onClick={handleClose} >Cancel</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}