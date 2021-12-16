import React, { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { Button, Snackbar } from '@mui/material';


import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

import Addtraining from './Addtraining';
import Addcustomer from './Addcustomer';
import Editcustomer from './Editcustomer';
import Deletecustomer from './Deletecustomer';


export default function Customerlist() {
    // -- Customer data related functionality --
    const [customers, setCustomers] = useState([]);
    const [open, setOpen] = useState(false);
    const [msg, setMsg] = useState('');
    
    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() =>{ 
        fetchCustomer();
     },
      []);

    const fetchCustomer = () => {
        fetch('https://customerrest.herokuapp.com/api/customers')
        .then(response => response.json())
        .then(data => setCustomers(data.content))
        .catch(err => console.error(err))
    }

    const addTraining = training => {
        fetch('https://customerrest.herokuapp.com/api/trainings',
            {
                method: "POST",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify(training)
            }
        )
        .then(response => {
            if (response.ok) {
                fetchCustomer();
                setMsg("Training added");
               
                setOpen(true);
            } else {
                setMsg("Add unsuccessful");
                
                setOpen(true);
            }
        })
        .catch(err => console.error(err));
    }

    const deleteCustomer = Url => {
        fetch(Url, { method: "DELETE" })
        .then(response => {
            if (response.ok) {
                fetchCustomer();
                setMsg("Customer deleted");     
                setOpen(true);
            } else {
                setMsg("Delete unsuccessful");  
                setOpen(true);
            }
        })
        .catch(err => console.error(err));
    }

    const AddCustomer = customer => {
    fetch("https://customerrest.herokuapp.com/api/customers",
    {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(customer)
    }
)
.then(response => {
    if (response.ok) {
        fetchCustomer();
        setMsg("Customer added");
        
        setOpen(true);
    } else {
        setMsg("Add unsuccessful");
        
        setOpen(true);
    }
})
.catch(err => console.error(err));
}

    

const updateCustomer = (url, updatedCustomer) => {
    fetch(url, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(updatedCustomer)
    })
    .then(response => {
        if (response.ok) {
        fetchCustomer();
        setMsg("Customer edited succesfully");
        setOpen(true);
    }
    else {
        alert("Unsuccesful");
    }
})
    
    .catch(err => console.error(err));
}

    // -- Column data related functionality --
    const columns = [
        {
            
            field: 'firstname', 
            sortable: true,
             filter: true
        },
        {
            
            field:'lastname', 
            sortable: true,
             filter: true
        },
        {
          
            field: 'email', 
            sortable: true,
             filter: true
        },
        {
          
            field: 'phone', 
            sortable: true,
             filter: true
        },
        {
          
            field: 'streetaddress', 
            sortable: true,
             filter: true
        },
        {
            
            field: 'postcode', 
            sortable: true,
             filter: true
        },
    
        {
            
            field: 'city', 
            sortable: true,
             filter: true
        },
        {
            headerName: '',
            field: "links.0.href",
            sortable: false,
            filter: false,
            width: 120,
            cellRendererFramework: params => <Addtraining addTraining={addTraining} customer={params} />
        },
        
        {
            headerName: '',
            field: "links.0.href",
            filter: false,
            sortable: false,
            width: 120,
            cellRendererFramework: params => <Editcustomer updateCustomer={updateCustomer} customer={params} />
        },
        {
            headerName: "",
            field: "links.0.href",
            sortable: false,
            filter: false,
            width: 120,
            cellRendererFramework: params => <Deletecustomer deleteCustomer={deleteCustomer} customer={params} />
        },
    ]

    return (
        <div>
            <Addcustomer AddCustomer={AddCustomer} />
            <div className="ag-theme-material" style={{marginTop: 20, height: 600, width: '90%', margin: 'auto'}}>
                <AgGridReact
                    columnDefs={columns}
                    rowData={customers}
                    pagination={true}
                    paginationPageSize={9}
                    suppressCellSelection={true}
                />
            </div>
            <Snackbar
                
                open={open}
                message={msg}
                autoHideDuration={3000}
                onClose={handleClose}
                
                
            />
        </div>
    );
}