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
    }, {
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
      <div className=" bg-blue-500 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex-col items-center  h-1/4 w-1/2 rounded-md text-center">
        <p className="text-white text-[25px]">Select PAY YEAR AND MONTH</p>
        <div className='flex-row py-2'>
          <TextField className='bg-white w-1/5 h-fit'
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
    </div>
  );
}
