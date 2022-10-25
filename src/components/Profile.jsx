import React from 'react'
import myprofile from '../assets/profile_img.svg'
import share from '../assets/share.svg'

const Profile = () => {
    return (
        <div className='w-[95%] md:max-w-[1152px] mx-auto'>
            {/* container */}
            <div className="relative my-10 px- flex justify-center items-start">
                {/* image and heading */}
                <div className="w-full flex flex-col mx-auto justify-center items-center">
                    <img id='profile__img' className='w-[88px] h-[88px]' src={myprofile} alt="profileImg" />
                    <h1 id='twitter' className='text-xl font-semibold p-2'>Emmanuel Inua</h1>
                    <h1 id='slack' className='hidden text-xl font-semibold p-2'>ArtofNuel</h1>
                </div>
                <img className='absolute right-0 -mt-5' src={share} alt="share" />
            </div>
        </div>
    )
}

export default Profile