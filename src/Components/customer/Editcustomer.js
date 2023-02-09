import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import React, { useState } from "react";


export default function EditCustomer(props) {

  const [open, setOpen] = useState(false);
  const [customer, setCustomer] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    streetaddress: "",
    postcode: "",
    city: ""
  });

  const handleClickOpen = () => {
    setCustomer({
      firstname: props.customer.data.firstname,
      lastname: props.customer.data.lastname,
      email: props.customer.data.email,
      phone: props.customer.data.phone,
      streetaddress: props.customer.data.streetaddress,
      postcode: props.customer.data.postcode,
      city: props.customer.data.city
    });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  
  const saveUpdate = () => {
    props.updateCustomer(customer, props.customer.value);
    handleClose();
  };

  const InputChanged = e => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Button size="small" color="primary" onClick={handleClickOpen}> Edit </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        
      >
        <DialogTitle>Edit Customer</DialogTitle>
        <DialogContent>
          <TextField
            
            margin="dense"
            name="firstname"
            value={customer.firstname}
            onChange={InputChanged}
            label="Firstname"
            fullWidth
            variant="standard"
          />
          <TextField
            
            margin="dense"
            name="lastname"
            value={customer.lastname}
            onChange={InputChanged}
            label="Lastname"
            fullWidth
            variant="standard"
          />
          <TextField
            
            margin="dense"
            name="email"
            value={customer.email}
            onChange={InputChanged}
            label="E-mail"
            fullWidth
            variant="standard"
          />
          <TextField
            
            margin="dense"
            name="phone"
            value={customer.phone}
            onChange={InputChanged}
            label="Phone"
            fullWidth
            variant="standard"
          />
          <TextField
            
            margin="dense"
            name="streetaddress"
            value={customer.streetaddress}
            onChange={InputChanged}
            label="Address"
            fullWidth
            variant="standard"
          />
          <TextField
            
            margin="dense"
            name="postcode"
            value={customer.postcode}
            onChange={InputChanged}
            label="Postal code"
            fullWidth
            variant="standard"
          />
          <TextField
            
            margin="dense"
            name="city"
            value={customer.city}
            onChange={InputChanged}
            label="City"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
      
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={saveUpdate} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}