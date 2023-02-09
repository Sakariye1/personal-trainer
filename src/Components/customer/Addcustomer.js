
import {Button,TextField,Dialog,DialogActions,DialogContent,DialogTitle  } from '@mui/material';
import React, { useState } from "react";

export default function Addcustomer(props) {

    const [open, setOpen] = useState(false);
    const [customer, setCustomer] = useState(
        { firstname: '',
         lastname: '',
         email: '' , 
         phone: '', 
         streetaddress: '',
         postcode: '', 
         city: ''
        
    });

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const InputChanged = (e) => {
        setCustomer({ ...customer, [e.target.name]: e.target.value })
    }
    const handleSave = () => {
        props.AddCustomer(customer);
        handleClose();
    }

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Add Customer
      </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">New Customer</DialogTitle>
                <DialogContent>

                    <TextField
                        autoFocus
                        margin="dense"
                        name="firstname"
                        value={customer.firstname}
                        onChange={InputChanged}
                        label="Firstname"

                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        name="lastname"
                        value={customer.lastname}
                        onChange={InputChanged}
                        label="Lastname"

                        fullWidth
                    />
                   
                    <TextField
                        autoFocus
                        margin="dense"
                        name="email"
                        value={customer.email}
                        onChange={InputChanged}
                        label="Email"

                        fullWidth
                    />
                     <TextField
                        autoFocus
                        margin="dense"
                        name="phone"
                        value={customer.phone}
                        onChange={InputChanged}
                        label="Phone"

                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        name="streetaddress"
                        value={customer.streetaddress}
                        onChange={InputChanged}
                        label="Streetaddress"

                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        name="postcode"
                        value={customer.postcode}
                        onChange={InputChanged}
                        label="Postcode"

                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        name="city"
                        value={customer.city}
                        onChange={InputChanged}
                        label="City"

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