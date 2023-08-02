"use client "
import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
export default function User() {

  
  const currencies = [
    {
      value: 'JANUARY',
      label: 'JANUARY',
    },
    {
      value: 'February',
      label: 'February',
    },
    {
      value: 'March',
      label: 'March',
    },
    {
      value: 'April',
      label: 'April',
    },
    {
      value: 'May',
      label: 'May',
    },
    {
      value: 'June',
      label: 'June',
    },
    {
      value: 'July',
      label: 'July',
    },
    {
      value: 'August',
      label: 'August',
    },{
      value: 'September',
      label: 'September',
    },
    {
      value: 'October',
      label: 'October',
    },
    {
      value: 'November',
      label: 'November',
    },
    {
      value: 'December',
      label: 'December',
    },
  ];

  return (
    <div className="bg-cover bg-center bg-white" >
      <div className=" bg-blue-500 fixed top top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-1/4 w-1/2 align-text-top">
        <p className="text-white  ">Select PAY YEAR AND MONTH</p>
        <TextField className='bg-white w-1/5'
          select
          label="Select Month"
          defaultValue="January"
          // helperText="Please select your Month"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        

      </div>
    </div>
  );
}
