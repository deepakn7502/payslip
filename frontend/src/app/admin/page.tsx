
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
                </div>
            </div>
            <div className='h-full bg-green-500'>


            </div>




        </div >


    )
}

export default page;
