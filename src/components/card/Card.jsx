import { Box, Typography } from '@mui/material'
import React from 'react'

export default function Card({item}) {
  return (
    <Box className=" sm:h-[510px] flex flex-col rounded-3xl border-4 border-gray-300">
            
            {/* Image */}
            <img src={item.img} alt="" className='object-cover  sm:min-h-[300px] md:min-h-[250px] lg:min-h-[250px] xl:min-h-[300px] rounded-t-[20px] ' />

            {/* Title and Desc */}
            <Box className="w-full h-full flex flex-col px-4 mt-2">
              <Typography className='text-lg font-bold mb-2'>{item.desc}</Typography>
              <Typography className=' text-gray-500 sm:mb-0 mb-5'> If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</Typography>
            </Box>
    </Box>
  )
}
