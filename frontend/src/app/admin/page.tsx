
"use client"
import { forwardRef, useEffect, useState } from 'react';
import { Poppins } from 'next/font/google';
import Modal from '@mui/material/Modal';
import { FileUploader } from "react-drag-drop-files";
import Box from "@mui/material/Box";

import dataset from "../images/data.json";
import { IoIosCloseCircle } from "react-icons/io";
import { Tooltip } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import * as XLSX from "xlsx"

import axios from "axios"
// import api from "../axios";
import Popper from "@/components/Popper";


const api = axios.create({
  baseURL: `http://localhost:8000/`,
});

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={10} ref={ref} variant="filled" {...props} />;
});

const poppins = Poppins({
    weight: ["400"],
    subsets: ["latin"],
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


    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [reload, setReload] = useState(false);


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





   


  return (
    <div className="w-full h-full">
      <div className="bg-blue-950 w-full h-24 mt-6 grid grid-cols-7 place-items-center gap-4">
        <div className="w-full grid grid-cols-5 col-span-3 gap-4 pl-4">
          <input
            type="text"
            className="h-12 w-full col-span-2 rounded-md text-black"
          />
          <input
            type="text"
            className="h-12 w-full col-span-2 rounded-md text-black"
          />
          <button
            className="h-12 w-28 bg-yellow-300 col-span-1 rounded-lg text-black"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <div className="w-full grid grid-cols-5 col-span-3 gap-4">
          <input
            type="text"
            className="h-12 w-full col-span-2 rounded-md text-black"
          />
          <input
            type="text"
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
              <thead>
                <tr className="h-12 bg-blue-950">
                  <th>ID</th>
                  <th>Name</th>
                  <th>Department</th>
                  <th>Designation</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {dataset?.map((person: any) => {
                  return (
                    <tr className="h-8 text-black text-center">
                      <td>{person.id}</td>
                      <td>{person.first_name}</td>
                      <td>{person.department}</td>
                      <td>{person.designation}</td>
                      <td>{person.email}</td>
                      <td>{person.phoneno}</td>
                      <td>{person.status}</td>
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