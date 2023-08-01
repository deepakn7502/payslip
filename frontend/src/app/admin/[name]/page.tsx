import React from 'react'
// import Picker from 'react-month-picker'

interface Params
{
    params : {name : string}
}


const page = ({params} : Params) => {
    return (
        <div className='h-screen w-screen bg-slate-500'>
            {/* <Picker /> */}
            <p>{params.name}</p>
            <form className='w-full h-24 bg-white'>

                <input type="text" />
                <input type="text" />
                <button></button>

            </form>
        </div>
    )
}

export default page;
