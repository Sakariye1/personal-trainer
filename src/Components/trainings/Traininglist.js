import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import {Snackbar} from '@mui/material';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import dayjs from 'dayjs';
import Deletetraining from './Deletetraining';


export default function Traininglist() {
    // -- Trainings data related functionality --
    const [trainings, setTrainings] = useState([]);
    const [open, setOpen] = useState(false);
    const [msg, setMsg] = useState('');


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

    const deleteTraining = (Id) => {
        fetch(`https://customerrest.herokuapp.com/api/trainings/${Id}`, { method: "DELETE" })
        .then(response => {
            if (response.ok) {
                fetchTrainings();
                setMsg("Training deleted");
                setOpen(true);
            } else {
                setMsg("Delete unsuccessful");
                setOpen(true);
            }
        })
        .catch(err => console.error(err));
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
            Header: 'Duration',
            field: 'duration', 
            sortable: true,
             filter: true
        },
        {
            Header: 'Activity',
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
        
        {
            headerName: "",
            field: 'id',
            sortable: false,
            filterable: false,
            width: 120,
            cellRendererFramework: params => <Deletetraining deleteTraining={deleteTraining} training={params} />
        }
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
                message={msg}
                autoHideDuration={3000}
                onClose={handleClose}
            />

        </div>
    );
}