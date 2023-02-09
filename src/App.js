import React, { useState } from 'react';
import './App.css';
import Customerlist from './Components/customer/Customerlist';
import Traininglist from './Components/trainings/Traininglist';
import Calendar from './Components/Additions/Calendar';
import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material';




function App() {

  const [value, setValue] = useState("customers");

  const HandleChange = (event, value) => {
    setValue(value);
  }

  return (
    <div className="App">
        <AppBar position="static">
          <Toolbar>
              <Typography variant="h6" sx={{ marginRight: 20 }}>
                Personal Trainer
              </Typography>
              <Tabs value={value} onChange={HandleChange} textColor="inherit" TabIndicatorProps={{style: {background: "white"}}}>
                <Tab value="customers" label="Customers"  />
                <Tab value="trainings" label="Trainings"  />
                <Tab value="calendar" label="Calendar" />
                
              </Tabs>
            </Toolbar>
          </AppBar>
        {value === "customers" && <Customerlist />}
        {value === "trainings" && <Traininglist />}
        {value === "calendar" && <Calendar/>}
        
    </div>
  );
}

export default App;
