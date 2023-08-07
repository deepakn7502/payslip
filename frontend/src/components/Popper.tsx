import { Alert, Box, Modal, Snackbar, Stack, Tooltip } from "@mui/material";
import { FileUploader } from "react-drag-drop-files";
import { IoIosCloseCircle } from "react-icons/io";

export default function Popper({
  open,
  handleClose,
  style,
  handleChange,
  fileTypes,
  poppins,
  file,
  Remove,
  upload,
  snack,
  closeSnack,
  reload,
  setReload
}: any) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style} borderRadius={5}>


        <div className="grid h-full w-full grid-cols-1  place-items-center ">
          <h1 className='text-3xl font-bold '>UPLOAD FILE</h1>
          <div className="w-full flex flex-col items-center justify-evenly h-[200px]">
            <h1 className='text-xl font-bold'>Drag and Drop files here or browse</h1>
            {reload == true ? <div><FileUploader handleChange={handleChange} label="Upload file" name="file" types={fileTypes} /></div> : <div> <FileUploader handleChange={handleChange} label="Upload file" name="file" types={fileTypes} /></div>}
          </div>
          <div className='h-[100px] w-full bg-[rgb(246,237,212)] grid grid-cols-2 place-items-center border-dashed border-2 border-black rounded-lg'>
            <div className='w-full flex flex-col items-center'><h1 className='font-bold'>Files Uploaded</h1>
              {file.name ? <h1 className={poppins.className}>{file?.name}</h1> : <h1 className={`${poppins.className} `}>No Files Uploaded</h1>}
            </div>
            <div className='w-full flex flex-col items-center'><h1 className='font-bold'>File Status</h1>
              {file.name ?
                <div className='flex w-[100px] justify-between items-center'> <h1 className={` text-green-500  ${poppins.className}`}>Success</h1>
                  <Tooltip title="Remove uploaded File"><div className='cursor-pointer' onClick={Remove}><IoIosCloseCircle size={20} /></div></Tooltip>

                </div>
                : <h1>--</h1>}
            </div>
          </div>
          <button onClick={upload} className="w-28 h-10 bg-yellow-300 rounded-md font-bold">
            Upload
          </button>
        </div>
        <Stack sx={{ width: '100%' }}>  <Snackbar anchorOrigin={{ 'horizontal': 'center', 'vertical': 'top' }} open={snack} autoHideDuration={2000} onClose={closeSnack}>
          <Alert onClose={closeSnack} severity="error" sx={{ width: "100%" }}>
            File Removed!
          </Alert>
        </Snackbar></Stack>
      </Box>

    </Modal>
  );
}
