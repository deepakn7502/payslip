"use client";
import { forwardRef, useState } from "react";
import { Poppins } from "next/font/google";
import Modal from "@mui/material/Modal";
import { FileUploader } from "react-drag-drop-files";
import Box from "@mui/material/Box";

import dataset from "../images/data.json";
import { IoIosCloseCircle } from "react-icons/io";
import { Tooltip } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Popper from "@/components/Popper";

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

  const fileTypes = ["xlsx", "xls"];

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [snack, setSnack] = useState(false);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [file, setFile] = useState<any>([]);
  const [show, setShow] = useState(false);
  const [data, setData] = useState(dataset);

  const handleChange = (file: any) => {
    setFile(file);
    console.log(file);
  };
  const handleSearch = (e: any) => {
    e.preventDefault();
    setShow(true);
  };
  const closeSnack = () => {
    setSnack(false);
  };

  const Remove = () => {
    setSnack(true);
    setFile([]);
    console.log(file);
  };

  console.log(dataset);

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

{
  /* <div className="bg-blue-950 w-full h-24 mt-6 grid grid-cols-7 place-items-center gap-4">
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
                {data?.map(({ person }: any) => {
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
      </div> */
}
