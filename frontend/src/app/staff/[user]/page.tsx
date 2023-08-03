"use client";
import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";

import { Alert } from "@mui/material";





export default function User() {
  const currentYear = new Date().getFullYear();
  const years = Array.from(
    { length: currentYear - 2010 },
    (_, index) => 2011 + index
  );



  // Year Selection

  const [selectedYear, setSelectedYear] = useState("");
  const YearTextField = () => {
    return (
      <TextField
        className="bg-white w-1/5 h-fit justify-between rounded-md"
        label="Year"
        variant="outlined"
        select
        value={selectedYear}
        onChange={(event) => {
          setSelectedYear(event.target.value);
        }}
        InputProps={{
          inputProps: { min: 2011, max: new Date().getFullYear() },
        }}
      >
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </TextField>
    );
  };

  const currencies = [
    {
      value: "JANUARY",
      label: "JANUARY",
    },
    {
      value: "February",
      label: "February",
    },
    {
      value: "March",
      label: "March",
    },
    {
      value: "April",
      label: "April",
    },
    {
      value: "May",
      label: "May",
    },
    {
      value: "June",
      label: "June",
    },
    {
      value: "July",
      label: "July",
    },
    {
      value: "August",
      label: "August",
    },
    {
      value: "September",
      label: "September",
    },
    {
      value: "October",
      label: "October",
    },
    {
      value: "November",
      label: "November",
    },
    {
      value: "December",
      label: "December",
    },
  ];

  const [month, setmonth] = useState("");
  const [openAlert, setOpenAlert] = useState(false);
  const [alertContent, setAlertContent] = useState("");
  const [type, setType] = useState("");


  let timebar = () => {
    let progressTimeout: any;
    let dismissTimeout: any;
    const startDismissTimer = () => {
      dismissTimeout = setTimeout(() => {
        setOpenAlert(false);
      }, 3000);
    };
    startDismissTimer();
    return () => {
      clearInterval(progressTimeout);
      clearTimeout(dismissTimeout);
    };
  };

  //Pdf generation
  let generatePDF = () => {
    if (month && selectedYear) {

      setAlertContent("Payslip");
      setType("success")
      setOpenAlert(true);
      timebar();
    }
    else {

      setAlertContent("Field cannot be empty!!");
      setType("info")
      setOpenAlert(true);
      timebar();



    }
  }






  return (
    <div className="bg-cover bg-center bg-white font-serif">
      <div className=" bg-blue-500 fixed flex top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-around   h-1/4 w-1/2 rounded-md text-center">
        <p className="text-white text-[25px] font-serif">Select PaySlip Year & Month</p>
        <div className="flex-row py-2 w-[80%] flex items-center justify-around">


          <TextField
            className="bg-white w-1/5 h-fit rounded-md"
            label="Month"
            select
            onChange={(e) => {
              setmonth(e.target.value);
            }}

          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          {YearTextField()}
        </div>
        <div className="font-serif">
          <button className="" color="success" onClick={generatePDF}>Generate Pay Slip</button>

        </div>
      </div>
      {openAlert ? (
        <Alert variant="filled"
          severity={type}
          sx={{
            top: "20px",
            left: "45%",
            width: "auto",
            position: "absolute",
            zIndex: 100,
          }}
          onClose={() => {
            setOpenAlert(false);
          }}
        >
          {alertContent}
        </Alert>
      ) : (
        <></>
      )}
    </div>
  );
}

