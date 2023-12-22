import React from 'react'

export const Footer = () => {
    return (
        <>
            <div className='mt-8 bg-black w-full px-8 md:px-[300px] space-y-4 md:space-y-0  flex md:flex-row flex-col items-start justify-between text-sm md:text-md py-8'>

                <div className='flex flex-col text-white '>
                    <p>Featured Blogs</p>
                    <p>Most viewed </p>
                    <p>Readers choice </p>
                </div>

                <div className='flex flex-col text-white '>
                    <p>Forum</p>
                    <p>Support</p>
                    <p>Recent Posts </p>
                </div>
                <div className='flex flex-col text-white '>
                    <p>Privacy Policy</p>
                    <p>About</p>
                    <p>Terms & Conditions</p>
                    <p>Terms of Service</p>
                </div>

            </div>
            <p className='py-2 pb-6 text-center text-white bg-black text-sm'>All rights reserved @Webient Technologies 2023</p>
        </>
    )
}
