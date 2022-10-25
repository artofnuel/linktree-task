import React from 'react'
import slack from '../assets/slack.svg'
import github from '../assets/github.svg'


const Links = () => {
    return (
        // container
        <div className='w-[95%] md:max-w-[1152px] mx-auto'>
            <div className='flex flex-col space-y-6 justify-center items-center my-6'>
                <a className='w-full flex justify-center p-6 bg-boxes rounded-lg text-texts text-lg font-semibold' id='twitterLink' href="https://twitter.com/artofnuel">Twitter Link</a>
                <a className='w-full flex justify-center p-6 bg-boxes rounded-lg text-texts text-lg font-semibold' id='btn__zuri' href="https://training.zuri.team/">Zuri Team</a>
                <a className='w-full flex justify-center p-6 bg-boxes rounded-lg text-texts text-lg font-semibold' id='books' href="http://books.zuri.team/">Zuri Books</a>
                <a className='w-full flex justify-center p-6 bg-boxes rounded-lg text-texts text-lg font-semibold' id='book__python' href="https://books.zuri.team/python-for-beginners?ref_id=<ArtofNuel>">Python Books</a>
                <a className='w-full flex justify-center p-6 bg-boxes rounded-lg text-texts text-lg font-semibold' id='pitch' href="https://background.zuri.team">Background Check for Coders</a>
                <a className='w-full flex justify-center p-6 bg-boxes rounded-lg text-texts text-lg font-semibold' id='book__design' href="https://books.zuri.team/design-rules">Design Books</a>
            </div>
            <div className='hidden md:flex w-full justify-center items-center p-6 space-x-6'>
                <a href=""><img className='w-[24px]' src={slack} alt="slack logo" /></a>
                <a href=""><img className='w-[24px]' src={github} alt="github logo" /></a>
            </div>
        </div>
    )
}

export default Links