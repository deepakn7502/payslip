"use client";
import { forwardRef, useState } from "react";
import { Poppins } from "next/font/google";
import Modal from "@mui/material/Modal";
import { FileUploader } from "react-drag-drop-files";
import Box from "@mui/material/Box";
import axios from "axios";
// import XLSX from "xlsx";
import * as XLSX from "xlsx";
import dataset from "../images/data.json";
import { IoIosCloseCircle } from "react-icons/io";
import { Tooltip } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

import api from "../axios";

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
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
  const api = axios.create({
    baseURL: `http://localhost:8000/`,
  });

  const fileTypes = ["xlsx", "xls"];

  const files: any = [];

  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [file, setFile] = useState<any>(null);

  const [show, setShow] = useState(false);

  const [data, setData] = useState([]);
  let file_data: any;

  const handleChange = (file: any) => {
    setFile(file);
    // files.push(file.name);
    console.log({ files });
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
    <div className="h-full w-full">
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
            <table className="w-5/6 mx-auto my-4">
              <thead>
                <tr className="h-12 bg-blue-950">
                  <th>ID</th>
                  <th>RID</th>
                  <th>Name</th>
                  <th>Department</th>
                  <th>Designation</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((person: any) => {
                  return (
                    <tr className="h-8 text-black text-center">
                      <td>{person.eid.eid}</td>
                      <td>{person.rid}</td>
                      <td>{person.eid.first_name}</td>
                      <td>{person.eid.department}</td>
                      <td>{person.eid.designation}</td>
                      <td>{person.eid.email}</td>
                      <td>{person.eid.phoneno}</td>
                      <td>{person.status ? "Viewed" : "Not Viewed"}</td>
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} borderRadius={5}>
          <div className="grid h-full w-full grid-cols-1  place-items-center ">
            <h1 className="text-3xl font-bold text-black">UPLOAD FILE</h1>
            <div className="w-full flex flex-col items-center justify-evenly h-[200px]">
              <h1 className="text-xl text-black">
                Drag and Drop files here or browse
              </h1>
              <FileUploader
                handleChange={handleChange}
                label="Upload file"
                name="file"
                types={fileTypes}
              />
            </div>
            <div className="h-[100px] w-full bg-[rgb(246,237,212)] grid grid-cols-2 place-items-center border-dashed border-2 border-black rounded-lg">
              <div className="w-full flex flex-col items-center">
                <h1 className="font-bold">Files Uploaded</h1>
                {file ? (
                  <h1 className={poppins.className}>{file?.name}</h1>
                ) : (
                  <h1 className={`${poppins.className} `}>No Files Uploaded</h1>
                )}
              </div>
              <div className="w-full flex flex-col items-center">
                <h1 className="font-bold">File Status</h1>
                {file ? (
                  <h1 className={` text-green-500  ${poppins.className}`}>
                    Success
                  </h1>
                ) : (
                  <h1>--</h1>
                )}
              </div>
            </div>
            <button
              className="w-[100px] h-[40px] bg-[rgb(255,193,7)] rounded-md"
              onClick={upload}
            >
              Upload
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default page;

{
  /* <h1>Files Uploaded</h1>
                    {files?.map(
                      (
                        file:
                          | string
                          | number
                          | boolean
                          | ReactElement<
                              any,
                              string | JSXElementConstructor<any>
                            >
                          | Iterable<ReactNode>
                          | ReactPortal
                          | PromiseLikeOfReactNode
                          | null
                          | undefined
                      ) => {
                        // eslint-disable-next-line react/jsx-key
                        return <h1>{file}</h1>;
                      }
                    )} */
}

// import XLSX from "xlsx";
