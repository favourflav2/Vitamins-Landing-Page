import React from 'react'
import { Box, Typography} from "@mui/material";
import Card from '../card/Card';
import supp from "../../assets/supp.jpg"
import trainer from "../../assets/trainer.jpg"
import gym from "../../assets/gym.jpg"

export default function GymExp() {
    const arr =[{img:supp, desc:"Vitamins & Supplements"},{img:trainer, desc:"Personal Trainers"},{img:gym, desc:"Gym Locations"}]
  return (
    <Box className="w-full min-h-[600px]  flex flex-col sm:mt-1 mt-14 mb-20">
        
        {/* Title */}
        <Typography className='text-3xl mb-3'>We also deliver a great <span className=' text-teal-500 font-bold'>Gym Experience</span></Typography>

        {/* Details */}
        <Typography className='text-gray-500 w-[75%] mb-10'>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</Typography>

        <Box className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 mb-2 mt-5">
            {arr.map((item,index)=>(
                <Card key={index} item={item}/>
            ))}
        </Box>
        
    </Box>
  )
}
