import { Box, Typography,useMediaQuery } from '@mui/material'
import React from 'react'

export default function Footer() {

    const isNonMobile = useMediaQuery("(min-width:640px)");

  return (
    <Box className='  p-[100px] mt-[100px]  bg-gray-100/80 jack'>
        <Box className={isNonMobile? 'flex md:justify-around ': 'flex flex-col items-center'}>
            
            {/* Each section */}
            <Box className={isNonMobile?"flex flex-col":"flex flex-col my-4"}>
                <Typography className='text-xl font-semibold mb-2 text-black cursor-pointer'>About</Typography>
                <Typography className='text-black text-sm hover:text-teal-500 cursor-pointer'>Aim</Typography>
                <Typography className='text-black text-sm hover:text-teal-500 cursor-pointer'>Vison</Typography>
                <Typography className='text-black text-sm hover:text-teal-500 cursor-pointer'>Goals</Typography>
            </Box>

            {/* Each section */}
            <Box className={isNonMobile?"flex flex-col":"flex flex-col my-4"}>
                <Typography className='text-xl font-semibold mb-2 text-black cursor-pointer'>Services</Typography>
                <Typography className='text-black text-sm hover:text-teal-500 cursor-pointer'>Locations</Typography>
                <Typography className='text-black text-sm hover:text-teal-500 cursor-pointer'>Supplies</Typography>
                <Typography className='text-black text-sm hover:text-teal-500 cursor-pointer'>Costs</Typography>
            </Box>

            {/* Each section */}
            <Box className={isNonMobile?"flex flex-col":"flex flex-col my-4"}>
                <Typography className='text-xl font-semibold mb-2 text-black cursor-pointer'>Contact</Typography>
                <Typography className='text-black text-sm hover:text-teal-500 cursor-pointer'>Email</Typography>
                <Typography className='text-black text-sm hover:text-teal-500 cursor-pointer'>Phone Number</Typography>
                <Typography className='text-black text-sm hover:text-teal-500 cursor-pointer'>Fax</Typography>
            </Box>

            {/* Each section */}
            <Box className={isNonMobile?"flex flex-col":"flex flex-col my-4"}>
                <Typography className='text-xl font-semibold mb-2 text-black cursor-pointer'>Social Media</Typography>
                <Typography className='text-black text-sm hover:text-teal-500 cursor-pointer'>Facebook</Typography>
                <Typography className='text-black text-sm hover:text-teal-500 cursor-pointer'>Youtube</Typography>
                <Typography className='text-black text-sm hover:text-teal-500 cursor-pointer'>Instagram</Typography>
            </Box>
        </Box>
    </Box>
  )
}
