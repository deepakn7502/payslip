
"use client"
import { forwardRef, useEffect, useState } from 'react';
import { Poppins } from 'next/font/google';
import Modal from '@mui/material/Modal';
import { FileUploader } from "react-drag-drop-files";
import Box from '@mui/material/Box';
import { IoIosCloseCircle } from "react-icons/io";
import { Tooltip } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

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
    const [reload, setReload] = useState(false);


    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [snack, setSnack] = useState(false);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [file, setFile] = useState<any>([]);

    const handleChange = (file: any) => {
        setFile(file);
        console.log(file);
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
    // eslint-disable-next-line react-hooks/rules-of-hooks





    return (

        <div className='h-screen w-screen bg-slate-500 fixed '>
            <div className=' bg-white w-full h-1/6 flex justify-between mt-5 items-center'>
                <form className=' h-24 bg-red-600 w-1/2 px-12 flex justify-evenly items-center'>
                    <input type="text" className='h-12 w-100 ' />
                    <input type="text" className='h-12 w-100' />
                    <button className='h-12 w-40 bg-yellow-300'>Button</button>
                </form>
                <div className='bg-red-300 h-24 flex justify-center items-center px-9'>
                    <button onClick={handleOpen}>Upload</button>
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
                                <button className='w-28 h-10 bg-yellow-300 rounded-md font-bold' >Upload</button>
                            </div>
                            <Stack sx={{ width: '100%' }}>  <Snackbar anchorOrigin={{ 'horizontal': 'center', 'vertical': 'top' }} open={snack} autoHideDuration={2000} onClose={closeSnack}>
                                <Alert onClose={closeSnack} severity="error" sx={{ width: "100%" }}>
                                    File Removed!
                                </Alert>
                            </Snackbar></Stack>
                        </Box>

                    </Modal>
                </div>
            </div>
            <div className='h-full bg-green-500'>


            </div>




        </div >


    )
}

export default page;
