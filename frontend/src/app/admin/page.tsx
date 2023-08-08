"use client";
import { forwardRef, useEffect, useState } from "react";
import { Poppins } from "next/font/google";
import Modal from "@mui/material/Modal";
import { FileUploader } from "react-drag-drop-files";
import Box from "@mui/material/Box";

import dataset from "../images/data.json";
import { IoIosCloseCircle } from "react-icons/io";
import { MenuItem, TextField, Tooltip } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import * as XLSX from "xlsx";

import axios from "axios";
// import api from "../axios";
import Popper from "@/components/Popper";
<<<<<<< HEAD
import Navbar from "@/components/Navbar";
=======
import { BiSolidDoughnutChart } from "react-icons/bi";

>>>>>>> f574b644cb82149f676c8c038675bf386c1dd2df

const api = axios.create({
  baseURL: `http://localhost:8000/`,
});

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
<<<<<<< HEAD
  ref
=======
  ref,
>>>>>>> f574b644cb82149f676c8c038675bf386c1dd2df
) {
  return <MuiAlert elevation={10} ref={ref} variant="filled" {...props} />;
});

const poppins = Poppins({
  weight: ["400"],
  subsets: ["latin"],
<<<<<<< HEAD
  style: "italic",
});

const page = () => {
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    height: 500,
    bgcolor: "background.paper",
    border: "2px solid #000",
=======
  style: 'italic'

})


const page = () => {
  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    height: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
>>>>>>> f574b644cb82149f676c8c038675bf386c1dd2df
    boxShadow: 24,
    p: 4,
  };

  const fileTypes = ["xlsx", "xls"];

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [snack, setSnack] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [file, setFile] = useState<any>([]);

  const [show, setShow] = useState(false);

  const [data, setData] = useState([]);
  let file_data: any;

<<<<<<< HEAD
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [reload, setReload] = useState(false);
=======

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [reload, setReload] = useState(false);

>>>>>>> f574b644cb82149f676c8c038675bf386c1dd2df

  const handleChange = (file: any) => {
    setFile(file);
  };

  const closeSnack = () => {
    setSnack(false);
  };

  const Remove = () => {
    setReload(!reload);
    setSnack(true);

    setFile([]);
<<<<<<< HEAD
=======

    console.log(file);
  };
>>>>>>> f574b644cb82149f676c8c038675bf386c1dd2df

    console.log(file);
  };

  const upload = () => {
    const promise = new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsArrayBuffer(file);
      reader.onload = (e) => {
        const bufferArray = reader.result;
        const wb = XLSX.read(bufferArray, {
          type: "buffer",
        });
        const wsname = wb.SheetNames[0];

        const ws = wb.Sheets[wsname];
        file_data = XLSX.utils.sheet_to_json(ws);

        resolve(data);
      };
      reader.onerror = (error) => {
        reject(error);
      };
    });
    promise.then(async (d) => {
      try {
        // console.table(file_data);
        const res = await api.post("staff/receipt/", file_data);
        alert("Upload success");
      } catch (e: any) {
        alert(e.response.data.detail);
      }
    });
  };

  const handleSearch = async (e: any) => {
    e.preventDefault();

    try {
      const res = await api.get("staff/receipt");
      console.table(res.data);
      setData(res.data);
      setShow(true);
    } catch (e: any) {
      alert(e.response.data.detail);
    }
  };

<<<<<<< HEAD
=======
  
    const currentYear = new Date().getFullYear();
    const years = Array.from(
      { length: currentYear - 2010 },
      (_, index) => 2011 + index
    );

  const [selectedYear, setSelectedYear] = useState("");
  const YearTextField = () => {
    return (
      <TextField
        className="bg-white w-full h-12  justify-between rounded-md border-transparent"
        label="Year"
        select
        value={selectedYear}
        onChange={(event) => {
          setSelectedYear(event.target.value);
        }}
      >
        {years.map((year) => (
          <MenuItem key={year} value={year}>
            {year}
          </MenuItem>
        ))}
      </TextField>
    );
  };

  const currencies = [
    {
      value: "jan",
      label: "January",
    },
    {
      value: "feb",
      label: "February",
    },
    {
      value: "mar",
      label: "March",
    },
    {
      value: "apr",
      label: "April",
    },
    {
      value: "may",
      label: "May",
    },
    {
      value: "jun",
      label: "June",
    },
    {
      value: "jul",
      label: "July",
    },
    {
      value: "aug",
      label: "August",
    },
    {
      value: "sep",
      label: "September",
    },
    {
      value: "oct",
      label: "October",
    },
    {
      value: "nov",
      label: "November",
    },
    {
      value: "dec",
      label: "December",
    },
  ];


  const fields = [
    {
      value: "employeeid",
      label: "Employee Id",
    },
    {
      value: "name",
      label: "Name",
    },
    {
      value: "department",
      label: "Department",
    },
    {
      value: "designation",
      label: "Designation",
    },
    {
      value: "status",
      label: "Status",
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







>>>>>>> f574b644cb82149f676c8c038675bf386c1dd2df
  return (
    <div className="w-full h-full">
      {/* <Navbar /> */}
      <div className="bg-blue-950 w-full h-24 mt-6 grid grid-cols-7 place-items-center gap-4 ">
        <div className="w-full grid grid-cols-5 col-span-3 gap-4 pl-4">
        <TextField
            className="bg-white w-full h-12 rounded-md"
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
          <button
            className="h-12 w-28 bg-yellow-300 col-span-1 rounded-lg text-black"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <div className="w-full grid grid-cols-5 col-span-3 gap-4">
        <TextField
            className="bg-white w-full h-12 rounded-md"
            label="Search By"
            select
            onChange={(e) => {
              setmonth(e.target.value);
            }}
          >
            {fields.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <input
            type="text"
            placeholder='type here...'
            className="h-12 w-full col-span-2 rounded-md text-black"
          />
          <button className="h-12 w-28 bg-yellow-300 col-span-1 rounded-lg text-black">
            Filter
          </button>
        </div>
        <div className="w-full grid grid-cols-1 col-span-1 place-items-center">
          <button
            className="h-12 w-28 bg-yellow-300 col-span-1 rounded-lg text-black"
            onClick={handleOpen}
          >
            Upload
          </button>
        </div>
      </div>
      <div className="h-full">
        {show ? (
          <div>
            <table className="w-4/5 mx-auto my-4">
<<<<<<< HEAD
              <thead>
                <tr className="h-12 bg-blue-950">
                  <th>ID</th>
                  <th>RID</th>
=======
<<<<<<< HEAD
            <thead className="  ">
                <tr className="h-12 bg-blue-950 text-slate-50">
                  <th >Employee Id</th>
                  
>>>>>>> f574b644cb82149f676c8c038675bf386c1dd2df
                  <th>Name</th>
                  <th>Department</th>
                  <th>Designation</th>
                
=======
              <thead>
                <tr className="h-12 bg-blue-950">
                  <th>Employee ID</th>
                  <th>Name</th>
                  <th>Department</th>
                  <th>Designation</th>

>>>>>>> d4744d0076e2ad2bb2db875cf653f7268a7b4710
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((person: any) => {
                  return (
                    <tr className="h-8 text-black text-center">
                      <td>{person.eid.eid}</td>
<<<<<<< HEAD
                    
                      <td>{person.eid.first_name}</td>
                      <td>{person.eid.department}</td>
                      <td>{person.eid.designation}</td>
                    
                      <td>{person.status ? "Viewed" : "Not Viewed"}</td>
=======
                      <td>{person.eid.first_name}</td>
                      <td>{person.eid.department}</td>
                      <td>{person.eid.designation}</td>
                      <td>{person.status ? <div><h1>Viewed</h1><BiSolidDoughnutChart color="green"/></div>:<div><h1>Not Viewed</h1><BiSolidDoughnutChart color="red"/></div>}</td>
>>>>>>> d4744d0076e2ad2bb2db875cf653f7268a7b4710
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <Popper
        open={open}
        handleClose={handleClose}
        style={style}
        handleChange={handleChange}
        upload={upload}
        fileTypes={fileTypes}
        poppins={poppins}
        file={file}
        Remove={Remove}
        snack={snack}
        closeSnack={closeSnack}
      />
    </div>
  );
};

export default page;
<<<<<<< HEAD
=======

>>>>>>> f574b644cb82149f676c8c038675bf386c1dd2df

// return (

//     <div className='h-screen w-screen bg-slate-500 fixed '>
//         <div className=' bg-white w-full h-1/6 flex justify-between mt-5 items-center'>
//             <form className=' h-24 bg-red-600 w-1/2 px-12 flex justify-evenly items-center'>
//                 <input type="text" className='h-12 w-100 ' />
//                 <input type="text" className='h-12 w-100' />
//                 <button className='h-12 w-40 bg-yellow-300'>Button</button>
//             </form>
//             <div className='bg-red-300 h-24 flex justify-center items-center px-9'>
//                 <button onClick={handleOpen}>Upload</button>
//             </div>
//         </div>
//         <div className='h-full bg-green-500'>
