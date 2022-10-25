import React from 'react'
import zuri from '../assets/hng.svg'
import i4g from '../assets/I4G.svg'

const Footer = () => {
    return (
        <div className='hidden md:flex flex-col w-[1280px] p-4 py-6 mx-auto my-4'>
            <div className='w-full border-b border-boxes mb-5'></div>
            <div className='flex justify-between items-center'>
                <img src={zuri} alt="Zuri Internship Logo" />
                <h2 className='text-textsecondary text-base'>HNG Internship 9 Frontend Task</h2>
                <img src={i4g} alt="Ingressive For Good Logo" />
            </div>
        </div>
    )
}

export default Footer