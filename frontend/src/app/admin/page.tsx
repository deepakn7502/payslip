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
import axios from "axios";
// import XLSX from "xlsx";
import * as XLSX from "xlsx";

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
  const api = axios.create({
    baseURL: `http://localhost:8000/`,
  });

  const fileTypes = ["xlxs", "xls"];

  const files: any = [];

  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [file, setFile] = useState();

  const handleChange = async (file: any) => {
    setFile(file);
    // files.push(file.name);
    // console.log({ files });
  };

  const handleFileRead = () => {
    const fileBlob = new Blob([file[0]]);
    const reader = new FileReader();
    reader.onload = () => {
      const binaryStr = reader.result;
      const workbook = XLSX.read(binaryStr, { type: "binary" });
      const firstSheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[firstSheetName];
      const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
      console.table(jsonData);
    };
    reader.readAsBinaryString(fileBlob);
  };

  return (
    <div className="h-screen w-screen bg-slate-500 fixed ">
      <div className=" bg-white w-full h-1/6 flex justify-between mt-5 items-center">
        <form className=" h-24 bg-red-600 w-1/2 px-12 flex justify-evenly items-center">
          <input type="text" className="h-12 w-100 " />
          <input type="text" className="h-12 w-100" />
          <button className="h-12 w-40 bg-yellow-300">Button</button>
        </form>
        <div className="bg-red-300 h-24 flex justify-center items-center px-9">
          <button onClick={handleOpen}>Upload</button>
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
                  <h1 className="text-xl">
                    Drag and Drop files here or browse
                  </h1>
                  <FileUploader
                    handleChange={handleChange}
                    name="file"
                    types={fileTypes}
                  />
                </div>
                <div className="h-[200px] w-full bg-orange-300 grid grid-cols-2 ">
                  <div className="w-full flex flex-col items-center">
                    <p>
                      {file
                        ? `File name: file`
                        : "no files uploaded yet"}
                    </p>
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
      </div>
      <div className="h-full bg-green-500"></div>
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
