"use client"
import { useState } from 'react';



const page = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isOpen, setIsOpen] = useState(false)

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className='h-screen w-screen bg-slate-500 fixed'>
            <div className=' bg-white w-full h-1/6 flex justify-between mt-5 items-center'>
                <form className=' h-24 bg-red-600 w-1/2 px-12 flex justify-evenly items-center'>
                    <input type="text" className='h-12 w-100 ' />
                    <input type="text" className='h-12 w-100' />
                    <button className='h-12 w-40 bg-yellow-300'>Button</button>
                </form>
                <div className='bg-red-300 h-24 flex justify-center items-center px-9'><Popup trigger={<button> Trigger</button>} position="right center">
                    <div>Popup content here !!</div>
                </Popup></div>
            </div>
            <div className='h-full bg-green-500'>

            </div>

        </div >
    )
}

export default page
