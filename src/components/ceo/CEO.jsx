import React from 'react'
import { Box, Typography, useMediaQuery} from "@mui/material";
import MonitorIcon from '@mui/icons-material/Monitor';
import EmailIcon from '@mui/icons-material/Email';
import ceo from '../../assets/ceo.jpg'

export default function CEO() {
    const isNonMobile = useMediaQuery('(min-width:750px)')
  return (
    <Box className='w-full min-h-[550px]  justify-center items-center flex'>
        <Box className='sm:w-[85%] md:w-[95%] lg:w-[95%] xl:w-[74%] h-full  justify-center flex mb-5'>
            <Box className=' w-full h-full flex'>

                {isNonMobile ? 
                
                (<>
                {/* left side */}
                <Box className="flex flex-col w-[50%] p-10">
                    <Typography className='text-3xl mb-5 ' >About Our CEO</Typography>
                    <Typography className=' text-gray-500'>Id ipsa odit ea libero doloremque et ipsum dolor et esse autem non molestiae fugit non rerum dicta qui temporibus fugit. Aut dolorem autem sit tempore dignissimos non internos blanditiis quo esse veritatis nam asperiores quas sit inventore earum qui numquam assumenda! Eos beatae sequi et corrupti quia aut nostrum impedit sit impedit ducimus? Ut facere harum aut debitis consequatur quo esse voluptas in modi sequi.</Typography>

                    <Box className="flex w-full mt-10 ">

                        {/* Sofware  */}
                        <Box className="flex flex-col items-center w-[50%] mr-4">
                            <div className='h-[50px] w-[50px] flex items-center justify-center rounded-full bg-gray-300 mb-2 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer hover:bg-teal-500 text-gray-600 hover:text-white'><MonitorIcon className=' w-[40px] h-[40px] '/></div>

                            <Typography className='text-gray-700 mb-3'>Our Sofware</Typography>

                            <Typography className='text-gray-500 '>Aut enim tempore ut omnis quidem et voluptatem ullam 33 ullam aperiam. Non laudantium possimus hic blanditiis excepturi qui reprehenderit consequuntur quo magnam molestias.</Typography>
                        </Box>

                        {/* Email */}
                        <Box className="flex flex-col items-center w-[50%] ml-4">
                            <div className='h-[50px] w-[50px] flex mb-2 items-center justify-center rounded-full bg-gray-300 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer hover:bg-teal-500 text-gray-600 hover:text-white'><EmailIcon className=' w-[40px] h-[40px]'/></div>

                            <Typography className='text-gray-700 mb-3'>Email Services</Typography>

                            <Typography className='text-gray-500 '>Aut enim tempore ut omnis quidem et voluptatem ullam 33 ullam aperiam. Non laudantium possimus hic blanditiis excepturi qui reprehenderit consequuntur quo magnam molestias.</Typography>
                        </Box>

                        
                    </Box>
                </Box>

                {/* right side */}
                <Box className="w-[50%]  p-3">
                    <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" alt="" className='w-full h-full object-cover'/>
                </Box></>) 

                : 
                // Mobile Section
                (
                <Box className="flex flex-col w-full">
                      <Typography className='text-3xl mb-5 flex justify-center' >About Our CEO</Typography>
                    <Typography className=' text-gray-500'>Id ipsa odit ea libero doloremque et ipsum dolor et esse autem non molestiae fugit non rerum dicta qui temporibus fugit. Aut dolorem autem sit tempore dignissimos non internos blanditiis quo esse veritatis nam asperiores quas sit inventore earum qui numquam assumenda! Eos beatae sequi et corrupti quia aut nostrum impedit sit impedit ducimus? Ut facere harum aut debitis consequatur quo esse voluptas in modi sequi.</Typography>

                    <Box className="flex items-center justify-center w-full p-5">
                    <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" alt="" className='object-cover w-[300px] max-h-[500px]'/>
                    </Box>

                    <Box className="flex w-full mt-10 ">

                        <Box className="flex flex-col items-center w-[50%] mr-4">
                            <div className='h-[50px] w-[50px] flex items-center justify-center rounded-full bg-gray-300 mb-2 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer hover:bg-teal-500 text-gray-600 hover:text-white'><MonitorIcon className=' w-[40px] h-[40px]'/></div>

                            <Typography className='text-gray-700 mb-3'>Our Sofware</Typography>

                            <Typography className='text-gray-500 '>Aut enim tempore ut omnis quidem et voluptatem ullam 33 ullam aperiam. Non laudantium possimus hic blanditiis excepturi qui reprehenderit consequuntur quo magnam molestias.</Typography>
                        </Box>

                        <Box className="flex flex-col items-center w-[50%] ml-4">
                            <div className='h-[50px] w-[50px] flex mb-2 items-center justify-center rounded-full bg-gray-300 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer hover:bg-teal-500 text-gray-600 hover:text-white'><EmailIcon className=' w-[40px] h-[40px]'/></div>

                            <Typography className='text-gray-700 mb-3'>Email Services</Typography>

                            <Typography className='text-gray-500 '>Aut enim tempore ut omnis quidem et voluptatem ullam 33 ullam aperiam. Non laudantium possimus hic blanditiis excepturi qui reprehenderit consequuntur quo magnam molestias.</Typography>
                        </Box>

                        
                    </Box>
                </Box>
                )}
            </Box>
        </Box>
    </Box>
  )
}
