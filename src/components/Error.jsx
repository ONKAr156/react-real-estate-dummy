import React from 'react'
import error from "../images/error1.jpg"
const Error = () => {
    return <>
        <div className='h-full w-full flex justify-center items-center bg-black'>
            <img className='h-screen object-cover' src={error} alt="" />

        </div>
    </>
}

export default Error