import React, { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { Button, Snackbar } from '@mui/material';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';





export default function Customerlist() {
    // -- Customer data related functionality --
    const [customers, setCustomers] = useState([]);
    const [open, setOpen] = useState(false);
    

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => fetchData(), []);

    const fetchData = () => {
        fetch('https://customerrest.herokuapp.com/api/customers')
        .then(response => response.json())
        .then(data => setCustomers(data.content))
        .catch(err => console.error(err))
    }

  

    // -- Column data related functionality --
    const columns = [
        {
            headerName: 'First name',
            field: 'firstname', 
            sortable: true,
             filter: true
        },
        {
            headerName: 'Last name',
            field:'lastname', 
            sortable: true,
             filter: true
        },
        {
            headerName: 'Email',
            field: 'email', 
            sortable: true,
             filter: true
        },
        {
            headerName: 'Phone',
            field: 'phone', 
            sortable: true,
             filter: true
        },
        {
            headerName: 'Address',
            field: 'streetaddress', 
            sortable: true,
             filter: true
        },
        {
            headerName: 'Postcode',
            field: 'postcode', 
            sortable: true,
             filter: true
        },
    
        {
            headerName: 'City',
            field: 'city', 
            sortable: true,
             filter: true
        },
        
        
    ]

    return (
        <div>
            
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
                
                autoHideDuration={3000}
                onClose={handleClose}
                
                
            />
        </div>
    );
}