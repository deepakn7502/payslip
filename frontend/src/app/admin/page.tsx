"use client"
import { useState } from 'react';


interface Params
{
    params : {name : string}
}


const page = ({params} : Params) => {
//     return (
//         <div className='h-screen w-screen bg-slate-500'>
//             {/* <Picker /> */}
//             <p>{params.name}</p>
//             <form className='w-full h-24 bg-white'>
// const page = () => {
//     // eslint-disable-next-line react-hooks/rules-of-hooks
//     const [isOpen, setIsOpen] = useState(false)

//     const togglePopup = () => {
//         setIsOpen(!isOpen);
//     }

    return (

        <div className='h-screen w-screen bg-slate-500 fixed '>
            {isOpen == false ? <><div className=' bg-white w-full h-1/6 flex justify-between mt-5 items-center'>
                <form className=' h-24 bg-red-600 w-1/2 px-12 flex justify-evenly items-center'>
                    <input type="text" className='h-12 w-100 ' />
                    <input type="text" className='h-12 w-100' />
                    <button className='h-12 w-40 bg-yellow-300'>Button</button>
                </form>
                <div className='bg-red-300 h-24 flex justify-center items-center px-9'>
                    <button onClick={togglePopup}>Upload</button>
                </div>
            </div><div className='h-full bg-green-500'>


                </div></> : <div className='h-[500px] w-[500px] bg-white fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[25px]'></div>}


        </div >
    )
}

export default page;
