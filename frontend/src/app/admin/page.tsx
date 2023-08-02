"use client";
import {
  JSXElementConstructor,
  PromiseLikeOfReactNode,
  ReactElement,
  ReactNode,
  ReactPortal,
  useState,
} from "react";
import Modal from "@mui/material/Modal";
import { FileUploader } from "react-drag-drop-files";
import Box from "@mui/material/Box";
// import XLSX from "xlsx";
import * as XLSX from "xlsx";
import dataset from "../images/data.json";
interface Params {
  params: { name: string };
}

const page = ({ params }: Params) => {
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

  const fileTypes = ["xlxs", "xls"];

  const files: any = [];

  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [file, setFile] = useState(null);

  const handleFileRead = () => {
    const reader = new FileReader();
    reader.onload = () => {
      const binaryStr = reader.result;
      const workbook = XLSX.read(binaryStr, { type: "binary" });
      const firstSheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[firstSheetName];
      const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
      console.table(jsonData);
    };
    reader.readAsBinaryString(file);
  };

  const handleChange = (file: any) => {
    setFile(file[0]);
    files.push(file.name);
    console.log({ files });
  };

  const [data, setData] = useState(dataset);

  const handleSearch = (e: any) => {
    e.preventDefault();
    setShow(true);
  };
  return (
    <div className="h-screen w-screen">
      <div className="bg-blue-950 w-full h-24 mt-6 grid grid-cols-7 place-items-center gap-4">
        <form className="w-full grid grid-cols-5 col-span-3 gap-4 pl-4">
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
        </form>
        <form className="w-full grid grid-cols-5 col-span-3 gap-4">
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
        </form>
        <form className="w-full grid grid-cols-1 col-span-1 place-items-center">
          <button
            className="h-12 w-28 bg-yellow-300 col-span-1 rounded-lg text-black"
            onClick={handleOpen}
          >
            Upload
          </button>
        </form>
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
                {data?.map((person) => {
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} borderRadius={5}>
          <div className="grid h-full w-full grid-cols-1  place-items-center ">
            <h1 className="text-3xl font-bold ">UPLOAD FILE</h1>
            <div className="w-full flex flex-col items-center justify-evenly h-[200px]">
              <h1 className="text-xl">Drag and Drop files here or browse</h1>
              <FileUploader
                handleChange={handleChange}
                name="file"
                types={fileTypes}
              />
            </div>
            <div className="h-[200px] w-full bg-orange-300 grid grid-cols-2 ">
              <div className="w-full flex flex-col items-center">
                <h1>Files Uploaded</h1>
                {files?.map(
                  (
                    file:
                      | string
                      | number
                      | boolean
                      | ReactElement<any, string | JSXElementConstructor<any>>
                      | Iterable<ReactNode>
                      | ReactPortal
                      | PromiseLikeOfReactNode
                      | null
                      | undefined
                  ) => {
                    // eslint-disable-next-line react/jsx-key
                    return <h1>{file}</h1>;
                  }
                )}
              </div>
              <div className="w-full flex justify-center">File Status</div>
            </div>
            {/* <input type="file" onChange={(e) => { if (e.target.files != null) { setFile(e.target.files[0]) } }} accept=".xlxs,.xls" /> */}
            <button
              className="w-[100px] h-[40px] bg-orange-300 rounded-md"
              onClick={handleFileRead}
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
