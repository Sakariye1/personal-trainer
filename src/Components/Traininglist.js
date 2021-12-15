import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import {Button, Snackbar} from '@mui/material';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import dayjs from 'dayjs';



export default function Traininglist() {
    // -- Trainings data related functionality --
    const [trainings, setTrainings] = useState([]);
    const [open, setOpen] = useState(false);
   

    const handleClose = () => {
        setOpen(false);
    };
    useEffect(() => fetchTrainings(), []);

    const fetchTrainings = () => {
        fetch('https://customerrest.herokuapp.com/gettrainings')
        .then(response => response.json())
        .then(data => setTrainings(data))
        .catch(err => console.error(err))
    }

    

    

    

    // -- Column data related functionality --
    const columns = [
        {
            headerName: 'Date',
            valueGetter: params => {
                return dayjs(params.data.date).format("DD/MM/YYYY");
            }, 
            sortable: true,
             filter: true
        },
        {
            headerName: 'Duration',
            field: 'duration', 
            sortable: true,
             filter: true
        },
        {
            headerName: 'Activity',
            field: 'activity', 
            sortable: true,
             filter: true
        },
        {
            headerName: 'Customer',
            valueGetter: params => {

                return params.data.customer !== null ? params.data.customer.firstname + " " + params.data.customer.lastname: "";
            },
            sortable: true,
            filter: true
        },
        
    ]

    return (
        <div>
            
            <div className="ag-theme-material" style={{marginTop: 20, height: 600, width: '90%', margin: 'auto'}}>
            <AgGridReact
            columnDefs={columns}
            rowData={trainings}
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