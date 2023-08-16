/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { forwardRef, useEffect, useState } from "react";
import { Poppins } from "next/font/google";
import Modal from "@mui/material/Modal";
import { FileUploader } from "react-drag-drop-files";
import Box from "@mui/material/Box";

// import dataset from "../images/data.json";
import { IoIosCloseCircle } from "react-icons/io";
import { MenuItem, TextField, Tooltip } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import * as XLSX from "xlsx";

import api from "axios";

import Popper from "@/components/Popper";
import Navbar from "@/components/Navbar";
import { MdVisibility } from "react-icons/md";
import { MdVisibilityOff } from "react-icons/md";


const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={10} ref={ref} variant="filled" {...props} />;
});

const poppins = Poppins({
  weight: ["400"],
  subsets: ["latin"],
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
    boxShadow: 24,
    p: 4,
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
      value: "",
      label: "No Filter",
    },
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

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [reload, setReload] = useState(false);

  const [month, setmonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  const [search, setSearch] = useState("");
  const [openAlert, setOpenAlert] = useState(false);
  const [alertContent, setAlertContent] = useState("");
  const [type, setType] = useState("");

  const [filterBy, setFilterBy] = useState("");
  const [filteredData, setFilteredData] = useState([]);

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
        const res = await api.post("staff/receipt/", {
          data: file_data,
          month: month,
          year: selectedYear,
        });
        alert("Upload success");
      } catch (e: any) {
        alert(e.response.data.detail);
      }
    });
  };

  const handleSearch = async (e: any) => {
    e.preventDefault();
    try {
      const res = await api.get("staff/receipt/", {
        params: { month: month, year: selectedYear },
      });

      setData(res.data);
    } catch (e: any) {
      alert(e.response.data.detail);
    }
    setShow(true);
  };

  const currentYear = new Date().getFullYear();
  const years = Array.from(
    { length: currentYear - 2010 },
    (_, index) => 2011 + index
  );

  const YearTextField = () => {
    return (
      <TextField
        className="bg-white w-full h-12  justify-between rounded-md border-transparent"
        label="Year"
        select
        // value={selectedYear}
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

  const handleFilter = async () => {
    if (filterBy === "") {
      await setFilteredData(data);
    } else if (search.length === 0) {
      alert("Please enter a search term");
    } else {
      if (filterBy === "employeeid") {
        const temp = data.filter((employee: any) => {
          const tempid = employee.eid.eid;
          return tempid
            .toLocaleLowerCase()
            .includes(search.toLocaleLowerCase());
        });
        await setFilteredData(temp);
      } else if (filterBy === "name") {
        const temp = data.filter((employee: any) => {
          const tempid = employee.eid.first_name;
          return tempid
            .toLocaleLowerCase()
            .includes(search.toLocaleLowerCase());
        });
        await setFilteredData(temp);
      } else if (filterBy === "department") {
        const temp = data.filter((employee: any) => {
          const tempid = employee.eid.department;
          return tempid
            .toLocaleLowerCase()
            .includes(search.toLocaleLowerCase());
        });
        await setFilteredData(temp);
      } else if (filterBy === "designation") {
        const temp = data.filter((employee: any) => {
          const tempid = employee.eid.designation;
          return tempid
            .toLocaleLowerCase()
            .includes(search.toLocaleLowerCase());
        });
        await setFilteredData(temp);
      } else if (filterBy === "status") {
        const temp = data.filter((employee: any) => {
          const tempid = employee.status;
          return tempid
            .toLocaleLowerCase()
            .includes(search.toLocaleLowerCase());
        });
        await setFilteredData(temp);
      }
    }
  };
  // console.log(data);
  return (
    <div className="w-full h-full">
      <Navbar params={{ user: "Admin" }} />
      <div className="bg-blue-950 w-full h-24 mt-6 grid grid-cols-7 place-items-center gap-4 ">
        <div className="w-full grid grid-cols-5 col-span-3 gap-4 pl-4">
          <TextField
            className="bg-white w-full h-14 rounded-md"
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
            className="h-14 w-28 bg-yellow-300 col-span-1 rounded-lg text-black"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <div className="w-full grid grid-cols-5 col-span-3 gap-4 h-14">
          <TextField
            className="bg-white w-full h-14 rounded-md"
            label="Search By"
            select
            onChange={(e) => {
              setFilterBy(e.target.value);
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
            placeholder="Type here..."
            className="h-14 w-full col-span-2 rounded-md text-black pl-2"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <button
            className="h-14 w-28 bg-yellow-300 col-span-1 rounded-lg text-black"
            onClick={handleFilter}
          >
            Filter
          </button>
        </div>
        <div className="w-full grid grid-cols-1 col-span-1 place-items-center">
          <button
            className="h-14 w-28 bg-yellow-300 col-span-1 rounded-lg text-black"
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
              <thead>
                <tr className="grid grid-cols-5 h-12 bg-blue-950 text-white">
                  <th>Employee ID</th>
                  <th>Name</th>
                  <th>Department</th>
                  <th>Designation</th>
                  <th className="w-[200px]">Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredData?.map((person: any) => {
                  return (
                    <tr
                      key={person.eid.eid}
                      className="grid grid-cols-5 h-8 text-black text-center"
                    >
                      <td>{person.eid.eid}</td>
                      <td>{person.eid.first_name}</td>
                      <td>{person.eid.department}</td>
                      <td>{person.eid.designation}</td>
                      <td>
                        {person.status ? (
                          <div className="flex justify-around">
                            <h1>Viewed</h1>
                            <MdVisibility color="green" />
                          </div>
                        ) : (
                          <div className="flex justify-around">
                            <h1>Not Viewed</h1>
                            <MdVisibilityOff color="red" />
                          </div>
                        )}
                      </td>
                    </tr>
                  );
                })}
                ;
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
        selectedYear={selectedYear}
        setmonth={setmonth}
        setSelectedYear={setSelectedYear}
      />
    </div>
  );
};

export default page;

{
  /* // return (

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
//         <div className='h-full bg-green-500'> */
}
